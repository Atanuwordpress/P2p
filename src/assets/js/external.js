
// sticky header
$(window).scroll(function(){
  var sticky = $('.header-wraper'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass('sticky');
  else sticky.removeClass('sticky');
});

// menu js
$(document).ready(function(){
  $(".main-menu-trigger").click(function(){
    $(".main-menu").addClass("main-menu-open");
    $("#nav-icon").addClass("open");

  });
  $(".menu-close").click(function(){
    $(".main-menu").removeClass("main-menu-open");
    $("#nav-icon").removeClass("open");
  });
});


  // Partners slider js
$('#PartnersSlider').owlCarousel({
  loop:true,
  margin:10,
  responsiveClass:true,
  nav:true,
  autoplay:true,
  autoplayTimeout:1000,
  autoplayHoverPause:true,
  navText : ['<span class="fa fa-chevron-left" aria-hidden="true"></span>','<span class="fa fa-chevron-right" aria-hidden="true"></span>'],
  responsive:{
      0:{
          items:2
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
});

// why us accordion js
$(document).ready(function(){
  // Add minus icon for collapse element which is open by default
  $(".collapse.show").each(function(){
    $(this).prev(".whyus-accordion-head").find(".fa").addClass("fa-chevron-up").removeClass("fa-chevron-down");
  });
  
  // Toggle plus minus icon on show hide of collapse element
  $(".collapse").on('show.bs.collapse', function(){
    $(this).prev(".whyus-accordion-head").find(".fa").removeClass("fa-chevron-down").addClass("fa-chevron-up");
  }).on('hide.bs.collapse', function(){
    $(this).prev(".whyus-accordion-head").find(".fa").removeClass("fa-chevron-up").addClass("fa-chevron-down");
  });
});