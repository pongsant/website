// history.js
window.onload = function () {
    const history = JSON.parse(localStorage.getItem("moodHistory")) || [];
    const list = document.getElementById("historyList");
  
    if (history.length === 0) {
      list.innerHTML = "<li>No mood history yet.</li>";
      return;
    }
  
    history.forEach((entry, index) => {
      const li = document.createElement("li");
      li.textContent = `#${index + 1} (${entry.time}) - Q1: ${entry.q1}, Q3: ${entry.q3}`;
      list.appendChild(li);
    });
  };
  
  function clearHistory() {
    localStorage.removeItem("moodHistory");
    location.reload();
  }
  