package org.test.tdc.pojo;

import java.util.Date;

public class FunctionTO implements BaseTO{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1344669304647808996L;
	
	private int id;
	private int projectId;
	private String name;
	private Date create;
	private int tcount;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getProjectId() {
		return projectId;
	}
	public void setProjectId(int projectId) {
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
	public int getTcount() {
		return tcount;
	}
	public void setTcount(int tcount) {
		this.tcount = tcount;
	}
	
}
