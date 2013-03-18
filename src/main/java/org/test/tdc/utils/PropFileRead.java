package org.test.tdc.utils;

import java.util.PropertyResourceBundle;
import java.util.ResourceBundle;

public class PropFileRead {
	
	private static ResourceBundle bundle = null;
	
	/**
	 * @param key
	 * @return
	 */
	public static String getValue(String key){
		if (bundle == null) {
			bundle = PropertyResourceBundle.getBundle("config");
		}
		
		String value = bundle.getString(key);
		
		return value;
	}
	
}
