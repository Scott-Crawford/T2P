var mode, pharses, regex;

function escapeRegExp(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}

chrome.runtime.sendMessage({command: "init"}, function(response) {
  mode = response.mode;
  pharses = response.pharses;
  if (pharses.length) {
    var regexString = '';
    for (var i = 0; i < pharses.length; i++) {
      regexString += escapeRegExp(pharses[i]);
      if (i != pharses.length - 1) regexString += '|';
    }
    regex = new RegExp(regexString, 'ig');
  }
  document.body.classList.add('t2p-' + mode);
  replace();
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.command == "change-mode") {
    if (request.mode != mode) {
      if (mode == 'pitt' || request.mode == 'pitt') {
        var t2pReplacedImgs = document.querySelectorAll('span.t2p-replaced');
        for (var i = 0; i < t2pReplacedImgs.length; i++) {
          var t2pReplacedImg = t2pReplacedImgs[i],
            imgId = request.mode == 'pitt' && parseInt(t2pReplacedImg.dataset.index) < 4 ?
              (parseInt(t2pReplacedImg.dataset.index) + 1) : (Math.floor(Math.random() * 8) + 1);
          t2pReplacedImg.className = 't2p-replaced p' + imgId;
        }
      }
      document.body.classList.remove('t2p-' + mode);
      document.body.classList.add('t2p-' + request.mode);
      mode = request.mode;
    }
  } else if (request.command == "update-list") {
    if (request.phrases.length) {
      var regexString = '';
      for (var i = 0; i < request.phrases.length; i++) {
        regexString += escapeRegExp(request.phrases[i]);
        if (i != request.phrases.length - 1) regexString += '|';
      }
      regex = new RegExp(regexString, 'ig');
    }
    phrases = request.phrases;
  }
});

function replace() {
  if (document.body && pharses.length) {
    textNodesUnder(document.body);
  }
	setTimeout(replace, document.body ? 2000 : 500);
};

function textNodesUnder(node){
  for (node=node.firstChild;node;node=node.nextSibling){
    if (node.nodeType==3) {
		findAndReplaceDOMText(
			node.parentNode,
			{
				find: regex,
				replace: function(ele) {
					var spanNode = document.createElement('SPAN');
          if (ele.node.parentNode.classList.contains('t2p-replaced')) return ele.text;
					for (var i = 0; i < ele.text.length; i++) {
            var fontSize = parseFloat(window.getComputedStyle(ele.node.parentNode, null).getPropertyValue('font-size'));
						var imgNode = document.createElement('SPAN');
            imgNode.textContent = ele.text.charAt(i);
            imgNode.dataset.index = i;
            imgNode.style.width = fontSize * 0.6 + 'px';
						imgNode.style.height = fontSize * 1 + 'px';
            imgNode.classList.add('t2p-replaced');
            var imgId = mode == 'pitt' && i < 4 ? (i + 1) :
              (Math.floor(Math.random() * 8) + 1);
            imgNode.classList.add('t2p-p' + imgId);
						spanNode.appendChild(imgNode);
					}
					return spanNode;
				}
			}
		);
	}
    else textNodesUnder(node);
  }
}
