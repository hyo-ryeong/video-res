/*스크롤이 되면 헤더 배경색이 들어감*/
$(window).scroll(function(){
  $('#header_wrap').addClass('scroll');

  if($(window).scrollTop() == 0){
    $('#header_wrap').removeClass('scroll');
  }
});

//scrollTop()  -스크롤바 위치를 알아오거나 정함

/* 햄버거 메뉴 */
$('.m_menuBtn').click(function(){
  $(this).toggleClass('on');

  if($(this).hasClass('on')){
  $('.menu_conatainer').fadeToggle();
  }
  else {
    $('.menu_conatainer').fadeOut();
    $('body').css({'overflow':'auto'})
  }

});
  $(window).resize(function(){
    let winW =  $(window).width();  //브라우저의 가로길이를 변수에
    console.log('브라우저의 가로길이는? ', winW);
  
    if( winW > 1023 &&  $('.menu_conatainer').is(':hidden')){
      console.log('.menu_conatainer가 안보여요!!!');
      $('.menu_conatainer').removeAttr('style');
    }
});