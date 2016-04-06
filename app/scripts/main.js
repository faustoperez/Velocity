var fadeOut = {

	// p is for properties
	p: {
		opacity: .2
	},

	// o is for options

	o: {
		duration: 1000,
		easing: "linear"
	}
};

$("body").on("click", function() {
	$(".jumbotron").velocity(fadeOut.p, fadeOut.o);
});

