$(function () {
  let length = productList.length;
  for (let i = 0; i < length; i++) {
    //html() : innerHTML,
    //★ $('선택자').append() >> 선택자의 마지막 자식요소로 생성, >> 배너디자인시 매우 유용
    //★ $('선택자').prepend() >> 선택자의 첫번째 자식요소로 생성
    // after(), before()

    // 탭메뉴 만들기
    $(".tab").append("<li>" + productList[i].tabName + "</li>");

    // 컨텐츠영역 생성
    $(".cont").append("<ul></ul>");

    // 상품리스트 생성
    let contListNum = productList[i].menuLists.length;
    


    for (let j = 0; j < contListNum; j++) {
      let numPrice = Number(productList[i].menuLists[j].price);
  
      $(".cont ul")
        .eq(i)
        .append(
          //eq() : index번호를 부여 또는 확인
          //''는 한줄, ``는 여러줄
          `
                    <li class="product_wrap">
                    <img class="product_img" src="./imgs/${productList[i].division}/${productList[i].menuLists[j].imgSrc}" alt="${productList[i].menuLists[j].product}">
                    <dl class="info">
                    <dt class="info_title">${productList[i].menuLists[j].product}</dt>
                    <dd class="info_price"><span>${numPrice.toLocaleString()}</span>원</dd>
                    </dl>
                    </li>
                    `
        );

      // 신메뉴
      let newMenu = productList[i].menuLists[j].new;
      if (newMenu == true) {
        $(".cont ul:first-child").append(`
                <li class="product_wrap">
                <img class="product_img" src="./imgs/${productList[i].division}/${productList[i].menuLists[j].imgSrc}" alt="${productList[i].menuLists[j].product}">
                <dl class="info">
                    <dt class="info_title">${productList[i].menuLists[j].product}</dt>
                    <dd class="info_price"><span>${numPrice.toLocaleString()}</span>원</dd>
                </dl>
                </li>
            `);
      }

    }

    // 기본세팅값
    $(".cont ul").hide(); // 일단 컨텐츠 전부 숨겨라
    $(".cont ul:first-child").show(); // 첫번째 컨텐츠(ul)만 보여라
    $(".tab li:first-child").addClass("tab_on"); // 탭 선택시 색이 변하는 동작

    $(".tab li").click(function () {
      // 탭 선택시 색이 변하는 동작
      $(this).addClass("tab_on").siblings().removeClass("tab_on");

      // 탭선택시 하위메뉴 보여라
      let tabInx = $(this).index(); // index() : 배열의 순번을 얻어올때
      $(".cont ul").eq(tabInx).show().siblings().hide();
    });
  }
});
