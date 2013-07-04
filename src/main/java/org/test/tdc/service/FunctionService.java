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
import org.test.tdc.utils.StringUtils;

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
		String queryProject = "select f.N_ID,f.N_PROJECT_ID,f.S_NAME,f.D_CREATE,count(t.n_id) as TCOUNT " +
								" from function f left join testcase t on f.n_id = t.n_function_id " +
								" where f.n_project_id = :pid " +
								" group by f.n_id,f.n_project_id,f.S_NAME,f.d_create" +
								" order by f.d_create";
		List<FunctionTO> functions = new ArrayList<FunctionTO>();
		try {
			Map<String,Object> params = new HashMap<String,Object>();
			params.put("pid", projectId);
			functions = (List<FunctionTO>) jdbcTemplateProcessor.findAll(queryProject, params, new RowMapper<FunctionTO>(){
				public FunctionTO mapRow(ResultSet query, int rowNum)
						throws SQLException {
					FunctionTO functionTO = new FunctionTO();
					functionTO.setId(query.getInt("N_ID"));
					functionTO.setProjectId(query.getInt("N_PROJECT_ID"));
					functionTO.setName(query.getString("S_NAME"));
					functionTO.setCreate(query.getDate("D_CREATE"));
					functionTO.setTcount(query.getInt("TCOUNT"));
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
					functionTO.setId(query.getInt("N_ID"));
					functionTO.setProjectId(query.getInt("N_PROJECT_ID"));
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
	 * 根据项目id 删除功能或模块
	 * @param pid
	 * @return
	 */
	public int deleteFunctionByPid(int pid){
		String updateFunc = "delete from function where N_PROJECT_ID = :pid";
		
		Map<String,Object> params = new HashMap<String,Object>();
		params.put("pid", pid);
		return jdbcTemplateProcessor.update(updateFunc, params);
	}
	
	/**
	 * 更新功能或模块
	 * 
	 * @param id
	 * @param projectName
	 * @return
	 */
	public int updateFunction(int id,int pid,String funcName){
		StringBuffer updateFunction = new StringBuffer("update function set d_create=now() ");
		
		Map<String,Object> params = new HashMap<String,Object>();
		params.put("id", id);
		if(!StringUtils.isEmpty(funcName)){
			updateFunction.append(",s_name=:name");
			params.put("name", funcName);
		}
		if(pid != 0){
			updateFunction.append(",n_project_id=:pid");
			params.put("pid",pid);
		}
		updateFunction.append(" where n_id = :id");
		return jdbcTemplateProcessor.update(updateFunction.toString(), params);
	}
	
	public List<Map<String, Object>> queryFunctionWithProject(){
		String funcWithProSql = "select f.*, p.* from function f left join project p " +
								  "on f.n_project_id = p.n_id";
		
		List<Map<String, Object>> results = jdbcTemplateProcessor.findAll(funcWithProSql, new HashMap<String,Object>());
		
		return results;
	}
}
