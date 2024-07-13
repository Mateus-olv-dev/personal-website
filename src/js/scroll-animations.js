document.addEventListener('DOMContentLoaded', function () {
  const elements = document.querySelectorAll('.hidden');
  const headerHeight = document.querySelector('header').offsetHeight;

  function checkVisibility() {
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;

      if (
        elementTop - headerHeight <= windowHeight * 0.9 &&
        elementBottom >= -windowHeight * 0.9
      ) {
        element.classList.add('show');
      } else {
        element.classList.remove('show');
      }
    });
  }

  checkVisibility();

  window.addEventListener('scroll', checkVisibility);
});
