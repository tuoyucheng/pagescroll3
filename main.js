$(function () {
  //boxにマウスを乗せると、
  $('.box').on('mouseover', function () {
    //showをfirstから消す。
    $('#first').removeClass('show');
    //showにsecondを追加する。
    $('#second').addClass('show');
  });
  //boxからマウスが外れると、
  $('.box').on('mouseout', function () {
    //showにfirstが追加され、
    $('#first').addClass('show');
    //firstが消される。
    $('#second').removeClass('show');
  });
})