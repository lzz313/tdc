package org.test.tdc.service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.test.tdc.dao.JdbcTemplateProcessor;
import org.test.tdc.pojo.ProjectTO;
import org.test.tdc.utils.JsonUtils;
import org.test.tdc.utils.StringUtils;

import com.udpwork.ssdb.SSDB;

@Service("projectServiceSSDB")
public class ProjectServiceSSDB implements ProjectService{
	
	@Resource
	private JdbcTemplateProcessor jdbcTemplateProcessor;
	
	@Resource(name="functionServiceSSDB")
	private FunctionService functionService;
	
	private SSDB ssdb = new SSDB("10.17.0.23", 881);
	/**
	 * 查询所有项目
	 * 
	 * @return
	 */
	public List<ProjectTO> queryProject(){

		List<ProjectTO> projects = new ArrayList<ProjectTO>();
		try {
			String results = new String(ssdb.hget("project", "list"));
			if(!StringUtils.isEmpty(results)){
				projects = JsonUtils.parseArray(results,ProjectTO.class);
			}
			
			for (ProjectTO projectTO : projects) {
				projectTO.setFcount(Integer.valueOf(new String(ssdb.get(projectTO.getId()+"_fun_ct"))));
			}
			
		} catch (Exception e) {
			
		}
		return projects;
	}
	/**
	 * 根据项目查找
	 * 
	 * @param projectName
	 * @return
	 */
	public List<ProjectTO> queryProject(String projectName){
		List<ProjectTO> listAll = queryProject();
		
		List<ProjectTO> result = new ArrayList<ProjectTO>();
		for (ProjectTO projectTO : listAll) {
			if(projectName.equals(projectTO.getName())){
				result.add(projectTO);
			}
		}
		
		return result;
	}
	
	/**
	 * 根据项目查找
	 * 
	 * @param projectId
	 * @return
	 */
	public List<ProjectTO> queryProject(int projectId){
		List<ProjectTO> listAll = queryProject();
		
		List<ProjectTO> result = new ArrayList<ProjectTO>();
		for (ProjectTO projectTO : listAll) {
			if(projectId == projectTO.getId()){
				result.add(projectTO);
			}
		}
		
		return result;
	}

	/**
	 * 创建项目
	 * 
	 * @param projectName
	 * @return
	 */
	public int createProject(String projectName){
		ProjectTO newProject = new ProjectTO();
		newProject.setName(projectName);
		newProject.setCreate(new Date());
		
		int result = 0;
		try {
			Long incr = ssdb.incr("project_id", 1);
			newProject.setId(incr.intValue());
			
			List<ProjectTO> listAll = queryProject();
			listAll.add(newProject);
			
			ssdb.hset("project", "list", JsonUtils.toJSONString(listAll));
			
			result = 1;
		} catch (Exception e) {
			
		}
		
		return result;
	}
	
	/**
	 * 删除项目
	 * 
	 * @param id
	 * @return
	 */
	public int deleteProject(int id){
		functionService.deleteFunctionByPid(id);
		
		List<ProjectTO> listAll = queryProject();
		
		int result = 0;
		for (Iterator<ProjectTO> iter = listAll.listIterator(); iter.hasNext(); ) {
			ProjectTO project = iter.next();
			if(id == project.getId()){
				iter.remove();
				result = 1;
			}
		}
		
		try {
			ssdb.hset("project", "list", JsonUtils.toJSONString(listAll));
			result = 1;
		} catch (Exception e) {
		}
		
		return result;
	}
	
	/**
	 * 更新项目
	 * 
	 * @param id
	 * @param projectName
	 * @return
	 */
	public int updateProject(int id,String projectName){
		List<ProjectTO> listAll = queryProject();
		
		int result = 0;
		for (ProjectTO projectTO : listAll) {
			if(id == projectTO.getId()){
				projectTO.setName(projectName);
				result = 1;
			}
		}
		
		try {
			ssdb.hset("project", "list", JsonUtils.toJSONString(listAll));
		} catch (Exception e) {
			
		}
		return result;
	}
	
	public List<Map<String, Object>> queryProjectWithFunction(){
		String projectsWithFuncSql = "select p.n_id as id," +
										  "p.s_name as pname," +
										  "f.n_id as fid," +
										  "f.s_name as fname," +
										  "f.d_create as fcreate " +
								  "from (project p left join function f " +
								  "on p.n_id = f.n_project_id)";
		
		List<Map<String, Object>> results = jdbcTemplateProcessor.findAll(projectsWithFuncSql, new HashMap<String,Object>());
		
		return results;
	}
	
	public static void main(String[] args) {
		ProjectTO p = new ProjectTO();
		p.setId(1);
		p.setName("name");
		p.setFcount(3);
		p.setCreate(new Date());
		
		String s = JsonUtils.toJSONString(Collections.singletonList(p));
		System.out.println(s);
		
		List<ProjectTO> parseObject = JsonUtils.parseArray(s,ProjectTO.class);
		System.out.println(parseObject.get(0).getName());
	}
}
