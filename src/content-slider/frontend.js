document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".mwb-slider").forEach((slider) => {
    const track = slider.querySelector(".mwb-slider__track");
    const slides = track.children;
    let current = 0;
    const update = () => {
      track.style.transform = `translateX(-${current * 100}%)`;
    };
    slider.querySelector(".mwb-prev")?.addEventListener("click", () => {
      current = (current - 1 + slides.length) % slides.length;
      update();
    });
    slider.querySelector(".mwb-next")?.addEventListener("click", () => {
      current = (current + 1) % slides.length;
      update();
    });
  });
});