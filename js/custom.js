$(function(){
  AOS.init();
  $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll >= 1) {
          $(".header").addClass("sticky");
      } else {
          $(".header").removeClass("sticky");
      }
  });
  $(".animation").mousemove(function(event){
    $(this).find('.imgBg').css('top', -event.pageY/80);
    $(this).find('.imgStandard').css('top', -event.pageY/40);
    $(this).find('.imgFront').css('top', -event.pageY/12);
  });
});
$(function(){
   $(window).on('scroll', function () {
        var scrolled = $(window).scrollTop();
        if (scrolled > 80) $('.go-top').addClass('active');
        if (scrolled < 80) $('.go-top').removeClass('active');
    });
    $(function () {
        $('.go-top').on('click', function () {
            $("html, body").animate({
                scrollTop: "0"
            }, 500);
        });
    });
});

$(document).ready(function (){
  $('.productSlider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows:false
        }
      }
    ]
  });
});
$(document).ready(function (){
  $('.pressSlider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
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
          slidesToScroll: 1,
          dots: false,
          arrows:false
        }
      }
    ]
  });
});
$(document).ready(function (){
  $('.callActionSlider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [{
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
          slidesToScroll: 1,
          dots: false,
          arrows:false
        }
      }
    ]
  });
});
$(document).ready(function() {
  $('.rightMenu li a').click(function(){
    $('.rightMenu li a').removeClass('active');
    $(this).addClass('active');
    $('section').removeAttr('style');
    var liks = $(this).attr('href');
    $(liks).css('padding-top','120px');
  });
});
//  $(function(){
//   $('.btnMenu').click(function(){
//     $('.btnMenu i').toggleClass('fa fa-bars fa fa-times');
//     $('.mobileMenu').toggleClass('active');
//   });
//   $('.mobileMenu li').click(function(){
//     $('.btnMenu i').toggleClass('fa fa-bars fa fa-times');
//     $('.mobileMenu').toggleClass('active');
//   });
// });
