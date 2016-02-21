function inputChangeHandler(e) {
	document.querySelector("html").className=e.target.value;
	window.localStorage.setItem('mode', e.target.value);
	chrome.tabs.query({}, function(tabs) {
    var message = {command: "change-mode", mode: e.target.value};
    for (var i = 0; i < tabs.length; i++) {
        chrome.tabs.sendMessage(tabs[i].id, message);
    }
	});
};

document.querySelector('input[value="default"]').onchange=inputChangeHandler;
document.querySelector('input[value="cat"]').onchange=inputChangeHandler;
document.querySelector('input[value="doge"]').onchange=inputChangeHandler;
document.querySelector('input[value="pitt"]').onchange=inputChangeHandler;

document.querySelector('#setting-btn').onclick=function() {
	chrome.windows.create({'url': 'list.html', 'type': 'popup',
		'width': 500, 'height': 200, 'left': 300, 'top': 200}, function(window) {
  });
};

var mode = window.localStorage.getItem('mode') || 'default';
document.querySelector('input[value="' + mode + '"]').checked = true;
inputChangeHandler({target: {value: mode}});
