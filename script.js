var swiper = new Swiper(".heroSwiper", {
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const videoModal = document.getElementById("videoModal");
const iframe = document.getElementById("youtubeVideo");

videoModal.addEventListener("hidden.bs.modal", function () {
  iframe.src = iframe.src;
});
