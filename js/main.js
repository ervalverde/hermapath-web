const chatbotToggle = document.getElementById("chatbot-toggle");
const chatbotWindow = document.getElementById("chatbot-window");
const chatbotClose = document.getElementById("chatbot-close");

if (chatbotToggle && chatbotWindow) {
  chatbotToggle.addEventListener("click", () => {
    chatbotWindow.classList.toggle("active");
  });
}

if (chatbotClose && chatbotWindow) {
  chatbotClose.addEventListener("click", () => {
    chatbotWindow.classList.remove("active");
  });
}

window.addEventListener("load", () => {
  const tooltip = document.getElementById("emma-tooltip");

  setTimeout(() => {
    tooltip.style.opacity = "1";
    tooltip.style.transform = "translateY(0)";
  }, 2000);

  // desaparecer después de unos segundos
  setTimeout(() => {
    tooltip.style.opacity = "0";
    tooltip.style.transform = "translateY(10px)";
  }, 6000);
});

document.addEventListener("visibilitychange", () => {
  const tooltip = document.getElementById("emma-tooltip");

  if (!document.hidden) {
    tooltip.style.opacity = "1";
    tooltip.style.transform = "translateY(0)";

    setTimeout(() => {
      tooltip.style.opacity = "0";
      tooltip.style.transform = "translateY(10px)";
    }, 4000);
  }
});

window.addEventListener("load", () => {
  const tooltip = document.getElementById("emma-tooltip");

  if (!tooltip) return;

  setTimeout(() => {
    tooltip.style.opacity = "1";
    tooltip.style.transform = "translateY(0) scale(1)";
  }, 1800);

  setTimeout(() => {
    tooltip.style.opacity = "0";
    tooltip.style.transform = "translateY(10px) scale(0.95)";
  }, 5500);
});