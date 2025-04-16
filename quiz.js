// quiz.js
document.getElementById("quizForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const formData = new FormData(e.target);
    const answers = {};
  
    for (let [key, value] of formData.entries()) {
      answers[key] = value;
    }
  
    localStorage.setItem("moodAnswers", JSON.stringify(answers));
  
    // Save to history
    let history = JSON.parse(localStorage.getItem("moodHistory")) || [];
    history.push({ ...answers, time: new Date().toLocaleString() });
    localStorage.setItem("moodHistory", JSON.stringify(history));
  
    window.location.href = "quiz_result.html";
  });
  