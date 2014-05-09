package org.test.tdc.service;

import java.util.List;
import java.util.Map;

import org.test.tdc.pojo.ProjectTO;

public interface ProjectService {
	
	/**
	 * 查询所有项目
	 * 
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public List<ProjectTO> queryProject();
	/**
	 * 根据项目查找
	 * 
	 * @param projectName
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public List<ProjectTO> queryProject(String projectName);
	
	/**
	 * 根据项目查找
	 * 
	 * @param projectId
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public List<ProjectTO> queryProject(int projectId);

	/**
	 * 创建项目
	 * 
	 * @param projectName
	 * @return
	 */
	public int createProject(String projectName);
	
	/**
	 * 删除项目
	 * 
	 * @param id
	 * @return
	 */
	public int deleteProject(int id);
	
	/**
	 * 更新项目
	 * 
	 * @param id
	 * @param projectName
	 * @return
	 */
	public int updateProject(int id,String projectName);
	
	public List<Map<String, Object>> queryProjectWithFunction();
}
