$(function () {
  // 해더 기본형
  $(".gnb_wrap").addClass("header_change");
  $(".deps1>li>a").addClass("header_change");
  $(".hoam-emblem path").addClass("header_change");

  // 스크롤 이벤트
  scrollEvent();
  $(window).scroll(() => {
    scrollEvent()
  });
  function scrollEvent(){
    if ($(window).scrollTop() == 0) {
      $(".gnb_wrap").addClass("header_change");
      $(".hoam-emblem>path").addClass("header_change");
    }else{
        $(".gnb_wrap").removeClass("header_change");
        $(".hoam-emblem>path").removeClass("header_change");
    }
};

  // 설정메뉴
  $(".custom_btn").click(function () {
    $(".custom").clearQueue().toggle();
  });

  // 전체메뉴
  // 1. html 끌어오기
  const gnb = $(".gnb").html();
  const linkMenu = $(".link_menu").html();
  const menuLogo = $(".hoam-logo").html();
  const utils = $(".utils").html();

  //console.log(linkMenu);
  $(".menu_gnb").html(gnb);
  $(".menu_link_menu").html(linkMenu);
  $(".menu_logo").html(menuLogo);
  $(".menu_utils").html(utils);

  // 2. 토글(열고 닫고)
  $(".menu_btn").click(function () {
    $(".bar").clearQueue().toggleClass("x", "bar");
    $(".menu").clearQueue().toggle("");
  });

  // 컨테이너 높이 주기
  let heightMain = $(".main_wrap").height();
  let heightSub = $(".main_sub").height();
  $(".container").css("height", heightMain + heightSub);

  $(window).resize(() => {
    let heightMain = $(".main_wrap").height();
    let heightSub = $(".main_sub").height();  
    $(".container").css("height", heightMain + heightSub);
  });
});
