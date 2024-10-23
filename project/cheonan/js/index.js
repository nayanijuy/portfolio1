/* 본문 제이쿼리 */

$(function () {
  ///////////////////////////////////////////////////////section1-banner
  // 1. 아이템의 너비값
  let itemWidth1 = $(".section1 .main_banner .banner_item:eq(0)").width();
  let itemLength1 = $(".section1 .main_banner .banner_item").length;
  let cntInx1 = 0;
  let nowInx1 = 1;

  // 2. 다음버튼 클릭 이벤트
  $(".section1 .main_banner .btn_next")
    .clearQueue()
    .click(function () {
      moveToNext1();
    });

  // 3. 이전버튼 클릭 이벤트
  $(".section1 .main_banner .btn_prev")
    .clearQueue()
    .click(function () {
      moveToPrev1();
    });

  // 4. 윈도우 리사이즈 이벤트
  $(window).resize(() => {
    itemWidth1 = $(".section1 .main_banner .banner_item:eq(0)").width();
  });

  // 무한 슬라이드 애니메이션 함수
  function moveToNext1() {
    if (cntInx1 >= itemLength1 - 1) {
      $(".section1 .main_banner .banner_item").css("transform", `translateX(0)`);
      cntInx1 = 0;
    } else {
      cntInx1++;
      $(".section1 .main_banner .banner_item").css("transform", `translateX(-${itemWidth1 * cntInx1}px)`);
    }
    nowInx1 = cntInx1 + 1;
    $(".section1 .main_banner .now").text(nowInx1);
  }

  function moveToPrev1() {
    if (cntInx1 <= 0) {
      $(".section1 .main_banner .banner_item").css("transform", `translateX(-${itemWidth1 * (itemLength1 - 1)}px)`);
      cntInx1 = itemLength1 - 1;
    } else {
      cntInx1--;
      $(".section1 .main_banner .banner_item").css("transform", `translateX(-${itemWidth1 * cntInx1}px)`);
    }
    nowInx1 = cntInx1 + 1;
    $(".section1 .main_banner .now").text(nowInx1);
  }

  // 5. 자동실행
  let autoPlay1 = setInterval(moveToNext1, 2000);

  // 6. 마우스가 배너구역에 진입시 정지 & 마우스가 배너구역을 떠나면 자동실행
  $(".main_banner")
    .mouseenter(() => {
      clearInterval(autoPlay1);
    })
    .mouseleave(() => {
      autoPlay1 = setInterval(moveToNext1, 2000);
    });

  // 7. 페이저
  $(".section1 .main_banner .now").text(nowInx1);
  $(".section1 .main_banner .total").text(itemLength1);

  ///////////////////////////////////////////////////////section1 - news 탭메뉴
  // 1. 탭활성화 표시
  $(".section1 .news .tab li a")
    .not(".section1 .news .tab li:nth-child(3) a")
    .click(function (e) {
      e.preventDefault();

      $(this).addClass("on");
      $(".section1 .news .tab li a").not(this).removeClass("on");
    });

  // 2. 탭 연결
  $(".section1 .news .tab li:nth-child(1) a").click(function () {
    $(".section1 .news .items>li").hide();
    $(".section1 .news .items li:nth-child(1)").show();
  });
  $(".section1 .news .tab li:nth-child(2) a").click(function () {
    $(".section1 .news .items>li").hide();
    $(".section1 .news .items li:nth-child(2)").show();
  });
  $(".section1 .news .tab li:nth-child(4) a").click(function () {
    $(".section1 .news .items>li").hide();
    $(".section1 .news .items li:nth-child(3)").show();
  });
  $(".section1 .news .tab li:nth-child(5) a").click(function () {
    $(".section1 .news .items>li").hide();
    $(".section1 .news .items li:nth-child(4)").show();
  });
  ///////////////////////////////////////////////////////section2-banner
  // 1. 아이템의 너비값
  let itemWidth3 = $(".section2 .part_info .slide_area .card:eq(0)").width() + 100;
  let itemLength3 = $(".section2 .part_info .card").length;
  let cntInx3 = 0;
  let nowInx3 = 1;

  // 2. 다음버튼 클릭 이벤트
  $(".section2 .part_info .btns .btn_next")
    .clearQueue()
    .click(function () {
      moveToNext3();
    });

  // 3. 이전버튼 클릭 이벤트
  $(".section2 .part_info .btns .btn_prev")
    .clearQueue()
    .click(function () {
      moveToPrev3();
    });

  // 4. 윈도우 리사이즈 이벤트
  $(window).resize(() => {
    itemWidth3 = $(".section2 .part_info .card:eq(0)").width() + 100;
  });

  // 무한 슬라이드 애니메이션 함수
  function moveToNext3() {
    if (cntInx3 >= itemLength3 - 1) {
      $(".section2 .card").css("transform", `translateX(0)`);
      cntInx3 = 0;
    } else {
      cntInx3++;
      $(".section2 .card").css("transform", `translateX(-${itemWidth3 * cntInx3}px)`);
    }
    nowInx3 = cntInx3 + 1;
    $(".section2 .part_info .now").text(nowInx3);
  }

  function moveToPrev3() {
    if (cntInx3 <= 0) {
      $(".section2 .card").css("transform", `translateX(-${itemWidth3 * (itemLength3 - 1)}px)`);
      cntInx3 = itemLength3 - 1;
    } else {
      cntInx3--;
      $(".section2 .card").css("transform", `translateX(-${itemWidth3 * cntInx3}px)`);
    }
    nowInx3 = cntInx3 + 1;
    $(".section2 .part_info .now").text(nowInx3);
  }

  // 5. 자동실행
  let autoPlay3 = setInterval(moveToNext3, 2000);

  // 6. 마우스가 배너구역에 진입시 정지 & 마우스가 배너구역을 떠나면 자동실행
  $(".slide_area")
    .mouseenter(() => {
      clearInterval(autoPlay3);
    })
    .mouseleave(() => {
      autoPlay3 = setInterval(moveToNext3, 2000);
    });

  ///////////////////////////////////////////////////////section2-banner
  // 1. 아이템의 너비값
  let itemWidth2 = $(".section2 .sub_banner .banner_item:eq(0)").width();
  let itemLength2 = $(".section2 .sub_banner .banner_item").length;
  let cntInx2 = 0;
  let nowInx2 = 1;

  // 2. 다음버튼 클릭 이벤트
  $(".section2 .sub_banner .control .btn_next")
    .clearQueue()
    .click(function () {
      moveToNext2();
    });

  // 3. 이전버튼 클릭 이벤트
  $(".section2 .sub_banner .control .btn_prev")
    .clearQueue()
    .click(function () {
      moveToPrev2();
    });

  // 4. 윈도우 리사이즈 이벤트
  $(window).resize(() => {
    itemWidth2 = $(".section2 .sub_banner .banner_item:eq(0)").width();
  });

  // 무한 슬라이드 애니메이션 함수
  function moveToNext2() {
    if (cntInx2 >= itemLength2 - 1) {
      $(".section2 .banner_item").css("transform", `translateX(0)`);
      cntInx2 = 0;
    } else {
      cntInx2++;
      $(".section2 .banner_item").css("transform", `translateX(-${itemWidth2 * cntInx2}px)`);
    }
    nowInx2 = cntInx2 + 1;
    $(".section2 .sub_banner .now").text(nowInx2);
  }

  function moveToPrev2() {
    if (cntInx2 <= 0) {
      $(".section2 .banner_item").css("transform", `translateX(-${itemWidth2 * (itemLength2 - 1)}px)`);
      cntInx2 = itemLength2 - 1;
    } else {
      cntInx2--;
      $(".section2 .banner_item").css("transform", `translateX(-${itemWidth2 * cntInx2}px)`);
    }
    nowInx2 = cntInx2 + 1;
    $(".section2 .sub_banner .now").text(nowInx2);
  }

  // 5. 자동실행
  let autoPlay2 = setInterval(moveToNext2, 2000);

  // 6. 마우스가 배너구역에 진입시 정지 & 마우스가 배너구역을 떠나면 자동실행
  $(".sub_banner")
    .mouseenter(() => {
      clearInterval(autoPlay2);
    })
    .mouseleave(() => {
      autoPlay2 = setInterval(moveToNext2, 2000);
    });

  // 7. 페이저
  $(".section2 .sub_banner .now").text(nowInx2);
  $(".section2 .sub_banner .total").text(itemLength2);

  ///////////////////////////////////////////////////////section3 - 메뉴 보이고 안보이고!
  let quicklink_length = $(".section3 .quicklink li").length;
  let windowWidth = $(window).width();

  if (windowWidth < 721) {
    for (let i = 6; i <= quicklink_length; i++) {
      $(".section3 .quicklink li").eq(i).hide();
    }

    $(".section3 .quicklink_open").click(function () {
      $(".section3 .quicklink_open").hide();
      $(".section3 .quicklink_close").show();

      for (let i = 6; i <= quicklink_length; i++) {
        $(".section3 .quicklink li").eq(i).show();
      }
    });
    $(".section3 .quicklink_close").click(function () {
      $(".section3 .quicklink_open").show();
      $(".section3 .quicklink_close").hide();

      for (let i = 6; i <= quicklink_length; i++) {
        $(".section3 .quicklink li").eq(i).hide();
      }
    });
  }else if(windowWidth >= 721 && windowWidth < 990){
    for (let i = 8; i <= quicklink_length; i++) {
      $(".section3 .quicklink li").eq(i).hide();
    }

    $(".section3 .quicklink_open").click(function () {
      $(".section3 .quicklink_open").hide();
      $(".section3 .quicklink_close").show();

      for (let i = 8; i <= quicklink_length; i++) {
        $(".section3 .quicklink li").eq(i).show();
      }
    });
    $(".section3 .quicklink_close").click(function () {
      $(".section3 .quicklink_open").show();
      $(".section3 .quicklink_close").hide();

      for (let i = 8; i <= quicklink_length; i++) {
        $(".section3 .quicklink li").eq(i).hide();
      }
    });
  }else if(windowWidth >= 990){
    for (let i = 6; i <= quicklink_length; i++) {
      $(".section3 .quicklink li").eq(i).hide();
    }

    $(".section3 .quicklink_open").click(function () {
      $(".section3 .quicklink_open").hide();
      $(".section3 .quicklink_close").show();

      for (let i = 6; i <= quicklink_length; i++) {
        $(".section3 .quicklink li").eq(i).show();
      }
    });
    $(".section3 .quicklink_close").click(function () {
      $(".section3 .quicklink_open").show();
      $(".section3 .quicklink_close").hide();

      for (let i = 6; i <= quicklink_length; i++) {
        $(".section3 .quicklink li").eq(i).hide();
      }
    });
  }

  $(window).resize(function (){
  if (windowWidth < 721) {
    for (let i = 6; i <= quicklink_length; i++) {
      $(".section3 .quicklink li").eq(i).hide();
    }

    $(".section3 .quicklink_open").click(function () {
      $(".section3 .quicklink_open").hide();
      $(".section3 .quicklink_close").show();

      for (let i = 6; i <= quicklink_length; i++) {
        $(".section3 .quicklink li").eq(i).show();
      }
    });
    $(".section3 .quicklink_close").click(function () {
      $(".section3 .quicklink_open").show();
      $(".section3 .quicklink_close").hide();

      for (let i = 6; i <= quicklink_length; i++) {
        $(".section3 .quicklink li").eq(i).hide();
      }
    });
  }else if(windowWidth >= 721 && windowWidth < 990){
    for (let i = 8; i <= quicklink_length; i++) {
      $(".section3 .quicklink li").eq(i).hide();
    }

    $(".section3 .quicklink_open").click(function () {
      $(".section3 .quicklink_open").hide();
      $(".section3 .quicklink_close").show();

      for (let i = 8; i <= quicklink_length; i++) {
        $(".section3 .quicklink li").eq(i).show();
      }
    });
    $(".section3 .quicklink_close").click(function () {
      $(".section3 .quicklink_open").show();
      $(".section3 .quicklink_close").hide();

      for (let i = 8; i <= quicklink_length; i++) {
        $(".section3 .quicklink li").eq(i).hide();
      }
    });
  }else if(windowWidth >= 990){
    for (let i = 6; i <= quicklink_length; i++) {
      $(".section3 .quicklink li").eq(i).hide();
    }

    $(".section3 .quicklink_open").click(function () {
      $(".section3 .quicklink_open").hide();
      $(".section3 .quicklink_close").show();

      for (let i = 6; i <= quicklink_length; i++) {
        $(".section3 .quicklink li").eq(i).show();
      }
    });
    $(".section3 .quicklink_close").click(function () {
      $(".section3 .quicklink_open").show();
      $(".section3 .quicklink_close").hide();

      for (let i = 6; i <= quicklink_length; i++) {
        $(".section3 .quicklink li").eq(i).hide();
      }
    });
  }
});
  ///////////////////////////////////////////////////////section5 - 슬라이드
  // 1. 아이템의 너비값
  let itemWidth4 = $(".section5 .report ul li:eq(0)").width() + 10;
  let itemLength4 = $(".section5 .report ul li").length;
  let cntInx4 = 0;
  let nowInx4 = 1;

  // 2. 다음버튼 클릭 이벤트
  $(".section5 .report .btn_next")
    .clearQueue()
    .click(function () {
      moveToNext4();
    });

  // 3. 이전버튼 클릭 이벤트
  $(".section5 .report .btn_prev")
    .clearQueue()
    .click(function () {
      moveToPrev4();
    });

  // 4. 윈도우 리사이즈 이벤트
  $(window).resize(() => {
    itemWidth4 = $(".section5 .report ul li:eq(0)").width() + 10;
  });

  // 무한 슬라이드 애니메이션 함수
  function moveToNext4() {
    if (cntInx4 >= itemLength4 - 1) {
      $(".section5 .report ul li").css("transform", `translateX(0)`);
      cntInx4 = 0;
    } else {
      cntInx4++;
      $(".section5 .report ul li").css("transform", `translateX(-${itemWidth4 * cntInx4}px)`);
    }
    nowInx4 = cntInx4 + 1;
    $(".section5 .report .now").text(nowInx4);
  }

  function moveToPrev4() {
    if (cntInx4 <= 0) {
      $(".section5 .report ul li").css("transform", `translateX(-${itemWidth4 * (itemLength4 - 1)}px)`);
      cntInx4 = itemLength4 - 1;
    } else {
      cntInx4--;
      $(".section5 .report ul li").css("transform", `translateX(-${itemWidth4 * cntInx4}px)`);
    }
    nowInx4 = cntInx4 + 1;
    $(".section5 .report .now").text(nowInx4);
  }

  ///////////////////////////////////////////////////////section6 - 탭
  if (windowWidth >= 530) {
    $(".section6 .tab a")
      .clearQueue()
      .click(function (e) {
        e.preventDefault();

        // 1. 탭활성화 표시
        $(this).addClass("on");
        $(".section6 .tab a").not(this).removeClass("on");

        // 2. 탭 영역 연결
        $(".section6 .items_wrap>li").eq($(this).parent().index()).show().siblings().hide();
      });
  }

  $(window).resize(function () {
    let windowWidth = $(window).width();

    if (windowWidth >= 530) {
      $(".section6 .tab a")
        .clearQueue()
        .click(function (e) {
          e.preventDefault();

          // 1. 탭활성화 표시
          $(this).addClass("on");
          $(".section6 .tab a").not(this).removeClass("on");

          // 2. 탭 영역 연결
          $(".section6 .items_wrap>li").eq($(this).parent().index()).show().siblings().hide();
        });
    }
  });
  ///////////////////////////////////////////////////////section6 - 슬라이드
  $(".section6 ul.items").css("height", $(".section6 .items li:first-child").height());
});
