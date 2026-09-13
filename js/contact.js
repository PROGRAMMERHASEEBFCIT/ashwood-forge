/* contact.js
   Feature: client-side form validation for the contact form.
   Checks each field on submit (and re-checks on blur), shows an
   inline error message, and never actually sends data anywhere
   since this is a static, backend-free site. */

document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("contact-form");
  if (!form) return;

  var status = document.getElementById("form-status");

  var rules = {
    name: function (v) { return v.trim().length >= 2 || "Please enter your full name."; },
    email: function (v) {
      var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return pattern.test(v.trim()) || "Please enter a valid email address.";
    },
    subject: function (v) { return v !== "" || "Please choose a subject."; },
    message: function (v) { return v.trim().length >= 10 || "Message should be at least 10 characters."; }
  };

  function validateField(field) {
    var rule = rules[field.name];
    if (!rule) return true;
    var result = rule(field.value);
    var errorEl = document.getElementById(field.name + "-error");

    if (result === true) {
      field.classList.remove("invalid");
      field.classList.add("valid");
      if (errorEl) errorEl.textContent = "";
      return true;
    }
    field.classList.remove("valid");
    field.classList.add("invalid");
    if (errorEl) errorEl.textContent = result;
    return false;
  }

  Object.keys(rules).forEach(function (name) {
    var field = form.elements[name];
    if (field) {
      field.addEventListener("blur", function () { validateField(field); });
      field.addEventListener("input", function () {
        if (field.classList.contains("invalid")) validateField(field);
      });
    }
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var allValid = true;

    Object.keys(rules).forEach(function (name) {
      var field = form.elements[name];
      if (field && !validateField(field)) allValid = false;
    });

    if (allValid) {
      status.hidden = false;
      status.textContent = "Thanks — your message is ready to send. (This is a static demo site, so nothing is actually transmitted.)";
      form.reset();
      Object.keys(rules).forEach(function (name) {
        var field = form.elements[name];
        if (field) field.classList.remove("valid", "invalid");
      });
    } else {
      status.hidden = true;
      var firstInvalid = form.querySelector(".invalid");
      if (firstInvalid) firstInvalid.focus();
    }
  });
});
