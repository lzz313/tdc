package org.test.tdc.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.test.tdc.pojo.ProjectTO;
import org.test.tdc.service.TestDataService;

@Controller
@RequestMapping("/project")
public class ProjectController {
	
	@Resource
	private TestDataService testDataService;
	
	@RequestMapping("/test")
	public @ResponseBody List<ProjectTO> index(){
		List<ProjectTO> queryProject = testDataService.queryProject();
		return queryProject;
	}
	
	@RequestMapping("/test2")
	public @ResponseBody List<ProjectTO> index2(){
		List<ProjectTO> queryProject = testDataService.queryProject2();
		return queryProject;
	}
	
	@RequestMapping("/create/{projectName}")
	public void createProject(@PathVariable("projectName") String projectName){
		testDataService.createProject(projectName);
	}
}
