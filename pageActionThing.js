var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    var el = document.getElementById('pull_request_body');
    if (el !== null) {
      el.innerText = xhr.responseText;
    }
  }
};
xhr.open("GET",
  // chrome.extension.getURL('/config_resources/config.json'),
  "https://raw.github.com/sprintly/sprint.ly-culture/master/pr-template.md",
  true);
xhr.send();
