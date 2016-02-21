
function replace(){
	document.body.innerHTML = document.body.innerHTML.replace(/shit/ig, "<img src='" + chrome.extension.getURL('src/images/doge/1.jpg') + "'><img src='" + chrome.extension.getURL('src/images/doge/2.jpg') + "'><img src='" + chrome.extension.getURL('src/images/doge/3.jpg') + "'><img src='" + chrome.extension.getURL('src/images/doge/4.jpg') + "'>");
	setTimeout(replace, 500);
};

replace();