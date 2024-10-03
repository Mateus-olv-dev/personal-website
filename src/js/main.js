import './scrollAnimations';
import EmblaCarousel from 'embla-carousel';
import AutoScroll from 'embla-carousel-auto-scroll';

const emblaNode = document.querySelector('.embla');
const viewportNode = emblaNode.querySelector('.embla__viewport');

// Configurações do Embla Carousel e do AutoScroll
const OPTIONS = { loop: true };
const AUTO_SCROLL_OPTIONS = { delay: 5000 };

const emblaApi = EmblaCarousel(viewportNode, OPTIONS, [
  AutoScroll(AUTO_SCROLL_OPTIONS),
]);

// Botão expand skills home
