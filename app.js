const timer = document.getElementById("timer");
const audio = document.getElementById("audio");

// Set the countdown timer to 10 seconds
let count = 10;

// Set the countdown timer interval to 1000ms (1 second)
let interval = setInterval(function() {
  // Decrement the countdown timer by 1
  count--;

  // Update the countdown timer display
  timer.innerHTML = count;

  // If the countdown timer reaches 0, clear the interval and start the audio file
  if (count === 0) {
    clearInterval(interval);
    timer.innerHTML = "Happy New Year!";
    audio.currentTime = 0;
    audio.play();
  }
}, 1000);