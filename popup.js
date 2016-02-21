document.querySelector('input[value="default"]').onchange=function() {
	$('link[href="default.css"]').attr('href','default.css');
};
document.querySelector('input[value="cat"]').onchange=function() {
	console.log("Cat");
};
document.querySelector('input[value="doge"]').onchange=function() {
	console.log("Doge");
};
document.querySelector('input[value="pitt"]').onchange=function() {
	$('link[href="default.css"]').attr('href','pitt.css');
};
