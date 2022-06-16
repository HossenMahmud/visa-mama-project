$('.counter').counterUp({
    delay: 10,
    time: 1200
  });


// ============= Testmonial SLIDE - (Start) ============================================== //
$(function () {
	$('.slider').slick({
		dots: true,
		infinite: true,
		speed: 1200,
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		arrows:false,
		responsive: [
			{
				breakpoint: 775,
				settings: {
					slidesToShow: 1,
				}
             }
           ]
	});

	$('.blog-slider').slick({
		dots: true,
		infinite: true,
		speed: 1200,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		arrows:false,
		responsive: [
		  {
			breakpoint: 1024,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 1,
			  infinite: true,
			  dots: true
			}
		  },
		  {
			breakpoint: 600,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1
			}
		  },
		  {
			breakpoint: 480,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1
			}
		  }
		
		]
	  });
});
  

// =============  WOW - (Start) ============================================== //
new WOW().init();
// =============  WOW - (Start) ============================================== //
