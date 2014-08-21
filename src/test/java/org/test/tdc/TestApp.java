package org.test.tdc;

import java.io.IOException;
import java.math.BigDecimal;
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
//		HttpClientUtils.httpPostBody("http://localhost:82/app/wo/backend?serviceid=validateorderid", s);
		
		
		BigDecimal buyPrice = new BigDecimal("4327");
		BigDecimal currPrice = null;
		BigDecimal count = new BigDecimal("1");
		BigDecimal tradeFee = new BigDecimal("0.0008");
		
		System.out.println("当前价格:"+buyPrice);
		System.out.println("交易保证金12%:"+buyPrice.multiply(new BigDecimal("0.12")));
		System.out.println("单向向交易手续费0.08%:"+buyPrice.multiply(tradeFee));
		System.out.println("递延费0.015%:"+"0");
		
		//(currPrice-buyPrice)*count  - (buyPrice + currPrice)*tradeFee*count > 0
		
		//currPirce*count -buyPrice*count - buyPrice*tradeFee*count - currPrice*tradeFee*count == 0
		//(currPrice-buyPrice - buyPrice*tradeFee - currPrice*tradeFee)*count ==0
		//currPrice*(1-tradeFee) - buyPrice*(1+tradeFee) = 0    currPrice*(1-tradeFee) = buyPrice*(1+tradeFee) 
		//buyPrice*(1+tradeFee)/(1-tradeFee) = currPrice
		//currPrice - buyPrice - buyPrice*tradeFee = 0
		currPrice = buyPrice.multiply(BigDecimal.ONE.subtract(tradeFee));
//		currPrice = currPrice.divide(BigDecimal.ONE.subtract(tradeFee),4,BigDecimal.ROUND_CEILING);
		System.out.println("保本价格:"+currPrice.toString());
		System.out.println("上浮超过%:"+currPrice.subtract(buyPrice).divide(buyPrice,4,BigDecimal.ROUND_CEILING).multiply(new BigDecimal(100))+"%");
		
		BigDecimal tempPrice = buyPrice.multiply(BigDecimal.ONE.add(tradeFee));
//		BigDecimal tempPrice2 = (new BigDecimal("4290")).multiply(BigDecimal.ONE.subtract(tradeFee));
		
		System.out.println("盈利价格:"+"4303");
		System.out.println("盈利:"+(new BigDecimal("4303")).subtract(tempPrice));
	}
}
