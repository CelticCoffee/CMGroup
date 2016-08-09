// $(document).ready(function(){

  $(window).bind("load", function () {

  $('.multiple-items').slick({
    // dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'linear'

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




  var contactform =  document.getElementById('contactform');
    //  'soundguytravis' + '@' + 'hotmail' + '.' + 'com');
      contactform.setAttribute('action', '//formspree.io/' +
      'wendyfiddles' + '@' + 'comcast' + '.' + 'net');
});

// });
