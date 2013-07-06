package org.test.tdc.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.test.tdc.common.JsonResponse;
import org.test.tdc.pojo.TestCaseTO;
import org.test.tdc.service.TestDataService;

@Controller
@RequestMapping("/testcase")
public class TestCaseDataController {
	
	@Resource
	private TestDataService testDataService;
	
	/**
	 * 访问路径
	 * http://localhost:8080/tdc/testcasequery/all/{模块id}
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
		
		return new JsonResponse(JsonResponse.CODE_SUCCESS,"查询测试用例成功",result);
	}
	
	@RequestMapping("/query/{id}")
	public @ResponseBody JsonResponse queryTestCaseById(@PathVariable("id") int id){
		TestCaseTO queryTestCase = testDataService.queryTestCaseById(id);
		
		Map<String,Object> result = new HashMap<String,Object>();
		result.put("testCase", queryTestCase);
		
		return new JsonResponse(JsonResponse.CODE_SUCCESS,"查询测试用例成功",result);
	}
	
	@RequestMapping("/add")
	public @ResponseBody JsonResponse addTestCase(@RequestParam(value = "functionId") final int functionId,
												  @RequestParam(value = "name",required=false) final String name,
												  @RequestParam(value = "step",defaultValue="1") final String step,
												  @RequestParam(value = "url",required=false) final String url,
												  @RequestParam(value = "desc",required=false) final String desc,
												  @RequestParam(value = "expect",required=false) final String expect,
												  @RequestParam(value = "type") final String type,
												  @RequestParam(value = "data",required=false) final String data){
		
		TestCaseTO testCaseTO = new TestCaseTO();
		testCaseTO.setFunctionId(functionId);
		testCaseTO.setName(name);
		testCaseTO.setStep(step);
		testCaseTO.setUrl(url);
		testCaseTO.setType(type);
		testCaseTO.setDesc(desc);
		testCaseTO.setExpect(expect);
		testCaseTO.setData(data);
		
		int affectRows = testDataService.createTestCase(testCaseTO);
		if(affectRows == 1){
			Map<String,Object> result = new HashMap<String,Object>();
			
			result.put("testCase", testCaseTO);
			return new JsonResponse(JsonResponse.CODE_SUCCESS,"添加测试用例成功",result);
		} else {
			return new JsonResponse(JsonResponse.CODE_FAILED,"添加测试用例失败");
		}
	}
	
	@RequestMapping("/update")
	public @ResponseBody JsonResponse updateTestCase(@RequestParam(value = "id") final int id,
													  @RequestParam(value = "functionId",required=false,defaultValue="0") final int functionId,
													  @RequestParam(value = "name",required=false) final String name,
													  @RequestParam(value = "step",required=false) final String step,
													  @RequestParam(value = "url",required=false) final String url,
													  @RequestParam(value = "desc",required=false) final String desc,
													  @RequestParam(value = "type",required=false) final String type,
													  @RequestParam(value = "data",required=false) final String data,
													  @RequestParam(value = "expect",required=false) final String expect,
													  @RequestParam(value = "status",required=false) final String status){
		TestCaseTO testCaseTO = new TestCaseTO();
		testCaseTO.setId(id);
		testCaseTO.setFunctionId(functionId);
		testCaseTO.setName(name);
		testCaseTO.setStep(step);
		testCaseTO.setUrl(url);
		testCaseTO.setType(type);
		testCaseTO.setDesc(desc);
		testCaseTO.setData(data);
		testCaseTO.setExpect(expect);
		testCaseTO.setStatus(status);
		
		int affectRows = testDataService.updateTestCase(testCaseTO);
		if(affectRows == 1){
			Map<String,Object> result = new HashMap<String,Object>();
			result.put("testCase", testCaseTO);
			return new JsonResponse(JsonResponse.CODE_SUCCESS,"更新测试用例成功",result);
		} else {
			return new JsonResponse(JsonResponse.CODE_FAILED,"更新测试用例失败");
		}
	}
	
	@RequestMapping("/delete/{id}")
	public @ResponseBody JsonResponse deleteTestCase(@PathVariable("id")  final int id){
		int affectRows = testDataService.deleteTestCase(id);
		if(affectRows == 1){
			Map<String,Object> result = new HashMap<String,Object>();
			result.put("id", id);
			return new JsonResponse(JsonResponse.CODE_SUCCESS,"删除测试用例成功",result);
		} else {
			return new JsonResponse(JsonResponse.CODE_FAILED,"删除测试用例失败");
		}
	}
}
