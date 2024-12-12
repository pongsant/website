let musicData = [
  // Day 1
  [9, 30, 'rap'], 
  [14, 45, 'pop'], 
  [18, 60, 'rock'], 
  
  // Day 2
  [10, 25, 'rap'], 
  [16, 50, 'classical'], 
  [21, 40, 'pop'], 
  
  // Day 3
  [8, 20, 'rap'], 
  [12, 35, 'jazz'], 
  [19, 70, 'rock']
];

let colors = {
  'rap': [253, 184, 19],     // Yellowish-orange for 'rap'
  'pop': [196, 229, 56],      // Green for 'pop'
  'rock': [255, 94, 87],      // Red for 'rock'
  'classical': [59, 59, 152], // Deep blue for 'classical'
  'jazz': [27, 156, 252]      // Sky blue for 'jazz'
};

function setup() {
  createCanvas(600, 600);     
  angleMode(DEGREES);        
}

function draw() {
  background(255);            
  translate(width / 2, height / 2);  

  let radius = 100;          

  // Loop for each day (3 days)
  for (let day = 0; day < 3; day++) {
    let dayData = musicData.slice(day * 3, (day + 1) * 3);

    // Loop through each music session of the day
    for (let i = 0; i < dayData.length; i++) {
      let [hour, duration, genre] = dayData[i];  // Get the hour, duration, and genre

      
      let startAngle = map(hour, 0, 24, 0, 360);  
      let endAngle = startAngle + map(duration, 0, 60, 0, 40);  // Map duration (0-60 min) to part of the circle

      // Set color based on genre (using RGB)
      fill(colors[genre][0], colors[genre][1], colors[genre][2]); 
      stroke(255);  // White stroke to separate arcs
      strokeWeight(2);  // Thickness of the stroke
      
      
      arc(0, 0, radius * 2, radius * 2, startAngle, endAngle, PIE);
    }

    radius += 70;  
  }

  fill(255);  
  noStroke();  
  ellipse(0, 0, 80, 80);  
  
}
