
function replace(){
	document.body.innerHTML = document.body.innerHTML.replace(/shit/ig, "<img src='" + chrome.extension.getURL('src/images/Doge/1.jpg') + "' sytle="width:12px" ><img src='" + chrome.extension.getURL('src/images/Doge/2.jpg') + "' sytle="width:12px" ><img src='" + chrome.extension.getURL('src/images/Doge/3.jpg') + "' sytle="width:12px" ><img src='" + chrome.extension.getURL('src/images/Doge/4.jpg') + "' sytle="width:12px">");
	setTimeout(replace, 500);
};

replace();