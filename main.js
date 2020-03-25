$(document).ready(function() {

var h = $(window).height();

$('.hidden').css('display','none');
$('.pleasescroll').css('display','none');
$('#showloading').height(h).css('display','block');

});
$('head').append(
'<style>.hidden{display:none;}'
);

$(function(){

$(window).scroll(function (){

  $('.scroll').each(function(){
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight + 300){
      $(this).addClass('scrollin');
    }
  });
});
});
WebFont.load(
{
  custom:
  {
    families: ['NotoSerifCJKjp']
  },
  active: function()
  {


    $('#showloading').css('display','none');
    $('.hidden').delay(400).fadeIn(1000);
    $('.pleasescroll').delay(1500).fadeIn("slow");

    
  },
});
