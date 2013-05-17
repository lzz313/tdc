var addNewTdcBtTemplate = [
							'<input type="button" fid="@{functionId}" class="tdc_title_anly_bt" value="分析"/>',
							'<input type="button" fid="@{functionId}" class="tdc_title_add_bt" value="添加"/>'
                           ].join('');
var tdcListTemplate = [
					'<div class="tdc_item" id="tdc_@{id}">',
						'<div class="tdc_title">',
							'<p>@{name}</p>',
							'<span style="float:right;">时间:@{create}</span>',
							'<input type="hidden" id="fid_@{id}" value="@{functionId}"/>',
							'<input type="hidden" id="status_@{id}" value="@{status}"/>',
						'</div>',
						'<div class="tdc_data" tid="@{id}">',
							'<div class="tdc_info">',
								'步骤: <input id="step_@{id}" value="@{step}" style="width:50px"/> ',
						       	'名称: <input id="name_@{id}" value="@{name}" style="width:200px"/> ',
						       	'地址: <input id="action_@{id}" value="@{url}" style="width:180px"/>',
		                   	   	'method:',
		                   		'<select id="method_@{id}" >',
		                   			'<option value="GET">GET</option>',
		                   			'<option value="POST">POST</option>',
		                   		'</select>',
		                   		'<p>测试说明:</p>',
		                   		'<textarea cols="92" rows="5" id="desc_@{id}">@{desc}</textarea>',
		                   	'</div>',
		                   	'<div class="tdc_name_value_type_title"><span>字段名</span><span>字段值</span><span>字段类型</span></div>',
						'</div>',
						'<div class="tdc_action">',
							'<input type="button" tid="@{id}" class="tdc_save_bt" value="保存"/>',
							'<input type="button" tid="@{id}" class="tdc_delete_bt" value="删除"/>',
							'<input type="button" tid="@{id}" class="tdc_test_bt" value="测试"/>',
						'</div>',
					'</div>' 
				   ].join('');

var tdcItemDataTemplate = [
							'<div class="tdc_name_value_type" dtlId="@{j}">',
								'<span>参数</span>',
								'<input id="@{id}_eleName_@{j}" type="text" name="eleName" value="@{name}"/>',
								'<input id="@{id}_eleValue_@{j}" type="text" name="eleValue" value="@{value}"/>',
								'<input id="@{id}_eleType_@{j}" type="text" name="eleType" value="@{type}"/>',
								'<input class="tdc_name_value_delete_bt" type="button" value="删除"/>',
							'</div>'
                           ].join('');

/**
 * @param o  'div.function_name >p'
 */
function displayTestData(o){
	var fid = o.parent().attr("fid");
	var url = "/testcase/query/all/"+fid;
	var fNm = o.html();
	var pNm = o.parent().parent().children("p").html();
	
	$(".tdc_add >p").html(pNm+'->'+fNm+'->测试步骤');
	$(".tdc_add input[type=button]").remove();
	$(".tdc_add").append(addNewTdcBtTemplate.format({
		functionId:fid
	}));
	
	var testcases = $.ajax({
		url : url,
		type : "get",
		async:false,
		dataType : "json"
	});
	
	testcases.done(function(data){
		if(data.code == 1){
			var testCases = data.data.testCases;
			$(".tdc_list").html('');
			$.each(testCases,function(i){
				var testCase = testCases[i];
				addTdc(testCase);
			});
			
			addTdcEvent();
		}
	});
}

function addTdc(testCase){
	$(".tdc_list").append(tdcListTemplate.format({
		id:testCase.id,
		name:testCase.name,
		step:testCase.step,
		functionId:testCase.functionId,
		url:testCase.url,
		desc:testCase.desc,
		create:testCase.create,
		status:testCase.status
	}));
	
	var elems = JSON.parse(testCase.data).elem;
	$.each(elems,function(j){
		$("#tdc_"+testCase.id+" .tdc_data").append(tdcItemDataTemplate.format({
			id:testCase.id,
			j:j,
			name:elems[j]?elems[j].k:'',
			value:elems[j]?elems[j].v:'',
			type:elems[j]?elems[j].t:''
		}));
	});
}

function addTdcEvent(){
	$(".tdc_title").die().live("click",function(){
		var o = $(this).next();
		if(o.is(":hidden")){
			o.show();
			o.next().show();
		} else {
			o.hide();
			o.next().hide();
		}
	});
	
	var j = $(".tdc_name_value_type").length;
	$(".tdc_name_value_type:last input[type=text]").die().live("blur",function(){
		var obj = $(this).parent();
		var inputs = obj.children("input[type=text]");
		var needAppend = true;
		$.each(inputs,function(i){
			if(!$(inputs[i]).val()){
				needAppend = false;
			}
		});
		
		var tid = obj.parent().attr("tid");
		if(needAppend) {
			obj.parent().append(tdcItemDataTemplate.format({
				id:tid,
				j:j,
				name:'',
				value:'',
				type:''
			}));
			addTdcDelEvent();
		}
	});
	
	$(".tdc_save_bt").click(function(){
		var btObj = $(this);
		var tid = btObj.attr("tid");
		saveTdcData(tid);
	});
	
	$(".tdc_delete_bt").click(function(){
		var btObj = $(this);
		var tid = btObj.attr("tid");
		deleteTdc(btObj,tid);
	});
	
	$(".tdc_title_add_bt").click(function(){
		var fId = $(this).attr("fid");
		var testCase={id:'',functionId:fId,name:'创建测试用例',url:'',type:'',step:'',data:'{"elem":[{"k":"","v":"","t":""}]}',create:'',status:''};
		addTdc(testCase);
		$("#tdc_"+testCase.id+" .tdc_data").show();
		$("#tdc_"+testCase.id+" .tdc_action").show();
		addTdcEvent();
	});
	
	$(".tdc_test_bt").click(function(){
		var btObj = $(this);
		var tid = btObj.attr("tid");
		test(tid);
	});
	
	$(".tdc_title_anly_bt").click(function(){
		$("#tdc_anlysis").show();
	});
	
	addTdcDelEvent();
}

