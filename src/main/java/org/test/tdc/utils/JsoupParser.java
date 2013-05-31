package org.test.tdc.utils;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

public class JsoupParser {

	public static String parse(String html,String baseUri){
		Document doc = Jsoup.parse(html, baseUri);
		convertUrl(doc,baseUri,"link","href");
		convertUrl(doc,baseUri,"script","src");
		convertUrl(doc,baseUri,"img","src");
		convertUrl(doc,baseUri,"a","href");
		
		return doc.html();
	}
	
	private static void convertUrl(Document doc,String baseUri,String tagName,String attrName){
		Elements elements = doc.select(tagName);
		
		for (Element element : elements) {
			String attr = element.attr(attrName);
			if(!StringUtils.isEmpty(attr) && attr.indexOf("http") == -1){
				element.attr(attrName,baseUri+"/"+attr);
			}
		}
	}
}
