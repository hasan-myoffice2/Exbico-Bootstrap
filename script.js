const videoModal = document.getElementById("videoModal");
const iframe = document.getElementById("youtubeVideo");

videoModal.addEventListener("hidden.bs.modal", function () {
  iframe.src = iframe.src;
});
