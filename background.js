window.onload(function(tab) {
  // No tabs or host permissions needed!
  console.log('changing ' + tab.url + '\'s words!');
  chrome.tabs.executeScript({
	  file:'jquery-2.2.0.min.js'
  });
  chrome.tabs.executeScript({
	code: '$("body").children().html(function (index, text) {this.innerHTML = text.replace(/JavaScript/g, "k")});'
  });
});
