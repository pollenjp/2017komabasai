// JavaScript Document
$(function() {
  $('.index-btn').click(function() {
    $('.activeSlide').removeClass('activeSlide');
    var clickedIndex = $('.index-btn').index($(this));
    $('.slide').eq(clickedIndex).addClass('activeSlide');
    
  });
});