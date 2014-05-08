package org.test.tdc;

import java.io.IOException;
import java.net.URISyntaxException;

import org.apache.http.client.ClientProtocolException;
import org.test.tdc.common.HttpClientUtils;

public class TestApp {
	public static void main(String[] args) throws ClientProtocolException, IOException, URISyntaxException {
		String s = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>" +
				"<checkOrderIdReq>" +
				"<orderid>20140417A212A007A0000355414</orderid>" +
				"<signMsg>A4E7EC946094EB4D28E573F4728C3A31</signMsg>" +
				"</checkOrderIdReq >";	
		HttpClientUtils.httpPostBody("http://localhost:82/app/wo/backend?serviceid=validateorderid", s);
	}
}
