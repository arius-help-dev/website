/* navbar custom */
$(".navbar-toggler").click(function() {
  if( $("#navbar").hasClass('navbar-arius-active') ){
    $("#navbar").removeClass('navbar-arius-active');
    $(".animate-toggler").css({"transition":"0.8s", "transform": "rotate(0deg)"});
  } else {
    $("#navbar").addClass('navbar-arius-active');
    $(".animate-toggler").css({"transition":"1.2s", "transform": "rotate(180deg)"});
  }
})