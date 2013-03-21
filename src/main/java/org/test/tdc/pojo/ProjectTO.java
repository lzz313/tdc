package org.test.tdc.pojo;

import java.util.Date;

public class ProjectTO  implements BaseTO{
	/**
	 * 
	 */
	private static final long serialVersionUID = 7683078100000594742L;
	
	private Long id;
	private String name;
	private Date create;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
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
