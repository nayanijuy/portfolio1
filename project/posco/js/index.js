$(function () {
  ///////////////////////////// header /////////////////////////////
  // 스크롤 다운시 헤더 숨김, 스크롤 업시 헤더 보이기
  $("html, body").on("mousewheel DOMMouseScroll", (e) => {
    let wheel = e.originalEvent.wheelDelta;
    // console.log(wheel);
    if (wheel > 0) {
      //스크롤 올릴때
      $("header").show();
    } else {
      //스크롤 내릴때
      $("header").hide();
    }
  });

  // 전체메뉴 열기
  $(".btn_menu").click((e) => {
    e.preventDefault();
    $(".menu").show();
    $("html,body").addClass("stop_scroll");
  });

  // 전체메뉴 닫기
  $(".btn_close").click((e) => {
    e.preventDefault();
    $(".menu").hide();
    $("html,body").removeClass("stop_scroll");
  });

  // 모바일일때 전체메뉴 상단 언어영역 불러오기
  menuLang();
  $(window).resize(() => {
    menuLang();
  });

  function menuLang() {
    if ($(window).width() < 980) {
      $(".menu .header_area .wrap>ul").show();
      $(".menu .header_area .wrap>ul").html($(".lang>ul").html());
    } else {
      $(".menu .header_area .wrap>ul").hide();
    }
  }

  // 모바일 원뎁스 클릭시 투뎁스 보이기
  showdept2();
  $(window).resize(() => {
    showdept2();
  });
  function showdept2() {
    if ($(window).width() < 980) {
      $(".dept2").hide();
      $(".menu .dept1 > li > a").click(function (e) {
        e.preventDefault();
        $(".dept2").hide();
        $(this).siblings(".dept2").toggle();
        $(".dept2").not($(this).siblings(".dept2")).hide();
      });
    } else if ($(window).width() >= 980) {
      $(".dept2").show();
    }
  }

  // 언어 선택영역 열고 닫기
  $(".btn_lang").click((e) => {
    e.preventDefault();
    $(".lang>ul").toggle();
  });

  // 스크롤top이 section1일때 header색은 투명, 평소에는 흰색
  $(window).scroll(() => {
    let scrollTop = $(window).scrollTop();
    let section1Height = $(".section1").height();

    if (scrollTop > section1Height / 2) {
      $("header").addClass("change");
      $("header .btn_menu, .btn_menu>span").addClass("change");
      $("header .change").css("display", "block");
      $("header .basic").css("display", "none");
    } else {
      $("header").removeClass("change");
      $("header .btn_menu, .btn_menu>span, btn_menu>span>:before, .btn_menu>span>:after").removeClass("change");
      $("header .change").css("display", "none");
      $("header .basic").css("display", "block");
    }
  });

  ///////////////////////////// footer /////////////////////////////
  // footer .link_area .group링크 열고 닫기
  $(".group>a").click((e) => {
    e.preventDefault();
    $(".group .dept1").toggle();
  });

  // footer Top버튼 section1 지나면 보이기
  $(window).scroll(() => {
    let windowTop = $(window).scrollTop();
    let section1Height = $(".section1").height();

    if (windowTop > section1Height) {
      $(".btn_top").clearQueue().animate({ right: 30 }, 300);
    } else if (windowTop <= section1Height) {
      $(".btn_top").clearQueue().animate({ right: -100 }, 300);
    }
  });

  // Top버튼 누르면 최상단으로 이동, 스크롤탑이 0일때 헤더보이기/////////?
  $(".btn_top").click((e) => {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 300);
    console.log(scrollTop);
  });

  if ($(window).scrollTop() == 0) {
    $("header").show();
  }

  ///////////////////////////// section2 /////////////////////////////왜 리사이징 안됨?
  section2();
  $(window).resize(() => {
    section2();
  });

  function section2() {
    $(window).scroll(() => {
      let windowTop = $(window).scrollTop();
      let section1Height = $(".section1").height();

      if ($(window).width() >= 940) {
        //pc
        if (windowTop > (section1Height * 2) / 3) {
          $(".section2 .text").animate({ top: "60%" }, 800);
        }
      }

      if ($(window).width() < 940) {
        //mo
        if (windowTop > section1Height / 2) {
          $(".section2 .text").animate({ top: "40%" }, 800);
        }
      }
    });
  }

  ///////////////////////////// section3 ///////////////////////////// 수정해야함 무한 슬라이드가 되지만 넘어가는 것들이 제각각임........
  // position 사용으로 밀려오는 다음내용 방지
  section3Height();
  $(window).resize(() => {
    section3Height();
  });
  function section3Height() {
    let cardwrapWidth = $(".section3 .card_wrap").width();
    $(".section3 .card_wrap").css("height", (cardwrapWidth * 2) / 3);
  }

  //슬라이드 position 활용
  let click = 0;
  const totalCards = $(".section3 .card").length;

  // 다음버튼 눌렀을때
  $(".section3 .btn .next").click(() => {
    if (click < totalCards - 1) {
      $(".section3 .card").eq(click).clearQueue().animate({ left: "-100%" }, 600);
      $(".section3 .card")
        .eq(click + 1)
        .clearQueue()
        .animate({ left: 0 }, 600);
      $(".section3 .card")
        .eq(click + 2)
        .css("left", "200%")
        .clearQueue()
        .animate({ left: "100%" }, 600);

      click++;
      //console.log(click);
    } else if (click == totalCards - 2) {
      $(".section3 .card").eq(0).css("left", "200%").clearQueue().animate({ left: "100%" }, 600);
      //console.log(click);
    } else if (click == totalCards - 1) {
      $(".section3 .card").eq(click).clearQueue().animate({ left: "-100%" }, 600);
      click = 0;
      $(".section3 .card").eq(click).css("left", "100%").clearQueue().animate({ left: 0 }, 600);
      $(".section3 .card")
        .eq(click + 1)
        .css("left", "200%")
        .clearQueue()
        .animate({ left: "100%" }, 600);
      //console.log(click);
    }
  });

  // 이전버튼 눌렀을때
  $(".section3 .btn .prev").click(() => {
    if (click > 0) {
      $(".section3 .card").eq(click).clearQueue().animate({ left: "+100%" }, 600);
      $(".section3 .card")
        .eq(click - 1)
        .clearQueue()
        .animate({ left: 0 }, 600);
      $(".section3 .card")
        .eq(click - 2)
        .css("left", "-200%")
        .clearQueue()
        .animate({ left: "-100%" }, 600);
      click--;
      //console.log(click);
    } else if (click == 0) {
      $(".section3 .card").eq(click).clearQueue().animate({ left: "+100%" }, 600);
      click = totalCards - 1;
      $(".section3 .card").eq(click).css("left", "-100%").clearQueue().animate({ left: 0 }, 600);
      $(".section3 .card")
        .eq(click - 1)
        .css("left", "-200%")
        .clearQueue()
        .animate({ left: "-100%" }, 600);

      //console.log(click);
    }
  });

  ///////////////////////////// section5 /////////////////////////////
  //마우스 호버시 크기가 커짐 //pc만
  section5();
  $(window).resize(() => {
    section5();
  });

  function section5() {
    if ($(window).width() >= 950) {
      //pc만
      $(".ir").mouseenter(() => {
        $(".ir").clearQueue().animate({ width: "55%" }, 600);
        $(".recruitment").clearQueue().animate({ width: "45%" }, 600);
      });
      $(".recruitment").mouseenter(() => {
        $(".recruitment").clearQueue().animate({ width: "55%" }, 600);
        $(".ir").clearQueue().animate({ width: "45%" }, 600);
      });
      $(".ir,.recruitment").mouseleave(() => {
        $(".ir,.recruitment").clearQueue().animate({ width: "50%" }, 600);
      });
    } else {
      $(".ir,.recruitment").off();
      $(".ir,.recruitment").css("width", "100%");
    }
  }
});
