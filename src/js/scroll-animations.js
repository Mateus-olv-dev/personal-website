document.addEventListener('DOMContentLoaded', function() {
  const elements = document.querySelectorAll('.hidden');
  const headerHeight = document.querySelector('header').offsetHeight; // Altura do header fixo

  function checkVisibility() {
    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;

      // Verifica se o elemento está pelo menos 10% visível acima e abaixo
      if ((elementTop - headerHeight <= windowHeight * 0.9) && (elementBottom >= -windowHeight * 0.9)) {
        element.classList.add('show');
      } else {
        element.classList.remove('show');
      }
    });
  }

  // Chama a função inicialmente
  checkVisibility();

  // Adiciona um evento de scroll para verificar a visibilidade ao rolar a página
  window.addEventListener('scroll', checkVisibility);
});
