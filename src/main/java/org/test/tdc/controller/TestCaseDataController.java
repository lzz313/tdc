package org.test.tdc.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.test.tdc.common.JsonResponse;
import org.test.tdc.pojo.TestCaseTO;
import org.test.tdc.service.TestDataService;

@Controller
@RequestMapping("/tdc")
public class TestCaseDataController {
	
	@Resource
	private TestDataService testDataService;
	
	/**
	 * 访问路径
	 * http://localhost:8080/tdc/query/all
	 * 
	 * 返回json数据格式
	 * 
	 * @return
	 */
	@RequestMapping("/query/all/{functionId}")
	public @ResponseBody JsonResponse queryTestCaseByFid(@PathVariable("functionId") int functionId){
		List<TestCaseTO> queryTestCases = testDataService.queryTestCase(functionId);
		
		Map<String,Object> result = new HashMap<String,Object>();
		result.put("testCases", queryTestCases);
		
		return new JsonResponse(JsonResponse.CODE_SUCCESS,"查询项目成功",result);
	}
	
	@RequestMapping("/query/{id}")
	public @ResponseBody JsonResponse queryTestCaseById(@PathVariable("id") int id){
		TestCaseTO queryTestCase = testDataService.queryTestCaseById(id);
		
		Map<String,Object> result = new HashMap<String,Object>();
		result.put("testCase", queryTestCase);
		
		return new JsonResponse(JsonResponse.CODE_SUCCESS,"查询项目成功",result);
	}
}
