package org.test.tdc.datasource;

import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.util.Assert;

public class TdcDriverManagerDataSource extends DriverManagerDataSource{
	private String dbq;

	public String getDbq() {
		return dbq;
	}

	public void setDbq(String dbq) {
		String path = Thread.currentThread().getContextClassLoader().getResource("").getFile();
		if(dbq != null && dbq.indexOf(':') == -1){
			dbq = "DBQ="+path.substring(1) + dbq;
		} else {
			dbq = "DBQ=" + dbq;
		}
		
		this.dbq = dbq;
	}
	
	@Override
	public void setUrl(String url) {
		Assert.hasText(url, "Property 'url' must not be empty");
		String localUrl = getUrl();
		localUrl = url.trim() + dbq;
		
		super.setUrl(localUrl);
	}
}
