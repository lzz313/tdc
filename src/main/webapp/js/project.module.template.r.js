var projectTemplate = [
						'<div class="project_name" pid=@{id} >',
							//'<a class="project_delete_link" pid=@{id} onclick="deleteProject($(this))">删除</a>',
							//'<a class="add function_add_link" onclick="showAddFunction($(this),@{id})">添加</a>',
							'<p>@{name}</p>',
						'</div>' 
					   ].join('');
var editProjectTemplate = [
                           '<div class="project_edit">',
								'<input type="text" class="project_name_edit" value="@{value}"/>',
								//'<input type="button" pid=@{pid} class="project_update_bt" value="更新"/>',
								//'<input type="button" class="project_cancle_update_bt" value="取消"/>',
							'</div>'
                           ].join('');
var addProjectTemplate = [
							'<div class="project_add">',
								'<input type="text" class="project_name_add" id="newProject"/>',
								//'<input type="button" class="project_add_bt" onclick="addProject()" value="添加"/>',
								//'<input type="button" class="project_cancle_add_bt" onclick="cancelAddProj()" value="取消"/>',
							'</div>'
                          ].join('');

var funcTemplate = [
                    '<div class="function_name" fid="@{fid}">',
                    	//'<a class="function_delete" fid="@{fid}" onclick="deleteFunc($(this))">删除</a>',
                    	'<p>@{fname}</p>',
                    '</div>'
                    ].join('');
var editFuncTemplate = ['<div class="function_edit">',
							'<input type="text" class="function_name_edit" value="@{value}"/>',
							//'<input type="button" fid=@{fid} class="function_update_bt" value="更新"/>',
							'<input type="button" class="function_cancle_update_bt" value="取消"/>',
						'</div>'
                           ].join('');
var addFuncTemplate = [
						'<div class="function_add">',
							'<input type="text" class="function_name_add" id="newFunction"/>',
							//'<input type="button" class="function_add_bt" onclick="addFunction($(this))" value="添加"/>',
							'<input type="button" class="function_cancle_add_bt" value="取消"/>',
						'</div>'
                       ].join('');
