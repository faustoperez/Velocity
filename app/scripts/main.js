/************************
		Element Variables
************************/

var $container = $("#container");

/************************
		Animation Setup
************************/

/* Randomly generate an integer between two numbers. */
function r (min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* Query the window’s dimensions. */
var screenWidth = window.screen.availWidth,
	screenHeight = window.screen.availHeight;

/* Define our z-axis animation range. */
var translateZMin = -725,
	translateZMax = 600;

/**********************
		Circle Creation
**********************/

var circleCount = 500,
	circlesHtml = "",
	$circles = "";

for (var i = 0; i < circleCount; i++) {
	circlesHtml += "<div class='circle'></div>";
}

$circles = $(circlesHtml);

/******************************
		 Container Animation
******************************/

$container
	.css("perspective-origin", screenWidth/2 + "px " + screenHeight/2 + "px")
	.velocity(
	{
		perspective: [ 215, 50 ],
		opacity: [ 0.90, 0.55 ]
	}, {
		duration: 800,
		loop: 1,
		delay: 3000
	});

/***************************
		 Circles Animation
***************************/

$circles
	.appendTo($container)
	.velocity({
		opacity: [
			function() { return Math.random() },
			function() { return Math.random() + 0.1 }
		],
		translateX: [
			function() { return "+=" + r(-screenWidth/2.5, screenWidth/2.5) },
			function() { return r(0, screenWidth) }
		],
		translateY: [
			function() { return "+=" + r(-screenHeight/2.75, screenHeight/2.75) },
			function() { return r(0, screenHeight) }
		],
		translateZ: [
			function() { return "+=" + r(translateZMin, translateZMax) },
			function() { return r(translateZMin, translateZMax) }
		]
	}, { duration: 6000 })
	.velocity("reverse", { easing: "easeOutQuad" })
	.velocity({ opacity: 0 }, 2000);
