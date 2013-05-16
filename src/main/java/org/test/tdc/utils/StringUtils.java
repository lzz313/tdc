package org.test.tdc.utils;

/**
 * @author luzz
 *
 */
public class StringUtils {
	public static boolean isEmpty(String str){
		if(str == null || str == ""){
			return true;
		}else{
			return false;
		}
	}
}
