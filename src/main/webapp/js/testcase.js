var addNewTdcBtTemplate = [
							'<input type="button" fid="@{functionId}" class="tdc_title_anly_bt" value="分析"/>',
							'<input type="button" fid="@{functionId}" class="tdc_title_add_bt" value="添加"/>'
                           ].join('');
var tdcListTemplate = [
					'<div class="tdc_item" id="tdc_@{id}">',
						'<div class="tdc_title">',
							'<p>@{step} @{name}</p>',
							'<span style="float:right;">@{create}</span>',
							'<input type="hidden" id="fid_@{id}" value="@{functionId}"/>',
							'<input type="hidden" id="status_@{id}" value="@{status}"/>',
						'</div>',
						'<div class="tdc_data" tid="@{id}">',
							'<div class="tdc_info">',
								'步骤: <input id="step_@{id}" value="@{step}" style="width:25px"/> ',
						       	'名称: <input id="name_@{id}" value="@{name}" style="width:432px"/><br> ',
						       	'地址: <input id="action_@{id}" value="@{url}" style="width:500px"/>',
		                   	   	'method:',
		                   		'<select id="method_@{id}" >',
		                   			'<option value="GET">GET</option>',
		                   			'<option value="POST">POST</option>',
		                   		'</select>',
		                   		'<p>测试说明:</p>',
		                   		'<textarea cols="92" rows="3" class="tdc_info_area" id="desc_@{id}">@{desc}</textarea>',
		                   		'<p>期望:</p>',
		                   		'<textarea cols="92" rows="3" class="tdc_info_area" id="expect_@{id}">@{expect}</textarea>',
		                   	'</div>',
		                   	'<div class="tdc_name_value_type_title"><span>字段名</span><span>字段值</span><span>字段类型</span></div>',
						'</div>',
						'<div class="tdc_action">',
							'<input type="button" tid="@{id}" title="生成加密串" class="tdc_sign_bt" value="sign"/>',
							'<input type="button" tid="@{id}" title="保存当前数据" class="tdc_save_bt" value="保存"/>',
							'<input type="button" tid="@{id}" title="js直接提交form测试" class="tdc_test_bt" value="测试"/>',
							'|',
							'<input type="button" tid="@{id}" title="复制当前用例" class="tdc_copy_bt" value="复制"/>',
							'<input type="button" tid="@{id}" title="移动当前用例到其他模块" class="tdc_move_bt" value="移动"/>',
							'<input type="button" tid="@{id}" title="删除当前用例" class="tdc_delete_bt" value="删除"/>',
							//'<input type="button" tid="@{id}" title="登录后保存cookie信息" class="tdc_login_bt" value="登录"/>',
							//'<input type="button" tid="@{id}" title="后台跳转测试" class="tdc_backend_test_bt" value="后台测试"/>',
						'</div>',
					'</div>' 
				   ].join('');

var tdcItemDataTemplate = [
							'<div class="tdc_name_value_type" dtlId="@{j}">',
								'<span>参数</span>',
								'<input id="@{id}_eleName_@{j}" type="text" name="eleName" value="@{name}"/>',
								'<input id="@{id}_eleValue_@{j}" type="text" name="eleValue" value="@{value}"/>',
								'<input id="@{id}_eleType_@{j}" type="text" name="eleType" class="type" value="@{type}"/>',
								'<input class="tdc_name_value_delete_bt" type="button" value="删除"/>',
							'</div>'
                           ].join('');

var transferForm = [
                    '<div id="transfer_form" >',
	                    '<form>',
	                    	'<input type="hidden" id="transfer_tid" value=""/>',
	                    	'<input type="hidden" id="transfer_old_fid" value=""/>',
	                    	'项目:<select class id="transfer_product"></select><br/>',
	                    	'功能:<select id="transfer_function"></select>',
	                    '</form>',
	                 '</div>'
                    ].join('');

/**
 * 显示测试数据
 * @param o  'div.function_name >p'
 */
