package org.test.tdc.dao;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class JdbcTemplateProcessor {
	@Autowired
	protected JdbcTemplate jdbcTemplate;
	@Autowired
	protected NamedParameterJdbcTemplate namedParameterJdbcTemplate;
	
	public JdbcTemplate getJdbcTemplate() {
		return jdbcTemplate;
	}

	public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	public NamedParameterJdbcTemplate getNamedParameterJdbcTemplate() {
		return namedParameterJdbcTemplate;
	}

	public void setNamedParameterJdbcTemplate(
			NamedParameterJdbcTemplate namedParameterJdbcTemplate) {
		this.namedParameterJdbcTemplate = namedParameterJdbcTemplate;
	}
	
//	@Resource
//	public void setDataSource(DataSource dataSource) {
//		this.jdbcTemplate = new JdbcTemplate(dataSource);
//		this.namedParameterJdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
//	}

	public List<Map<String, Object>> findAll(String queryString, Map<String, Object> paramValues)
			throws DataAccessException {
		List<Map<String, Object>> result = this.namedParameterJdbcTemplate.queryForList(queryString, paramValues);
		return result;
	}
	
	public List<?> findAll(String queryString, Map<String, Object> paramValues,RowMapper<?> rowMapper)
			throws DataAccessException {
		List<?> result = this.namedParameterJdbcTemplate.query(queryString, paramValues, rowMapper);
		return result;
	}
	
	public int update(String sql,Map<String,Object> params){
		return this.namedParameterJdbcTemplate.update(sql, params);
	}
	
}
