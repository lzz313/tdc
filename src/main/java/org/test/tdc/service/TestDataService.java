package org.test.tdc.service;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import org.test.tdc.dao.ExcelDataProcesser;
import org.test.tdc.pojo.TestCaseData;
import org.test.tdc.utils.PropFileRead;

public class TestDataService {
	private final static String DATA_FILE_DIR_KEY = "test_case_db_dir";
	private final static String DATA_FILE_HEAD_KEY = "test_case_head";
	
	private ExcelDataProcesser dataAccess;
	
	public void addTestData(TestCaseData testCaseData){
		
		String filePath = PropFileRead.getValue(DATA_FILE_DIR_KEY);
		String headers = PropFileRead.getValue(DATA_FILE_HEAD_KEY);
		
		try {
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			
			List<String[]> datas = new ArrayList<String[]>();
			datas.add(new String[]{testCaseData.getTestCaseName()
									,testCaseData.getTestCaseContent()
									,testCaseData.getTestUrl()
									,testCaseData.getCreateDataSql()
									,testCaseData.getQueryDataSql()
									,testCaseData.getDeleteDataSql()
									,sdf.format(testCaseData.getCreateDt())});
			
			String[] aHeaders = dataAccess.getHeaderFromFile(filePath);
			if(aHeaders == null || aHeaders.length == 0){
				dataAccess.writeHeaderToCsv(filePath, headers.split(","));
			}
			
			dataAccess.writeContentToCsv(filePath, datas);
		} catch (IOException e) {
			
		}
	}
}
