package org.test.tdc.common;

import java.util.Map;

public class JsonResponse {
	
	public final static String CODE_SUCCESS = "1";
	public final static String CODE_FAILED = "0";
	
	private String code;
	private String msg;
	private Map<String,Object> data;
	
	public JsonResponse(String code,String msg){
		this.code = code;
		this.msg = msg;
	}
	
	public JsonResponse(String code,String msg,Map<String,Object> data){
		this.code = code;
		this.msg = msg;
		this.data = data;
	}
	
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}
	public Map<String, Object> getData() {
		return data;
	}
	public void setData(Map<String, Object> data) {
		this.data = data;
	}
	
}
