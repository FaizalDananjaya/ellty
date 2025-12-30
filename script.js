document.querySelectorAll('.desktop-icon').forEach(icon => {
  icon.addEventListener('click', () => {
    document.querySelectorAll('.desktop-icon').forEach(i => i.style.opacity = 0.6);
    icon.style.opacity = 1;
  });
});