package org.test.tdc.pojo;

import org.apache.http.Header;
import org.apache.http.client.CookieStore;
import org.apache.http.client.protocol.ClientContext;
import org.apache.http.cookie.CookieSpecRegistry;
import org.apache.http.protocol.BasicHttpContext;
import org.apache.http.protocol.HttpContext;


public class CookieHolder {
	
	private volatile static CookieHolder cookieHolder;
	private static HttpContext httpContext;
	private static CookieStore cookieStore;
	private static CookieSpecRegistry cookieSpecs;
	
	public static CookieSpecRegistry getCookieSpecs() {
		return cookieSpecs;
	}

	public static void setCookieSpecs(CookieSpecRegistry cookieSpecs) {
		CookieHolder.cookieSpecs = cookieSpecs;
	}

	private static Header[] cookies;

	public static Header[] getCookies() {
		return cookies;
	}

	public static void setCookies(Header[] cookies) {
		CookieHolder.cookies = cookies;
	}
	
	public static CookieStore getCookieStore() {
		return cookieStore;
	}

	public static void setCookieStore(CookieStore cookieStore) {
		CookieHolder.cookieStore = cookieStore;
	}

	public static HttpContext getHttpContext() {
		return httpContext;
	}

	public static void setHttpContext(HttpContext httpContext) {
		CookieHolder.httpContext = httpContext;
	}

	public static CookieHolder getInstance(){
		if(cookieHolder == null){
			synchronized (CookieHolder.class) {  
		        if (cookieHolder == null) {  
		        	cookieHolder = new CookieHolder();  
					httpContext = new BasicHttpContext();
					httpContext.setAttribute(ClientContext.COOKIE_STORE, cookieStore);
		        }  
			}
		}
		return cookieHolder;
	}
}
