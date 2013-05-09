package org.test.tdc.common;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.ResponseHandler;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.BasicResponseHandler;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.params.CoreConnectionPNames;

public class HttpClientUtils {

	public static String httpGet(String url) throws ClientProtocolException, IOException{
		HttpClient httpclient = new DefaultHttpClient();
		httpclient.getParams().setParameter("http.protocol.content-charset","utf-8");
		//连接超时
		httpclient.getParams().setParameter(CoreConnectionPNames.CONNECTION_TIMEOUT, 5000);
		//读取超时 
		httpclient.getParams().setParameter(CoreConnectionPNames.SO_TIMEOUT, 5000);
		
		HttpGet hg = new HttpGet(url);

		// 开始执行，发送请求到服务器
		ResponseHandler<String> responseHandler = new BasicResponseHandler();
		return httpclient.execute(hg,responseHandler);
	}
	
	public static String httpPost(String url,Map<String,String> nameValuePair) throws ClientProtocolException, IOException{
		HttpClient httpclient = new DefaultHttpClient();
		HttpPost hp = new HttpPost(url);
		
		httpclient.getParams().setParameter("http.protocol.content-charset","utf-8");
		//连接超时
		httpclient.getParams().setParameter(CoreConnectionPNames.CONNECTION_TIMEOUT, 5000);
		//读取超时 
		httpclient.getParams().setParameter(CoreConnectionPNames.SO_TIMEOUT, 5000);
		
		List<BasicNameValuePair> formparams = new ArrayList<BasicNameValuePair>();
		for (Map.Entry<String, String> entry : nameValuePair.entrySet()) {
			formparams.add(new BasicNameValuePair(entry.getKey(), entry.getValue()));
		}
		
		hp = new HttpPost(url);
		UrlEncodedFormEntity entity = new UrlEncodedFormEntity(formparams, "UTF-8");
		hp.setEntity(entity);
		
		ResponseHandler<String> responseHandler = new BasicResponseHandler();
		return httpclient.execute(hp,responseHandler);
	}
}
