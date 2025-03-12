const wrapper = document.querySelector(".card-wrapper");
const leftBtn = document.querySelector(".arrow-left");
const rightBtn = document.querySelector(".arrow-right");

let scrollAmount = 0;
const cardWidth = 197 + 30; // Larghezza card + spazio tra le card
const visibleCards = 4; // Ridotto a 4 card visibili per volta
const totalCards = document.querySelectorAll(".card-container").length;
const maxScroll = (totalCards - visibleCards) * cardWidth; // Limite massimo dello scroll

// Nascondi il bottone sinistro all'inizio
leftBtn.style.display = "none";

// Funzione per lo scroll a destra
function scrollRight() {
  if (scrollAmount < maxScroll) {
    scrollAmount += cardWidth * visibleCards;
    if (scrollAmount > maxScroll) scrollAmount = maxScroll; // Evita di superare il limite
    wrapper.style.transform = `translateX(-${scrollAmount}px)`;

    // Mostra il bottone a sinistra se si è spostato
    leftBtn.style.display = "block";

    // Nascondi il bottone a destra se si è raggiunto lo scroll massimo
    if (scrollAmount === maxScroll) {
      rightBtn.style.display = "none";
    }
  }
}

// Funzione per lo scroll a sinistra
function scrollLeft() {
  if (scrollAmount > 0) {
    scrollAmount -= cardWidth * visibleCards;
    if (scrollAmount < 0) scrollAmount = 0; // Evita lo scroll negativo
    wrapper.style.transform = `translateX(-${scrollAmount}px)`;

    // Mostra di nuovo il bottone a destra se non si è ancora raggiunto lo scroll massimo
    rightBtn.style.display = "block";

    // Nascondi il bottone a sinistra se si è tornati all'inizio
    if (scrollAmount === 0) {
      leftBtn.style.display = "none";
    }
  }
}

// Aggiungi gli event listener per i bottoni
rightBtn.addEventListener("click", scrollRight);
leftBtn.addEventListener("click", scrollLeft);
