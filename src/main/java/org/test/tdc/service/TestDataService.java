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
import org.test.tdc.dao.AccessDataProcessor;
import org.test.tdc.dao.JdbcTemplateProcessor;
import org.test.tdc.pojo.ProjectTO;

@Service
public class TestDataService {
	
	@Resource
	private AccessDataProcessor accessDataProcessor;
	
	@Resource
	private JdbcTemplateProcessor jdbcTemplateProcessor;
	
	public List<ProjectTO> queryProject(){
		List<ProjectTO> projects = new ArrayList<ProjectTO>();
		
		String queryProeject = "select * from project";
		try {
			ResultSet query = accessDataProcessor.query(queryProeject);
			
			
			ProjectTO projectTO = null;
			while(query.next()){
				projectTO = new ProjectTO();
				projectTO.setId(query.getLong("N_ID"));
				projectTO.setName(query.getString("S_NAME"));
				//projectTO.setName(new String(query.getBytes("S_NAME"),"gbk"));
				
				projects.add(projectTO);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return projects;
	}
	
	@SuppressWarnings("unchecked")
	public List<ProjectTO> queryProject2(){
		String queryProeject = "select * from project";
		List<ProjectTO> projects = new ArrayList<ProjectTO>();
		try {
			projects = (List<ProjectTO>) jdbcTemplateProcessor.findAll(queryProeject, new HashMap<String,Object>(), new RowMapper<ProjectTO>(){
				public ProjectTO mapRow(ResultSet query, int rowNum)
						throws SQLException {
					ProjectTO projectTO = new ProjectTO();
					projectTO.setId(query.getLong("N_ID"));
					projectTO.setName(query.getString("S_NAME"));
					return projectTO;
				}
				
			});
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return projects;
	}
	
	public int createProject(String projectName){
		String updateProject = "insert into project (s_name,d_create) values (:name,now())";
		
		Map<String,Object> params = new HashMap<String,Object>();
		params.put("name", projectName);
		return jdbcTemplateProcessor.update(updateProject, params);
	}
}
