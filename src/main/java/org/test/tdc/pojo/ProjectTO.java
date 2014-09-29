package org.test.tdc.pojo;

import java.util.Date;

public class ProjectTO  implements BaseTO{
	/**
	 * 
	 */
	private static final long serialVersionUID = 7683078100000594742L;
	
	private int id;
	private int fcount;
	private String name;
	private Date create;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getFcount() {
		return fcount;
	}
	public void setFcount(int fcount) {
		this.fcount = fcount;
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
