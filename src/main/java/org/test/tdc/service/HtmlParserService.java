package org.test.tdc.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Vector;

import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.ResponseHandler;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.BasicResponseHandler;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.message.BasicNameValuePair;
import org.htmlparser.Node;
import org.htmlparser.NodeFilter;
import org.htmlparser.Parser;
import org.htmlparser.filters.NodeClassFilter;
import org.htmlparser.filters.OrFilter;
import org.htmlparser.tags.FormTag;
import org.htmlparser.tags.InputTag;
import org.htmlparser.tags.OptionTag;
import org.htmlparser.tags.SelectTag;
import org.htmlparser.util.NodeList;
import org.htmlparser.util.ParserException;
import org.springframework.stereotype.Service;

@Service
public class HtmlParserService {

	/**
	 * @param args
	 * @throws IOException 
	 * @throws ClientProtocolException 
	 */
	public Map<String, Object> parse(String url) throws ClientProtocolException, IOException{
		
		HttpClient client = new DefaultHttpClient();
		HttpPost httppost = new HttpPost(url);

		// 设置请求参数，这些参数不同于HTTP头中的参数，它们是放在FORM里提交给服务器的参数
		List<BasicNameValuePair> formparams = new ArrayList<BasicNameValuePair>();

		UrlEncodedFormEntity entity = new UrlEncodedFormEntity(formparams,"UTF-8");
		httppost.setEntity(entity);

		// 开始执行，发送请求到服务器
		String response = null;
		ResponseHandler<String> responseHandler = new BasicResponseHandler();
		response = client.execute(httppost, responseHandler);

		Map<String, Object> result = htmlFormParser(response);
		return result;
	}

	public Map<String, Object> htmlFormParser(String content) {
		Map<String, Object> result = new HashMap<String, Object>();

		List<FormInfo> formList = new ArrayList<FormInfo>();

		NodeFilter formFilter = new NodeClassFilter(FormTag.class);
		Node[] nodes = htmlToNode(content, new NodeFilter[] { formFilter });
		for (int i = 0; nodes != null && i < nodes.length; i++) {
			Node formNode = (Node) nodes[i];
			if (formNode instanceof FormTag) {
				FormInfo formInfo = new FormInfo();

				FormTag formTag = (FormTag) formNode;
				formInfo.setFormName(formTag.getFormName());
				formInfo.setMethod(formTag.getFormMethod());
				formInfo.setFormAction(formTag.getFormLocation());

				String childrenContent = formTag.getChildrenHTML();
				NodeFilter inputFilter = new NodeClassFilter(InputTag.class);
				NodeFilter selectFilter = new NodeClassFilter(SelectTag.class);
				Node[] childrenNodes = htmlToNode(childrenContent,
						new NodeFilter[] { inputFilter, selectFilter });

				for (int j = 0; childrenNodes != null
						&& j < childrenNodes.length; j++) {
					Node anode = (Node) childrenNodes[j];
					FormElements fe = new FormElements();
					if (anode instanceof SelectTag) {
						SelectTag selectnode = (SelectTag) anode;
						NodeList nl = selectnode.getChildren();
						if (nl == null
								|| selectnode.getAttribute("name") == null
								|| selectnode.getAttribute("name").isEmpty()) {
							continue;
						}

						Node[] nl_nodes = nl.toNodeArray();
						int optNum = 0;
						String select_value = "";
						for (int k = 0; k < nl_nodes.length; k++) {
							Node optnode = (Node) nl_nodes[k];
							if (optnode instanceof OptionTag) {
								optNum++;
								OptionTag opttag = (OptionTag) optnode;
								Vector vv = opttag.getAttributesEx();
								if (vv.toString().indexOf("selected") != -1)
									select_value = opttag.getOptionText();
							}
						}

						fe.setName(selectnode.getAttribute("name"));
						fe.setValue(select_value);
						fe.setType("select");
						formInfo.addElements(fe);
					} else if (anode instanceof InputTag) {
						InputTag inputnode = (InputTag) anode;
						if (inputnode.getAttribute("name") == null
								|| inputnode.getAttribute("name").isEmpty()) {
							continue;
						}

						Vector v = inputnode.getAttributesEx();
						if ((v.toString().indexOf("type=checkbox") != -1)
								&& (v.toString().indexOf("checked") == -1)) {
							fe.setType("checkbox");
							continue;
						} else if ((v.toString().indexOf("type=radio") != -1)
								&& (v.toString().indexOf("checked") == -1)) {
							fe.setType("radio");
							continue;
						} else {
							fe.setType("input");
						}

						fe.setName(inputnode.getAttribute("name"));
						fe.setValue(inputnode.getAttribute("value"));
						formInfo.addElements(fe);
					}
				}
				formList.add(formInfo);
			}
		}

		result.put("formList", formList);

		return result;
	}

	private Node[] htmlToNode(String content, NodeFilter[] filters) {
		Parser parser = Parser.createParser(content, "GBK");
		NodeList nodeList = null;
		OrFilter orFilter = new OrFilter();
		orFilter.setPredicates(filters);
		try {
			nodeList = parser.parse(orFilter);
		} catch (ParserException e) {
			e.printStackTrace();
		}
		if (nodeList != null) {
			return nodeList.toNodeArray();
		} else {
			return null;
		}
	}

}

class FormElements {
	private String name;
	private String value;
	private String type;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

}

class FormInfo {
	private String formName;
	private String formAction;
	private String method;
	private List<FormElements> inputs = new ArrayList<FormElements>();

	public String getFormName() {
		return formName;
	}

	public void setFormName(String formName) {
		this.formName = formName;
	}

	public String getFormAction() {
		return formAction;
	}

	public void setFormAction(String formAction) {
		this.formAction = formAction;
	}

	public List<FormElements> getInputs() {
		return inputs;
	}

	public void setInputs(List<FormElements> inputs) {
		this.inputs = inputs;
	}

	public String getMethod() {
		return method;
	}

	public void setMethod(String method) {
		this.method = method;
	}

	public void addElements(FormElements formElements) {
		this.inputs.add(formElements);
	}

}
