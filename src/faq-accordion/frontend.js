document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".mwb-faq-item").forEach((item) => {
    const btn = item.querySelector(".mwb-faq-question");
    const answer = item.querySelector(".mwb-faq-answer");

    if (!btn || !answer) return;

    // Collapse all by default
    item.classList.remove("is-open");
    btn.setAttribute("aria-expanded", "false");
    answer.hidden = true;

    // Handle click
    btn.addEventListener("click", () => {
      const isOpen = item.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", String(isOpen));
      answer.hidden = !isOpen;

      // change +/− sign
      const icon = btn.querySelector(".mwb-faq-icon");
      if (icon) icon.textContent = isOpen ? "−" : "+";
    });
  });
});