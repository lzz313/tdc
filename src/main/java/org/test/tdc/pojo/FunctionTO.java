package org.test.tdc.pojo;

import java.util.Date;

public class FunctionTO implements BaseTO{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1344669304647808996L;
	
	private Long id;
	private Long projectId;
	private String name;
	private Date create;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long getProjectId() {
		return projectId;
	}
	public void setProjectId(Long projectId) {
		this.projectId = projectId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Date getCreate() {
		return create;
	}
	public void setCreate(Date create) {
		this.create = create;
	}
	
}
