/* gallery.js
   Feature 1: filter the gallery grid by category button.
   Feature 2: open a chosen image in a lightbox modal with caption. */

document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll(".filter-btn");
  var items = document.querySelectorAll(".gallery-item");

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      buttons.forEach(function (b) { b.setAttribute("aria-pressed", "false"); });
      btn.setAttribute("aria-pressed", "true");
      var category = btn.dataset.filter;

      items.forEach(function (item) {
        var matches = category === "all" || item.dataset.category === category;
        item.hidden = !matches;
      });
    });
  });

  // Lightbox
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightbox-img");
  var lightboxCaption = document.getElementById("lightbox-caption");
  var closeBtn = document.querySelector(".lightbox-close");

  items.forEach(function (item) {
    item.addEventListener("click", function () {
      var img = item.querySelector("img");
      var caption = item.querySelector("figcaption").textContent;
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightboxCaption.textContent = caption;
      lightbox.hidden = false;
      closeBtn.focus();
    });
  });

  function closeLightbox() { lightbox.hidden = true; }

  closeBtn.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !lightbox.hidden) closeLightbox();
  });
});
