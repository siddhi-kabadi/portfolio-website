function toggleMenu()
{
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', function () {
  const bars = document.querySelectorAll('.progress-bar');
  bars.forEach(bar => {
      let width = bar.style.width;
      bar.style.width = '0%';
      setTimeout(() => {
          bar.style.width = width;
      }, 100);
  });
});

