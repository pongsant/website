let cards = [];
let poeticMessages = [
  "You were a forgotten poet of stars.",
  "You walked deserts as a mystic healer.",
  "You danced with fire in lost cities.",
  "You whispered secrets to the sea.",
  "You guarded ancient libraries with riddles."
];

// Load tarot card data from the API
fetch('https://rws-cards-api.herokuapp.com/api/v1/cards')
  .then(response => response.json())
  .then(data => {
    cards = data.cards;
    console.log("Tarot cards loaded:", cards.length);
  })
  .catch(error => {
    console.error("Failed to load tarot cards:", error);
  });

// When user clicks the Reveal button
document.getElementById("revealBtn").addEventListener("click", () => {
  const input = document.getElementById("userInput").value.trim();
  if (input === "" || cards.length === 0) return;

  // Create a numeric seed from the input
  let seed = 0;
  for (let i = 0; i < input.length; i++) {
    seed += input.charCodeAt(i);
  }

  // Select card and message based on seed
  const card = cards[seed % cards.length];
  const message = poeticMessages[seed % poeticMessages.length];

  // Display result
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `
    <h2>${card.name}</h2>
    <p><em>${message}</em></p>
    <p>${card.desc}</p>
    <p><strong>Meaning (Upright):</strong> ${card.meaning_up}</p>
    <p><strong>Meaning (Reversed):</strong> ${card.meaning_rev}</p>
  `;
});
