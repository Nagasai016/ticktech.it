const themeButtons = document.querySelectorAll('.change-theme');

themeButtons.forEach(button => {
  button.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});
});