package org.test.tdc.common;

import java.io.IOException;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.http.HeaderElement;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.NameValuePair;
import org.apache.http.ParseException;
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
import org.apache.http.util.EntityUtils;
import org.test.tdc.utils.StringUtils;

public class HttpClientUtils {

	public static String httpGet(String url) throws ClientProtocolException, IOException, URISyntaxException {
		HttpClient httpclient = new DefaultHttpClient();
		String result = "";
		try {
			//httpclient.getParams().setParameter("http.protocol.content-charset", "utf-8");
			// 连接超时
			httpclient.getParams().setParameter(CoreConnectionPNames.CONNECTION_TIMEOUT, 5000);
			// 读取超时
			httpclient.getParams().setParameter(CoreConnectionPNames.SO_TIMEOUT, 5000);

			HttpGet hg = new HttpGet(url);
			//模拟浏览器
			//hg.addHeader("Content-Type", "text/html;charset=utf-8");  
			hg.addHeader("User-Agent", "Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.31 (KHTML, like Gecko) Chrome/26.0.1410.64 Safari/537.31");  
			String charset = "UTF-8";  
			hg.setURI(new java.net.URI(url));  
            HttpResponse response = httpclient.execute(hg);  
            HttpEntity entity = response.getEntity();  
            if (entity != null) {  
            	charset = getContentCharSet(entity);
                // 使用EntityUtils的toString方法，默认编码是ISO-8859-1  
            	result = EntityUtils.toString(entity, charset);  
            }  
            
			// 开始执行，发送请求到服务器
            //ResponseHandler<String> responseHandler = new BasicResponseHandler();
            //result = httpclient.execute(hg, responseHandler);
			
		} finally {
			httpclient.getConnectionManager().shutdown();
		}
		return result;
	}
	
	/** 
	 * 默认编码utf-8
     * Obtains character set of the entity, if known. 
     *  
     * @param entity must not be null 
     * @return the character set, or null if not found 
     * @throws ParseException if header elements cannot be parsed 
     * @throws IllegalArgumentException if entity is null 
     */  
    public static String getContentCharSet(final HttpEntity entity)  
        throws ParseException {  
  
        if (entity == null) {  
            throw new IllegalArgumentException("HTTP entity may not be null");  
        }  
        String charset = null;  
        if (entity.getContentType() != null) {   
            HeaderElement values[] = entity.getContentType().getElements();  
            if (values.length > 0) {  
                NameValuePair param = values[0].getParameterByName("charset");  
                if (param != null) {  
                    charset = param.getValue();  
                }  
            }  
        }  
        
        if(StringUtils.isEmpty(charset)){
        	charset = "UTF-8";
        }
        return charset;  
    }

	public static String httpPost(String url, Map<String, String> nameValuePair)
			throws ClientProtocolException, IOException {
		HttpClient httpclient = new DefaultHttpClient();

		String result = "";
		try {
			HttpPost hp = new HttpPost(url);

			httpclient.getParams().setParameter("http.protocol.content-charset", "utf-8");
			// 连接超时
			httpclient.getParams().setParameter(CoreConnectionPNames.CONNECTION_TIMEOUT, 5000);
			// 读取超时
			httpclient.getParams().setParameter(CoreConnectionPNames.SO_TIMEOUT, 5000);

			List<BasicNameValuePair> formparams = new ArrayList<BasicNameValuePair>();
			for (Map.Entry<String, String> entry : nameValuePair.entrySet()) {
				formparams.add(new BasicNameValuePair(entry.getKey(), entry
						.getValue()));
			}

			hp = new HttpPost(url);
			//添加http头信息  模拟浏览器
			hp.addHeader("Content-Type", "text/html;charset=UTF-8");  
			hp.addHeader("User-Agent", "Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.31 (KHTML, like Gecko) Chrome/26.0.1410.64 Safari/537.31");  
			hp.addHeader("Referer",url);
			UrlEncodedFormEntity entity = new UrlEncodedFormEntity(formparams,"UTF-8");
			hp.setEntity(entity);

			ResponseHandler<String> responseHandler = new BasicResponseHandler();
			result = httpclient.execute(hp, responseHandler);
		} finally {
			httpclient.getConnectionManager().shutdown();
		}

		return result;
	}

}
