/* 스크립트: 데이터 → 카드 렌더링 */

// 1) 운영자가 수정할 배열: "이름"과 "가격"만!
const steakList = [
  { name: "갈릭립아이 스테이크", price: 30000 },
  { name: "달링포인트 스테이크", price: 32000 },
  { name: "트러플 크림 안심 스테이크", price: 36000 },
  { name: "퀸즈랜드 립아이", price: 35000 },
  { name: "베이비립", price: 35000 },
];

// 2) 이미지 자동 매핑(이름 → 이미지 경로)
const imageMap = {
  "갈릭립아이 스테이크": "../image/갈릭립아이.jpg",
  "달링포인트 스테이크": "../image/달링포인트.jpeg",
  "트러플 크림 안심 스테이크": "../image/트러플크림안심스테이크.png",
  "퀸즈랜드 립아이": "../image/퀸즈랜드 랩아이.jpeg",
  "베이비립": "../image/베이비립.jpeg",
};

// 3) 통화 표시 헬퍼
const toKRW = (n) => n.toLocaleString("ko-KR");

// 4) 렌더링
const $grid = document.getElementById("steakGrid");
$grid.innerHTML = steakList
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
