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
import org.test.tdc.dao.JdbcTemplateProcessor;
import org.test.tdc.pojo.EnvironmentTO;

@Service
public class EnvironmentService {
	@Resource
	private JdbcTemplateProcessor jdbcTemplateProcessor;
	
	/**
	 * @param functionId
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public List<EnvironmentTO> queryDomain(int pid){
		
		String queryDomainSql = "select * from ENVIRONMENT where n_project_id=:pid";
		
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("pid", pid);
		
		List<EnvironmentTO> domains = new ArrayList<EnvironmentTO>();
		try{
			domains = (List<EnvironmentTO>) jdbcTemplateProcessor.findAll(queryDomainSql, params, new RowMapper<EnvironmentTO>(){
				public EnvironmentTO mapRow(ResultSet query, int rowNum) throws SQLException{
					EnvironmentTO environmentTO = new EnvironmentTO();
					environmentTO.setId(query.getInt("N_ID"));
					environmentTO.setProjectId(query.getInt("N_PROJECT_ID"));
					environmentTO.setName(query.getString("S_NAME"));
					environmentTO.setDomain(query.getString("S_DOMAIN"));
					return environmentTO;
				}
			});
		} catch (Exception e){
			e.printStackTrace();
		}
		return domains;
	}
	
	/**
	 * 创建环境
	 * 
	 * @param name
	 * @param domain
	 * @return
	 */
	public int createDomian(int pid,String name,String domain){
		String updateProject = "insert into ENVIRONMENT (N_PROJECT_ID,S_NAME,S_DOMAIN) values (:pid,:name,:domain)";
		
		Map<String,Object> params = new HashMap<String,Object>();
		params.put("pid", pid);
		params.put("name", name);
		params.put("domain", domain);
		return jdbcTemplateProcessor.update(updateProject, params);
	}
	
	/**
	 * 删除环境
	 * 
	 * @param id
	 * @return
	 */
	public int deleteDomain(int id){
		String deleteDomainSql = "delete from ENVIRONMENT where n_id = :id";
		
		Map<String,Object> params = new HashMap<String,Object>();
		params.put("id", id);
		return jdbcTemplateProcessor.update(deleteDomainSql, params);
	}
	
	/**
	 * 更新环境
	 * 
	 * @param id
	 * @param projectName
	 * @return
	 */
	public int updateDomian(EnvironmentTO environmentTO){
		String updateDomianSql = "update ENVIRONMENT set S_NAME=:name,S_DOMAIN=:domain where n_id = :id";
		
		Map<String,Object> params = new HashMap<String,Object>();
		params.put("id", environmentTO.getId());
		params.put("name", environmentTO.getName());
		params.put("domain", environmentTO.getDomain());
		return jdbcTemplateProcessor.update(updateDomianSql, params);
	}
}
