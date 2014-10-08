function showUrl(){
	//alert('test');
	//cache_url = document.getElementById("cache_url").value;
	
	//alert(cache_url); 
	chrome.tabs.getSelected(null, function(tab) {
		tab_url = tab.url;
	    remotePreview();
	});

	if(flag == 'start'){
		setTimeout(showUrl, 1100);
	}
}

function remotePreview() {
         //alert(parent.main.location.href);
         if(!cache_url){
         	alert("请输入缓存地址");
         	return;
         }
         var xhr = new XMLHttpRequest();
		//xhr.onreadystatechange = handleStateChange; // Implemented elsewhere.
		xhr.open("GET", cache_url+"/cache/set?k=url&callback=?&v=" + tab_url, true);
		xhr.onreadystatechange = function() {
          if (xhr.readyState == 4) {
            if (xhr.status == 200) {
              //alert(xhr.responseText);
              //document.write("OK");
            }
          }
        };
		xhr.send();
}

var t;
chrome.browserAction.setIcon({path:"start" + ".jpg"});
chrome.browserAction.setTitle({title:'开始浏览器同步'});
//chrome.browserAction.setBadgeText({text:'start'});
//document.getElementById("start_btn").addEventListener("click",showUrl);
chrome.browserAction.onClicked.addListener(function (tab) {
	if(flag  === 'undefined' || flag == 'stop'){
		//alert('开始同步');
		flag = 'start';
		showUrl();
		
		chrome.browserAction.setIcon({path:"stop" + ".jpg"});
		chrome.browserAction.setTitle({title:'结束浏览器同步'});
//		chrome.browserAction.setBadgeText({text:'stop'});
	} else {
		//alert('结束同步');
		clearTimeout(t);
		flag = 'stop';
		chrome.browserAction.setIcon({path:"start" + ".jpg"});
		chrome.browserAction.setTitle({title:'开启浏览器同步'});
//		chrome.browserAction.setBadgeText({text:'start'});
	}
    
});
