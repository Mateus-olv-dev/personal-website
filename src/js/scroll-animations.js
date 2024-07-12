document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.hidden');
  
    const myObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    }, {
      threshold: 0.1 // Element needs to be 10% visible
    });
  
    elements.forEach((element) => myObserver.observe(element));
  });
  