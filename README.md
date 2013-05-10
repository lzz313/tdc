tdc
===

test data collection

测试数据收集
1.显示项目列表，修改项目名称(双击修改)，删除项目
2.显示下面模块列表(单击项目显示模块)，修改模块名称(双击修改)


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

下个版本功能

1.输入测试页面地址自动获取页面form表单action，input值。
2.每个功能的测试用例能够回归测试，并保存测试结果
