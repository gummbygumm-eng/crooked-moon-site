function revealMemory(button) {
  const card = button.closest(".card");
  card.classList.toggle("open");

  if (card.classList.contains("open")) {
    button.textContent = "Hide Memory";
  } else {
    button.textContent = "Reveal Memory";
  }
}
