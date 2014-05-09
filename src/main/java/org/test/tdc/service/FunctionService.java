package org.test.tdc.service;

import java.util.List;
import java.util.Map;

import org.test.tdc.pojo.FunctionTO;

public interface FunctionService {
	
	/**
	 * 查询所有项目
	 * 
	 * @return
	 */	
	public List<FunctionTO> queryFunction();

	/**
	 * 根据项目查找
	 * 
	 * @param projectId
	 * @return
	 */
	public List<FunctionTO> queryFunction(int projectId);
	
	public List<FunctionTO> queryFunction(int projectId, String funcName);
	
	/**
	 * 创建功能或模块
	 * 
	 * @param projectName
	 * @return
	 */
	public int createFunction(int projectId,String functionName);
	
	/**
	 * 删除功能或模块
	 * 
	 * @param id
	 * @return
	 */
	public int deleteFunction(int id);
	
	/**
	 * 根据项目id 删除功能或模块
	 * @param pid
	 * @return
	 */
	public int deleteFunctionByPid(int pid);
	
	/**
	 * 更新功能或模块
	 * 
	 * @param id
	 * @param projectName
	 * @return
	 */
	public int updateFunction(int id,int pid,String funcName);
	
	public List<Map<String, Object>> queryFunctionWithProject();
}
