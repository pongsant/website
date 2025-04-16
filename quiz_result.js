// result.js
window.onload = function () {
    const answers = JSON.parse(localStorage.getItem("moodAnswers"));
  
    if (!answers) {
      document.getElementById("moodResult").innerText = "No answers found.";
      return;
    }
  
    let mood = "Relaxing";
  
    if (answers.q1 === "excited" && answers.q4 === "fast") {
      mood = "Party";
    } else if (answers.q3 === "sad" && answers.q2 === "lyrics") {
      mood = "Emotional";
    }
  
    const moodText = {
      "Relaxing": "Here's a chill playlist to help you relax.",
      "Party": "Let’s dance! Try this party mix.",
      "Emotional": "We feel you. Try this emotional playlist.",
    };
  
    document.body.style.backgroundColor =
      mood === "Relaxing" ? "#D0F0C0" :
      mood === "Party" ? "#FFD700" :
      "#FFB6C1";
  
    document.getElementById("moodResult").innerHTML = `
      <h2>${mood} Mood</h2>
      <p>${moodText[mood]}</p>
      <a href="https://www.youtube.com/results?search_query=${mood}+music+playlist" target="_blank">
        🎵 Play ${mood} Music
      </a>
    `;
  };
  