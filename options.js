var quick_left_template = "https://raw.github.com/sprintly/sprint.ly-culture/master/pr-template.md";
var key = "pr_template_url";

function change_url(e) {
  var obj = {};
  obj[key] = e.target.value || quick_left_template;
  chrome.storage.sync.set(obj);
}

function restore_options() {
  chrome.storage.sync.get(key, function (obj) {
    document.getElementById("url").value = obj[key];
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#url').addEventListener('change', change_url);
document.querySelector('#reset').addEventListener('click', function () {
  chrome.storage.sync.clear(function () {
    var obj = {};
    obj[key] = quick_left_template;
    chrome.storage.sync.set(obj);
    document.querySelector('#url').value = quick_left_template;
  });
});
document.querySelector('#close').addEventListener('click', function () {
  window.close();
});