function displayTestData(o){
	var fid = o.parent().attr("fid");
	var url = "/testcase/query/all/"+fid;
	var fNm = o.html();
	var pNm = o.parent().parent().children("p").html();
	
	$(".tdc_add >p").html(pNm+' > '+fNm+' > 测试步骤');
	$(".tdc_add input[type=button]").remove();
	$(".tdc_add").append(addNewTdcBtTemplate.format({
		functionId:fid
	}));
	
	$("#parseUrl").attr("fid",fid);
	
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
				if(JSON.parse(testCase.data).elem.length == 0){
					$("#tdc_"+testCase.id+" .tdc_data").append(tdcItemDataTemplate.format({
						id:testCase.id,
						j:0,
						name:'',
						value:'',
						type:''
					}));
				}
			});
			
			
			$(".tdc_title_add_bt").click(function(){
				var fId = $(this).attr("fid");
				var testCase={id:-(new Date().getTime()),functionId:fId,name:'创建测试用例',url:'',type:'',step:'',data:'{"elem":[{"k":"","v":"","t":""}]}',create:'',status:''};
				addTdc(testCase);
				$("#tdc_"+testCase.id+" .tdc_data").show();
				$("#tdc_"+testCase.id+" .tdc_action").show();
			});
			
			$(".tdc_title_anly_bt").die().live("click",function(){
				$("#tdc_anlysis").toggle();
			});
			addTdcEvent();
		}
	});
	
	
}

/**
 * 添加测试数据
 * @param testCase
 */
function addTdc(testCase){
	$(".tdc_list").append(tdcListTemplate.format({
		id:testCase.id,
		name:testCase.name,
		step:testCase.step,
		functionId:testCase.functionId,
		url:testCase.url,
		desc:testCase.desc,
		expect:testCase.expect,
		create:testCase.create,
		status:testCase.status
	}));
	
	var method_type = testCase.type;
	$("#method_"+testCase.id).val(method_type.toUpperCase());
	
	try{
		var elems = JSON.parse(testCase.data).elem,
		    tdcItemList = [];
		$.each(elems,function(j){
			tdcItemList.push(tdcItemDataTemplate.format({
								id:testCase.id,
								j:j,
								name:elems[j]?elems[j].k:'',
								value:elems[j]?elems[j].v:'',
								type:elems[j]?elems[j].t:''
							}));
			/**
			$("#tdc_"+testCase.id+" .tdc_data").append(tdcItemDataTemplate.format({
				id:testCase.id,
				j:j,
				name:elems[j]?elems[j].k:'',
				value:elems[j]?elems[j].v:'',
				type:elems[j]?elems[j].t:''
			}));
			*/
		});
		$("#tdc_"+testCase.id+" .tdc_data").append(tdcItemList.join(''));
	} catch (e){console.log(e.message);}
	addTdcEvent();
}

