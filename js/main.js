window.onscroll = function() {
    var tl = document.querySelector('.timestamp');
    
    //section three animation trigger
    if ( isInViewport( tl ) ) {
        timeline();
    }
};


//timeline animation
        var timeline = (function() {
            var executed = false;
            return function() {
                if (!executed) {
                    executed = true;

                    var draw = document.getElementsByClassName('draw');
                    var one = draw[0];
                    var two = draw[1];
                    var three = draw[2];

                    setInterval(function(){
                        $('head').append('<style>#three li:nth-child(1) .item-desc:before{border:4px solid #4717F6;background-color:#4717F6;}</style>');
                        one.style.height = '247.5px';
                    }, 0);
                    setInterval(function(){
                            $('head').append('<style>#three li:nth-child(2) .item-desc:before{border:4px solid #4717F6;background-color:#4717F6;}</style>'); 
                            two.style.height = '247.5px';
                        }, 900);
                    setInterval(function(){
                                $('head').append('<style>#three li:nth-child(3) .item-desc:before{border:4px solid #4717F6;background-color:#4717F6;}</style>');
                                three.style.height = '247.5px';
                            }, 1800);
                    setInterval(function(){
                        $('head').append('<style>#three li:nth-child(4) .item-desc:before{border:4px solid #4717F6;background-color:#4717F6;}</style>');
                        intrvl=0;
                        for(nTimes=0;nTimes<3;nTimes++){
                            intrvl += 500;
                            setTimeout("$('head').append('<style>#three li:nth-child(4) .item-desc:before{border:4px solid #e3e3e3;background-color:white;}</style>');",intrvl);
                            intrvl += 900;
                            setTimeout("$('head').append('<style>#three li:nth-child(4) .item-desc:before{border:4px solid #4717F6;background-color:#4717F6;}</style>');",intrvl);
                           }
                    }, 2700);
                }
            };
        })();

//detect page section position
var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );

};


// init controller
	var controller = new ScrollMagic.Controller();

// Logo Timeline

  var logoTimeline = new TimelineMax();
			logoTimeline.to('#logo-word', .75, {autoAlpha: 0, y: "-10"}, 0)
			 .to('#logo-corner', 1, {fill: "#4717F6"}, 0.2)

	new ScrollMagic.Scene({offset: -300, triggerHook: 0, triggerElement: '#two'})
					.setTween(logoTimeline) // trigger a TweenMax.to tween
					//.addIndicators() // add indicators (requires plugin)
					.addTo(controller);


// Switching titles to blue

	new ScrollMagic.Scene({triggerElement: "#one .title", triggerHook: 0.3, duration: 500})
					.setClassToggle("#one .title", "blue-text")
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#two .title", triggerHook: 0.3, duration: 500})
					.setClassToggle("#two .title", "blue-text")
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#three .title", triggerHook: 0.3, duration: 500})
					.setClassToggle("#three .title", "blue-text")
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#four .title", triggerHook: 0.3, duration: 500})
					.setClassToggle("#four .title", "blue-text")
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#five .title", triggerHook: 0.3, duration: 500})
					.setClassToggle("#five .title", "blue-text")
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#seven .title", triggerHook: 0.3, duration: 500})
					.setClassToggle("#seven .title", "blue-text")
					.addTo(controller);

// Client logo stagger

	var logoRowTimeline = new TimelineMax();
			logoRowTimeline.staggerTo(".logo-row li", .8, {autoAlpha: 1}, 0.5)

	new ScrollMagic.Scene({triggerElement: "#five", triggerHook: 0.3})
				.setTween(logoRowTimeline)
				.addTo(controller);


// Smooth Scroll

$('#logo-corner').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 1000);
});
