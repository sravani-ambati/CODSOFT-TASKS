// Function to update the clock
function updateClock() {
    // Get the current time
    const now = new Date();
    
    // Extract hours, minutes, and seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    // Format hours, minutes, and seconds (Add leading zero if needed)
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    // Display the time in the clock element
    const clock = document.getElementById('clock');
    clock.textContent = `${hours}:${minutes}:${seconds}`;
}

// Run the updateClock function every second
setInterval(updateClock, 1000);

// Initialize the clock display when the page loads
updateClock();
