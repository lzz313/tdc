package org.test.tdc.dao.rowmapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;
import org.test.tdc.pojo.TestCaseTO;

public class TestCaseRowMapper implements RowMapper<Object>{
	public Object mapRow(ResultSet rs, int rowNum) throws SQLException{
		TestCaseTO testCase = new TestCaseTO();
		
		testCase.setId(rs.getLong("N_ID"));
		testCase.setFunctionId(rs.getLong("N_FUNCTION_ID"));
		testCase.setName(rs.getString("S_NAME"));
		testCase.setStep(rs.getString("S_STEP"));
		testCase.setUrl(rs.getString("S_URL"));
		testCase.setType(rs.getString("S_TYPE"));
		testCase.setData(rs.getString("S_DATA"));
		testCase.setCreate(rs.getDate("D_CREATE"));
		testCase.setStatus(rs.getString("S_STATUS"));
		
		return testCase;
	}
}

