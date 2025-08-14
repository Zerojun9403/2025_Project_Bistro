const dessertList = [
  { name: "아이스아메리카노", price: 4500 },
  { name: "머스탱케이크", price: 5000 },
  { name: "아이스크림", price: 3000 },
  { name: "블루베리치즈케이크", price: 7000 },
  { name: "아메리카노", price: 4000 },
  { name: "뉴욕치즈케이크", price: 7000 },
  { name: "클래식아포카토", price: 8000 },
];

// 2) 이미지 자동 매핑(이름 → 이미지 경로)
const imageMap = {
  아이스아메리카노: "../image/아이스아메리카노.jpg",
  머스탱케이크: "../image/머스탱케잌.jpg",
  아이스크림: "../image/아이스크림.jpg",
  블루베리치즈케이크: "../image/블루베리치즈케이크.jpg",
  아메리카노: "../image/아메리카노.jpg",
  뉴욕치즈케이크: "../image/뉴욕치크케이크.jpg",
  클래식아포카토: "../image/클래식아포카토.jpg",
};

// 3) 통화 표시 헬퍼
const toKRW = (n) => n.toLocaleString("ko-KR");

// 4) 렌더링
const $grid = document.getElementById("dessertGrid");
$grid.innerHTML = dessertList
  .map((item) => {
    const img = imageMap[item.name] || "../image/placeholder.jpg";
    return `
      <article class="menu-card">
        <figure class="menu-card__thumb">
          <img src="${img}" alt="${item.name}" loading="lazy" />
        </figure>
        <div class="menu-card__body">
          <h3 class="menu-card__title">${item.name}</h3>
          <div class="menu-card__price">₩${toKRW(item.price)}</div>
        </div>
      </article>
    `;
  })
  .join("");
