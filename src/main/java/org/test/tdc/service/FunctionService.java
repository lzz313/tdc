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
import org.test.tdc.pojo.FunctionTO;

@Service
public class FunctionService {
	
	@Resource
	private JdbcTemplateProcessor jdbcTemplateProcessor;
	
	@SuppressWarnings("unchecked")
	public List<FunctionTO> queryFunction(int projectId){
		String queryProeject = "select * from function where n_project_id = :pid";
		List<FunctionTO> functions = new ArrayList<FunctionTO>();
		try {
			functions = (List<FunctionTO>) jdbcTemplateProcessor.findAll(queryProeject, new HashMap<String,Object>(), new RowMapper<FunctionTO>(){
				public FunctionTO mapRow(ResultSet query, int rowNum)
						throws SQLException {
					FunctionTO functionTO = new FunctionTO();
					functionTO.setId(query.getLong("N_ID"));
					functionTO.setName(query.getString("N_PROJECT_ID"));
					functionTO.setName(query.getString("S_NAME"));
					functionTO.setCreate(query.getDate("D_CREATE"));
					return functionTO;
				}
				
			});
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return functions;
	}
	
	/**
	 * 创建功能或模块
	 * 
	 * @param projectName
	 * @return
	 */
	public int createFunction(int projectId,String functionName){
		String updateProject = "insert into function (n_project_id,s_name,d_create) values (:id,:name,now())";
		
		Map<String,Object> params = new HashMap<String,Object>();
		params.put("id", projectId);
		params.put("name", functionName);
		return jdbcTemplateProcessor.update(updateProject, params);
	}
	
	/**
	 * 删除功能或模块
	 * 
	 * @param id
	 * @return
	 */
	public int deleteFunction(int id){
		String updateFunc = "delete from function where n_id = :id";
		
		Map<String,Object> params = new HashMap<String,Object>();
		params.put("id", id);
		return jdbcTemplateProcessor.update(updateFunc, params);
	}
	
	/**
	 * 更新功能或模块
	 * 
	 * @param id
	 * @param projectName
	 * @return
	 */
	public int updateFunction(int id,int projectId,String funcName){
		String updateFunction = "update function set s_name=:name,n_project_id=:pid where n_id = :id";
		
		Map<String,Object> params = new HashMap<String,Object>();
		params.put("id", id);
		params.put("pid", projectId);
		params.put("name", funcName);
		return jdbcTemplateProcessor.update(updateFunction, params);
	}
	
}