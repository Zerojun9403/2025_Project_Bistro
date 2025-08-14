(function () {
  const toggle = document.querySelector(".zone-toggle");
  const chips = document.querySelector(".zone-chips");
  if (!toggle || !chips) return;

  const collapsedHeight = "92px";
  chips.style.maxHeight = collapsedHeight;

  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    chips.style.maxHeight = expanded ? collapsedHeight : "1000px";
    toggle.textContent = expanded ? "더보기" : "접기";
  });
})();
