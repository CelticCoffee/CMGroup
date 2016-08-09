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


var mobileWidthCheck = screen.width;
console.log(mobileWidthCheck);


  //To make sure that the sidebar does not totally cover the article area//
  function openSideBar() {
    if(mobileWidthCheck > 375) {
      console.log('largerScreen');
      document.getElementById('tableOfContents').style.width = "350px";
    }
    else if (mobileWidthCheck <= 375) {
      console.log('smallerScreen');
      document.getElementById('tableOfContents').style.width = "200px";
    }
  }
  function closeNav(){
       document.getElementById('tableOfContents').style.width = "0";
  }


  $('#openProjectLst').click(function(){
    $('#tableOfContents').toggle();
  })

});
