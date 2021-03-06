/*

window.onscroll = function() {
    var tl = document.querySelector('.timestamp');

    //section three animation trigger
    if ( isInViewport( tl ) ) {
        timeline();
    }
};

*/

// init controller
	var controller = new ScrollMagic.Controller();

// Logo Timeline

  var logoTimeline = new TimelineMax();
			logoTimeline.to('#logo-word', .75, {autoAlpha: 0, y: "-10"}, 0)
        .to('#logo-square', 0.75, {fill: "#4717F6"}, 0.75)
			  .to('#logo-corner', 0.5, {fill: "#ffffff"}, 1)
        .to('#logo-shade', 1, {fill: "#3812C4"}, 3)



	new ScrollMagic.Scene({offset: -300, triggerHook: 0, triggerElement: '#two'})
					.setTween(logoTimeline) // trigger a sweenMax.to tween
					//.addIndicators() // add indicators (requires plugin)
					.addTo(controller);


// Switching titles to blue

	new ScrollMagic.Scene({triggerElement: "#one .title", triggerHook: 0.5, duration: 500})
					.setClassToggle("#one .title", "blue-text")
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#two .title", triggerHook: 0.5, duration: 500})
					.setClassToggle("#two .title", "blue-text")
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#three .title", triggerHook: 0.5, duration: 500})
					.setClassToggle("#three .title", "blue-text")
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#four .title", triggerHook: 0.5, duration: 500})
					.setClassToggle("#four .title", "blue-text")
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#five .title", triggerHook: 0.5, duration: 500})
					.setClassToggle("#five .title", "blue-text")
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#seven .title", triggerHook: 0.5, duration: 500})
					.setClassToggle("#seven .title", "blue-text")
					.addTo(controller);

// Client logo stagger

	var logoRowTimeline = new TimelineMax();
			logoRowTimeline.staggerTo(".logo-row li", .8, {autoAlpha: 1}, 0.5)

	new ScrollMagic.Scene({triggerElement: "#five", triggerHook: 0.3})
				.setTween(logoRowTimeline)
				.addTo(controller);


// Smooth Scroll

$('.logo').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 1000);
});
