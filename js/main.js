$(document).ready(function(){

  $(window).bind("load", function () {

  $('.multiple-items').slick({
    // dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'linear'

  });
  });

  // alert('hello world');
  //Mobile Company Intro Text Expand//
  $('#choirVidButton').click(function(){
    $('#choirVideo').toggle('slow');
    $('#choirVidButton').toggle();
    $('#vidCaption').toggle();
    $('.consultationText').toggle('slow');
    $('#choirBack').toggle();
  });

  $('#choirBack').click(function() {
    $('#choirVideo').toggle('slow');
    $('.consultationText').toggle('slow');
    $('#vidCaption').toggle('slow');
    $('#choirBack').toggle();
    $('#choirVidButton').toggle();
  });



  console.log('slickRockBaby')

//   var contactform =  document.getElementById('contactform');
//      contactform.setAttribute('action', '//formspree.io/' + 'soundguytravis' + '@' + 'hotemail' + '.' + 'com');
});
