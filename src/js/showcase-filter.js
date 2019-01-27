var allShowcaseElements = document.querySelectorAll(".showcase-element");
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
	var unclick = false;
	for(var i=0; i<filterButtons.length; i++) {
		if(filterButtons[i].classList.contains('setfilter')) {
			filterButtons[i].classList.remove('setfilter');
			
			if(filterButtons[i].id == tag) {
				unclick = true;
			}
		}
	}
	if(unclick == false) {
		document.getElementById(tag).classList.toggle("setfilter");
		var filterClass = "." + tag;
		var filterElements = document.getElementsByClassName(tag);

		for(var i=0; i<allShowcaseElements.length; i++) {
			allShowcaseElements[i].style.display = "none";
		}

		for(var i=0; i<filterElements.length; i++) {
			filterElements[i].style.display = "flex";
		}
	}
	else {
		for(var i=0; i<allShowcaseElements.length; i++) {
			allShowcaseElements[i].style.display = "flex";
		}
	}
}
