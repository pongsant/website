document.addEventListener("DOMContentLoaded", () => {
  let cards = [];
  const poeticMessages = [
    "You were a forgotten poet of stars.",
    "You walked deserts as a mystic healer.",
    "You danced with fire in lost cities.",
    "You whispered secrets to the sea.",
    "You guarded ancient libraries with riddles."
  ];


  fetch('https://api.allorigins.win/raw?url=https://tarot-api.onrender.com/api/v1/cards')

    .then(response => response.json())
    .then(data => {
      cards = data.cards;
      console.log("Loaded", cards.length, "Tarot cards");
    })
    

  document.getElementById("revealBtn").addEventListener("click", () => {
    const input = document.getElementById("userInput").value.trim();
    if (input === "" || cards.length === 0) {
      alert("Please enter your name or birthdate and wait for the cards to load.");
      return;
    }

    // Create a numeric seed from input
    let seed = 0;
    for (let i = 0; i < input.length; i++) {
      seed += input.charCodeAt(i);
    }

    const card = cards[seed % cards.length];
    const message = poeticMessages[seed % poeticMessages.length];

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
      <h2>${card.name}</h2>
      <p><em>${message}</em></p>
      <p><strong>Description:</strong> ${card.desc}</p>
      <p><strong>Meaning (Upright):</strong> ${card.meaning_up}</p>
      <p><strong>Meaning (Reversed):</strong> ${card.meaning_rev}</p>
    `;
  });
});
