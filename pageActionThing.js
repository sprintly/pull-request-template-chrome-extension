function loadPullRequestTemplate() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      var el = document.getElementById('pull_request_body') || document.getElementById('id_description');
      if (el !== null) {
        el.value = xhr.responseText;
      }
    }
  };

  chrome.storage.sync.get("pr_template_url", function (obj) {
    xhr.open("GET",
      obj.pr_template_url,
      true);
    xhr.send();
  });
};
