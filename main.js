var bool = true;
$('.fas').click(function(){
    if(bool == true){
    $('.hamburger-menu').fadeIn(200);
    bool = false;
}else{
    $('.hamburger-menu').fadeOut(200);
    bool = true;
}
});
