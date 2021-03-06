package org.test.tdc.dao;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
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
	
	public int saveAndGetId(String sql,Map<String,Object> params){
		KeyHolder keyHolder = new GeneratedKeyHolder();  
		this.namedParameterJdbcTemplate.update(sql, new MapSqlParameterSource(params),keyHolder);
		
		int generatedId = keyHolder.getKey().intValue();   
	    return generatedId; 
	}
	
}
