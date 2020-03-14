$(document).ready(function(){

    $('.carousel-img').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      asNavFor: '.carousel-text',
      cssEase: 'linear',
      arrows: false,

      fade: true,
    });

    $('.carousel-text').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: false,
      asNavFor: '.carousel-img',
      cssEase: 'linear',
      arrows: false,
      
      centerMode: true,
      focusOnSelect: true,
      variableWidth: true,
    })
    .on('setPosition', function (event, slick) {
        slick.$slides.css('height', slick.$slideTrack.height() + 'px');
    });
  });