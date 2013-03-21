package org.test.tdc.dao;

import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;
import org.supercsv.cellprocessor.Optional;
import org.supercsv.cellprocessor.ParseDate;
import org.supercsv.cellprocessor.constraint.StrMinMax;
import org.supercsv.cellprocessor.constraint.Unique;
import org.supercsv.cellprocessor.ift.CellProcessor;
import org.supercsv.io.CsvBeanReader;
import org.supercsv.io.CsvListReader;
import org.supercsv.io.CsvListWriter;
import org.supercsv.io.ICsvBeanReader;
import org.supercsv.prefs.CsvPreference;
import org.test.tdc.pojo.TestCaseData;

@Component
public class ExcelDataProcesser {

	public void getContent(String filePath, TestCaseData testCaseData) throws IOException {
		ICsvBeanReader inFile = new CsvBeanReader(new FileReader(filePath),CsvPreference.EXCEL_PREFERENCE);
		try {
			final String[] header = inFile.getHeader(true);
			while ((testCaseData = inFile.read(testCaseData.getClass(), header, processors)) != null) {
				//System.out.println(user.getZip());
			}
		} finally {
			inFile.close();
		}
	}

	final CellProcessor[] processors = new CellProcessor[] {
		new Unique(new StrMinMax(1, 50)), 
		new Optional(new StrMinMax(1,1000)),
		new Optional(new StrMinMax(1,500)),
		null,
		null,
		null,
		new ParseDate("yyyy-MM-dd HH:mm:ss"), 
	};

	/**
	 * 读取csv文件(不带头部)
	 * 
	 * @param file
	 *            File
	 * @return csv文件组装成list
	 * @throws IOException
	 */
	public List<String[]> getContentFromFile(File file) throws IOException {
		List<String[]> content = new ArrayList<String[]>();
		CsvListReader reader = new CsvListReader(new FileReader(file),
				CsvPreference.EXCEL_PREFERENCE);
		reader.getHeader(true);// 去除头部字段声明
		List<String> line = new ArrayList<String>();
		while ((line = reader.read()) != null) {
			content.add(line.toArray(new String[] {}));
		}
		return content;
	}

	/**
	 * 读取csv文件(带头部)
	 * 
	 * @param file
	 *            File
	 * @return csv文件组装成list
	 * @throws IOException
	 */
	public List<String[]> getDetailFromFile(File file) throws IOException {
		List<String[]> content = new ArrayList<String[]>();
		CsvListReader reader = new CsvListReader(new FileReader(file),
				CsvPreference.EXCEL_PREFERENCE);
		String[] header = reader.getHeader(true);
		content.add(header);
		List<String> line = new ArrayList<String>();
		while ((line = reader.read()) != null) {
			content.add(line.toArray(new String[] {}));
		}
		return content;
	}

	/**
	 * 读取csv文件的头部
	 * 
	 * @param file
	 *            File
	 * @return csv文件的头部
	 * @throws IOException
	 */
	public String[] getHeaderFromFile(String file) throws IOException {
		CsvListReader reader = new CsvListReader(new FileReader(file),
				CsvPreference.EXCEL_PREFERENCE);
		return reader.getHeader(true);
	}

	/**
	 * 写入csv文件
	 * 
	 * @param file
	 *            File
	 * @param header
	 *            头部
	 * @param content
	 *            内容
	 * @throws IOException
	 */
	public void writeToCsv(File file, String[] header, List<String[]> content)
			throws IOException {
		CsvListWriter writer = new CsvListWriter(new FileWriter(file),
				CsvPreference.EXCEL_PREFERENCE);
		writer.writeHeader(header);
		for (String[] str : content) {
			writer.write(str);
		}
		writer.close();
	}

	/**
	 * 写入csv文件
	 * 
	 * @param file
	 *            File
	 * @param content
	 *            内容
	 * @throws IOException
	 */
	public void writeContentToCsv(String file, List<String[]> content)
			throws IOException {
		CsvListWriter writer = new CsvListWriter(new FileWriter(file),
				CsvPreference.EXCEL_PREFERENCE);
		for (String[] str : content) {
			writer.write(str);
		}
		writer.close();
	}

	/**
	 * 写入csv文件(头部)
	 * 
	 * @param file
	 *            File
	 * @param content
	 *            内容
	 * @throws IOException
	 */
	public void writeHeaderToCsv(String file, String[] header) throws IOException {
		CsvListWriter writer = new CsvListWriter(new FileWriter(file),
				CsvPreference.EXCEL_PREFERENCE);
		writer.writeHeader(header);
		writer.close();
	}
}

