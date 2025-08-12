const pasataList = [
  { name: "투움바파스타", price: 20000 },
  { name: "로제투움바파스타", price: 25000 },
  { name: "스파이시씨푸알리올리오", price: 16000 },
  { name: "씨푸드아라비아따", price: 18000 },
  { name: "트러플머쉬룸파스타", price: 25000 },
  { name: "폭림엔미트파스타", price: 25000 },
  { name: "아메리칸수프림", price: 25000 },
  { name: "고르곤졸라", price: 20000 },
  { name: "마르게리따", price: 20000 },
  { name: "페퍼로니", price: 18000 },
];

// 2) 이미지 자동 매핑(이름 → 이미지 경로)
const imageMap = {
  투움바파스타: "../image/투움바파스타.png",
  로제투움바파스타: "../image/로제투움바파스타.png",
  스파이시씨푸알리올리오: "../image/스파이시씨푸 알리올리오.png",
  씨푸드아라비아따: "../image/씨푸드아라비아따.png",
  트러플머쉬룸파스타: "../image/트러플머쉬룸파스타.png",
  폭림엔미트파스타: "../image/폭림엔미트파스타.png",
  아메리칸수프림: "../image/아메리칸수프림.jpg",
  고르곤졸라: "../image/고르곤졸라.png",
  마르게리따: "../image/마르게리따.png",
  페퍼로니: "../image/페퍼로니.jpg",
};

// 3) 통화 표시 헬퍼
const toKRW = (n) => n.toLocaleString("ko-KR");

// 4) 렌더링
const $grid = document.getElementById("pasataGrid");
$grid.innerHTML = pasataList
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
