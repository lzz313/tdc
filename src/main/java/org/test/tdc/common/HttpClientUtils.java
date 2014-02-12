package org.test.tdc.common;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URISyntaxException;
import java.security.KeyManagementException;
import java.security.NoSuchAlgorithmException;
import java.security.cert.CertificateException;
import java.security.cert.X509Certificate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.net.ssl.SSLContext;
import javax.net.ssl.TrustManager;
import javax.net.ssl.X509TrustManager;

import org.apache.http.Header;
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
import org.apache.http.client.params.CookiePolicy;
import org.apache.http.client.params.HttpClientParams;
import org.apache.http.client.protocol.ClientContext;
import org.apache.http.conn.scheme.Scheme;
import org.apache.http.conn.ssl.SSLSocketFactory;
import org.apache.http.impl.client.BasicResponseHandler;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.params.CoreConnectionPNames;
import org.apache.http.protocol.BasicHttpContext;
import org.apache.http.protocol.HttpContext;
import org.apache.http.util.EntityUtils;
import org.test.tdc.pojo.CookieHolder;
import org.test.tdc.utils.StringUtils;

public class HttpClientUtils {

	public static String httpGet(String url) throws ClientProtocolException, IOException, URISyntaxException {
		DefaultHttpClient httpclient = new DefaultHttpClient();
		String result = "";
		try {
			// 连接超时
			httpclient.getParams().setParameter(CoreConnectionPNames.CONNECTION_TIMEOUT, 5000);
			// 读取超时
			httpclient.getParams().setParameter(CoreConnectionPNames.SO_TIMEOUT, 5000);
			HttpClientParams.setCookiePolicy(httpclient.getParams(), CookiePolicy.BROWSER_COMPATIBILITY);
			
			HttpGet hg = new HttpGet(url);
			//添加http头信息  模拟浏览器
			hg.addHeader("Content-Type", "text/html;charset=UTF-8");  
			hg.addHeader("User-Agent", "Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.31 (KHTML, like Gecko) Chrome/26.0.1410.64 Safari/537.31");  
//			hg.addHeader("Referer",url);

			//httpclient.setCookieStore(CookieHolder.getCookieStore());
			//httpclient.setCookieSpecs(CookieHolder.getCookieSpecs());
			
            // Create local HTTP context
            HttpContext localContext = new BasicHttpContext();
            // Bind custom cookie store to the local context
            localContext.setAttribute(ClientContext.COOKIE_STORE, CookieHolder.getCookieStore());

			String charset = "UTF-8";  
			hg.setURI(new java.net.URI(url));  
			
			if(url.indexOf("https") > 0){
				supportHttps(httpclient);
			}
            HttpResponse response = httpclient.execute(hg,localContext);  
            HttpEntity entity = response.getEntity();  
            if (entity != null) {  
            	charset = getContentCharSet(entity);
                // 使用EntityUtils的toString方法，默认编码是ISO-8859-1  
            	result = EntityUtils.toString(entity, charset);  
            }  
            
		} catch (Exception e){
			e.printStackTrace();
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
		DefaultHttpClient httpclient = new DefaultHttpClient();
		HttpClientParams.setCookiePolicy(httpclient.getParams(), CookiePolicy.BEST_MATCH);

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
			Header[] headers = CookieHolder.getCookies();
			for (Header header : headers) {
				hp.addHeader(header.getName(),header.getValue());
			}
			
			UrlEncodedFormEntity entity = new UrlEncodedFormEntity(formparams,"UTF-8");
			hp.setEntity(entity);

			ResponseHandler<String> responseHandler = new BasicResponseHandler();
			
			if(url.indexOf("https") > 0){
				supportHttps(httpclient);
			}
			result = httpclient.execute(hp, responseHandler);
			
		} catch (Exception e){
			e.printStackTrace();
		} finally {
			httpclient.getConnectionManager().shutdown();
		}

		return result;
	}
	
