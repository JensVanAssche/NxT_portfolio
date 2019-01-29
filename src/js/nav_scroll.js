var scale = 1;
var left = $("nav").position().left;
var startLeft = left;
var scaleInterval = 0.125;
var leftInterval = 150;
var scaleThreshold = startLeft - (leftInterval * 8);

// on scroll
$(window).on('mousewheel', function(e){
	if ($(window).width() > 1200) {
		var delta = e.originalEvent.wheelDelta;
		var navRight = ($(window).width() - ($("nav").offset().left + $("nav").outerWidth()));
		
		// scroll down
		if (delta < 0) {
			// if the scale is not the minimum
			if (scale > 0.1) {
				scale -= scaleInterval;
				$("#hoverlock").addClass("active");
			}

			if (left <= $(window).width() / 2) {
				// hide the scroll icon
				$(".scroll-downs").addClass("hidden");
			}

			if (navRight < 0) {
				left -= leftInterval;
			}
		}
		// scroll up
		else if (delta > 0) {
			// if the nav is past the middle point
			if (left >= scaleThreshold) {
				// if the scale is not the maximum
				if (scale < 1) {
					scale += scaleInterval;
				}
				else {
					$("#hoverlock").removeClass("active");
				}
			}
			
			// dont scroll further if the nav is offscreen
			if (left < startLeft) {
				left += leftInterval;
			}
		}


		// set the main logo style
		$("#mainlogo").css({'transform': 'scale(' + scale + ')', 'opacity': scale});

		// set the nav style
		$("nav").css({'left': left + 'px'});
	}
});

$(window).on('resize', function(e){
	left = ($(window).width() - 275);
	startLeft = left;
	scale = 1;
	scaleThreshold = startLeft - (leftInterval * 8);

	$("#mainlogo").css({'transform': "scale(1)", 'opacity': 1});
	$("#hoverlock").removeClass("active");
	$("nav").css({'left': left});
});

