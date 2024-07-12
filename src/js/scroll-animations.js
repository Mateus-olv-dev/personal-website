document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.hidden');
  
    const myObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
            observer.unobserve(entry.target);  // Unobserve after animation starts
        }
      });
    }, {
      threshold: 0.1 // Element needs to be 10% visible
    });
  
    elements.forEach((element) => myObserver.observe(element));
  });
  