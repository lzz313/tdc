package org.test.tdc.service;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;
import org.test.tdc.dao.JdbcTemplateProcessor;
import org.test.tdc.pojo.TestCaseTO;
import org.test.tdc.utils.StringUtils;

@Service
public class TestDataService {
	
	@Resource
	private JdbcTemplateProcessor jdbcTemplateProcessor;
	
	/**
	 * @param functionId
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public List<TestCaseTO> queryTestCase(int functionId){
		
		String queryTestCaseSql = "select * from TESTCASE where N_FUNCTION_ID = :fid order by s_step";
		
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("fid", functionId);
		
		List<TestCaseTO> testcases = new ArrayList<TestCaseTO>();
		try{
			testcases = (List<TestCaseTO>) jdbcTemplateProcessor.findAll(queryTestCaseSql, params, new RowMapper<TestCaseTO>(){
				public TestCaseTO mapRow(ResultSet query, int rowNum) throws SQLException{
					TestCaseTO testCaseTO = new TestCaseTO();
					testCaseTO.setId(query.getInt("N_ID"));
					testCaseTO.setFunctionId(query.getInt("N_FUNCTION_ID"));
					testCaseTO.setName(query.getString("S_NAME"));
					testCaseTO.setStep(query.getString("S_STEP"));
					testCaseTO.setUrl(query.getString("S_URL"));
					testCaseTO.setDesc(query.getString("S_DESC"));
					testCaseTO.setType(query.getString("S_TYPE"));
					testCaseTO.setData(query.getString("S_DATA"));
					testCaseTO.setExpect(query.getString("S_EXPECT"));
					testCaseTO.setCreate(query.getDate("D_CREATE"));
					testCaseTO.setStatus(query.getString("S_STATUS"));
					return testCaseTO;
				}
			});
		} catch (Exception e){
			e.printStackTrace();
		}
		return testcases;
	}
	
	/**
	 * @param id
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public TestCaseTO queryTestCaseById(int id){
		List<TestCaseTO> testcases = new ArrayList<TestCaseTO>();
		String queryTestCaseSql = "select * from testcase where n_id = :id ";
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("id", id);
		try{
			testcases = (List<TestCaseTO>) jdbcTemplateProcessor.findAll(queryTestCaseSql, params, new RowMapper<TestCaseTO>(){
				public TestCaseTO mapRow(ResultSet query, int rowNum) throws SQLException{
					TestCaseTO testCaseTO = new TestCaseTO();
					testCaseTO.setId(query.getInt("N_ID"));
					testCaseTO.setName(query.getString("S_NAME"));
					testCaseTO.setStep(query.getString("S_STEP"));
					testCaseTO.setUrl(query.getString("S_URL"));
					testCaseTO.setDesc(query.getString("S_DESC"));
					testCaseTO.setType(query.getString("S_TYPE"));
					testCaseTO.setExpect(query.getString("S_EXPECT"));
					testCaseTO.setData(query.getString("S_DATA"));
					testCaseTO.setCreate(query.getDate("D_DATE"));
					testCaseTO.setStatus(query.getString("S_STATUS"));
					return testCaseTO;
				}
			});
		} catch (Exception e){
			e.printStackTrace();
		}
		
		if(testcases != null && !testcases.isEmpty()){
			return testcases.get(0);
		}
		return null;
	}
	
	/**
	 * @param testCaseTO
	 * @return
	 */
	public int createTestCase(TestCaseTO testCaseTO){
		String createTestCaseSql = "insert into TESTCASE (N_FUNCTION_ID,S_NAME,S_STEP,S_URL,S_DESC,S_TYPE,S_EXPECT,S_DATA,D_CREATE,S_STATUS) " +
								"values (:functionId,:name,:step,:url,:desc,:type,:expect,:data,now(),'1')";
		Map<String,Object> params = new HashMap<String,Object>();
		params.put("functionId", testCaseTO.getFunctionId());
		params.put("name", testCaseTO.getName());
		params.put("step", testCaseTO.getStep());
		params.put("url", testCaseTO.getUrl());
		params.put("type", testCaseTO.getType());
		params.put("desc", testCaseTO.getDesc());
		params.put("expect", testCaseTO.getExpect());
		params.put("data", testCaseTO.getData());

		int affectRows = jdbcTemplateProcessor.update(createTestCaseSql, params);
		return affectRows;
	}
	
	/**
	 * @param testCaseTO
	 * @return
	 */
	public int updateTestCase(TestCaseTO testCaseTO){
		StringBuffer updateTestCaseSql = new StringBuffer("update testcase set D_CREATE=:create");
		
		Map<String,Object> params = new HashMap<String,Object>();
		params.put("id", testCaseTO.getId());
		params.put("create", new Date());
		if(testCaseTO.getFunctionId() != 0){
			updateTestCaseSql.append(",N_FUNCTION_ID=:functionId");
			params.put("functionId", testCaseTO.getFunctionId());
		}
		if(!StringUtils.isEmpty(testCaseTO.getName())){
			updateTestCaseSql.append(",S_NAME=:name ");
			params.put("name", testCaseTO.getName());
		}
		if(!StringUtils.isEmpty(testCaseTO.getStep())){
			updateTestCaseSql.append(",S_STEP=:step");
			params.put("step", testCaseTO.getStep());
		}
		if(!StringUtils.isEmpty(testCaseTO.getUrl())){
			updateTestCaseSql.append(",S_URL=:url");
			params.put("url", testCaseTO.getUrl());
		}
		if(!StringUtils.isEmpty(testCaseTO.getType())){
			updateTestCaseSql.append(",S_TYPE=:type");
			params.put("type", testCaseTO.getType());
		}
		if(!StringUtils.isEmpty(testCaseTO.getDesc())){
			updateTestCaseSql.append(",S_DESC=:desc");
			params.put("desc", testCaseTO.getDesc());
		}
		if(!StringUtils.isEmpty(testCaseTO.getExpect())){
			updateTestCaseSql.append(",S_EXPECT=:expect");
			params.put("expect", testCaseTO.getExpect());
		}
		if(!StringUtils.isEmpty(testCaseTO.getStatus())){
			updateTestCaseSql.append(",S_STATUS=:status ");
			params.put("status", testCaseTO.getStatus());
		}
		if(!StringUtils.isEmpty(testCaseTO.getData())){
			updateTestCaseSql.append(",S_DATA=:data ");
			params.put("data", testCaseTO.getData());
		}
		updateTestCaseSql.append(" where N_ID = :id");
		int affectRows = jdbcTemplateProcessor.update(updateTestCaseSql.toString(), params);
		return affectRows;
	}
	
	/**
	 * @param testCaseTO
	 * @return
	 */
	public int updateTestCase(int id,int functionId){
		String updateTestCaseSql = "update testcase set " +
										   "N_FUNCTION_ID=:functionId," +
											"S_DATA=now()" +
								   " where N_ID = :id";
		
		Map<String,Object> params = new HashMap<String,Object>();
		params.put("id", id);
		params.put("functionId", functionId);
		
		int affectRows = jdbcTemplateProcessor.update(updateTestCaseSql, params);
		return affectRows;
	}
	
	/**
	 * @param id
	 * @return
	 */
	public int deleteTestCase(int id){
		String deleteTestCaseSql = "delete from TESTCASE where N_ID = :id";
		
		Map<String,Object> params = new HashMap<String,Object>();
		params.put("id", id);
		
		int affectRows = jdbcTemplateProcessor.update(deleteTestCaseSql, params);
		return affectRows;
	}
}
