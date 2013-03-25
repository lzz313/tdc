package org.test.tdc.service;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;
import org.test.tdc.dao.JdbcTemplateProcessor;
import org.test.tdc.pojo.ProjectTO;

@Service
public class ProjectService {
	
	@Resource
	private JdbcTemplateProcessor jdbcTemplateProcessor;
	
	/**
	 * 查询所有项目
	 * 
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public List<ProjectTO> queryProject(){
		String queryProeject = "select * from project";
		List<ProjectTO> projects = new ArrayList<ProjectTO>();
		try {
			projects = (List<ProjectTO>) jdbcTemplateProcessor.findAll(queryProeject, new HashMap<String,Object>(), new RowMapper<ProjectTO>(){
				public ProjectTO mapRow(ResultSet query, int rowNum)
						throws SQLException {
					ProjectTO projectTO = new ProjectTO();
					projectTO.setId(query.getLong("N_ID"));
					projectTO.setName(query.getString("S_NAME"));
					projectTO.setCreate(query.getDate("D_CREATE"));
					return projectTO;
				}
				
			});
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return projects;
	}
	
	/**
	 * 根据项目查找
	 * 
	 * @param projectName
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public List<ProjectTO> queryProject(String projectName){
		String queryProeject = "select * from project where s_name = :name";
		
		Map<String,Object> params = new HashMap<String,Object>();
		params.put("name", projectName);
		
		List<ProjectTO> projects = new ArrayList<ProjectTO>();
		try {
			projects = (List<ProjectTO>) jdbcTemplateProcessor.findAll(queryProeject, params, new RowMapper<ProjectTO>(){
				public ProjectTO mapRow(ResultSet query, int rowNum)
						throws SQLException {
					ProjectTO projectTO = new ProjectTO();
					projectTO.setId(query.getLong("N_ID"));
					projectTO.setName(query.getString("S_NAME"));
					projectTO.setCreate(query.getDate("D_CREATE"));
					return projectTO;
				}
			});
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return projects;
	}
	
	/**
	 * 创建项目
	 * 
	 * @param projectName
	 * @return
	 */
	public int createProject(String projectName){
		String updateProject = "insert into project (s_name,d_create) values (:name,now())";
		
		Map<String,Object> params = new HashMap<String,Object>();
		params.put("name", projectName);
		return jdbcTemplateProcessor.update(updateProject, params);
	}
	
	/**
	 * 删除项目
	 * 
	 * @param id
	 * @return
	 */
	public int deleteProject(int id){
		String updateProject = "delete from project where n_id = :id";
		
		Map<String,Object> params = new HashMap<String,Object>();
		params.put("id", id);
		return jdbcTemplateProcessor.update(updateProject, params);
	}
	
	/**
	 * 更新项目
	 * 
	 * @param id
	 * @param projectName
	 * @return
	 */
	public int updateProject(int id,String projectName){
		String updateProject = "update project set s_name=:name where n_id = :id";
		
		Map<String,Object> params = new HashMap<String,Object>();
		params.put("id", id);
		params.put("name", projectName);
		return jdbcTemplateProcessor.update(updateProject, params);
	}
}
