var mode;

chrome.runtime.sendMessage({command: "init"}, function(response) {
  mode = response.mode;
  document.body.classList.add('t2p-' + mode);
  replace();
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log(request);
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
  }
});

function replace() {
  if (document.body) {
    textNodesUnder(document.body);
  }
	setTimeout(replace, document.body ? 1000 : 100);
};

function textNodesUnder(node){
  for (node=node.firstChild;node;node=node.nextSibling){
	var fontSize = window.getComputedStyle(node.parentNode, null).getPropertyValue('font-size');
    if (node.nodeType==3) {
		findAndReplaceDOMText(
			node.parentNode,
			{
				find: /shit/ig,
				replace: function(ele) {
					var spanNode = document.createElement('SPAN');
					for (var i = 0; i < ele.text.length; i++) {
						var imgNode = document.createElement('SPAN');
            imgNode.dataset.index = i;
						imgNode.style.width = imgNode.style.height = parseFloat(fontSize) * 1.2 + 'px';
            imgNode.classList.add('t2p-replaced');
            var imgId = mode == 'pitt' && i < 4 ? (i + 1) :
              (Math.floor(Math.random() * 8) + 1);
            imgNode.classList.add('p' + imgId);
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
