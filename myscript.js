
function replace(){
	document.body.innerHTML = document.body.innerHTML.replace(/shit/ig, "<img src='" + chrome.extension.getURL('src/images/Doge/1.jpg') + "' style=\"width:12px\" ><img src='" + chrome.extension.getURL('src/images/Doge/2.jpg') + "' style=\"width:12px\" ><img src='" + chrome.extension.getURL('src/images/Doge/3.jpg') + "' style=\"width:12px\" ><img src='" + chrome.extension.getURL('src/images/Doge/4.jpg') + "' style=\"width:12px\">");
	setTimeout(replace, 60000);
};

replace();