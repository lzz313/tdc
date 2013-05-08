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
import org.test.tdc.pojo.TestCaseTO;

@Service
public class TestDataService {
	
	@Resource
	private AccessDataProcessor accessDataProcessor;
	
	@Resource
	private JdbcTemplateProcessor jdbcTemplateProcessor;
	
	/**
	 * @return
	 */
	public List<TestCaseTO> queryTestCase(){
		List<TestCaseTO> testCases = new ArrayList<TestCaseTO>();
		
		String queryTestCase = "select * from testcase";
		try{
			ResultSet query = accessDataProcessor.query(queryTestCase);
			TestCaseTO testCaseTO = null;
			while(query.next()){
				testCaseTO = new TestCaseTO();
				testCaseTO.setId(query.getLong("N_ID"));
				testCaseTO.setName(query.getString("S_NAME"));
				testCaseTO.setStep(query.getString("S_STEP"));
				testCaseTO.setUrl(query.getString("S_URL"));
				testCaseTO.setType(query.getString("S_TYPE"));
				testCaseTO.setData(query.getString("S_DATA"));
				testCaseTO.setCreate(query.getDate("D_DATE"));
				testCaseTO.setStatus(query.getString("S_STATUS"));
				
				testCases.add(testCaseTO);	
			}
		} catch(Exception e){
			e.printStackTrace();
		}
		return testCases;
	}
	
	/**
	 * @param functionId
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public List<TestCaseTO> queryTestCase(int functionId){
		
		String queryTestCaseSql = "select * from testcase where n_function_id = :fid ";
		
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("fid", functionId);
		
		List<TestCaseTO> testcases = new ArrayList<TestCaseTO>();
		try{
			testcases = (List<TestCaseTO>) jdbcTemplateProcessor.findAll(queryTestCaseSql, params, new RowMapper<TestCaseTO>(){
				public TestCaseTO mapRow(ResultSet query, int rowNum) throws SQLException{
					TestCaseTO testCaseTO = new TestCaseTO();
					testCaseTO.setId(query.getLong("N_ID"));
					testCaseTO.setName(query.getString("S_NAME"));
					testCaseTO.setStep(query.getString("S_STEP"));
					testCaseTO.setUrl(query.getString("S_URL"));
					testCaseTO.setType(query.getString("S_TYPE"));
					testCaseTO.setData(query.getString("S_DATA"));
					testCaseTO.setCreate(query.getDate("D_DATE"));
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
					testCaseTO.setId(query.getLong("N_ID"));
					testCaseTO.setName(query.getString("S_NAME"));
					testCaseTO.setStep(query.getString("S_STEP"));
					testCaseTO.setUrl(query.getString("S_URL"));
					testCaseTO.setType(query.getString("S_TYPE"));
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
		String createTestCaseSql = "insert into TESTCASE (N_FUNCTION_ID,S_NAME,S_STEP,S_URL,S_TYPE,S_DATA,D_CREATE,S_STATUS) " +
								"values (:functionId,:name,:step,:url,:type,:data,now(),'1')";
		
		Map<String,Object> params = new HashMap<String,Object>();
		params.put("functionId", testCaseTO.getFunctionId());
		params.put("name", testCaseTO.getName());
		params.put("step", testCaseTO.getStep());
		params.put("url", testCaseTO.getUrl());
		params.put("type", testCaseTO.getType());
		params.put("data", testCaseTO.getData());

		int affectRows = jdbcTemplateProcessor.update(createTestCaseSql, params);
		return affectRows;
	}
	
	/**
	 * @param testCaseTO
	 * @return
	 */
	public int updateTestCase(TestCaseTO testCaseTO){
		String updateTestCaseSql = "update TESTCASE set N_FUNCTION_ID=:functionId," +
													"S_NAME=:name," +
													"S_STEP=:step," +
													"S_URL=:url," +
													"S_TYPE=:type," +
													"S_DATA=:data," +
													"S_STATUS=:status " +
								"where N_ID = :id";
		
		Map<String,Object> params = new HashMap<String,Object>();
		params.put("id", testCaseTO.getId());
		params.put("functionId", testCaseTO.getFunctionId());
		params.put("name", testCaseTO.getName());
		params.put("step", testCaseTO.getStep());
		params.put("url", testCaseTO.getUrl());
		params.put("type", testCaseTO.getType());
		params.put("data", testCaseTO.getData());
		params.put("status", testCaseTO.getStatus());
		
		int affectRows = jdbcTemplateProcessor.update(updateTestCaseSql, params);
		return affectRows;
	}
	
	/**
	 * @param id
	 * @return
	 */
	public int deleteTestCase(long id){
		String deleteTestCaseSql = "delete from TESTCASE where N_ID = :id";
		
		Map<String,Object> params = new HashMap<String,Object>();
		params.put("id", id);
		
		int affectRows = jdbcTemplateProcessor.update(deleteTestCaseSql, params);
		return affectRows;
	}
}
