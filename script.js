// Check for system dark mode preference
document.addEventListener('DOMContentLoaded', () => {
  // Only set dark mode from system preference if user hasn't manually set a preference
  if (localStorage.getItem('darkMode') === null) {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDarkMode) {
      document.body.__x.$data.darkMode = true;
    }
  }

  // Add subtle animations to manifest items
  const manifestoItems = document.querySelectorAll('.manifesto-item');
  manifestoItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(10px)';
    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    
    setTimeout(() => {
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    }, 200 + (index * 150));
  });
});
