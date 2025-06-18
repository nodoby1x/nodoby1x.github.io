const reveals = document.querySelectorAll(".reveal");
const themeToggle = document.querySelector(".theme-toggle");
const themeIcon = document.querySelector(".theme-icon");

// Theme toggle functionality
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  themeIcon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
  
  // Save theme preference
  localStorage.setItem('theme', newTheme);
}

// Initialize theme from localStorage or system preference
function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
  
  document.documentElement.setAttribute('data-theme', initialTheme);
  themeIcon.textContent = initialTheme === 'dark' ? '☀️' : '🌙';
}

// Scroll reveal animation
function handleScrollReveal() {
  const windowHeight = window.innerHeight;
  reveals.forEach((el, index) => {
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight - 100 && !el.classList.contains("active")) {
      setTimeout(() => {
        el.classList.add("active");
      }, index * 150); // Stagger animation
    }
  });
}

// Smooth scroll for better UX
function smoothScrollToElement(element) {
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

// Add parallax effect to header
function handleParallax() {
  const scrolled = window.pageYOffset;
  const header = document.querySelector('header');
  if (header && scrolled < window.innerHeight) {
    header.style.transform = `translateY(${scrolled * 0.3}px)`;
  }
}

// Throttle function for performance
function throttle(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Event listeners
themeToggle.addEventListener("click", toggleTheme);
window.addEventListener("scroll", throttle(() => {
  handleScrollReveal();
  handleParallax();
}, 16)); // ~60fps

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (!localStorage.getItem('theme')) {
    const newTheme = e.matches ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    themeIcon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
  }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  handleScrollReveal(); // Initial check for elements already in view
});