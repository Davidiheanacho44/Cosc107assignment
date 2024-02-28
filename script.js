document.addEventListener("DOMContentLoaded", function() {
    const countdownElement = document.getElementById("timer");
  
    // Set the target date 10 days from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 10);
  
    // Update the countdown every second
    setInterval(updateCountdown, 1000);
  
    function updateCountdown() {
      const currentDate = new Date();
      const difference = targetDate - currentDate;
  
      // Calculate remaining days, hours, minutes, and seconds
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
      // Display the countdown
      // countdownElement.innerHTML = `${days}days ${hours}hours ${minutes}minutes  ${seconds}seconds`;

         document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;
    }
  
    // Initial call to update countdown
    updateCountdown();
  });
  