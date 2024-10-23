$(function () {
  console.log('nijuy is reday! yap! ୧(•̀ө•́)୨');
  $(".head-right .inbox").addClass("active");
  $(".pf-menu li").removeClass("active");
  $(".pf02").hide();
  $(".pf03").hide();
  $(".pf04").hide();
  $(".pf05").hide();
  $(".pf06").hide();

  let swiperInstances = []; // 스와이퍼 인스턴스를 저장할 배열

  // 포트폴리오 메뉴
  $(".pf-menu li:first-child").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    $(".head-right .inbox").removeClass("active");
    $("body").addClass("bg-on");
    $(".pf01").show();
    $(".pf02").hide();
    $(".pf03").hide();
    $(".pf04").hide();
    $(".pf05").hide();
    $(".pf06").hide();
    $(".aboutme").hide();

    // .pf01 CSS 초기화
    $(".pf01 > ul > li").removeClass("show"); // 모든 show 클래스 제거
    $(".pf01 .swiper-container").css("height", "auto"); // 높이 초기화
  });

  //스와이퍼 초기화
  swiperInstances.forEach((swiper) => {
    if (swiper && typeof swiper.destroy === "function" && swiper.initialized) {
      swiper.destroy();
    }
  });
  // 배열 초기화
  swiperInstances = [];

  // 타이핑 스크립트
  let text = "본 포트폴리오에 포함된 모든 프로젝트는 학습 및 기술적 연습을 목적으로 하며, 상업적 사용을 위한 것이 아닙니다. 원작자의 권리를 존중하며, 해당 프로젝트는 개인 포트폴리오에만 사용됩니다.";
  let inx = 0;

  function notice() {
    if (inx < text.length) {
      $(".notice .txt").append(text.charAt(inx));
      inx++;
      $(".notice .cursor").css("left", $(".notice span").width() + "px");
      setTimeout(notice, 150);
    } else {
      setTimeout(function () {
        $(".notice").fadeOut(700);
      }, 2500);
    }
  }

  notice();

  // .pf01 - 웹사이트 리디자인(01)
  const swiper1 = new Swiper(".pf01 .swiper-container", {
    loop: false,
    slidesPerView: 4,
    mousewheel: true,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
  });

  // .pf01 최종 디자인 시안보기
  $(".pf01 .final-design").click(function (e) {
    e.preventDefault();
    $(".pf01 .mockup").show();
  });

  $(".pf01 .mockup .side-nav li").click(function () {
    $(this).addClass("on").siblings().removeClass("on");
    let inx = $(this).index();
    $(".pf01 .contents .page").eq(inx).addClass("on").siblings().removeClass("on");
  });

  $(".pf01 .mockup .btn-close").click(function () {
    $(".pf01 .mockup").fadeOut(200, () => {
      $(".pf01 .mockup .side-nav li").eq(0).addClass("on").siblings().removeClass("on");
      $(".pf01 .contents .page").eq(0).addClass("on").siblings().removeClass("on");
    });
  });

  // .pf01 UI 컴포넌트 보기
  $(".pf01 .ui-components").click(function (e) {
    e.preventDefault();
    $(".pf01 .modal-backdrop.components").show();
  });

  $(".pf01 .modal-components .btn-close").click(function () {
    $(".pf01 .components").fadeOut(250);
  });

  // .pf02 - 웹콘텐츠 디자인(02)
  $(".pf-menu li:last-child").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    $(".head-right .inbox").removeClass("active");
    $("body").removeClass("bg-on");
    $(".pf01").hide();
    $(".pf02").show();
    $(".pf03").hide();
    $(".pf04").hide();
    $(".pf05").hide();
    $(".pf06").hide();
    $(".aboutme").hide();

    const contItems = $(".pf02 > ul > li");
    contItems.each(function (index) {
      const delay = Math.random() * 400 + 100;
      $(this)
        .delay(delay)
        .queue(function (next) {
          $(this).addClass("show");
          next();
        });
    });

    // 카드뉴스 슬라이드 초기화
    const newsWidth = $(".pf02 .news ul").width();
    $(".pf02 .news li").height(newsWidth);

    // 400x600 사이즈 카드뉴스 비율 설정
    const aspectRatio = 400 / 600;
    $(".pf02 .ratio li").height(newsWidth / aspectRatio);

    //스와이퍼 초기화
    swiperInstances.forEach((swiper) => {
      if (swiper && typeof swiper.destroy === "function" && swiper.initialized) {
        swiper.destroy();
      }
    });
    // 배열 초기화
    swiperInstances = [];

    // pf02 - 카드뉴스 Swiper 초기화
    const swiperConfigs = [
      { container: "#news1", pagination: "#pagination1" },
      { container: "#news2", pagination: "#pagination2" },
      { container: "#news3", pagination: "#pagination3" },
      { container: "#news4", pagination: "#pagination4" },
    ];

    swiperConfigs.forEach((config) => {
      const swiper2 = new Swiper(config.container, {
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        pagination: {
          el: config.pagination,
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>'; // 숫자 없이 빈 span 반환
          },
        },
      });
      swiperInstances.push(swiper2); // 새 인스턴스를 배열에 추가
    });
  });

  // pf03 - css 스타일링
  $(".pf-menu li:nth-child(3)").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    $(".head-right .inbox").removeClass("active");
    $("body").removeClass("bg-on");
    $(".pf01").hide();
    $(".pf02").hide();
    $(".pf03").show();
    $(".pf04").hide();
    $(".pf05").hide();
    $(".pf06").hide();
    $(".aboutme").hide();
  });

  // pf04 - 자바스크립트 미니 프로젝트
  $(".pf-menu li:nth-child(4)").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    $(".head-right .inbox").removeClass("active");
    $("body").removeClass("bg-on");
    $(".pf01").hide();
    $(".pf02").hide();
    $(".pf03").hide();
    $(".pf04").show();
    $(".pf05").hide();
    $(".pf06").hide();
    $(".aboutme").hide();
  });

  $(window).scroll(function () {
    // 스크롤시 퀵메뉴
    let scrollTop = $(window).scrollTop();
    $(".quick")
      .stop()
      .animate({ top: scrollTop + 100 + "px" }, 500);
  });

  // about me
  $(".head-right .inbox").click(function () {
    $(this).addClass("active");
    $(".pf-menu li").removeClass("active");
    $(".pf01").hide();
    $("body").removeClass("bg-on");
    $(".pf02").hide();
    $(".pf03").hide();
    $(".pf04").hide();
    $(".pf05").hide();
    $(".pf06").hide();
    $(".aboutme").show();
  });

  // pf05 - 반응형 웹 구현
  $(".pf-menu li:nth-child(2)").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    $(".head-right .inbox").removeClass("active");
    $("body").removeClass("bg-on");
    $(".pf01").hide();
    $(".pf02").hide();
    $(".pf03").hide();
    $(".pf04").hide();
    $(".pf05").show();
    $(".pf06").hide();
    $(".aboutme").hide();
  });

  $('.horizontal-scroll').on('wheel', function(e) {
    e.preventDefault(); // 기본 스크롤 방지
    this.scrollLeft += e.originalEvent.deltaY; // 수직 휠 스크롤의 양만큼 수평 스크롤
  });

  // pf06 - 키오스크
  $(".pf-menu li:nth-child(5)").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    $(".head-right .inbox").removeClass("active");
    $("body").removeClass("bg-on");
    $(".pf01").hide();
    $(".pf02").hide();
    $(".pf03").hide();
    $(".pf04").hide();
    $(".pf05").hide();
    $(".pf06").show();
    $(".aboutme").hide();
  });
});
