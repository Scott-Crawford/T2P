window.localStorage.setItem('mode', window.localStorage.getItem('mode') || 'default');
window.localStorage.setItem('pharses', window.localStorage.getItem('pharses') || '["PITT"]');

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.command == "init") {
    sendResponse({mode: window.localStorage.getItem('mode'),
      pharses: JSON.parse(window.localStorage.getItem('pharses'))});
  }
});
