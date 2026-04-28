document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".toggle");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.dataset.target;
      const content = document.getElementById(targetId);

      if (!content) return;

      const isHidden = content.classList.contains("hidden");
      content.classList.toggle("hidden");

      button.textContent = button.textContent.replace(
        isHidden ? "▸" : "▾",
        isHidden ? "▾" : "▸"
      );
    });
  });
});
