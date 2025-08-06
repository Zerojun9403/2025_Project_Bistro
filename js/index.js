// 슬라이더 관련 변수
let currentIndex = 0;
const slides = document.querySelector(".slides");
const slideCount = document.querySelectorAll(".slide").length;
const dots = document.querySelectorAll(".dot");

// 슬라이드 이동 함수
function goToSlide(index) {
  slides.style.transform = `translateX(-${index * 100}vw)`;
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");
  currentIndex = index;
}

// 이전 버튼 클릭
document.getElementById("prev").addEventListener("click", () => {
  const prevIndex = (currentIndex - 1 + slideCount) % slideCount;
  goToSlide(prevIndex);
});

// 다음 버튼 클릭
document.getElementById("next").addEventListener("click", () => {
  const nextIndex = (currentIndex + 1) % slideCount;
  goToSlide(nextIndex);
});

// 도트 클릭
dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const index = parseInt(dot.dataset.index);
    goToSlide(index);
  });
});

// 자동 슬라이드 (4초마다 이동)
setInterval(() => {
  const nextIndex = (currentIndex + 1) % slideCount;
  goToSlide(nextIndex);
}, 4000);

// 스크롤 시 메뉴바 배경색 변경
window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// BEST 메뉴 슬라이드
let bestCurrentIndex = 0;
const bestSlider = document.querySelector(".best-slider");
const bestCards = document.querySelectorAll(".best-card");
const bestTotalSlides = Math.ceil(bestCards.length / 2); // 2개씩 보여줌

function goToBestSlide(index) {
  bestSlider.style.transform = `translateX(-${index * 100}%)`;
  bestCurrentIndex = index;
}

document.querySelector(".best-prev").addEventListener("click", () => {
  const prevIndex = (bestCurrentIndex - 1 + bestTotalSlides) % bestTotalSlides;
  goToBestSlide(prevIndex);
});

document.querySelector(".best-next").addEventListener("click", () => {
  const nextIndex = (bestCurrentIndex + 1) % bestTotalSlides;
  goToBestSlide(nextIndex);
});