function saveTdcData(tid){
	var fId = $("#fid_"+tid).val();
	var name = $("#name_"+tid).val();
	var step = $("#step_"+tid).val();
	var action = $("#action_"+tid).val();
	var desc = $("#desc_"+tid).val();
	var type = $("#method_"+tid).val();
	var status = $("#status_"+tid).val();
	var data = encapElemData(tid);
	
	var url =(!tid||parseInt(tid)<=0)?"/testcase/add":"/testcase/update";
	
	var testcases = $.ajax({
		url : url,
		data :{id:tid,functionId:fId,name:name,step:step,url:action,desc:desc,type:type,data:data,status:status},
		type : "post",
		async:false,
		dataType : "json"
	});
	
	testcases.done(function(data){
		if(data.code == 1){
			$("#tdc_"+tid+" .tdc_title span:first").html(name);
			alert("保存成功");
		}
	});
}

function addTdcDelEvent(){
	$(".tdc_name_value_delete_bt").die().live("click",(function(){
		if(!confirm("确定删除!")){
			return;
		}
		$(this).parent().remove();
	}));
}

function encapElemData(tid){
	var elemObjs = $("#tdc_"+tid+" .tdc_data .tdc_name_value_type");
	var data ={elem:''};
	var elem = [];
	var ElemObj = {'k':'','v':'','t':''};
	
	$.each(elemObjs,function(i){
		var elemObj = $(elemObjs[i]);
		var name = elemObj.children("input[name='eleName']");
		var value = elemObj.children("input[name='eleValue']");
		var type = elemObj.children("input[name='eleType']");
		if(name.val()){//&&!!value.val()&&!!type.val()
			var elemObj = {};
			elemObj.k = name.val();
			elemObj.v = value.val();
			elemObj.t = type.val();
			elem[i] = elemObj;
		}
	});
	
	data.elem = elem;
	
	return JSON.stringify(data);
}

function deleteTdc(obj,tid){
	var url ="/testcase/delete/"+tid;
	
	var testcases = $.ajax({
		url : url,
		type : "get",
		async:false,
		dataType : "json"
	});
	
	testcases.done(function(data){
		if(data.code == 1){
			obj.parent().parent().remove();
			alert("删除成功");
		}
	});
}

function test(tid){
	var domain = $(".select span:first").attr("value");
	var action = $("#action_"+tid).val();
	
	if(action.indexOf("http://") == -1){
		if(domain == ''||domain == undefined){
			alert('请选择测试环境');
			return;
		}
		action = domain + action;
	}
	
	var testAction = $.ajax({
		url : "/parse/test",
		type : "post",
		async : false,
		data : {
			formData:formData(tid),
			url:action,
			method:$("#method_"+tid).val()
		},
		dataType : "json"
	});
	testAction.done(function(data) {
		NewWindow = window.open("","_blank");
		NewWindow.document.write(data.data.content);
	});
}

function anlysis(){
	var url = "/parse/form?url="+$("#url").val();
	$.getJSON(url,function(data){
		$("#parseForm").html('');
		if(data.code == 1){
			var forms = data.data.parse.formList;
			if(forms.length == 0){
				$("#parseForm").append("页面没有找到表单");
			} else {
				pushForm(forms);
			}
		} else {
			$("#parseForm").append(data.msg);
		}
	});	
}

function getActionWithHost(action,url){
	var actionUrl = action;
	if(action.toLowerCase().indexOf('http') !=0){
		host = url.split('/')[2];
		actionUrl = 'http://'+host+action;
	}
	
	return actionUrl;
}

function pushForm(forms){
	var fId = 1;
	var tid;
	$.each(forms,function(i){
		tid = -i;
		$(".tdc_list").append(tdcListTemplate.format({
										id:tid,
										name:!!forms[i].formName?forms[i].formName:('表单'+i),
										step:'',
										status:'',
										create:'',
										functionId:fId,
										url:getActionWithHost(forms[i].formAction,$("#url").val()),
										method:forms[i].method})
							   );
		
		var inputs = forms[i].inputs;
		$.each(inputs,function(j){
			$("#tdc_"+tid+" .tdc_data").append(tdcItemDataTemplate.format({
				id:i,
				j:j,
				name:inputs[j].name,
				value:inputs[j].value,
				type:inputs[j].type
			}));
		});
						
	});
	addTdcEvent();
}

function formData(fIdx){
	var eleNm = fIdx+"_eleName_";
	var eleVal = fIdx+"_eleName_";
	
	var args = new Object();
	$('input[id^='+eleNm+']').each(function(){
		idx = $(this).attr("id").split('_')[2];
		var key = $("#"+eleNm+idx).val();
		var value = $("#"+eleVal+idx).val();
		
		args[key]=value;
	});
	
	return JSON.stringify(args);
}