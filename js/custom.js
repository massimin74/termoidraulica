// JavaScript Document

	$(document).ready(function(e) {
		$(window).scroll(function(){
			if ($(window).scrollTop() > 0){
				$('.header').addClass('scroll');
				$('.logo').addClass('sticky');
				// Logo immagine $('.logo').addClass('hide');
				// Logo immagine $('.sticky').addClass('show');
				$('.navbar').addClass('burger-button');
				$('.back-to-top').addClass('show');
			}else{
				$('.header').removeClass('scroll');
				$('.logo').removeClass('sticky');
				// Logo immagine $('.logo').removeClass('hide');
				// Logo immagine $('.sticky').removeClass('show');
				$('.navbar').removeClass('burger-button');
				$('.back-to-top').removeClass('show');
			}
		});
		
		$(".navbar").click(function() {
			 $(".nav").toggleClass("wide");
		});
		
		jQuery('.fade').addClass("hidden").viewportChecker({
			classToAdd: 'visible animated fadeInUp',
			offset: 100    
		});
		
		function goToByScroll(id){
		$('html,body').animate({scrollTop: $("#"+id).offset().top},'slow');
		}
		$('.back-to-top').click(function(){
		goToByScroll("header");
		return false;
		});
		
		$(".inner-tab").hide(); 
		
		$(".tabs li:first").addClass("active").show();
		$(".inner-tab:first").show();
	 
		$(".tabs li").click(function() {
	 	
		$(".tabs li").removeClass("active");
		$(this).addClass("active");

		$(".inner-tab").hide();
	 
		var activeTab = $(this).find("a").attr("href"); 
			$(activeTab).fadeIn(); 
			return false;
		});	
		
	 	$('figure a').touchTouch();
    });
