// Unified countdown script
function getNextTargetDate() {
  const now = new Date();
  const currentYear = now.getFullYear();
  let targetDate = new Date(currentYear, 11, 8);
  
  if (now > targetDate) {
      targetDate = new Date(currentYear + 1, 11, 8);
  }
  
  return targetDate;
}

function calculateTimeLeft() {
  const targetDate = getNextTargetDate();
  const now = new Date();
  const difference = targetDate.getTime() - now.getTime();

  return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
  };
}

function updateCountdown() {
  const timeLeft = calculateTimeLeft();
  const elements = ['days', 'hours', 'minutes', 'seconds'];
  
  elements.forEach(element => {
      const el = document.getElementById(element);
      if (el) {
          el.textContent = String(timeLeft[element]).padStart(2, '0');
      }
  });
}

function initCountdown() {
  updateCountdown();
  setInterval(updateCountdown, 1000);
}

document.addEventListener('DOMContentLoaded', initCountdown);