document.addEventListener('DOMContentLoaded', () => {
  const bar = document.getElementById('progressBar');
  const percent = document.getElementById('percent');

  // Progress animation: animate the .fill child width and update percent text
  let p = 0;
  const fill = bar.querySelector('.fill');
  // lock at 35% with blinking CSS animation
  p = 35;
  percent.textContent = p + '%';
  if (fill) fill.style.width = p + '%';

  // No peek button anymore — page shows progress only
});
