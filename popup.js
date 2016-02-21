chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
    console.log(response.farewell);
  });
});
document.querySelector('input[value="default"]').onchange=function() {
	document.querySelector("html").className="default";
};
document.querySelector('input[value="cat"]').onchange=function() {
	document.querySelector("html").className="cat";
};
document.querySelector('input[value="doge"]').onchange=function() {
	document.querySelector("html").className="doge";
};
document.querySelector('input[value="pitt"]').onchange=function() {
	document.querySelector("html").className="pitt";
};
