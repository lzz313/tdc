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
import org.test.tdc.pojo.EnvironmentTO;
import org.test.tdc.service.EnvironmentService;

@Controller
@RequestMapping("/domain")
public class EnvironmentController{
	
	@Resource
	private EnvironmentService environmentService;
	
	@RequestMapping("/query/{pid}")
	public @ResponseBody JsonResponse queryDomain(@PathVariable("pid") final int pid){
		List<EnvironmentTO> queryDomain = environmentService.queryDomain(pid);
		
		Map<String,Object> result = new HashMap<String,Object>();
		result.put("queryDomain", queryDomain);
		
		return new JsonResponse(JsonResponse.CODE_SUCCESS,"查询项目环境成功",result);
	}
	
	@RequestMapping("/add")
	public @ResponseBody JsonResponse addDomain(  @RequestParam(value = "pid") final int pid,
												  @RequestParam(value = "name") final String name,
												  @RequestParam(value = "domain") final String domain){
		
		int affectRows = environmentService.createDomian(pid, name, domain);
		if(affectRows == 1){
			Map<String,Object> result = new HashMap<String,Object>();
			EnvironmentTO environmentTO = new EnvironmentTO();
			environmentTO.setProjectId(pid);
			environmentTO.setName(name);
			environmentTO.setDomain(domain);
			result.put("environment", environmentTO);
			return new JsonResponse(JsonResponse.CODE_SUCCESS,"添加成功",result);
		} else {
			return new JsonResponse(JsonResponse.CODE_FAILED,"添加失败");
		}
	}
	
	@RequestMapping("/update")
	public @ResponseBody JsonResponse updateDomain(@RequestParam(value = "id") final int id,
													  @RequestParam(value = "name") final String name,
													  @RequestParam(value = "domain") final String domain){
		EnvironmentTO environmentTO = new EnvironmentTO();
		environmentTO.setName(name);
		environmentTO.setDomain(domain);
		environmentTO.setId(id);
		
		int affectRows = environmentService.updateDomian(environmentTO);
		if(affectRows == 1){
			Map<String,Object> result = new HashMap<String,Object>();
			result.put("environment", environmentTO);
			return new JsonResponse(JsonResponse.CODE_SUCCESS,"更新成功",result);
		} else {
			return new JsonResponse(JsonResponse.CODE_FAILED,"更新失败");
		}
	}
	
	@RequestMapping("/delete/{id}")
	public @ResponseBody JsonResponse deleteDomain(@PathVariable("id") final int id){
		int affectRows = environmentService.deleteDomian(id);
		if(affectRows == 1){
			Map<String,Object> result = new HashMap<String,Object>();
			result.put("id", id);
			return new JsonResponse(JsonResponse.CODE_SUCCESS,"删除成功",result);
		} else {
			return new JsonResponse(JsonResponse.CODE_FAILED,"删除失败");
		}
	}
}
