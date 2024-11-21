document.addEventListener('DOMContentLoaded', () => {
  const content = document.querySelector('.main-section');
  const menuLinks = document.querySelectorAll('nav ul li a');
  const toggleButton = document.querySelector('.toggle-mode');

  menuLinks.forEach(link => {
      link.addEventListener('click', (e) => {
          content.classList.toggle('fade-out');
      });
  });

  toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
      document.body.classList.toggle('dark-mode');
      toggleButton.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
  });
});
