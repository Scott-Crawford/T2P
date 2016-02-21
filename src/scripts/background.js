window.localStorage.setItem('mode', window.localStorage.getItem('mode') || 'default');

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.command == "init") {
    sendResponse({mode: window.localStorage.getItem('mode')})
  }
})
