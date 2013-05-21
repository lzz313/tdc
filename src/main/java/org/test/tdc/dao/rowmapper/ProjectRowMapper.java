package org.test.tdc.dao.rowmapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;
import org.test.tdc.pojo.ProjectTO;

public class ProjectRowMapper implements RowMapper<Object>{

	public Object mapRow(ResultSet rs, int rowNum) throws SQLException {
		ProjectTO project = new ProjectTO();
		
		project.setId(rs.getInt("N_ID"));
		project.setName(rs.getString("S_NAME"));
		project.setCreate(rs.getDate("D_CREATE"));
		project.setFcount(rs.getInt("FCOUNT"));
		return project;
	}

}
