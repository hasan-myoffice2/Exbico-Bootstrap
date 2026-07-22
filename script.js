const videoModal = document.getElementById("videoModal");
const iframe = document.getElementById("youtubeVideo");

videoModal.addEventListener("hidden.bs.modal", function () {
  iframe.src = iframe.src;
});

// Countering //
const projectSection = document.getElementById("project");
const counters = [
  { id: "num1", target: 50 },
  { id: "num2", target: 60 },
  { id: "num3", target: 70 },
  { id: "num4", target: 80 },
];

let started = false;

const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting && !started) {
    started = true;

    counters.forEach((item) => {
      counter(item.id, item.target);
    });
  }
});

observer.observe(projectSection);

function counter(id, target) {
  const element = document.getElementById(id);

  let count = 0;

  const interval = setInterval(() => {
    count++;
    element.textContent = count + "+";

    if (count >= target) {
      clearInterval(interval);
    }
  }, 30);
}
