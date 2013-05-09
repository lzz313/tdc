package org.test.tdc.controller;

import java.io.IOException;
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

@Controller
@RequestMapping("/parse")
public class HtmlParserController {
	
	@Resource
	private HtmlParserService htmlParserService;
	
	@RequestMapping("/form")
	public @ResponseBody JsonResponse parseUrl(HttpServletRequest request, ModelMap model){
		Map<String, Object> parse = null;
		try {
			parse = htmlParserService.parse((String) request.getParameter("url"));
			
			Map<String,Object> result = new HashMap<String,Object>();
			result.put("parse", parse);
			
			return new JsonResponse(JsonResponse.CODE_SUCCESS,"解析成功",result);
		} catch (ClientProtocolException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} catch (Exception e){
			e.printStackTrace();
		}
		
		return new JsonResponse(JsonResponse.CODE_FAILED,"解析失败");
	}
	
	@RequestMapping("/test")
	public @ResponseBody JsonResponse httpPost(HttpServletRequest request){
		String url = request.getParameter("url");
		String method = request.getParameter("method");
		String formData = request.getParameter("formData");
		
		String responseStr = "";
		try {
			if("post".equalsIgnoreCase(method)){
				Map<String,String> nameValuePair = (Map<String, String>) JsonUtils.parseObject(formData);
				responseStr = HttpClientUtils.httpPost(url, nameValuePair);
			} else if("get".equalsIgnoreCase(method)){
				responseStr = HttpClientUtils.httpGet(url);
			}
			
		} catch (ClientProtocolException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		Map<String,Object> result = new HashMap<String,Object>();
		result.put("content", responseStr);
		return new JsonResponse(JsonResponse.CODE_SUCCESS,"请求成功",result);
	}

}
