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
	
	@SuppressWarnings("unchecked")
	public List<TestCaseTO> queryTestCase(int functionId){
		List<TestCaseTO> testcases = new ArrayList<TestCaseTO>();
		String queryTestCase = "select * from testcase where n_function_id = :fid ";
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("fid", functionId);
		try{
			testcases = (List<TestCaseTO>) jdbcTemplateProcessor.findAll(queryTestCase, params, new RowMapper<TestCaseTO>(){
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
	
	public TestCaseTO queryTestCaseById(int id){
		List<TestCaseTO> testcases = new ArrayList<TestCaseTO>();
		String queryTestCase = "select * from testcase where n_id = :id ";
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("id", id);
		try{
			testcases = (List<TestCaseTO>) jdbcTemplateProcessor.findAll(queryTestCase, params, new RowMapper<TestCaseTO>(){
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
}
