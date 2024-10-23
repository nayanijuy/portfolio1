$(function () {
  // 주문서생성 - 외부스크립트(order.js)
  //push() : 배열 마지막 방에 추가.

  /////////////////////////////////////////// 상품 클릭시 배경 추가
  $(".product_wrap").click(function () {
    $(this).addClass("changebg");
    setTimeout(() => {
      $(this).removeClass("changebg");
    }, 300);
  });

  // 선택한 음료 객체
  let cart = [];
  $(".cont ul li").click(function () {
    // 선택한 메뉴의 이름과 가격을 얻어오기
    let menuName = $(this).find("dt").text();
    let menuPrice = $(this)
      .find("dd span")
      .text()
      .replace(/[^0-9]/g, ""); //.replace(/[^0-9]/g, "") : 문자열에서 숫자만 추출
    //let menuImg = $(this).find("img").prop('src'); // props() : 속성을 읽어오는 함수

    let src = $(this).find("img").attr("src");

    let orderQuantity = 1;

    let item_same = cart.some((item) => item.name == menuName); // some() : 배역을 탐색하면서 조건이 맞는지 검사
    if (item_same) {
      //alert("주문리스트에 이미 있는 메뉴임");

      //팝업창 열고닫기
      $(".notice").removeClass("hide");
      $("body").addClass("scroll_hidden");
      $(".check").click(function () {
        $(".notice").addClass("hide");
        $("body").removeClass("scroll_hidden");
      });
    } else {
      // 주문내역에 메뉴가 없으면 추가
      let cart_item = {
        name: menuName,
        imgSrc: src,
        price: menuPrice,
        quantity: orderQuantity, // 주문갯수
        totalPrice: menuPrice * orderQuantity,
      };
      cart.push(cart_item);
      orderUI(); //화면에 출력하는 함수 호출
    }
  });

  $(".cart>span").html('0');

  // 장바구니가 비어있을때 장바구니 영역 없애기-기초값세팅
  $('.cart_area').hide();

  //주문내역(cart)을 화면에 출력할 함수 작성
  function orderUI() {
      // 장바구니가 비어있을때 장바구니 영역 없애기
  if(cart.length <= 0){
    $('.cart_area').hide();
  }else{
    $('.cart_area').show();
  };
  console.log(cart.length);


    let orderList = ""; // 데이터 누적 저장할 변수
    let receiptList = ""; // 영수증 출력을 위한 변수

    cart.forEach((item, index) => {
      // 장바구니 출력을 위한 변수
      orderList += `
        <dl class="list" data-index=${index}>
        <button class='cart_delet'></button>
          <img src="${item.imgSrc}">
          <dt>${item.name}</dt>
          <dd>${item.totalPrice.toLocaleString()}원</dd>
          <dd>
            <button class="btn-sub"></button>
            <span class="num">${item.quantity}</span>
            <button class="btn-add"></button>
          </dd>
        </dl>
        `;

      //영수증 출력을 위한 변수
      receiptList += `
        <tr>
        <td>${item.name}</td>
        <td>${item.quantity}개</td>
        <td>- - - - - - -</td>
        <td>${(item.price * item.quantity).toLocaleString()}원</td>
        </tr>
        `;
    });

    // 생성된 주문리스트를 주문영역에 추가
    $(".cart_area").html(orderList);

    //////////////////////////////////// 생성된 주문리스트를 영수중에 추가
    $(".receipt .detail>table").html(receiptList);

    //////////////////////////////////// 상품 총갯수 구하기
    let totalQuantity = 0;
    
    cart.forEach((item) => {
      totalQuantity += item.quantity;
    });
    if (totalQuantity > 0) {
      $(".cart>span").html(totalQuantity);
      $('.receipt_total').html("총 " + totalQuantity +"개");
    } else{
      $(".cart>span").html(totalQuantity);
    }
    //////////////////////////////////////// 상품 총금액 구하기
    let totalAmount = 0;
    cart.forEach((item) => {
      totalAmount += item.totalPrice * item.quantity;
    });
    if (totalAmount > 0) {
      $(".total_price>span").html(totalAmount.toLocaleString());
      $(".total .receipt_amount").text(totalAmount.toLocaleString() + "원");
    } else {
      $(".total_price>span").html("");
    }
  }

  // 추가버튼
  $(document).on("click", ".btn-add", function () {
    let btnIndex = $(this).parents("dl").data("index");
    cart[btnIndex].quantity += 1;

    orderUI();
  });

  // 빼기버튼
  $(document).on("click", ".btn-sub", function () {
    let btnIndex = $(this).parents("dl").data("index");

    if (cart[btnIndex].quantity > 1) {
      // 수량 빼기
      cart[btnIndex].quantity --;
    }

    orderUI();
  });

  //cart상품 삭제기능
  $(document).on("click", ".cart_delet", function () {
    let btnIndex = $(this).parents("dl").data("index");
    cart.splice(btnIndex, 1); // splice(index,갯수)배열의 특정방을 제거, 변경

    orderUI();
  });

  ////////////////////////////////////////////// 결제 버튼 눌렀을때
  let countBtnPay = 0;
  $(".btn_pay").click(function () {
    if (cart.length == 0) {
      // 장바구니가 비어있을때 클릭 안되게
      $(".payment").removeClass("hide");
      $("body").addClass("scroll_hidden");
      $(".check").click(function () {
        $(".payment").addClass("hide");
        $("body").removeClass("scroll_hidden");
      });
    } else {
      //////////////////////////////////////////// 영수증 팝업 부분
      // 결제하기 누른 횟수 구하기 (주문번호)
      countBtnPay++;
      $(".order_num").text(countBtnPay + "번");

      // 영수증 팝업 창 보이기
      $(".receipt").removeClass("hide");
      $("body").addClass("scroll_hidden");

      // 영수증 팝업창 닫기
      $('.receipt_close').click(()=>{
        $(".receipt").addClass("hide");
        $("body").removeClass("scroll_hidden");
      });

      // // 3초뒤 영수증 팝업 안보이기
      // setTimeout(() => {
      //   $(".receipt").addClass("hide");
      //   $("body").removeClass("scroll_hidden");
      // }, 5000);

      // // 3초 카운터
      // let settingTime = 5;
      // $(".timer>span").text(settingTime);
      // let autoTimer = setInterval(() => {
      //   settingTime--;
      //   $(".timer>span").text(settingTime);
      // }, 1000);

      // // 카운터 클리어
      // setTimeout(() => {
      //   clearInterval(autoTimer);
      // }, 5000);

      //장바구니 비우기
      cart = [];
      $(".cart_area").html("");
      $(".cart>span").html("0");
      $(".total_price>span").html("0");
      $('.cart_area').hide();
    }
  });
});
