$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav: true,
    dots:false,
    items:1,
    responsiveClass:true,
})  
$(".toggle-password").click(function() {

  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
} else {
    input.attr("type", "password");
}
});
$(document).ready(function(){
  $(".reading-sub-heading").click(function(){
    $(this).parent().toggleClass("accordion-sub");
    $(this).siblings(".reading-sub-paragarph").slideToggle("slow");
});
});
$(".fs_next_btn").click(function() {
    $(this).parents(".multistep-box.active-btn").removeClass('active-btn');
    $(this).parents(".multistep-box").next().addClass('active-btn');
    $("#progress_header li.active").next().addClass('active');
});
$(".previous").click(function() {
    $(this).parents(".multistep-box").prev(".multistep-box").toggle();
});