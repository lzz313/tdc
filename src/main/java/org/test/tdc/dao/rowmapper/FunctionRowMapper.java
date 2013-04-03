package org.test.tdc.dao.rowmapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;
import org.test.tdc.pojo.FunctionTO;

public class FunctionRowMapper implements RowMapper<Object>  {
	public Object mapRow(ResultSet rs, int rowNum) throws SQLException {
		FunctionTO function = new FunctionTO();
		function.setId(rs.getLong("N_ID"));
		function.setProjectId(rs.getLong("N_PROJECT_ID"));
		function.setName(rs.getString("S_NAME"));
		function.setCreate(rs.getDate("D_CREATE"));
		
		return function;
	}

}
