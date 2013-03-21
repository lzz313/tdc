package org.test.tdc.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import org.springframework.stereotype.Component;

@Component
public class AccessDataProcessor {
	public Connection conn = null;

	/**
	 * 连接未加密的数据库
	 * 
	 * @param dbPath
	 * @return
	 * @throws Exception
	 */
	public Statement getStatement(String dbPath) throws Exception {
		Class.forName("sun.jdbc.odbc.JdbcOdbcDriver");
		String dburl = "jdbc:odbc:driver={Microsoft Access Driver (*.mdb)};"
				+ "DBQ=" + dbPath;// 此为NO-DSN方式
		// String dburl ="jdbc:odbc:odbcName";//此为ODBC连接方式
		conn = DriverManager.getConnection(dburl);
		return conn.createStatement();
	}

	/**
	 * 连接加密的数据库
	 * 
	 * @param dbPath
	 * @return
	 * @throws Exception
	 */
	public Statement getStatement(String dbPath, String password)
			throws Exception {
		Class.forName("sun.jdbc.odbc.JdbcOdbcDriver");
		String dburl = "jdbc:odbc:driver={Microsoft Access Driver (*.mdb)};"
				+ "pwd=" + password + ";DBQ=" + dbPath;// 此为NO-DSN方式
		// String dburl ="jdbc:odbc:odbcName";//此为ODBC连接方式
		conn = DriverManager.getConnection(dburl);
		return conn.createStatement();
	}

	/**
	 * 查询数据库
	 * 
	 * @param stmt
	 * @param query
	 * @return
	 * @throws Exception
	 */
	public ResultSet executeQuery(Statement stmt, String query)
			throws Exception {
		ResultSet rs = stmt.executeQuery(query);
		return rs;
	}

	/**
	 * 更新数据库
	 * 
	 * @param stmt
	 * @param query
	 * @throws SQLException
	 */
	public void executeUpdate(Statement stmt, String query) throws SQLException {
		stmt.executeUpdate(query);
	}

	/**
	 * 关闭链接
	 * 
	 * @throws SQLException
	 */
	public void close() throws SQLException {
		if (conn != null)
			conn.close();
	}
}
