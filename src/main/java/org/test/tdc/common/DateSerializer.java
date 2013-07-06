package org.test.tdc.common;

import java.io.IOException;
import java.sql.Date;
import java.text.SimpleDateFormat;

import org.codehaus.jackson.JsonGenerator;
import org.codehaus.jackson.JsonProcessingException;
import org.codehaus.jackson.map.JsonSerializer;
import org.codehaus.jackson.map.SerializerProvider;

/**
 * JSON日期序列化
 * 
 * @author 
 * @date 2013-1-12
 * @time 上午11:19:51
 */
public class DateSerializer extends JsonSerializer<java.util.Date> {

	@Override
	public void serialize(java.util.Date value, JsonGenerator jgen,
			SerializerProvider provider) throws IOException,
			JsonProcessingException {
		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		String formattedDate = formatter.format(value);
		jgen.writeString(formattedDate);
	}
}
