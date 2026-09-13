/* services.js
   Feature: accordion for the frequently-asked-questions list.
   Only one panel is kept open at a time. */

document.addEventListener("DOMContentLoaded", function () {
  var triggers = document.querySelectorAll(".accordion-trigger");

  triggers.forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      var panel = document.getElementById(trigger.getAttribute("aria-controls"));
      var isOpen = trigger.getAttribute("aria-expanded") === "true";

      // Close every other panel first.
      triggers.forEach(function (t) {
        t.setAttribute("aria-expanded", "false");
        document.getElementById(t.getAttribute("aria-controls")).style.maxHeight = null;
      });

      // Re-open this one if it was previously closed.
      if (!isOpen) {
        trigger.setAttribute("aria-expanded", "true");
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });
});
