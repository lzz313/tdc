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
import org.test.tdc.pojo.ProjectTO;
import org.test.tdc.service.ProjectService;

/**
 * 项目操作方法
 * 
 * @author luzz
 *
 */
@Controller
@RequestMapping("/project")
public class ProjectController {
	
	@Resource
	private ProjectService projectService;
	
	/**
	 * 访问路径
	 * http://localhost:8080/project/test
	 * 
	 * 返回json数据格式
	 * 
	 * @return
	 */
	@RequestMapping("/test")
	public @ResponseBody JsonResponse index(){
		List<ProjectTO> queryProject = projectService.queryProject();
		
		Map<String,Object> result = new HashMap<String,Object>();
		result.put("projects", queryProject);
		
		return new JsonResponse(JsonResponse.CODE_SUCCESS,"查询项目成功",result);
	}
	
	/**
	 * 访问路径
	 * http://localhost:8080/project/test2
	 * 
	 * 返回json数据格式
	 * 
	 * @return
	 */
	@RequestMapping("/query")
	public @ResponseBody JsonResponse index2(){
		List<ProjectTO> queryProject = projectService.queryProject();
		
		Map<String,Object> result = new HashMap<String,Object>();
		result.put("projects", queryProject);
		
		return new JsonResponse(JsonResponse.CODE_SUCCESS,"查询项目成功",result);
	}
	
	/**
	 * 访问路径
	 * http://localhost:8080/project/test2
	 * 
	 * 返回json数据格式
	 * 
	 * @return
	 */
	@RequestMapping("")
	public String index3(ModelMap modelMap){
		List<ProjectTO> queryProject = projectService.queryProject();
		
		modelMap.put("projects", queryProject);
		return "/index";//访问 WEB-INF/jsp/index.jsp
	}
	
	/**
	 * 访问路径
	 * http://localhost:8080/project/create/项目名称
	 * 
	 * 返回json数据格式
	 * 
	 * @return
	 */
	@RequestMapping("/create/{projectName}")
	public @ResponseBody JsonResponse createProject(@PathVariable("projectName") String projectName){
		//查询该项目是否存在，不存在则创建，存在直接返回创建失败
		List<ProjectTO> queryProject = projectService.queryProject(projectName);
		if(!queryProject.isEmpty()){
			Map<String,Object> result = new HashMap<String,Object>();
			result.put("projects", queryProject);
			return new JsonResponse(JsonResponse.CODE_FAILED,"创建项目失败，已存在",result);
		}
		
		int createProject = projectService.createProject(projectName);
		if(createProject != 1){
			return new JsonResponse(JsonResponse.CODE_FAILED,"创建项目失败");
		}
		//查询创建成功后的项目
		queryProject = projectService.queryProject(projectName);
		Map<String,Object> result = new HashMap<String,Object>();
		result.put("projects", queryProject);
		return new JsonResponse(JsonResponse.CODE_SUCCESS,"创建项目成功",result);
	}
	
	/**
	 * 访问路径
	 * http://localhost:8080/project/delete/项目id
	 * 
	 * 返回json数据格式
	 * 
	 * @return
	 */
	@RequestMapping("/delete/{projectId}")
	public @ResponseBody JsonResponse deleteProject(@PathVariable("projectId") int id){
		int deleteProject = projectService.deleteProject(id);
		
		Map<String,Object> result = new HashMap<String,Object>();
		result.put("result", deleteProject);
		return new JsonResponse(JsonResponse.CODE_SUCCESS,"删除项目成功",result);
	}
	
	/**
	 * 访问路径
	 * http://localhost:8080/project/update/项目id/新的项目名称
	 * 
	 * 返回json数据格式
	 * 
	 * @return
	 */
	@RequestMapping("/update/{projectId}/{projectName}")
	public @ResponseBody JsonResponse deleteProject(@PathVariable("projectId") int id,@PathVariable("projectName") String projectName){
		int updateProject = projectService.updateProject(id,projectName);
		
		Map<String,Object> result = new HashMap<String,Object>();
		result.put("result", updateProject);
		return new JsonResponse(JsonResponse.CODE_SUCCESS,"更新项目成功",result);
	}
	
	/**
	 * 访问路径
	 * http://localhost:8080/project/query/func
	 * 
	 * 返回json数据格式
	 * 
	 * @return
	 */
	@RequestMapping("/query/func")
	public @ResponseBody JsonResponse queryProjectWithFunc(){
		List<Map<String,Object>> queryProjectAndFunc = projectService.queryProjectWithFunction();
		
		Map<String,Object> result = new HashMap<String,Object>();
		result.put("projWithFunc", queryProjectAndFunc);
		
		return new JsonResponse(JsonResponse.CODE_SUCCESS,"查询项目成功",result);
	}
}
