/* home.js
   Feature: featured-work carousel (image + text slider).
   Built with plain DOM manipulation, no library. */

document.addEventListener("DOMContentLoaded", function () {
  var track = document.querySelector(".carousel-slides");
  if (!track) return;

  var slides = Array.from(track.children);
  var dotsWrap = document.querySelector(".carousel-dots");
  var prevBtn = document.querySelector(".carousel-btn.prev");
  var nextBtn = document.querySelector(".carousel-btn.next");
  var index = 0;
  var autoplay;

  // Build one dot per slide.
  slides.forEach(function (slide, i) {
    var dot = document.createElement("button");
    dot.className = "dot";
    dot.type = "button";
    dot.setAttribute("aria-label", "Show slide " + (i + 1));
    dot.setAttribute("aria-selected", i === 0 ? "true" : "false");
    dot.addEventListener("click", function () {
      goTo(i);
      restartAutoplay();
    });
    dotsWrap.appendChild(dot);
  });

  function goTo(i) {
    index = (i + slides.length) % slides.length;
    track.style.transform = "translateX(-" + index * 100 + "%)";
    dotsWrap.querySelectorAll(".dot").forEach(function (d, di) {
      d.setAttribute("aria-selected", di === index ? "true" : "false");
    });
  }

  function restartAutoplay() {
    clearInterval(autoplay);
    autoplay = setInterval(function () { goTo(index + 1); }, 6000);
  }

  if (prevBtn) prevBtn.addEventListener("click", function () { goTo(index - 1); restartAutoplay(); });
  if (nextBtn) nextBtn.addEventListener("click", function () { goTo(index + 1); restartAutoplay(); });

  // Pause on hover so text is readable, resume on mouse leave.
  var wrap = document.querySelector(".carousel");
  wrap.addEventListener("mouseenter", function () { clearInterval(autoplay); });
  wrap.addEventListener("mouseleave", restartAutoplay);

  restartAutoplay();
});
