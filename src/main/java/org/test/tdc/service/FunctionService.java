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
import org.test.tdc.dao.rowmapper.FunctionRowMapper;
import org.test.tdc.pojo.FunctionTO;

@Service
public class FunctionService {
	
	@Resource
	private JdbcTemplateProcessor jdbcTemplateProcessor;
	/**
	 * 查询所有项目
	 * 
	 * @return
	 */	
	@SuppressWarnings("unchecked")
	public List<FunctionTO> queryFunction(){
		String queryFunction = "select * from function";
		List<FunctionTO> functions = new ArrayList<FunctionTO>();
		try{
			functions = (List<FunctionTO>)jdbcTemplateProcessor.findAll(queryFunction, new HashMap<String, Object>(), new FunctionRowMapper());
		} catch(Exception e){
			e.printStackTrace();
		}
		return functions;
	}

	/**
	 * 根据项目查找
	 * 
	 * @param projectId
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public List<FunctionTO> queryFunction(int projectId){
		String queryProject = "select * from function where n_project_id = :pid";
		List<FunctionTO> functions = new ArrayList<FunctionTO>();
		try {
			Map<String,Object> params = new HashMap<String,Object>();
			params.put("pid", projectId);
			functions = (List<FunctionTO>) jdbcTemplateProcessor.findAll(queryProject, params, new RowMapper<FunctionTO>(){
				public FunctionTO mapRow(ResultSet query, int rowNum)
						throws SQLException {
					FunctionTO functionTO = new FunctionTO();
					functionTO.setId(query.getLong("N_ID"));
					functionTO.setProjectId(query.getLong("N_PROJECT_ID"));
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
	
	@SuppressWarnings("unchecked")
	public List<FunctionTO> queryFunction(int projectId, String funcName){
		String queryFunction = "select * from function where n_project_id = :pid and s_name = :name";
		List<FunctionTO> functions = new ArrayList<FunctionTO>();
		try{
			Map<String, Object> params = new HashMap<String, Object>();
			params.put("pid", projectId);
			params.put("name", funcName);
			functions = (List<FunctionTO>) jdbcTemplateProcessor.findAll(queryFunction, params, new RowMapper<FunctionTO>(){
				public FunctionTO mapRow(ResultSet query, int rowNum) throws SQLException{
					FunctionTO functionTO = new FunctionTO();
					functionTO.setId(query.getLong("N_ID"));
					functionTO.setProjectId(query.getLong("N_PROJECT_ID"));
					functionTO.setName(query.getString("S_NAME"));
					functionTO.setCreate(query.getDate("D_CREATE"));
					return functionTO;
				}
			});
		} catch (Exception e){
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
	public int updateFunction(int id,String funcName){
		String updateFunction = "update function set s_name=:name where n_id = :id";
		
		Map<String,Object> params = new HashMap<String,Object>();
		params.put("id", id);
		params.put("name", funcName);
		return jdbcTemplateProcessor.update(updateFunction, params);
	}
	
	public List<Map<String, Object>> queryFunctionWithProject(){
		String funcWithProSql = "select f.*, p.* from function f left join project p " +
								  "on f.n_project_id = p.n_id";
		
		List<Map<String, Object>> results = jdbcTemplateProcessor.findAll(funcWithProSql, new HashMap<String,Object>());
		
		return results;
	}
}
