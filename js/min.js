//future section area owlcarousel .....................
$('.future-owl').owlCarousel({
	    loop:true,
	    margin:30,
	    nav:true,
	    navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
	    dots:false,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:4
	        }
	    }
});

// course-owl section area owlcarousel .....................
$('.course-owl').owlCarousel({
	    loop:true,
	    margin:30,
	    nav:true,
	    navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
	    dots:false,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:3
	        }
	    }
});

// why-carousel section area owlcarousel .....................
$('.why-carousel').owlCarousel({
	    loop:true,
	    margin:30,
	    autoplay:true,
	    autoplayTimeout:4000,
	    dots:false,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
});

//counter active plagin ..................................
	$('.counter').counterUp({
	    delay: 10,
	    time: 1000
	});

// aos.js active............................................
	  AOS.init({
	      offset: 200,
	      duration: 600,
	      easing: 'ease-in-sine',
	      delay: 100,
    });
// magnific popup lightbox active...........................
	$(document).ready(function() {
		$('.popup-gallery').magnificPopup({
			delegate: 'a',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1] // Will preload 0 - before current, and 1 after the current image
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			}
		});
	});

//why chosse section......................................
	$('.panel-heading').click(function(){
		$('.panel-heading').removeClass('.panel-active');
		$(this).addClass('.panel_active');
	});
