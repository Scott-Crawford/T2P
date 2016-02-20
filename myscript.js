$("body").children().html(function (index, text) {
	this.innerHTML = text.replace(/JavaScript/g, "k")
});