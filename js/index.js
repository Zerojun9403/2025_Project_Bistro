// ----- 메인 슬라이더 -----
const slides = document.querySelector(".slides");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

if (slides && prevBtn && nextBtn) {
  let currentIndex = 0;
  const slideCount = document.querySelectorAll(".slide").length;

  function goToSlide(index) {
    slides.style.transform = `translateX(-${index * 100}vw)`;
    if (dots.length) {
      dots.forEach((d) => d.classList.remove("active"));
      if (dots[index]) dots[index].classList.add("active");
    }
    currentIndex = index;
  }

  prevBtn.addEventListener("click", () => {
    const prev = (currentIndex - 1 + slideCount) % slideCount;
    goToSlide(prev);
  });

  nextBtn.addEventListener("click", () => {
    const next = (currentIndex + 1) % slideCount;
    goToSlide(next);
  });

  if (dots.length) {
    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        const i = parseInt(dot.dataset.index, 10);
        goToSlide(i);
      });
    });
  }

  // 슬라이더가 있을 때만 자동 슬라이드
  setInterval(() => {
    const next = (currentIndex + 1) % slideCount;
    goToSlide(next);
  }, 4000);
}

// ----- BEST 메뉴 슬라이더 -----
const bestSlider = document.querySelector(".best-slider");
const bestPrev = document.querySelector(".best-prev");
const bestNext = document.querySelector(".best-next");
const bestCards = document.querySelectorAll(".best-card");

if (bestSlider && bestPrev && bestNext && bestCards.length) {
  let bestCurrentIndex = 0;
  const bestTotal = Math.ceil(bestCards.length / 2);
  const goBest = (i) => {
    bestSlider.style.transform = `translateX(-${i * 100}%)`;
    bestCurrentIndex = i;
  };
  bestPrev.addEventListener("click", () => {
    goBest((bestCurrentIndex - 1 + bestTotal) % bestTotal);
  });
  bestNext.addEventListener("click", () => {
    goBest((bestCurrentIndex + 1) % bestTotal);
  });
}

// ----- 스크롤 네비 색상 -----
const navEl = document.querySelector("nav");
if (navEl) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) navEl.classList.add("scrolled");
    else navEl.classList.remove("scrolled");
  });
}

// ----- 햄버거 토글 -----
(function () {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  function init() {
    const toggle = document.getElementById("menuToggle");
    const wrapper = document.getElementById("menuWrapper");
    if (!toggle || !wrapper) return;

    toggle.addEventListener("click", () => {
      wrapper.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
      if (!wrapper.contains(e.target) && !toggle.contains(e.target)) {
        wrapper.classList.remove("active");
      }
    });
  }
})();
