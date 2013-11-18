package org.test.tdc.pojo;

import java.io.Serializable;
import java.util.Date;

public class MemoryData implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 4701069989307567142L;
	private Date date;
	private long duration;
	private Object object;
	
	public MemoryData(Object obj,long time){
		this.object = obj;
		this.duration = time;
		this.date = new Date();
	}
	
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public long getDuration() {
		return duration;
	}
	public void setDuration(long duration) {
		this.duration = duration;
	}
	public Object getObject() {
		return object;
	}
	public void setObject(Object object) {
		this.object = object;
	}
}
