package org.test.tdc.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.test.tdc.cache.CacheManager;
import org.test.tdc.utils.JsonUtils;
import org.test.tdc.utils.StringUtils;

/**
 * 项目操作方法
 * 
 * @author luzz
 *
 */
@Controller
@RequestMapping("/cache")
public class CacheController {
	
	CacheManager cacheManager = CacheManager.getInstance();
	
	/**
	 * 访问路径
	 * http://localhost:8080/project/test
	 * 
	 * 返回json数据格式
	 * 
	 * @return
	 */
	@RequestMapping("/set")
	public void setValue(@RequestParam(value = "k") final String key
			,@RequestParam(value = "v") final String value
			,@RequestParam(value="callback",required=false) String callback, HttpServletResponse response){
		cacheManager.put(key, value);
		Map<String,Object> m = new HashMap<String, Object>();
		m.put("msg", "success");
		writeJsonp(callback, response, m);
	}
	
	/**
	 * 访问路径
	 * http://localhost:8080/project/test2
	 * 
	 * 返回json数据格式
	 * 
	 * @return
	 */
	@RequestMapping("/get")
	public void getValue(@RequestParam(value = "k") final String key
			,@RequestParam(value="callback",required=false) String callback, HttpServletResponse response){
		String object = (String) cacheManager.get(key);
		
		Map<String,Object> m = new HashMap<String, Object>();
		m.put("value", object);
		writeJsonp(callback, response, m);
	}
	
	/**
	 * 带callback参数时，返回jsonp格式，否则返回json格式
	 * 
	 * @param callback
	 * @param response
	 * @param resultMap
	 */
	private void writeJsonp(String callback, HttpServletResponse response,Map<String, Object> resultMap) {
		
        PrintWriter out;
		try {
			out = response.getWriter();
			if(StringUtils.isEmpty(callback)){
				out.print(JsonUtils.toJSONString(resultMap));
			} else {
				response.setContentType("text/javascript; charset=UTF-8");
				out.print(callback + "(" + JsonUtils.toJSONString(resultMap) + ")");
			}
		} catch (IOException e) {
			
		}
	}
	
}
