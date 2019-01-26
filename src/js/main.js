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

// on about click
$("#nav_about").click(function() {
	$("#pageloader").addClass("active_animate");
	setTimeout(function() {
		window.location.href = "about.html";
	}, 1000);
});

// on profiles click
$("#nav_profiles").click(function() {
	$("#pageloader").addClass("active_animate");
	setTimeout(function() {
		window.location.href = "profiles.html";
	}, 1000);
});

