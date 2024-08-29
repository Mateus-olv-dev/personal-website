// src/js/main.js
import './scrollAnimations';
import EmblaCarousel from 'embla-carousel';
import AutoScroll from 'embla-carousel-auto-scroll';

const emblaNode = document.querySelector('.embla');
const viewportNode = emblaNode.querySelector('.embla__viewport');

// Configurações do Embla Carousel e do AutoScroll
const OPTIONS = { loop: true };
const AUTO_SCROLL_OPTIONS = { delay: 5000 }; // Ajuste o delay conforme necessário

const emblaApi = EmblaCarousel(viewportNode, OPTIONS, [
  AutoScroll(AUTO_SCROLL_OPTIONS),
]);

// Não é necessário adicionar funções para os botões de navegação e controle do autoscroll
// Se desejar adicionar outros comportamentos, pode fazê-lo aqui

// Adicione event listeners ou outras funcionalidades, se necessário
