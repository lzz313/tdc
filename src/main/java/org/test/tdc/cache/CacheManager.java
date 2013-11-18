package org.test.tdc.cache;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collection;
import java.util.Date;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import org.test.tdc.pojo.MemoryData;

/**
 * 提供两种cache
 * 1. LRU 默认大小为100
 * 2. 有效时间，不限制大小
 * @author luzz
 *
 */
public class CacheManager{
	private static final float  hashTableLoadFactor = 0.75f;
	private static LinkedHashMap<String,Object> lruCache;
	private static LinkedHashMap<String,MemoryData> cache = new LinkedHashMap<String,MemoryData>();
	private int lruCacheSize = 100;
	
	private CacheManager() {
		int lruHashTableCapacity = (int) Math.ceil(getLruCacheSize() / hashTableLoadFactor) + 1;
		lruCache = new LinkedHashMap<String, Object>(lruHashTableCapacity,hashTableLoadFactor, true) {
			private static final long serialVersionUID = 1;

			@Override
			protected boolean removeEldestEntry(Map.Entry<String, Object> eldest) {
				return size() > getLruCacheSize();
			}
		};
	}
	
	private volatile static CacheManager cacheManager;
	
	public static CacheManager getInstance(){
		if(cacheManager == null){
			synchronized (CacheManager.class) {  
		        if (cacheManager == null) {  
		        	cacheManager = new CacheManager();  
		        }  
			}
		}
		return cacheManager;
	}
	
	/**
	 * 设置键值
	 * @param key
	 * @param value
	 */
	public synchronized void put(String key,Object value){
		lruCache.put(key, value);
	}
	
	/**
	 * 删除
	 * @param key
	 */
	public synchronized void remove(String key){
		lruCache.remove(key);
	}
	
	/**
	 * 获取
	 * @param key
	 * @return
	 */
	public synchronized Object get(String key){
		return lruCache.get(key);
	}
	
	/**
	 * 更新键值
	 * @param key
	 * @param value
	 */
	public synchronized void update(String key,Object value){
		lruCache.remove(key);
		lruCache.put(key, value);
	}
	
	/**
	 * 清除lru cache
	 */
	public synchronized void clear(){
		lruCache.clear();
	}
	
	/**
	 * 查询lru cache已使用大小
	 * @return
	 */
	public synchronized int getLruCacheUsed(){
		return lruCache.size();
	}
	
	/**
	 * 查询cache是否存在key
	 * @param key
	 * @return
	 */
	public synchronized boolean containsKey(String key){
		return lruCache.containsKey(key);
	}
	
	/**
	 * 获取lru cache所有值
	 * @return
	 */
	public synchronized Collection<Map.Entry<String,Object>> getAll() {
		return new ArrayList<Map.Entry<String,Object>>(lruCache.entrySet()); 
	}
	
	/**
	 * 自增长
	 * 常驻内存cache
	 * @param key
	 * @param time
	 * @return
	 */
	public synchronized int incr(String key,long time){
		recycleCache();
		MemoryData md = cache.get(key);
		if(md == null){
			md = new MemoryData(0,time);
			cache.put(key, md);
		}
		Calendar oldCal = Calendar.getInstance();
		oldCal.setTime(md.getDate());
		oldCal.add(Calendar.SECOND, (int) md.getDuration());
		if(oldCal.getTime().after(new Date())){
			Integer i = (Integer)md.getObject();
			md.setObject(i==null?1:i+1);
		} else {
			md.setDate(new Date());
			md.setDuration(time);
			md.setObject(1);
		}
		return (Integer) md.getObject();
	}
	
	/**
	 * 获取lru cache内存大小
	 * @return
	 */
	public synchronized int getLruCacheSize() {
		return lruCacheSize;
	}

	/**
	 * 设置lru内存cache大小
	 * @param lruCacheSize
	 */
	public synchronized void setLruCacheSize(int lruCacheSize) {
		this.lruCacheSize = lruCacheSize;
	}
	
	/**
	 * 获取常驻内存cache已使用的大小
	 * @return
	 */
	public synchronized int getCacheUsed(){
		return cache.size();
	}
	
	/**
	 * 查询常驻内存数据
	 * @return
	 */
	public synchronized Collection<Map.Entry<String,MemoryData>> showCacheData() {
		return new ArrayList<Map.Entry<String,MemoryData>>(cache.entrySet()); 
	}
	
	/**
	 * 回收常驻内存cache
	 */
	public synchronized  void recycleCache(){
		List<Map.Entry<String,MemoryData>> list = new ArrayList<Map.Entry<String,MemoryData>>(cache.entrySet());
		for (Entry<String, MemoryData> entry : list) {
			MemoryData md = entry.getValue();
			Calendar oldCal = Calendar.getInstance();
			oldCal.setTime(md.getDate());
			oldCal.add(Calendar.SECOND, (int) md.getDuration());
			if(oldCal.getTime().before(new Date())){
				cache.remove(entry.getKey());
			}
		}
	}
}
