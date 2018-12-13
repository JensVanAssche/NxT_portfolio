var scale = 1;
var left = 90;
var scaleInterval = 0.125;
var leftInterval = 7.5;

// on scroll
$(window).on('mousewheel', function(e){
    var delta = e.originalEvent.wheelDelta;

    // scroll down
    if (delta < 0) {
    	// if the scale is not the minimum
    	if (scale > 0.1) {
    		scale -= scaleInterval;
    		$("#hoverlock").addClass("active");
    	}

    	if (left <= 50) {
    		// hide the scroll icon
    		$(".scroll-downs").addClass("hidden");
    	}

    	left -= leftInterval;
    }
    // scroll up
    else if (delta > 0) {
    	// if the nav is past the middle point
    	if (left >= 30) {
    		// if the scale is not the maximum
    		if (scale < 1) {
	    		scale += scaleInterval;
	    	}
	    	else {
	    		$("#hoverlock").removeClass("active");
	    	}
    	}
        
        // dont scroll further if the nav is offscreen
        if (left < 90) {
    		left += leftInterval;
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
    $(".pageloader").addClass("active");

	if (thisID == "nav_about") {
		setTimeout(function () {
           window.location.href = "about.html"; //will redirect to your blog page (an ex: blog.html)
        }, 1000);
	}
	if (thisID == "nav_profiles") {
		setTimeout(function () {
           window.location.href = "profiles.html"; //will redirect to your blog page (an ex: blog.html)
        }, 1000);
	}
	if (thisID == "nav_showcase") {
		setTimeout(function () {
           window.location.href = "showcase.html"; //will redirect to your blog page (an ex: blog.html)
        }, 1000);
	}
});

// close the pageloader
$(".subpage .closepage").click(function(event){
	event.preventDefault();
    window.location.href = "index.html";
	$(".pageloader").removeClass("active");
});