	public static String login(String url,Map<String, String> nameValuePair,String method) throws ClientProtocolException, IOException, URISyntaxException {
		DefaultHttpClient  httpclient = new DefaultHttpClient();
		HttpClientParams.setCookiePolicy(httpclient.getParams(), CookiePolicy.BEST_MATCH);
		
		String result = "";
		try {
			// 连接超时
			httpclient.getParams().setParameter(CoreConnectionPNames.CONNECTION_TIMEOUT, 5000);
			// 读取超时
			httpclient.getParams().setParameter(CoreConnectionPNames.SO_TIMEOUT, 5000);
			
			String charset = "UTF-8"; 
			HttpResponse response = null;
			if("post".equalsIgnoreCase(method)){
				HttpPost httpRequest = new HttpPost(url);
				
				List<BasicNameValuePair> formparams = new ArrayList<BasicNameValuePair>();
				for (Map.Entry<String, String> entry : nameValuePair.entrySet()) {
					formparams.add(new BasicNameValuePair(entry.getKey(), entry.getValue()));
				}
				
				UrlEncodedFormEntity entity = new UrlEncodedFormEntity(formparams,"UTF-8");
				httpRequest.setEntity(entity);
				
				if(url.indexOf("https") > 0){
					supportHttps(httpclient);
				}
				response = httpclient.execute(httpRequest);  
				
				response.getStatusLine().getStatusCode();
				
				CookieHolder.setCookieStore(httpclient.getCookieStore());
				
			} else {
				HttpGet httpRequest = new HttpGet(url);
				//模拟浏览器
				httpRequest.addHeader("User-Agent", "Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.31 (KHTML, like Gecko) Chrome/26.0.1410.64 Safari/537.31");  
				httpRequest.setURI(new java.net.URI(url));  
				
				response = httpclient.execute(httpRequest);  
				CookieHolder.setCookies(response.getHeaders("Set-Cookie"));
			}
            
            HttpEntity entity = response.getEntity();  
            if (entity != null) {  
            	charset = getContentCharSet(entity);
                // 使用EntityUtils的toString方法，默认编码是ISO-8859-1  
            	result = EntityUtils.toString(entity, charset);  
            }  
            
		} catch (Exception e){
			e.printStackTrace();
		} finally {
			httpclient.getConnectionManager().shutdown();
		}
		return result;
	}
	
	/**
	 * 支持Https
	 * 
	 * @param httpClient
	 * @throws NoSuchAlgorithmException
	 * @throws KeyManagementException
	 */
	private static void supportHttps(HttpClient httpClient) throws NoSuchAlgorithmException, KeyManagementException{
		// First create a trust manager that won't care.
		X509TrustManager trustManager = new X509TrustManager() {
			public void checkClientTrusted(X509Certificate[] chain,
					String authType) throws CertificateException {
				// Don't do anything.
			}

			public void checkServerTrusted(X509Certificate[] chain,
					String authType) throws CertificateException {
				// Don't do anything.
			}

			public X509Certificate[] getAcceptedIssuers() {
				// Don't do anything.
				return null;
			}

		};
		// Now put the trust manager into an SSLContext.
		SSLContext sslcontext = SSLContext.getInstance("SSL");
		sslcontext.init(null, new TrustManager[] { trustManager }, null);

		// Use the above SSLContext to create your socket factory
		// (I found trying to extend the factory a bit difficult due to a
		// call to createSocket with no arguments, a method which doesn't
		// exist anywhere I can find, but hey-ho).
		SSLSocketFactory sf = new SSLSocketFactory(sslcontext);
		sf.setHostnameVerifier(SSLSocketFactory.ALLOW_ALL_HOSTNAME_VERIFIER);
		
		httpClient.getConnectionManager().getSchemeRegistry().register(new Scheme("https", sf, 443));
	}
	
	public static void main(String [] args){
		Map<String,String> nameValuePair = new HashMap<String,String>();
		nameValuePair.put("username", "uniq123");
		nameValuePair.put("password", "q123456");
		nameValuePair.put("captcha", "1231");
		nameValuePair.put("lt", "LT-31-3Ws7t7VBixVJ6etLIqO1lLeVWVEHGf");
		nameValuePair.put("execution", "e2s1");
		nameValuePair.put("_eventId", "submit");
		try {
			String r1 = HttpClientUtils.login("https://sso.woniu.com/login", nameValuePair, "POST");
			System.out.println(r1);
//			String r2 = HttpClientUtils.httpGet("https://sso.woniu.com/login");
//			System.out.println(r2);
		} catch (ClientProtocolException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} catch (URISyntaxException e) {
			e.printStackTrace();
		}
		
	}

}
