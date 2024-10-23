/* 제이쿼리 */
$(function () {
  ///////////////////////////////////////////////// 모바일 헤더
  // 검색장 열기
  $(".search_open_btn").click(function () {
    $(".search_wrap").show();
  });
  // 검색창 닫기
  $(".search_close_btn").click(function () {
    $(".search_wrap").hide();
  });
  // 메뉴 영역의 상단 링크 끌어오기
  $(".menu_wrap").prepend($(".tnb_wrap").html());
  // 메뉴 열기
  $(".menu_btn").click(function () {
    $(".gnb_wrap").show();
  });
  // 메뉴 닫기
  $(".menu_close_btn").click(function () {
    $(".gnb_wrap").hide();
  });
  // 원뎁스 클릭시 링크 x, 우측에 하위메뉴보임
  $(".dept1 > li > a").click(function (e) {
    e.preventDefault();
    $(".dept2").hide();
    $(this).siblings(".dept2").show();
  });
  // 투뎁스 클릭시 링크 x, 쓰리뎁스 보임.
  $(".dept2 > li > a").click(function (e) {
    e.preventDefault();
    $(this).siblings(".dept3").toggle();
    $(".dept3").not($(this).siblings(".dept3")).hide();
  });
});
