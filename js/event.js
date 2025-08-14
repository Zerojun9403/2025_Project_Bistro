(function () {
  const modal = document.getElementById("eventModal");
  const modalImg = document.getElementById("eventModalImg");
  const modalTitle = document.getElementById("eventModalTitle");

  function openModal(src, title) {
    modalImg.src = src;
    modalImg.alt = title || "";
    modalTitle.textContent = title || "";
    modal.classList.add("is-open");
    document.body.classList.add("modal-open");
    modal.setAttribute("aria-hidden", "false");
  }

  function closeModal() {
    modal.classList.remove("is-open");
    document.body.classList.remove("modal-open");
    modal.setAttribute("aria-hidden", "true");
    // 선택사항: 닫을 때 이미지 비워 메모리 절약
    modalImg.removeAttribute("src");
    modalImg.removeAttribute("alt");
    modalTitle.textContent = "";
  }

  // 자세히 보기 클릭(이벤트 위임)
  document.addEventListener("click", function (e) {
    const btn = e.target.closest(".event-cta");
    if (!btn) return;
    e.preventDefault();
    const src = btn.getAttribute("data-img");
    const title = btn.getAttribute("data-title");
    if (src) openModal(src, title);
  });

  // 배경 클릭/닫기 버튼
  modal.addEventListener("click", function (e) {
    if (e.target.hasAttribute("data-close")) closeModal();
  });

  // ESC로 닫기
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });
})();
