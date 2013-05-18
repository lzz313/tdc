tdc
===

test data collection

测试数据收集
1.显示项目列表，修改项目名称(双击修改)，删除项目
2.显示下面模块列表(单击项目显示模块)，修改模块名称(双击修改)
3.测试用例可添加，保存，修改

todo:
添加删除，测试和分析按钮
项目名称后面显示模块数量，模块名称后面显示用例数量

根据值类型自动生成case

页面结构
<div class="page_left">
	<p>项目列表<a class="project_add_link" onclick="showAddProject($(this))">新加项目</a></p>
	<div class="project_list">
		<div class="project_add">
			<input type="text" class="project_name_add" id="newProject"/>
			<input type="button" class="project_add_bt" value="添加"/>
			<input type="button" class="project_cancle_add_bt" value="取消"/>
		<div>
		
		<div class="project_name" pid=@{id}>
			<a class="project_delete_link" pid=@{pid} onclick="deleteProject($(this))">删除</a>
			<a class="project_add_link" onclick="showAddProject($(this))">添加</a>
			<p>@{name}</p>
			<div class="function_add">
				<input type="text" class="function_name_add" id="newFunction"/>
				<input type="button" class="function_add_bt" value="添加"/>
				<input type="button" class="function_cancle_add_bt" value="取消"/>
			<div>
			
			<div class="function_name" fid=@{fid}>
				<a class="function_delete" fid=@{id} onclick="deleteFunc($(this))">删除</a>
				<p>@{fname}</p>
			</div>
			
			<div class="function_edit">
				<input type="text" class="function_name_edit" value="@{value}"/>
				<input type="button" id=@{pid} class="function_update_bt" value="更新"/>
				<input type="button" class="function_cancle_update_bt" value="取消"/>
			<div>
			
		</div>
		
		<div class="project_edit">
			<input type="text" class="project_name_edit" value="@{value}"/>
			<input type="button" class="project_update_bt" value="更新"/>
			<input type="button" class="project_cancle_update_bt" value="取消"/>
		<div>
		
	</div>
</div>


				<div class="tdc_item" tdcId="@{id}">
					<div class="tdc_title">
						<span>@{name}</span>  
		                <span style="float:right;">时间:@{create}</span>     
		                <input type="hidden" id="fid_@{id} value="@{functionId}"/>
		                <input type="hidden" id="id_@{id} value="@{id}"/>
					</div>
					<div class="tdc_data">
						<div class="tdc_info">
						        名称: <input id="name_@{id}" value="@{name}" style="width:200px"/> 
						        地址: <input id="action_@{id}" value="@{url}" style="width:180px"/>
		                   method:
		                   <select id="method_@{id}" >
		                   		<option value="GET">GET</option>
		                   		<option value="POST">POST</option>
		                   </select>
						</div>
						<div class="tdc_name_value_type" dtlId="@{j}">
							<span>参数</span>
							<input id="@{fIdx}_eleName_@{j}" type="text" name="@{fIdx}_eleName_@{j}" value="@{name}"/>
							<input id="@{fIdx}_eleValue_@{j}" type="text" name="@{fIdx}_eleValue_@{j}" value="@{value}"/>
							<input id="@{fIdx}_eleType_@{j}" type="text" name="@{fIdx}_eleType_@{j}" value="@{type}"/>
						</div>
						<div class="tdc_name_value_type" dtlId="@{j}">
							<span>参数</span>
							<input id="@{fIdx}_eleName_@{j}" type="text" name="@{fIdx}_eleName_@{j}" value="@{name}"/>
							<input id="@{fIdx}_eleValue_@{j}" type="text" name="@{fIdx}_eleValue_@{j}" value="@{value}"/>
							<input id="@{fIdx}_eleType_@{j}" type="text" name="@{fIdx}_eleType_@{j}" value="@{type}"/>
						</div>
						
					</div>
					<div class="tdc_action">
						<input type="button" value="保存"/>
						<input type="button" value="测试"/>
					</div>
				</div>

{"elem": [{"k": "1","v":"2","t":"text"},{"k": "21","v":"22","t":"text"}]}


下个版本功能

<input type="checkbox"/>1.输入测试页面地址自动获取页面form表单action，input值。
2.每个功能的测试用例能够回归测试，并保存测试结果
