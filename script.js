const header = document.querySelector(".header");
const navBtn = document.querySelector(".btn-mobile-nav");

navBtn.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

const PlayBtn = document.querySelector(".play-btn");

PlayBtn.addEventListener("click", function () {
  PlayBtn.classList.toggle("playing");
});

const PriceBtns = document.querySelectorAll(".price-btn");

// Failed To make pricing btns Interactive
// PriceBtns.forEach(function (btn) {
//   btn.addEventListener("click", function (btn) {
//     PriceBtns.forEach(function (btnn) {
//       if (btnn != btn) {
//         btnn.classList.remove("active");
//       }
//     });
//     btn.classList.toggle("active");
//   });
// });

// Sticky nav + up btn
const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false)
      // or !
      document.body.classList.add("sticky");
    if (ent.isIntersecting)
      // or !
      document.body.classList.remove("sticky");
  },
  {
    root: null, //  viewport
    threshold: 0, // 0 = completly out , 1 = completly in
    rootMargin: "-80px", // 80px out
  }
);
obs.observe(sectionHeroEl);
