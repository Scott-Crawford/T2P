
function replace(){
	document.body.innerHTML = document.body.innerHTML.replace(/shit/ig, "<img src='" + chrome.extension.getURL('src/images/Doge/1.jpg') + "' width="12px" ><img src='" + chrome.extension.getURL('src/images/Doge/2.jpg') + "' width="12px" ><img src='" + chrome.extension.getURL('src/images/Doge/3.jpg') + "'width="12px" ><img src='" + chrome.extension.getURL('src/images/Doge/4.jpg') + "' width="12px">");
	setTimeout(replace, 500);
};

replace();