$(document).ready(function(){

  $('.list-group').click(function(){
    $('.moreText', this).toggle('slow');
    console.log('hi i am clicked')
    $('.teaser', this).toggle();
    $('#tableOfContents').toggle();
  })

  var openSide = document.querySelector('#openProjectLst');
  openSide.addEventListener('click', openSideBar, true);

  var closeSide = document.querySelector('.closeButton');
  closeSide.addEventListener('click', closeNav, true);

  function openSideBar() {
    document.getElementById('tableOfContents').style.width = "350px";
  }

  function closeNav() {
    document.getElementById('tableOfContents').style.width = "0";
  }

});
