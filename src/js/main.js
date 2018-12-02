var scale = 1;
var left = 90;

// on scroll
$(window).on('mousewheel', function(e){
    var delta = e.originalEvent.wheelDelta;

    // scroll down
    if (delta < 0) {
    	// if the scale is not the minimum
    	if (scale > 0.1) {
    		scale -= 0.2;
    		$("#hoverlock").addClass("active");
    	}

    	if (left <= 50) {
    		// hide the scroll icon
    		$(".scroll-downs").addClass("hidden");
    	}

    	left -= 10;
    }
    // scroll up
    else if (delta > 0) {
    	// if the nav is past the middle point
    	if (left >= 40) {
    		// if the scale is not the maximum
    		if (scale < 1) {
	    		scale += 0.2;
	    	}
	    	else {
	    		$("#hoverlock").removeClass("active");
	    	}
    	}
        
        // dont scroll further if the nav is offscreen
        if (left < 90) {
    		left += 10;
    	}
    }

    // set the main logo style
    var newScale = 'scale(' + scale + ')';
    $("#mainlogo").css({'transform': newScale, 'opacity': scale});

    // set the nav style
    var newLeft = left + '%';
    $("nav").css({'left': newLeft});
});


// main logo glitch effect
$("#mainlogo div:first-child").append("<div class='glitch-window'></div>");
$("#mainlogo h1").clone().appendTo(".glitch-window");


// open pageloader
$("nav a").click(function(event){
	event.preventDefault();
	var thisID = $(this).attr("id");

	if (thisID == "nav_about") {
		$(".pageloader.about").addClass("active");
	}
	if (thisID == "nav_profiles") {
		$(".pageloader.profiles").addClass("active");
	}
	if (thisID == "nav_showcase") {
		$(".pageloader.showcase").addClass("active");
	}
});

// close the pageloader
$(".pageloader .closepage").click(function(event){
	event.preventDefault();
	$(".pageloader").removeClass("active");
});
