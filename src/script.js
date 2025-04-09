// Definera array av namn
let people = [
  "Jesper",
  "Anna",
  "Charles",
  "Lisa",
  "Björn",
  "Monika"
];


export function initSearch(people) { // rör ej denna rad

  // Hämta HTML-element
  let searchInput = document.getElementById("searchInput");
  let searchBtn = document.getElementById("searchBtn");
  let resultDisplay = document.getElementById("resultDisplay");

  // Lägg till en klickhändelse på "Sök"-knappen
  searchBtn.addEventListener("click",() => {
    let found = false;

    for (name of people) {
      if (searchInput.value === name) {
        resultDisplay.innerHTML = `Namn hittades: ${name}`
        found = true;
        break;
      } else if (!found) {
        resultDisplay.innerHTML = `Namn hittades inte.`
      }
    }
    // 1. Hämta texten i searchInput.value
    
    // 2. Skapa en boolean för found
    
    // 3. Loopa igenom people-arrayen
    
    // 4. Jämför texten med varje namn i arrayen
    
    // 5. Om du hittar en match, skriv ut "Namn hittades!" i resultDisplay, ändra found till true
    
    // 6. Om du efter loopen inte hittat något, skriv ut "Namn hittades inte." och gör found till false igen.
    
    });
}



// rör ej dessa rader
document.addEventListener("DOMContentLoaded", () => {
  initSearch(people);
});