// main logo glitch effect
$("#mainlogo div:first-child").append("<div class='glitch-window'></div>");
$("#mainlogo h1").clone().appendTo(".glitch-window");


// on showcase click
$("#nav_showcase").click(function() {
	$("#nav_showcase").animate({
		left: 0
	}, 1000, function() {
		// Animation complete.
	});
});