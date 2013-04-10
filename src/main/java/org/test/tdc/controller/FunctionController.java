package org.test.tdc.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.test.tdc.common.JsonResponse;
import org.test.tdc.pojo.FunctionTO;
import org.test.tdc.pojo.ProjectTO;
import org.test.tdc.service.FunctionService;
import org.test.tdc.service.ProjectService;

@Controller
@RequestMapping("/func")
public class FunctionController {
	
	@Resource
	private FunctionService functionService;
	@Resource
	private ProjectService projectService;
	
	/**
	 * 访问路径
	 * http://localhost:8080/func/test
	 * 
	 * 返回json数据格式
	 * 
	 * @return
	 */
	@RequestMapping("/test/")
	public @ResponseBody JsonResponse index(){
		List<FunctionTO> queryFunction = functionService.queryFunction();
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("function", queryFunction);
		return new JsonResponse(JsonResponse.CODE_SUCCESS,"查询功能或模块成功",result);	
	}
	
	@RequestMapping("")
	public String index2(ModelMap modelMap){
		List<FunctionTO> queryFunction = functionService.queryFunction();
		modelMap.put("functions", queryFunction);
		return "/index2";//访问 WEB-INF/jsp/index2.jsp
	}
	
	/**
	 * 访问路径
	 * http://localhost:8080/func/create/项目id/功能或模块名称
	 * 
	 * 返回json数据格式
	 * 
	 * @return
	 */
	@RequestMapping("/create/{projectId}/{functionName}")
	public @ResponseBody JsonResponse createFunction(@PathVariable("projectId") int projectId, @PathVariable("functionName") String functionName){	
		List<ProjectTO> queryProject = projectService.queryProject(projectId);
		if (queryProject.isEmpty()){
			Map<String, Object> result = new HashMap<String, Object>();
			result.put("projects", queryProject);
			return new JsonResponse(JsonResponse.CODE_FAILED, "项目不存在，请先创建项目", result);
		}
		
		List<FunctionTO> queryFunc = functionService.queryFunction(projectId, functionName);
		if (!queryFunc.isEmpty()){
			Map<String, Object> result = new HashMap<String, Object>();
			result.put("funcs", queryFunc);
			return new JsonResponse(JsonResponse.CODE_FAILED, "项目已经存在，创建功能或模块失败", result);
		}
		
		int createFunction = functionService.createFunction(projectId, functionName);
		if (createFunction != 1){
			return new JsonResponse(JsonResponse.CODE_FAILED, "创建功能或模块失败");
		}
		List<FunctionTO> queryFunction = functionService.queryFunction(projectId);
		queryFunction = functionService.queryFunction(projectId);
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("functions", queryFunction);
		return new JsonResponse(JsonResponse.CODE_SUCCESS, "创建功能或模块成功",result);
	}
	
	/**
	 * 访问路径
	 * http://localhost:8080/func/delete/项目id
	 * 
	 * 返回json数据格式
	 * 
	 * @return
	 */
	@RequestMapping("/delete/{functionId}")
	public @ResponseBody JsonResponse deleteFunction(@PathVariable("functionId") int id){
		int deleteFunction = functionService.deleteFunction(id);
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("result", deleteFunction);
		return new JsonResponse(JsonResponse.CODE_SUCCESS,"删除功能或模块成功",result);
	}
	
	/**
	 * 访问路径
	 * http://localhost:8080/func/update/functionId/projectID/新的功能或模块名称
	 * 
	 * 返回json数据格式
	 * 
	 * @return
	 */
	@RequestMapping("/update/{functionId}/{projectId}/{functionName}")
	public @ResponseBody JsonResponse updateFunction(@PathVariable("functionId") int id,@PathVariable("projectId") int projectId, @PathVariable("functionName") String functionName){
		int updateFunction = functionService.updateFunction(id, projectId, functionName);
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("result", updateFunction);
		return new JsonResponse(JsonResponse.CODE_SUCCESS,"更新功能或模块成功",result);
	}
}
