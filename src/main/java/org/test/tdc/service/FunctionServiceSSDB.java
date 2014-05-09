package org.test.tdc.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.test.tdc.pojo.FunctionTO;
import org.test.tdc.utils.JsonUtils;
import org.test.tdc.utils.StringUtils;

import com.udpwork.ssdb.SSDB;

@Service("functionServiceSSDB")
public class FunctionServiceSSDB implements FunctionService{
	
	private SSDB ssdb = new SSDB("10.17.0.23", 881);
	/**
	 * 查询所有项目
	 * 
	 * @return
	 */	
	public List<FunctionTO> queryFunction(){
		List<FunctionTO> functions = new ArrayList<FunctionTO>();
		try {
			String results = new String(ssdb.hget("function", "list"));
			if(!StringUtils.isEmpty(results)){
				functions = JsonUtils.parseArray(results,FunctionTO.class);
			}
			
		} catch (Exception e) {
			
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
		List<FunctionTO> functions = queryFunction();
		
		List<FunctionTO> result = new ArrayList<FunctionTO>();
		for (FunctionTO functionTO : functions) {
			if(projectId == functionTO.getProjectId()){
				try {
					functionTO.setTcount(Integer.valueOf(new String(ssdb.get(functionTO.getId() + "_tc_ct"))));//funId_tc_ct
				} catch (NumberFormatException e) {
					
				} catch (Exception e) {
					
				}
				result.add(functionTO);
			}
		}
		
		return result;
	}
	
	@SuppressWarnings("unchecked")
	public List<FunctionTO> queryFunction(int projectId, String funcName){
		List<FunctionTO> functions = queryFunction();
		
		List<FunctionTO> result = new ArrayList<FunctionTO>();
		for (FunctionTO functionTO : functions) {
			if(projectId == functionTO.getProjectId() && funcName.equals(functionTO.getName())){
				result.add(functionTO);
			}
		}
		
		return result;	
	}
	
	/**
	 * 创建功能或模块
	 * 
	 * @param projectName
	 * @return
	 */
	public int createFunction(int projectId,String functionName){
		List<FunctionTO> functions = queryFunction();
		
		FunctionTO newFunctionTO = new FunctionTO();
		newFunctionTO.setProjectId(projectId);
		newFunctionTO.setName(functionName);
		newFunctionTO.setCreate(new Date());
		
		int result = 0;
		try {
			Long incr = ssdb.incr("function_id", 1);
			newFunctionTO.setId(incr.intValue());
			functions.add(newFunctionTO);
			
			ssdb.hset("function", "list", JsonUtils.toJSONString(functions));
			ssdb.incr(projectId+"_fun_ct", 1);
			result = 1;
		} catch (Exception e) {
		}
		
		return result;
	}
	
	/**
	 * 删除功能或模块
	 * 
	 * @param id
	 * @return
	 */
	public int deleteFunction(int id){
		List<FunctionTO> functions = queryFunction();
		
		int result = 0;
		try {
			for (Iterator<FunctionTO> iter = functions.listIterator(); iter.hasNext(); ) {
				FunctionTO func = iter.next();
				if(id == func.getId()){
					iter.remove();
					
					ssdb.incr(func.getProjectId()+"_fun_ct", -1);
				}
			}
		
		
			ssdb.hset("function", "list", JsonUtils.toJSONString(functions));
			result = 1;
		} catch (Exception e) {
		}
		
		return result;
	}
	
	/**
	 * 根据项目id 删除功能或模块
	 * @param pid
	 * @return
	 */
	public int deleteFunctionByPid(int pid){
		List<FunctionTO> functions = queryFunction();
		
		int result = 0;
		try {
			for (Iterator<FunctionTO> iter = functions.listIterator(); iter.hasNext(); ) {
				FunctionTO func = iter.next();
				if(pid == func.getProjectId()){
					iter.remove();
					ssdb.incr(func.getProjectId()+"_fun_ct", -1);
				}
			}
		
			ssdb.hset("function", "list", JsonUtils.toJSONString(functions));
			result = 1;
		} catch (Exception e) {
		}
		
		return result;
	}
	
	/**
	 * 更新功能或模块
	 * 
	 * @param id
	 * @param projectName
	 * @return
	 */
	public int updateFunction(int id,int pid,String funcName){
		List<FunctionTO> functions = queryFunction();
		
		int result = 0;
		for (FunctionTO functionTO : functions) {
						
			if(id == functionTO.getId() && !StringUtils.isEmpty(funcName) ){
				functionTO.setName(funcName);
				functionTO.setCreate(new Date());
				if(pid != 0){
					functionTO.setProjectId(pid);
				}
				result = 1;
			}
		}
		
		try {
			ssdb.hset("function", "list", JsonUtils.toJSONString(functions));
		} catch (Exception e) {
			
		}
		return result;
	}
	
	public List<Map<String, Object>> queryFunctionWithProject(){
		
	
		List<Map<String, Object>> results = new ArrayList<Map<String,Object>>();
		
		return results;
	}
}
