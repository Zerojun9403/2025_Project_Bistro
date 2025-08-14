// ----- 메인 슬라이더 -----
const slides = document.querySelector(".slides");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

(function initMainSlider() {
  if (!(slides && prevBtn && nextBtn)) return;

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
    resetMainAuto();
  });

  nextBtn.addEventListener("click", () => {
    const next = (currentIndex + 1) % slideCount;
    goToSlide(next);
    resetMainAuto();
  });

  if (dots.length) {
    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        const i = parseInt(dot.dataset.index, 10);
        goToSlide(i);
        resetMainAuto();
      });
    });
  }

  // 자동 슬라이드
  let mainTimer = setInterval(() => {
    const next = (currentIndex + 1) % slideCount;
    goToSlide(next);
  }, 4000);

  function resetMainAuto() {
    clearInterval(mainTimer);
    mainTimer = setInterval(() => {
      const next = (currentIndex + 1) % slideCount;
      goToSlide(next);
    }, 4000);
  }
})();

// ----- BEST 메뉴 슬라이더 -----
(function initBestSlider() {
  const bestSlider = document.querySelector(".best-slider");
  const bestPrev = document.querySelector(".best-prev");
  const bestNext = document.querySelector(".best-next");
  const bestCards = document.querySelectorAll(".best-card");
  if (!(bestSlider && bestPrev && bestNext && bestCards.length)) return;

  let bestCurrentIndex = 0;
  const bestTotal = bestCards.length;

  function getCardsPerView() {
    return window.innerWidth <= 768 ? 1 : 2;
  }

  function goBest(index) {
    const perView = getCardsPerView();
    const maxIndex = Math.max(0, bestTotal - perView);
    if (index < 0) index = maxIndex;
    if (index > maxIndex) index = 0;

    // 카드가 perView개 보일 때, 한 스텝은 (100 / perView)%
    bestSlider.style.transform = `translateX(-${index * (100 / perView)}%)`;
    bestCurrentIndex = index;
  }

  bestPrev.addEventListener("click", () => {
    goBest(bestCurrentIndex - 1);
    resetBestAuto();
  });

  bestNext.addEventListener("click", () => {
    goBest(bestCurrentIndex + 1);
    resetBestAuto();
  });

  window.addEventListener("resize", () => {
    // 화면 변경 시 현재 index 기준으로 다시 정렬
    goBest(bestCurrentIndex);
  });

  // 자동 슬라이드 (3초마다)
  let bestTimer = setInterval(() => {
    goBest(bestCurrentIndex + 1);
  }, 3000);

  function resetBestAuto() {
    clearInterval(bestTimer);
    bestTimer = setInterval(() => {
      goBest(bestCurrentIndex + 1);
    }, 3000);
  }
})();

// ----- 스크롤 네비 색상 -----
(function initScrollNav() {
  const navEl = document.querySelector("nav");
  if (!navEl) return;
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) navEl.classList.add("scrolled");
    else navEl.classList.remove("scrolled");
  });
})();

// ----- 햄버거 토글 -----
(function initHamburger() {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
  function init() {
    const toggle = document.getElementById("menuToggle");
    const wrapper = document.getElementById("menuWrapper");
    if (!(toggle && wrapper)) return;

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

// ===== 로그인 상태에 따라 메뉴 전환 =====//
(function initLoginStatus() {
  const navLogin = document.getElementById("navLogin");
  if (!navLogin) return;

  const currentUser = sessionStorage.getItem("currentUser");

  if (currentUser) {
    // 로그인 상태
    navLogin.textContent = "로그아웃";
    navLogin.href = "#";
    navLogin.addEventListener("click", function (e) {
      e.preventDefault();
      sessionStorage.removeItem("currentUser");
      alert("로그아웃 되었습니다.");
      // 로그인 페이지로 이동
      location.href = "html/index.html";
    });
  } else {
    // 로그아웃 상태
    navLogin.textContent = "로그인";
    navLogin.href = "html/login.html";
  }
})();