/**
 * 添加TestData的事件
 */
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
	
	
	$(".tdc_name_value_type:last-of-type input[type=text]").die().live("focus",function(){
		var obj = $(this).parent();
		var inputs = obj.children("input[type=text]");
		var needAppend = true;
		if( !$(inputs[0]).val() || !$(inputs[1]).val() ){
			needAppend = false;
		}
				
		var j = obj.parent().children(".tdc_name_value_type").length;
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
	
	$(".tdc_save_bt").die().live("click",function(){
		var btObj = $(this);
		var tid = btObj.attr("tid");
		saveTdcData(tid);
	});
	
	$(".tdc_copy_bt").die().live("click",function(){
		var btObj = $(this);
		var tid = btObj.attr("tid");
		copyTdcData(tid);
	});
	
	$(".tdc_delete_bt").die().live("click",function(){
		var btObj = $(this);
		var tid = btObj.attr("tid");
		deleteTdc(btObj,tid);
	});
	
	$(".tdc_test_bt").die().live("click",function(){
		var btObj = $(this);
		var tid = btObj.attr("tid");
		testByForm(tid);
	});
	
	$(".tdc_sign_bt").die().live("click",function(){
		var btObj = $(this);
		var tid = btObj.attr("tid");
		genSign(tid);
	});
	
	/**
	$(".tdc_login_bt").die().live("click",function(){
		var btObj = $(this);
		var tid = btObj.attr("tid");
		test_login(tid);
	});
	*/
	
	$(".tdc_move_bt").die().live("click",function(){
		$("#transfer_tid").val($(this).attr("tid"));
		$("#transfer_old_fid").val($("#fid_"+$(this).attr("tid")).val());
		$("#transfer_form").dialog("open");
	});
	
	/**
	$(".tdc_backend_test_bt").die().live("click",function(){
		var btObj = $(this);
		var tid = btObj.attr("tid");
		test(tid);
	});
	*/
	
	$(".tdc_info_area").die().live("focus",function(){
		var o = $(this);
		calMinAreaRows(o,3);
	});
	
	$(".tdc_info_area").die().live("blur",function(){
		var o = $(this);
		calMinAreaRows(o,3);
	});
	
	$(".tdc_info_area").each(function(){
		var o = $(this);
		calMinAreaRows(o,3);
	});
	
	$(".tdc_data select").die().live("change",function(){
		var val = $(this).val();
		if(val.toUpperCase() == 'POST'){
			var obj = $(this).parent().parent();
			if(isNeedAddNew(obj)){
				var tid = obj.attr("tid");
				var j = obj.children(".tdc_name_value_type").length;
				obj.append(tdcItemDataTemplate.format({
					id:tid,
					j:j,
					name:'',
					value:'',
					type:''
				}));
			}
		}
	});

	addTdcDelEvent();
}

/**
 * TDC移动时加载项目列表
 */
(function loadProjectSelect(){
	var pId = "transfer_product";
	var url = "/project/query";
	var projects = $.ajax({
		url : url,
		type : "get",
		async:false,
		dataType : "json"
	});
	
	projects.done(function(data){
		if(data.code == 1){
			var projects = data.data.projects;
			addOpt(pId, '请选项目', '');
			$.each(projects,function(i){
				addOpt(pId, projects[i].name, projects[i].id);
			});
		}
	});
})();

/**
 * TDC移动时加载模块列表
 */
function loadFunctionSelect(pid){
	var fId = "transfer_function";
	$("#"+fId).html('');
	if(!pid){
		return;
	}
	var url = "/func/query/"+pid;
	var func = $.ajax({
		url : url,
		type : "get",
		async:false,
		dataType : "json"
	});
	
	func.done(function(data){
		if(data.code == 1){
			var funcs = data.data.functions;
			$.each(funcs,function(i){
				addOpt(fId, funcs[i].name, funcs[i].id);
			});
		}
	});
}

/**
 * 判断是否需要添加新的输入字段框
 * @param o
 * @returns {Boolean}
 */
function isNeedAddNew(o){
	var inputs = o.children(".tdc_data .tdc_name_value_type:last").children("input[type=text]");
	var needAppend = true;
	$.each(inputs,function(i){
		if(!$(inputs[i]).val()){
			needAppend = false;
			return;
		}
	});
	
	return needAppend;
}

function cbSaveTdcDisp(testCase){
	$("#tdc_"+testCase.tid+" .tdc_title span:first").html(testCase.name);
	alert("保存成功");
}

function cbCopyTdcDisp(testCase){
	$("#tdc_"+testCase.tid+" .tdc_title span:first").html(testCase.name);
	addTdc(testCase);
	alert("复制成功");
}

function saveTdcData(tid){
	var url =(!tid||parseInt(tid)<=0)?"/testcase/add":"/testcase/update";
	saveTdc(tid,url);
}

/**
 * 复制TDC数据
 * @param tid
 */
function copyTdcData(tid){
	var fId = $("#fid_"+tid).val();
	var name = $("#name_"+tid).val();
	var step = $("#step_"+tid).val();
	var action = $("#action_"+tid).val();
	var desc = $("#desc_"+tid).val();
	var expect = $("#expect_"+tid).val();
	var type = $("#method_"+tid).val();
	var status = $("#status_"+tid).val();
	var data = encapElemData(tid);
	var testCase = {'id':-(new Date().getTime()),'name':name,'step':step,'functionId':fId,'url':action,'type':type,'desc':desc,'expect':expect,'data':data,'create':'-','status':status};
	
	addTdc(testCase);
	addTdcEvent();
	alert("复制成功");
}

/**
 * 保存TDC数据
 * @param tid
 * @param url
 */
function saveTdc(tid,url){
	var fId = $("#fid_"+tid).val();
	var name = $("#name_"+tid).val();
	var step = $("#step_"+tid).val();
	var action = $("#action_"+tid).val();
	var desc = $("#desc_"+tid).val();
	var expect = $("#expect_"+tid).val();
	var type = $("#method_"+tid).val();
	var status = $("#status_"+tid).val();
	var e_data = encapElemData(tid);
	
	var savetdc = $.ajax({
		url : url,
		data :{id:tid,functionId:fId,name:name,step:step,url:action,desc:desc,type:type,expect:expect,data:e_data,status:status},
		type : "get",
		async:false,
		dataType : "json"
	});
	
	savetdc.done(function(s_data){
		if(s_data.code == 1){
			//console.log(s_data);
			//s_data.data.testCase.tid
			$("#tdc_"+tid+" .tdc_title p:first").html(s_data.data.testCase.step + " " +s_data.data.testCase.name);
			$("#tdc_"+tid+" .tdc_title span:first").html(s_data.data.testCase.create);
			
			var newId = s_data.data.testCase.id;
			$("#tdc_"+tid).attr("id","tdc_"+newId);
			$("#fid_"+tid).attr("id","fid_"+newId);
			$("#name_"+tid).attr("id","name_"+newId);
			$("#step_"+tid).attr("id","step_"+newId);
			$("#action_"+tid).attr("id","action_"+newId);
			$("#desc_"+tid).attr("id","desc_"+newId);
			$("#expect_"+tid).attr("id","expect_"+newId);
			$("#method_"+tid).attr("id","method_"+newId);
			$("#status_"+tid).attr("id","status_"+newId);
			$("#tdc_"+newId+" .tdc_data").attr("tid",newId);
			var bts = $("#tdc_"+newId+" .tdc_action").children("input[type=button]");
			
			$.each(bts,function(i){
				$(bts[i]).attr("tid",newId);
			});
			
			var iptVals = $("#tdc_"+newId+" .tdc_data input[type=text]");
			$.each(iptVals,function(i){
				var oId = $(iptVals[i]).attr("id");
				var regTid = new RegExp(tid);
				//console.log("oId:"+oId+",nId:"+oId.replace(regTid,newId));
				$(iptVals[i]).attr("id",oId.replace(regTid,newId));
			});
			
			alert("保存成功");
		}
	});
}

/**
 * 添加TDC删除按钮事件
 */
function addTdcDelEvent(){
	$(".tdc_name_value_delete_bt").die().live("click",(function(){
		if(!confirm("确定删除!")){
			return;
		}
		$(this).parent().remove();
	}));
}

/**
 * 封装字段为json格式
 * @param tid
 * @returns
 */
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

//删除TDC
function deleteTdc(obj,tid){
	if(confirm("确定删除?")){
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
}

//前台组装form提交测试
function testByForm(tid){
	var domain = $(".select span:first").attr("value");
	var action = $("#action_"+tid).val();
	var method = $("#method_"+tid).val();
	
	if(action.indexOf("http://") == -1 && action.indexOf("https://") == -1){
		if(domain == ''||domain == undefined){
			alert('请选择测试环境');
			return;
		}
		action = domain + action;
	} else {
		domain = getActionWithHost("",action);
	}
	
    form = $("<form></form>");
    form.attr('target',"_blank");
    form.attr('method',method);
    
    if("POST" == method){
    	form.attr('action',action);
    	form = postInput(form,tid);
    } else if("GET" == method){
    	form = getInput(form,action);
    }
    
    form.appendTo("body");
    form.css('display','none');
    form.submit();
}

function postInput(form,fIdx){
	var eleNm = fIdx+"_eleName_";
	var eleVal = fIdx+"_eleValue_";
	var eleType = fIdx+"_eleType_";
	
	var args = new Object(),
		formElements = [];
	$('input[id^='+eleNm+']').each(function(){
		idx = $(this).attr("id").split('_')[2];
		var key = $("#"+eleNm+idx).val();
		var value = $("#"+eleVal+idx).val();
		var type = $("#"+eleType+idx).val();
		
		if(equalsIgnoreCase("key",type)){
			return true;
		}
		
		formElements.push("<input type='hidden' name='"+key+"' value='"+value+"'/>");
		//form.append($("<input type='hidden' name='"+key+"' value='"+value+"'/>"));
		
	});
	form.append(formElements.join(''));
	return form;
}

function getInput(form,url){
	var params = '';
	if(url.indexOf("?") != -1){
		params = url.substr(url.indexOf("?")+1);
	} 
	
	var data = params.split("&");
	var end = url.indexOf("?") > -1 ? url.indexOf("?") : url.length;
	form.attr('action',url.substr(0,end));
	var formElements = [];
	for(var i=0; i<data.length && !!data[0]; i++) {
		var item = data[i].split("=");
		formElements.push("<input type='hidden' name='"+item[0]+"' value='"+item[1]+"'/>");
		//form.append($("<input type='hidden' name='"+item[0]+"' value='"+item[1]+"'/>"));
	}
	form.append(formElements.join(''));
	return form;
}

//生成加密串
function genSign(tid){
	var eleNm = tid+"_eleName_";
	var eleVal = tid+"_eleValue_";
	var eleType = tid+"_eleType_";
	
	var keyVal,singId;
	var arrElems = [];
	$('input[id^='+eleNm+']').each(function(){
		idx = $(this).attr("id").split('_')[2];
		var key = $("#"+eleNm+idx).val();
		var value = $("#"+eleVal+idx).val();
		var type = $("#"+eleType+idx).val();
		
		if(equalsIgnoreCase("sign",type)){
			singId = eleVal+idx;
			return true;
		}
		
		if(equalsIgnoreCase("key",type)){
			keyVal = value;
			return true;
		}
		
		if(equalsIgnoreCase("ns", type)){
			return true;
		}
		
		arrElems.push(key+''+value);
		
	});
	
	arrElems.sort(function(a,b){
		if (a.toString() > b.toString()) {
            return 1;
        }
        return -1;
	});
	console.log(arrElems.join('')+keyVal);
	var hash = faultylabs.MD5(arrElems.join('')+keyVal);
	$("#"+singId).val(hash);
	console.log(hash);
}
//判断字符是否相等
function equalsIgnoreCase(str1, str2){   
    if(str1.toUpperCase() == str2.toUpperCase()){   
        return true;   
    }   
    return false;   
}

function test(tid){
	var domain = $(".select span:first").attr("value");
	var action = $("#action_"+tid).val();
	
	if(action.indexOf("http://") == -1 && action.indexOf("https://") == -1){
		if(domain == ''||domain == undefined){
			alert('请选择测试环境');
			return;
		}
		action = domain + action;
	} else {
		domain = getActionWithHost("",action);
	}
	
	var testAction = $.ajax({
		url : "/parse/test",
		type : "post",
		async : false,
		data : {
			formData:formData(tid),
			domain:domain,
			url:action,
			method:$("#method_"+tid).val()
		},
		dataType : "json"
	});
	testAction.done(function(data) {
		newWin = window.open("","_blank");
		newWin.document.write(data.data.content);
		newWin.document.close();
	});
}

function test_login(tid){
	var domain = $(".select span:first").attr("value");
	var action = $("#action_"+tid).val();
	
	if(action.indexOf("http://") == -1 && action.indexOf("https://") == -1){
		if(domain == ''||domain == undefined){
			alert('请选择测试环境');
			return;
		}
		action = domain + action;
	} else {
		domain = getActionWithHost("",action);
	}
	
	var testAction = $.ajax({
		url : "/parse/login",
		type : "post",
		async : false,
		data : {
			formData:formData(tid),
			domain:domain,
			url:action,
			method:$("#method_"+tid).val()
		},
		dataType : "json"
	});
	testAction.done(function(data) {
		newWin = window.open("","_blank");
		newWin.document.write(data.data.content);
		newWin.document.close();
	});
}
//提取url页面中的form表单信息
function anlysis(fid){
	var url = "/parse/form?url="+$("#url").val();
	$.getJSON(url,function(data){
		$("#parseForm").html('');
		if(data.code == 1){
			var forms = data.data.parse.formList;
			if(forms.length == 0){
				$("#parseForm").append("页面没有找到表单");
			} else {
				pushForm(fid,forms);
			}
		} else {
			$("#parseForm").append(data.msg);
		}
	});	
}
//为form 相对url的加上域名变为绝对地址
function getActionWithHost(action,url){
	var actionUrl = action;
	if(action.toLowerCase().indexOf('http') !=0){
		host = url.split('/')[2];
		actionUrl = url.split('/')[0]+'//'+host+action;
	}
	
	return actionUrl;
}

function pushForm(fId,forms){
	var tid;
	$.each(forms,function(i){
		tid = -(new Date().getTime());
		$(".tdc_list").append(tdcListTemplate.format({
										id:tid,
										name:!!forms[i].formName?forms[i].formName:('表单'+i),
										step:'',
										status:'',
										create:'',
										functionId:fId,
										url:getActionWithHost(forms[i].formAction,$("#url").val())})
							   );
		
		$("#method_"+tid).val(forms[i].method.toUpperCase());
		
		var inputs = forms[i].inputs;
		var tdcList = [];
		$.each(inputs,function(j){
			tdcList.push(tdcItemDataTemplate.format({
							id:i,
							j:j,
							name:inputs[j].name,
							value:inputs[j].value,
							type:inputs[j].type
						}));
			/**
			$("#tdc_"+tid+" .tdc_data").append(tdcItemDataTemplate.format({
				id:i,
				j:j,
				name:inputs[j].name,
				value:inputs[j].value,
				type:inputs[j].type
			}));
			*/
		});
		$("#tdc_"+tid+" .tdc_data").append(tdcList.join(''));
						
	});
	addTdcEvent();
}

function formMapData(fIdx){
	var eleNm = fIdx+"_eleName_";
	var eleVal = fIdx+"_eleValue_";
	
	var args = new Object();
	$('input[id^='+eleNm+']').each(function(){
		idx = $(this).attr("id").split('_')[2];
		var key = $("#"+eleNm+idx).val();
		var value = $("#"+eleVal+idx).val();
		
		args[key]=value;
	});
	
	return args;
}

function formData(fIdx){
	return JSON.stringify(formMapData(fIdx));
}
//按字段名排序key1=value1,key2=value2 
function sortArrData(fIdx){
	var eleNm = fIdx+"_eleName_";
	var eleVal = fIdx+"_eleValue_";
	
	var args = [];
	$('input[id^='+eleNm+']').each(function(){
		idx = $(this).attr("id").split('_')[2];
		var key = $("#"+eleNm+idx).val();
		var value = $("#"+eleVal+idx).val();
		
		args.push(key+"="+value);
	});
	args.sort(function(a,b){
		if (a.toString() > b.toString()) {
		    return 1;
		}
		return -1;
	});
	return arrData;
}
//删除=和&
function genSortDataSignStr(fIdx){
	$("#signStr").val(sortArrData(fIdx).join('').replace(/=/g,'').replace(/&/g,''));
}

