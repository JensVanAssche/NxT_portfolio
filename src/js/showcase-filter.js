var allShowcaseElements = document.querySelectorAll(".showcase-element");
var webDevElements = document.querySelectorAll(".web-dev");
var filterButtons = document.getElementsByClassName("filter-button");

document.getElementById('web-dev').addEventListener("click", function(){ toggleFilter("web-dev"); });
document.getElementById('3d-dev').addEventListener("click", function(){ toggleFilter("3d-dev"); });
document.getElementById('av-broadcast-engineer').addEventListener("click", function(){ toggleFilter("av-broadcast-engineer"); });
document.getElementById('multimedia-engineer').addEventListener("click", function(){ toggleFilter("multimedia-engineer"); });
document.getElementById('ux-ui-designer').addEventListener("click", function(){ toggleFilter("ux-ui-designer"); });
document.getElementById('3d-vfx-creator').addEventListener("click", function(){ toggleFilter("3d-vfx-creator"); });
document.getElementById('av-creator').addEventListener("click", function(){ toggleFilter("av-creator"); });
document.getElementById('video').addEventListener("click", function(){ toggleFilter("video"); });
document.getElementById('article').addEventListener("click", function(){ toggleFilter("article"); });

function toggleFilter(tag) {
	for(var i=0; i<filterButtons.length; i++) {
		if(filterButtons[i].classList.contains('setfilter')) {
			filterButtons[i].classList.remove('setfilter');
		}
	}
	document.getElementById(tag).classList.toggle("setfilter");
	var filterClass = "." + tag;
	var filterElements = document.getElementsByClassName(tag);
/*
	for(var i=filterElements.length; i>0; i--) {
		filterElements[i-1].style.order = -1//(filterElements-1) * (-1);
	}*/
	for(var i=0; i<allShowcaseElements.length; i++) {
		allShowcaseElements[i].style.order = 0;//(filterElements-1) * (-1);
	}

	for(var i=0; i<filterElements.length; i++) {
		filterElements[i].style.order = -1;//(filterElements-1) * (-1);
	}
}

allShowcaseElements.forEach(function(element) {
	element.style.order = 0;
});

webDevElements.forEach(function(element, index) {
	//element.style.order = (index+1) * (-1);
});/*
var webDevElementsLenght = webDevElements.length;
for(var i=webDevElementsLenght; i>0; i--) {
	webDevElements[i-1].style.order = (webDevElementsLenght-1) * (-1);
}*/