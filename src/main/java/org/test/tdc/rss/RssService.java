package org.test.tdc.rss;

import java.io.IOException;
import java.net.URISyntaxException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

import org.apache.http.client.ClientProtocolException;
import org.test.tdc.pojo.RSSItemTO;
import org.test.tdc.service.HtmlParserService;

import com.sun.syndication.feed.synd.SyndEntryImpl;
import com.sun.syndication.feed.synd.SyndFeed;
import com.sun.syndication.io.SyndFeedInput;
import com.sun.syndication.io.XmlReader;

public class RssService {
	/** 
     * 根据RSSUrl获取所有List数据 
     * @param rssUrl 
     * @return 
     */  
    public  List<RSSItemTO> getAllRssItemBeanList(String rssUrl){  
        try{  
            URL feedUrl = new URL(rssUrl);  
            SyndFeedInput input = new SyndFeedInput();  
            SyndFeed feed = input.build(new XmlReader(feedUrl));  
          
            List<SyndEntryImpl> entries = feed.getEntries();  
              
            RSSItemTO item = null;  
            List<RSSItemTO> rssItemBeans = new ArrayList<RSSItemTO>();  
              
            for(SyndEntryImpl entry : entries){  
                item = new RSSItemTO();  
              
                item.setTitle(entry.getTitle().trim());  
                item.setType(feed.getTitleEx().getValue().trim());  
                item.setUri(entry.getUri());    
                item.setPubDate(entry.getPublishedDate());  
                item.setAuthor(entry.getAuthor());  
                item.setLink(entry.getLink());
                
                rssItemBeans.add(item);  
              
            }  
            return rssItemBeans;  
              
        }catch(Exception e){  
            e.printStackTrace();  
            return null;  
        }  
          
    }  
    
    public static void main(String[] args) throws ClientProtocolException, IOException, URISyntaxException {
    	RssService rs = new RssService();
    	HtmlParserService ps = new HtmlParserService();
    	List<RSSItemTO> list = rs.getAllRssItemBeanList("http://www.infoq.com/cn/feed");
    	for (RSSItemTO rssItemTO : list) {
    		
			System.out.println(rssItemTO.getTitle()+","+rssItemTO.getLink());
			System.out.println(ps.getHtml(rssItemTO.getLink()));
			
			break;
		}
	}
}
