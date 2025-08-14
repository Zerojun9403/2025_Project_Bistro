const saladList = [
  { name: "오지치즈후라이즈", price: 12000 },
  { name: "치킨텐더셀러드", price: 15000 },
  { name: "치폴레치킨셀러드", price: 16000 },
  { name: "기브미파이브", price: 17000 },
];

// 2) 이미지 자동 매핑(이름 → 이미지 경로)
const imageMap = {
  오지치즈후라이즈: "../image/오지치즈후라이즈.jpg",
  치킨텐더셀러드: "../image/치킨텐더셀러드.jpg",
  치폴레치킨셀러드: "../image/치폴레치킨셀러드.jpg",
  기브미파이브: "../image/기브미파이브.jpg",
};

// 3) 통화 표시 헬퍼
const toKRW = (n) => n.toLocaleString("ko-KR");

// 4) 렌더링
const $grid = document.getElementById("saladGrid");
$grid.innerHTML = saladList
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
