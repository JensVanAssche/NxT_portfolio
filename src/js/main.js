// main logo glitch effect
$("#mainlogo div:first-child").append("<div class='glitch-window'></div>");
$("#mainlogo h1").clone().appendTo(".glitch-window");


// on showcase click
$("#nav_showcase").click(function() {
	$("#pageloader").addClass("active_animate");
	setTimeout(function() {
		window.location.href = "showcase.html";
	}, 1000);
});