package org.test.tdc.pojo;

import java.util.Date;

public class RSSItemTO {
	
	private String title;  
    private String author;  
    private String uri;  
    private String link;  
    private String description;  
    private Date pubDate;  
    private String type;
    
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public String getUri() {
		return uri;
	}
	public void setUri(String uri) {
		this.uri = uri;
	}
	public String getLink() {
		return link;
	}
	public void setLink(String link) {
		this.link = link;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Date getPubDate() {
		return pubDate;
	}
	public void setPubDate(Date pubDate) {
		this.pubDate = pubDate;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}  
    
}
