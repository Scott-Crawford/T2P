
function replace(){
	document.body.innerHTML = document.body.innerHTML.replace(/shit/ig, "<img width="12px" src='" + chrome.extension.getURL('src/images/Doge/1.jpg') + "'><img width="12px" src='" + chrome.extension.getURL('src/images/Doge/2.jpg') + "'><img width="12px" src='" + chrome.extension.getURL('src/images/Doge/3.jpg') + "'><img width="12px" src='" + chrome.extension.getURL('src/images/Doge/4.jpg') + "'>");
	setTimeout(replace, 500);
};

replace();