var bool = true;
$(".header-right > a  i, .hamburger-menu > a  i").click(function () {
  if (bool == true) {
    $(".hamburger-menu").fadeIn(200);
    bool = false;
  } else {
    $(".hamburger-menu").fadeOut(200);
    bool = true;
  }
});
// soluzione con toggle
/*$('.fas').click(function(){
    $('.hamburger-menu').toggle(200);
});*/
