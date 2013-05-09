package org.test.tdc.utils;

import com.alibaba.fastjson.JSON;


/**
 * Json和java对象序列化和反序列化
 * 
 * @author luzz
 */
public class JsonUtils {
	
	public static final String toJSONString(Object obj){
		return JSON.toJSONString(obj);
	}
	
	public static final <T> Object parseObject(String jsonStr, Class<T> cls){
		return JSON.parseObject(jsonStr, cls);
	}
	
	public static final <T> Object parseObject(String jsonStr){
		return JSON.parseObject(jsonStr);
	}

}