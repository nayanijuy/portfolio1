$(function () {
  // 모바일 레이아웃 변경
  $(".header_top").prepend($(".mo_menu_btn").html());
  $(".footer_bottom .family").html($(".footer_top .family").html());
  $(".gnb_wrap .quick_menu_desc").html($("#quick_menu .quick_menu_desc").html());
  $(".gnb_wrap .membership").html($(".util .membership").html());

  // pc에서 우측 중앙에 따라다니는 퀵메뉴 만들기
  $(window).scroll(function () {
    let scrollTop = $(window).scrollTop();
    let windowHeight = $(window).height() / 2;

      $("#quick_menu")
        .stop()
        .animate({ top: +scrollTop + windowHeight + "px" }, 300);
    if(scrollTop > 0){
      $("#quick_menu").css('left','91%')
    }else{
      $("#quick_menu").css('left','150%')
    };
  });

  // 탑버튼
  $(".top_btn").click(function (e) {
    e.preventDefault();

    $(window).scrollTop(0);
  });

  // 모바일 캠퍼스 선택창 열고 닫기
  let mo_tit_click = 0;
  $(".mo_tit").click(function (e) {
    e.preventDefault();
    mo_tit_click++;

    $(".hide").toggle();

    if (mo_tit_click % 2 == 1) {
      //클릭수가 홀수일때
      $(".campus_wrap").addClass("on").css("z-index", "110");
      $(".campus_wrap .campus").css("padding", "5px 10px 5px");
    } else {
      //클릭수가 짝수일때
      $(".campus_wrap").removeClass("on").css("z-index", "10");
      $(".campus_wrap .campus").css("padding", "0");
    }
  });

  // 모바일 메뉴 열고 닫기
  let mo_menu_btn_click = 0;
  let windowWidth = $(window).width();

  $(".menu").click(function () {
    mo_menu_btn_click++;
    if (mo_menu_btn_click % 2 == 1) {
      //클릭수가 홀수일때
      $(".mo_gnb_bg").show();
      $("body").css("overflow", "hidden");
    } else {
      //클릭수가 짝수일때
      $(".mo_gnb_bg").hide();
      $("body").css("overflow", "auto");
    }
  });

  // 모바일 메뉴 dept2 열고 닫기
  if (windowWidth < 1280) {
    $(".gnb.dept1>li>a")
      .not(".gnb.dept1>li:last-child>a")
      .click(function (e) {
        e.preventDefault();

        $(this).siblings(".dept2").toggle();
        $(".dept2").not($(this).siblings(".dept2")).hide();
      });
  }

  $(window).resize(function () {
    windowWidth = $(window).width();

    if (windowWidth < 1280) {
      $(".gnb.dept1>li>a")
        .not(".gnb.dept1>li:last-child>a")
        .click(function (e) {
          e.preventDefault();

          $(this).siblings(".dept2").toggle();
          $(".dept2").not($(this).siblings(".dept2")).hide();
        });
    }
  });

  // 메인배너 - swiper
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // 검색창 삭제버튼
  $('.quik_contents .search_area .del').click(function(e){
    e.preventDefault();

    $('.quik_contents .search_area input').val('');
  });

  // 포트폴리오 섹션 탭
  $(".porfolio_area .tab li a").click(function (e) {
    e.preventDefault();

    // 탭 활성화 표시
    $(".porfolio_area .tab li a").removeClass("on");
    $(this).addClass("on");

    // 탭과 리스트 연결하기
    $(".portfolio_desc .desc").removeClass("on");
    $(".portfolio_desc .desc").eq($(this).parent().index()).addClass("on");
  });

  // 첫카드 빼고 다른카드 누를경우 첫카드랑 이미지 교체
  let memory = '';
  $('.portfolio .portfolio_desc .desc li a').click(function(e){
    e.preventDefault();

    let click_img = $(this).children('img').attr('src');
    let big_img = $(this).closest('li').siblings('li').first().find('a img').attr('src');

    memory = big_img;
    $(this).closest('li').siblings('li').first().find('a img').attr('src',click_img);
    $(this).children('img').attr('src',memory);
  });

  // 첫카드 빼고 카드 너비값 대비 높이값 주기.
  let cardWidth = $(".portfolio_desc .desc li:nth-child(2)").width();
  $(".portfolio_desc ul li:not(:first-child)").css("height", (cardWidth * 2) / 3);

  $(window).resize(function () {
    let cardWidth = $(".portfolio_desc .desc li:nth-child(2)").width();
    $(".portfolio_desc ul li:not(:first-child)").css("height", (cardWidth * 2) / 3);
  });

  // 포트폴리오 수강평
  $(window).scroll(function () {
    let scrollTop = $(window).scrollTop();
    let main_banner_Height = $(".main_banner").height();
    let quik_contents_Height = $(".quik_contents").height();
    let title_wrap_Height = $(".title_wrap").height();
    let porfolio_area_Height = $(".porfolio_area").height() / 3;

    if (scrollTop > main_banner_Height + quik_contents_Height + title_wrap_Height + porfolio_area_Height) {
      $(".course_review .review li").each(function () {
        const delay = Math.random() * 1000;
        $(this)
          .delay(delay)
          .queue(function (next) {
            $(this).css("transform", "translateY(0px)");
            next();
          });
      });
    }
  });

  //취업관련 섹션 - 인터뷰
  let cardHeight = $(".employment .job_interview .card:first-child").height();
  $(".employment .job_interview .cards_wrap").css("height", cardHeight);
  if (windowWidth >= 1280) {
    $(".employment .congratulations .list").css("height", cardHeight);
  }

  $(window).resize(function () {
    cardHeight = $(".employment .job_interview .card:first-child").height();
    windowWidth = $(window).width();
    $(".employment .job_interview .cards_wrap").css("height", cardHeight);
    if (windowWidth >= 1280) {
      $(".employment .congratulations .list").css("height", cardHeight);
    } else {
      $(".employment .congratulations .list").css("height", "auto");
    }
  });

  $(".employment .job_interview .card").hide();
  $(".employment .job_interview .card:first-child").show();
  let click = 0;
  let lastclick = 0;
  let length = $(".employment .job_interview .card").length;

  $(".job_interview .next")
    .clearQueue()
    .click(function (e) {
      e.preventDefault();

      click++;
      if (click == length) {
        click = 0;
        $(".employment .job_interview .card").eq(lastclick).fadeOut();
        $(".employment .job_interview .card").eq(0).fadeIn();
      }

      $(".employment .job_interview .card").eq(lastclick).fadeOut().next().fadeIn();
      lastclick = click;
    });

  $(".job_interview .prev")
    .clearQueue()
    .click(function (e) {
      e.preventDefault();

      click--;
      if (click == -1) {
        click = length - 1;
        $(".employment .job_interview .card").eq(lastclick).fadeOut();
        $(".employment .job_interview .card").eq(click).fadeIn();
      }

      $(".employment .job_interview .card").eq(lastclick).fadeOut().prev().fadeIn();
      lastclick = click;
    });

    setInterval(function(){
      $(".job_interview .next")
      .clearQueue()
      .click()
        },4000)

  //취업관련 섹션 - 공지사항 ////////////////////////////////////슬라이드시 덜컹거림
  function slide_vertical() {
    $(".mask .list")
      .stop()
      .animate({ marginTop: -20 }, 600, function () {
        $(this).css("margin-top", "0").append($(".mask .list li:first-child"));
      });
  }

  let clear;

  function startSlide() {
    clear = setInterval(slide_vertical, 2500);
  }

  function checkWindowSize() {
    clearInterval(clear);

    if (windowWidth < 1280) {
      startSlide();
    }
  }

  // 초기 실행
  checkWindowSize();

  // 리사이즈 이벤트 리스너
  $(window).resize(checkWindowSize);

  // 패밀리사이트 눌렀을 때 열고 닫기
  let family_click = 0;
  $(".family_btn").click(function (e) {
    e.preventDefault();
    family_click++;

    if (family_click % 2 == 1) {
      //클릭수가 홀수일때
      $(".link").show();
    } else {
      //클릭수가 짝수일때
      $(".link").hide();
    }
  });
});
