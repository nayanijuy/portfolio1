const productList = [
  {
    tabName: "New",
    division: "",
    menuLists: []
  },
  {
    tabName: "Ice Cream Cake",
    division: "iceCreamCake",
    menuLists: [
      {
        product: "피치망고 요거팡",
        imgSrc: "ice_PeachMangoYogurtPang.png",
        price: "26000",
        new: true,
      },
      {
        product: "오버 더 레인보우",
        imgSrc: "ice_OVERTHERAINBOW.png",
        price: "19000",
        new: true,
      },
      {
        product: "마이 디어 하트",
        imgSrc: "ice_MYDEARHEART.png",
        price: "19000",
        new: false,
      },
      {
        product: "오 해피데이!",
        imgSrc: "ice_OHHAPPYDAY.png",
        price: "19000",
        new: false,
      },
      {
        product: "행복한 춘식이다냥",
        imgSrc: "ice_HappyChoonsik.png",
        price: "30000",
        new: false,
      },
      {
        product: "어썸 라이언 인 사파리",
        imgSrc: "ice_AwesomeLionSafari.png",
        price: "26000",
        new: false,
      },
      {
        product: "달콤한 딸기 쏙~ 곰돌이",
        imgSrc: "ice_SweetStrawberryBear.png",
        price: "28000",
        new: false,
      },
      {
        product: "해피 조이 큐브",
        imgSrc: "ice_HappyJoyCube.png",
        price: "26000",
        new: false,
      },
      {
        product: "달콤한 구름이 퐁당퐁당",
        imgSrc: "ice_SweetCloudsPongDang.png",
        price: "26000",
        new: false,
      },
      {
        product: "더 베스트 No.6",
        imgSrc: "ice_TheBestNo6.png",
        price: "25000",
        new: false,
      },
      {
        product: "해피 스마일 포 유",
        imgSrc: "ice_HappySmileFYou.png",
        price: "26000",
        new: false,
      },
      {
        product: "나눠먹는 큐브 와츄원",
        imgSrc: "ice_WhatYouWantCubeToShare.png",
        price: "34000",
        new: false,
      },
      {
        product: "반짝이는 잔망루피",
        imgSrc: "ice_ShiningZanmangLoopy.png",
        price: "30000",
        new: false,
      },
      {
        product: "골라먹는 27 큐브",
        imgSrc: "ice_27CubeWhatYouWant.png",
        price: "29000",
        new: false,
      },
      {
        product: "나눠먹는 와츄원",
        imgSrc: "ice_WhatYouWantToShare.png",
        price: "33000",
        new: false,
      },
      {
        product: "골라먹는 스노우 볼",
        imgSrc: "ice_SnowballWhatYouWant.png",
        price: "28000",
        new: false,
      },
      {
        product: "골라먹는 와츄원",
        imgSrc: "ice_WhatYouWant.png",
        price: "27000",
        new: false,
      },
      {
        product: "듀얼 와츄원 NO.9",
        imgSrc: "ice_DualWhatYouWantNo9.png",
        price: "31000",
        new: false,
      },
      {
        product: "미니 골라먹는 와츄원",
        imgSrc: "ice_MiniWhatYouWant.png",
        price: "17000",
        new: false,
      },
      {
        product: "미니 해피 버스데이 케이크",
        imgSrc: "ice_MiniHappyBirthdayCake.png",
        price: "17000",
        new: false,
      },
      {
        product: "우주에서 온 엄마는 외계인",
        imgSrc: "ice_PussInBootsCake.png",
        price: "28000",
        new: false,
      },
      {
        product: "해피 버스데이",
        imgSrc: "ice_HappyBirthdayCake.png",
        price: "27000",
        new: false,
      },
    ],
  },
  {
    tabName: "Beverage",
    division: "beverage",
    menuLists: [
      {
        product: "바삭 민트초코 블라스트",
        imgSrc: "bev_MintChocoBlast.png",
        price: "5000",
        new: true,
      },
      {
        product: "납작복숭아 망고 PANG!아이스티",
        imgSrc: "bev_FlatPeachMangoPANGIcedTea.png",
        price: "5500",
        new: true,
      },
      {
        product: "피치망고 PANG!에이드",
        imgSrc: "bev_PeachMangoPANGAde.png",
        price: "5500",
        new: true,
      },
      {
        product: "멜론 블라스트",
        imgSrc: "bev_MelonBalst.png",
        price: "4800",
        new: false,
      },
      {
        product: "이상한 나라의 솜사탕 블라스트",
        imgSrc: "bev_CottonCandyWonderlandBlast.png",
        price: "5800",
        new: false,
      },
      {
        product: "우주 라이크 봉봉 블라스트",
        imgSrc: "bev_WouldULikeBonBonBlast.png",
        price: "5800",
        new: false,
      },
      {
        product: "빙수 블라스트",
        imgSrc: "bev_ShavedIceBlast.png",
        price: "7900",
        new: false,
      },
      {
        product: "과일 블라스트",
        imgSrc: "bev_FruitsBlast.png",
        price: "4900",
        new: false,
      },
      {
        product: "티 블라스트",
        imgSrc: "bev_TeaBlast.png",
        price: "4800",
        new: false,
      },
      {
        product: "요거트 블라스트",
        imgSrc: "bev_YogurtBlast.png",
        price: "4800",
        new: false,
      },

      {
        product: "아이스크림 블라스트",
        imgSrc: "bev_IcecreamBlast.png",
        price: "5800",
        new: false,
      },
      {
        product: "와츄원 쉐이크",
        imgSrc: "bev_WHATYOUWANTShake.png",
        price: "5800",
        new: false,
      },
      {
        product: "밀크 쉐이크",
        imgSrc: "bev_MilkShake.png",
        price: "5800",
        new: false,
      },
      {
        product: "오레오 쉐이크",
        imgSrc: "bev_OREOShake.png",
        price: "5800",
        new: false,
      },
      {
        product: "티류",
        imgSrc: "bev_Tea.png",
        price: "4500",
        new: false,
      },
      {
        product: "라떼류",
        imgSrc: "bev_Latte.png",
        price: "3500",
        new: false,
      },
    ],
  },
  {
    tabName: "Coffee",
    division: "coffee",
    menuLists: [
      {
        product: "아메리카노",
        imgSrc: "cof_Americano.png",
        price: "2800",
        new: false,
      },
      {
        product: "카페라떼",
        imgSrc: "cof_CafeLatte.png",
        price: "3300",
        new: false,
      },
      {
        product: "바닐라빈 라떼",
        imgSrc: "cof_VanillaBeanLatte.png",
        price: "3800",
        new: false,
      },
      {
        product: "카라멜 마끼아또",
        imgSrc: "cof_CaramelMacchiato.png",
        price: "3800",
        new: false,
      },
      {
        product: "엄마는 외계인 카페모카",
        imgSrc: "cof_MOMISANALIENCafeMocha.png",
        price: "3800",
        new: false,
      },
      {
        product: "연유라떼",
        imgSrc: "cof_CondensedMilkLatte.png",
        price: "3800",
        new: false,
      },
      {
        product: "카페31",
        imgSrc: "cof_Cafe31Americano.png",
        price: "4800",
        new: true,
      },
      {
        product: "아포가토 라떼",
        imgSrc: "cof_AffogatoLatte.png",
        price: "4300",
        new: false,
      },
      {
        product: "솔티크림 슈페너",
        imgSrc: "cof_SaltyCreamEinspanner.png",
        price: "4300",
        new: false,
      },
      {
        product: "솔티크림 라떼",
        imgSrc: "cof_SaltyCreamLatte.png",
        price: "4800",
        new: false,
      },
      {
        product: "콜드브루 아메리카노",
        imgSrc: "cof_ColdBrewAmericano.png",
        price: "3800",
        new: false,
      },
      {
        product: "콜드브루 라떼",
        imgSrc: "cof_ColdBrewLatte.png",
        price: "4300",
        new: false,
      },
      {
        product: "콜드브루 오트",
        imgSrc: "cof_ColdBrewOat.png",
        price: "4800",
        new: false,
      },
      {
        product: "맥심 모카골드 블라스트",
        imgSrc: "cof_MaximMochaGoldBlast.png",
        price: "3500",
        new: false,
      },
      {
        product: "카푸치노 블라스트",
        imgSrc: "cof_CappuccinoBlast.png",
        price: "5000",
        new: false,
      },
    ],
  },
];

// 전역으로 변경
window.productList = productList;

/*
신메뉴
itemNew: true/false;
추천메뉴
orderNum: 0;
*/