$(document).ready(function(){

  $('.list-group').click(function(){
    $('.moreText', this).toggle('slow');
    console.log('hi i am clicked')
    $('.teaser', this).toggle();
  })

});
