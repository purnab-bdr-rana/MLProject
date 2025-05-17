// static/js/global-fab.js

document.addEventListener("DOMContentLoaded", function () {
  const fab = document.getElementById("global-fab");
  const modal = document.getElementById("predictModal");
  const closeBtn = document.getElementById("closePredictModal");
  const icon = fab.querySelector("i");

  function openModal() {
    modal.classList.add("show");
    icon.className = "fas fa-times"; // Show "X" icon
  }

  function closeModal() {
    modal.classList.remove("show");
    icon.className = "fas fa-chart-line"; // Show chart icon
  }

  fab.addEventListener("click", function () {
    const path = window.location.pathname;

    if (path.includes("/predict")) {
      // Scroll to prediction section
      const section = document.getElementById("predict-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Toggle modal open/close
      if (modal.classList.contains("show")) {
        closeModal();
      } else {
        openModal();
      }
    }
  });

  closeBtn.addEventListener("click", function () {
    closeModal();
  });

  // Optional: close modal if clicking outside modal content
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeModal();
    }
  });
});
