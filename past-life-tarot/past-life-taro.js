document.addEventListener("DOMContentLoaded", () => {
  const messages = {
    yes: [
      "You were a seeker of truth, guided by stars.",
      "You lit sacred fires in the hearts of forgotten temples.",
      "You led journeys through the desert with only the moon as your map."
    ],
    no: [
      "You wandered through ancient ruins, collecting forgotten prayers.",
      "You guarded gates between worlds, hidden from the waking eye.",
      "You lived among shadows, knowing silence better than sound."
    ],
    maybe: [
      "You were a whisper in time, remembered only in dreams.",
      "You passed between realms, a soul never bound to one path.",
      "Neither here nor there, you danced with fate at the edge of memory."
    ]
  };

  document.getElementById("revealBtn").addEventListener("click", () => {
    const input = document.getElementById("userInput").value.trim();
    if (input === "") return;

    // Convert input into a seed
    let seed = 0;
    for (let i = 0; i < input.length; i++) {
      seed += input.charCodeAt(i);
    }

    const answerTypes = ["yes", "no", "maybe"];
    const answer = answerTypes[seed % answerTypes.length];
    const message = messages[answer][seed % messages[answer].length];

    // Fetch image from yesno.wtf API
    fetch("https://yesno.wtf/api")
      .then(res => res.json())
      .then(data => {
        const resultDiv = document.getElementById("result");
        resultDiv.innerHTML = `
          <h2>Your Past Life: ${answer.toUpperCase()}</h2>
          <img src="${data.image}" alt="${answer}" class="tarot-image" />
          <p><em>${message}</em></p>
        `;
      })
      .catch(error => {
        console.error("API error:", error);
        document.getElementById("result").innerHTML = `
          <p>❌ Divination failed. The spirits are offline. Try again later.</p>
        `;
      });
  });
});
