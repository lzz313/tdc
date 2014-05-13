package org.test.tdc.controller;

import java.io.IOException;
import java.net.URISyntaxException;
import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.apache.http.client.ClientProtocolException;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.test.tdc.common.HttpClientUtils;
import org.test.tdc.common.JsonResponse;
import org.test.tdc.service.HtmlParserService;
import org.test.tdc.utils.JsonUtils;
import org.test.tdc.utils.JsoupParser;
import org.test.tdc.utils.StringUtils;

@Controller
@RequestMapping("/parse")
public class HtmlParserController {
	
	@Resource
	private HtmlParserService htmlParserService;
	
	@RequestMapping("/form")
	public @ResponseBody JsonResponse parseUrl(HttpServletRequest request, ModelMap model){
		Map<String, Object> parse = null;
		try {
			String url = (String) request.getParameter("url");
			if(StringUtils.isEmpty(url)){
				return new JsonResponse(JsonResponse.CODE_FAILED,"URL不可以为空");
			}
			
			parse = htmlParserService.parse(url);
			Map<String,Object> result = new HashMap<String,Object>();
			result.put("parse", parse);
			
			return new JsonResponse(JsonResponse.CODE_SUCCESS,"解析成功",result);
		} catch (ClientProtocolException e) {
			System.out.println(e.getMessage());
		} catch (IOException e) {
			System.out.println(e.getMessage());
		} catch (Exception e){
			System.out.println(e.getMessage());
		}
		
		return new JsonResponse(JsonResponse.CODE_FAILED,"解析失败");
	}
	
	@RequestMapping("/test")
	public @ResponseBody JsonResponse httpPost(HttpServletRequest request){
		String url = request.getParameter("url");
		String domain = request.getParameter("domain");
		String method = request.getParameter("method");
		String formData = request.getParameter("formData");
		String headerData = request.getParameter("headerData");
		
		String responseStr = "";
		try {
			if("post".equalsIgnoreCase(method)){
				Map<String,String> nameValuePair = (Map<String, String>) JsonUtils.parseObject(formData);
				Map<String,String> headerNameValuePair = (Map<String, String>) JsonUtils.parseObject(headerData);
				responseStr = HttpClientUtils.httpPost(url, nameValuePair,headerNameValuePair);
			} else if("get".equalsIgnoreCase(method)){
				responseStr = HttpClientUtils.httpGet(url);
			}
			
		} catch (ClientProtocolException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} catch (URISyntaxException e) {
			e.printStackTrace();
		}
		
		Map<String,Object> result = new HashMap<String,Object>();
		result.put("content", JsoupParser.parse(responseStr,domain));//JsoupParser.parse(responseStr,domain)
		return new JsonResponse(JsonResponse.CODE_SUCCESS,"请求成功",result);
	}
	
	@RequestMapping("/login")
	public @ResponseBody JsonResponse httpLogin(HttpServletRequest request){
		String url = request.getParameter("url");
		String domain = request.getParameter("domain");
		String method = request.getParameter("method");
		String formData = request.getParameter("formData");
		
		String responseStr = "";
		try {
			Map<String,String> nameValuePair = (Map<String, String>) JsonUtils.parseObject(formData);
			responseStr = HttpClientUtils.login(url,nameValuePair,method);
			
		} catch (ClientProtocolException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} catch (URISyntaxException e) {
			e.printStackTrace();
		}
		
		Map<String,Object> result = new HashMap<String,Object>();
		result.put("content", JsoupParser.parse(responseStr,domain));//JsoupParser.parse(responseStr,domain)
		return new JsonResponse(JsonResponse.CODE_SUCCESS,"请求成功",result);
	}

}
