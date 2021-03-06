$(document).ready(function() {
	
	// Open off canvas menu
	$("#hamburger").click(function() {
		$('#content').css('min-height', $(window).height());
		//set the width of primary content container -> content should not scale while animating
		var contentWidth = $('#content').width();
		//set the content with the width that it has originally
		$('#content').css('width', contentWidth);
		//display a layer to disable clicking and scrolling on the content while menu is shown
		$('main').css('display', 'block');
		//disable all scrolling on mobile devices while menu is shown
		$('#container').bind('touchmove', function (e) {
			e.preventDefault()
		});
		//set margin for the whole container with a jquery UI animation
		  $("#container").animate({
		  	"marginLeft": ["70%", 'easeOutExpo']
		  }, 700, function() {
		    // Animation complete, add class
		    $('body').attr('class', 'offcanvas-open');
		  });
	});     
	
	// Close off canvas menu

	$(document).on('click', "body.offcanvas-open", function() {
		//enable all scrolling on mobile devices when menu is closed
		$('#container').unbind('touchmove');
		//set margin for the whole container back to original state with a jquery UI animation
		$("#container").animate({"marginLeft": ["-1", 'easeOutExpo']}, {
			duration:700,
			complete: function() {
				$('body').attr('class', 'offcanvas-closed');
				$('#content').css('width', 'auto');
				$('#content').css('min-height', 'auto');
			}
		});
	});

});