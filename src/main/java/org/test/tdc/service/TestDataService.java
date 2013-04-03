package org.test.tdc.service;

import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.test.tdc.dao.AccessDataProcessor;
import org.test.tdc.dao.JdbcTemplateProcessor;
import org.test.tdc.pojo.FunctionTO;
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
	
	public List<FunctionTO> queryFunction(){
		List<FunctionTO> functions = new ArrayList<FunctionTO>();
		
		String queryFunction = "select * from function";
		try{
			ResultSet query = accessDataProcessor.query(queryFunction);
			
			FunctionTO functionTO = null;
			while(query.next()){
				functionTO = new FunctionTO();
				functionTO.setId(query.getLong("N_ID"));
				functionTO.setProjectId(query.getLong("N_PROJECT_ID"));
				functionTO.setName(query.getString("S_NAME"));
				
				functions.add(functionTO);
			}
		} catch(Exception e){
			e.printStackTrace();
		}
		return functions;
	}
}
