package org.test.tdc.pojo;

import java.util.Date;

public class TestCaseData implements BaseTO{

	/**
	 * 
	 */
	private static final long serialVersionUID = -5090489979473545918L;
	
	private String testCaseName;
	private String testCaseContent;
	private String testUrl;
	private String createDataSql;
	private String queryDataSql;
	private String deleteDataSql;
	private Date createDt;
	
	public String getTestCaseName() {
		return testCaseName;
	}
	public void setTestCaseName(String testCaseName) {
		this.testCaseName = testCaseName;
	}
	public String getTestCaseContent() {
		return testCaseContent;
	}
	public void setTestCaseContent(String testCaseContent) {
		this.testCaseContent = testCaseContent;
	}
	public String getTestUrl() {
		return testUrl;
	}
	public void setTestUrl(String testUrl) {
		this.testUrl = testUrl;
	}
	public String getCreateDataSql() {
		return createDataSql;
	}
	public void setCreateDataSql(String createDataSql) {
		this.createDataSql = createDataSql;
	}
	public String getQueryDataSql() {
		return queryDataSql;
	}
	public void setQueryDataSql(String queryDataSql) {
		this.queryDataSql = queryDataSql;
	}
	public String getDeleteDataSql() {
		return deleteDataSql;
	}
	public void setDeleteDataSql(String deleteDataSql) {
		this.deleteDataSql = deleteDataSql;
	}
	public Date getCreateDt() {
		return createDt;
	}
	public void setCreateDt(Date createDt) {
		this.createDt = createDt;
	}
	
}
