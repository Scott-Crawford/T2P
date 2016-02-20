
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  console.log('changing ' + tab.url + '\'s words!');
  chrome.tabs.executeScript({
    code: '$("body").children().html(function (index, text) {this.innerHTML = text.replace(/JavaScript/g, "k")});'
  });
});
