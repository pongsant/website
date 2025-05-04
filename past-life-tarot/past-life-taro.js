document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("revealBtn").addEventListener("click", () => {
    const input = document.getElementById("userInput").value.trim();
    if (input === "") return;

    fetch("https://yesno.wtf/api")
      .then(res => res.json())
      .then(data => {
        const message = {
          yes: "In a past life, you were a seeker of truth, guided by stars.",
          no: "You were a silent observer, watching the world unfold from shadows.",
          maybe: "You danced between lives, never tied to one path."
        };

        const resultDiv = document.getElementById("result");
        resultDiv.innerHTML = `
          <h2>Your Past Life Symbol:</h2>
          <img src="${data.image}" alt="${data.answer}" class="tarot-image" />
          <p><em>${message[data.answer]}</em></p>
          <p><strong>Divination says: "${data.answer.toUpperCase()}"</strong></p>
        `;
      })
      .catch(error => {
        console.error("API error:", error);
        document.getElementById("result").innerHTML = `
          <p>🛑 Failed to connect to the divination realm. Try again.</p>
        `;
      });
  });
});
