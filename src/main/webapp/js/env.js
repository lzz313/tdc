var editabelOptionTemplate = [
								'<div class="option" id="@{id}" value="@{value}">@{name}</div>',
								'<div class="option_edit">',
									'<input type="hidden" class="envi_ipt_id" value="@{id}"/>',
									'<input type="hidden" class="envi_ipt_pid" value="@{pid}"/>',
									'<label>地址:</label><input type="text" class="envi_ipt_val" init="输入地址..." value="@{value}"/>',
									'<label>名称:</label><input type="text" class="envi_ipt_name" init="输入名称..." value="@{name}"/>',
								'</div>'
                              ].join('');
function loadEnvi(pid){
	$(".select").attr("pid",pid);
	var url ="/domain/query/"+pid;
	
	var envi = $.ajax({
		url : url,
		type : "get",
		async:false,
		dataType : "json"
	});
	
	envi.done(function(data){
		if(data.code == 1){
			var domains = data.data.queryDomain;
			$(".select").html('<span class="select_choice">请选择...</span><span class="select_edit" style="float: right;">＋</span>');
			$.each(domains,function(i){
				$(".select").append(editabelOptionTemplate.format({
					id:domains[i].id,
					pid:domains[i].projectId,
					value:domains[i].domain,
					name:domains[i].name
				}));
			});
			if(domains.length == 0){
				$(".select").append(editabelOptionTemplate.format({
					id:'',
					pid:pid,
					value:'输入地址...',
					name:'输入名称...'
				}));
			}
			addOptionEvent();
		}
	});
	
	addEnviEvent();
}

function saveOrDispEnvi(){
	if($(this).is('hidden')){
		$(".select .option").each(function(){
			var val = $(this).attr("value");
			var name = $(this).html();
			
			$(this).next().children(".envi_ipt_val").val(val);
			$(this).next().children(".envi_ipt_name").val(name);
		});
	} else {
		var id = $(this).children(".envi_ipt_id").val();
		var pid = $(this).children(".envi_ipt_pid").val();
		var domain = $(this).children(".envi_ipt_val").val();
		var name = $(this).children(".envi_ipt_name").val();
		//添加delete
		var url =id?"/domain/update":"/domain/add";
		
		var init = $(this).children(".envi_ipt_val").attr("init");
		if(init == domain && !id){
			return;
		}
		
		if(init == domain && !!id){
			url = "/domain/delete/"+id;
		} 
		
		var saveEnvi = $.ajax({
			url : url,
			data:{id:id,pid:pid,name:name,domain:domain},
			type : "get",
			async:false,
			dataType : "json"
		});
		
		var obj = $(this);
		saveEnvi.done(function(data){
			obj.prev().html(name);
			obj.prev().attr("value",domain);
		});
	}
}

function addOptionEvent(){
	$(".select input[type='text']").focus(function(){
		var init = $(this).attr('init');
		if(init != $(this).val()){
			return;
		}
		
		$(this).val('');
	});
	$(".select input[type='text']").blur(function(){
		var init = $(this).attr('init');
		if($(this).val() == ''){
			$(this).val(init);
		}
	});
	$(".select .option").click(function(){
		$(".select span:first").attr("value",$(this).attr("value"));
		$(".select span:first").html($(this).html());
		$(".select .option").hide();
	});
}

function addEnviEvent(){
	var pTimeFn = null;
	$(".select span:first").click(function(){
		$(".select .option").toggle('fast');
	});
	$(".select span:last").die().live("dblclick",function(){
		$(".select .option_edit").toggle("fast",saveOrDispEnvi);
	});
	
	$(".option_edit:last input[type='text']").die().live("blur",function(){
		var obj = $(this).parent();
		var inputs = obj.children("input[type=text]");
		var needAppend = true;
		$.each(inputs,function(i){
			var init = $(inputs[i]).attr('init');
			if(init == $(inputs[i]).val()){
				needAppend = false;
			}
		});
		
		if(needAppend) {
			obj.parent().append(editabelOptionTemplate.format({
				id:'',
				pid:$(".select").attr("pid"),
				value:'输入地址...',
				name:'输入名称...'
			}));
			$(".option:last").html('');
			$(".option_edit:last").show();
			addOptionEvent();
		}
	});
}