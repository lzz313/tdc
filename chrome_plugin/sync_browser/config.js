var flag='stop';
var cache_url = localStorage["url"];


// Saves options to localStorage.
function save_options() {
  var urlText = document.getElementById("cache_url");
  var url = urlText.value;
  localStorage["url"] = url;

  alert('保存成功');
}

// Restores select box state to saved value from localStorage.
function restore_options() {
  var url = localStorage["url"];
  if (!url) {
    return;
  }
  var urlText = document.getElementById("cache_url");
  
  urlText.value = url;
  
}
document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save_btn').addEventListener('click', save_options);