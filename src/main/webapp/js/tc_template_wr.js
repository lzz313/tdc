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
								'序号: <input id="step_@{id}" value="@{step}" style="width:25px"/> ',
						       	'名称: <input id="name_@{id}" value="@{name}" style="width:432px"/><br> ',
						       	'地址: <input id="action_@{id}" value="@{url}" style="width:500px"/>',
		                   	   	'method:',
		                   		'<select id="method_@{id}" >',
		                   			'<option value="GET">GET</option>',
		                   			'<option value="POST">POST</option>',
		                   		'</select>',
		                   		'<p>接口说明:</p>',
		                   		'<textarea cols="92" rows="3" class="tdc_info_area" id="desc_@{id}">@{desc}</textarea>',
		                   		'<p>返回说明:</p>',
		                   		'<textarea cols="92" rows="3" class="tdc_info_area" id="expect_@{id}">@{expect}</textarea>',
		                   	'</div>',
		                	'<div class="http">',
		                   		'<span name="http_header" style="float:left;display:block;width:220px;text-align:center">Http头</span>',
		                   		'<span name="http_params" class="span_choice" style="float:left;display:block;width:220px;text-align:center;">表单参数</span>',
		                   		'<span name="http_body" style="float:right;width:220px;text-align:center">Http Body</span>',
		                   	'</div>',
		                   	'<div class="tdc_name_value_type_title"><span>字段名</span><span style="margin-right:160px">字段值</span><span>字段类型</span><span>字段描述</span></div>',
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
							'<input type="button" tid="@{id}" title="后台跳转测试" class="tdc_backend_test_bt" value="后台测试"/>',
						'</div>',
					'</div>' 
				   ].join('');

var tdcItemDataTemplate = [
							'<div class="tdc_name_value_type" dtlId="@{j}">',
								'<span>参数</span>',
								'<input id="@{id}_eleName_@{j}" type="text" name="eleName" style="width:100px" value="@{name}"/>',
								'<input id="@{id}_eleValue_@{j}" type="text" name="eleValue" style="width:260px" value="@{value}"/>',
								'<input id="@{id}_eleType_@{j}" type="text" name="eleType" class="type" value="@{type}"/>',
								'<input id="@{id}_eleDesc_@{j}" type="text" name="eleDesc" class="desc" value="@{desc}"/>',
								'<input class="tdc_name_value_delete_bt" type="button" value="删除"/>',
							'</div>'
                           ].join('');

var tdcHeaderDataTemplate = [
							'<div class="tdc_header_name_value_type" dtlId="@{j}">',
								'<span>参数</span>',
								'<input id="@{id}_eleHeaderName_@{j}" type="text" name="eleHeaderName" style="width:100px" value="@{name}"/>',
								'<input id="@{id}_eleHeaderValue_@{j}" type="text" name="eleHeaderValue" style="width:260px" value="@{value}"/>',
								'<input id="@{id}_eleHeaderType_@{j}" type="text" name="eleHeaderType" class="type" value="@{type}"/>',
								'<input id="@{id}_eleHeaderDesc_@{j}" type="text" name="eleHeaderDesc" class="desc" value="@{desc}"/>',
								'<input class="tdc_header_name_value_delete_bt" type="button" value="删除"/>',
							'</div>'
                          ].join('');

var transferForm = [
                    '<div id="transfer_form" >',
	                    '<form>',
	                    	'<input type="hidden" id="transfer_tid" value=""/>',
	                    	'<input type="hidden" id="transfer_old_fid" value=""/>',
	                    	'项目:<select id="transfer_product"></select><br/>',
	                    	'功能:<select id="transfer_function"></select>',
	                    '</form>',
	                 '</div>'
                    ].join('');