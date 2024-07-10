

const copyButton = document.querySelector('.copy_button');
const textToCopy = document.querySelector('.email');
const emailAfter = document.querySelector('.email_after')
const imgButton1 = document.querySelector('.img_button1')
const imgButton2 = document.querySelector('.img_button2')


const nVisivel = () => {
  textToCopy.style.display = "none"
}

const visible = () => {
  emailAfter.style.display = "block"
}

const trocarImg = () => {
  imgButton1.style.display = "none"
  imgButton2.style.display = "block"

 
}


copyButton.addEventListener('click', () => {
    const range = document.createRange();
    range.selectNode(textToCopy);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
  //  mudarTxt()
      nVisivel();
      visible();
      trocarImg();
    ;
});

document.addEventListener('DOMContentLoaded', () => {
const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuIcon.addEventListener('click', () => {
if (mobileMenu.style.display === 'none' || mobileMenu.style.display === '') {
  mobileMenu.style.display = 'block';
} else {
  mobileMenu.style.display = 'none';
}
});
});


// const slides = document.querySelectorAll('.slide');
// const dots = document.querySelectorAll('.dot');
// const vejaMaisLinks = ["https://github.com/seu-usuario/projeto1", "https://github.com/seu-usuario/projeto2", "https://github.com/seu-usuario/projeto3"];
// const vejaMaisBotao = document.querySelector('.veja-mais');
// let slideAtual = 0;

// function mostrarSlide(n) {
//     slides.forEach((slide, index) => {
//         slide.style.display = 'none';
//         dots[index].classList.remove('active');
//     });
//     slides[n].style.display = 'block';
//     dots[n].classList.add('active');
// }

// function atualizarLinkVejaMais() {
//     vejaMaisBotao.setAttribute('href', vejaMaisLinks[slideAtual]);
// }

// function avancarSlide() {
//     slideAtual++;
//     if (slideAtual >= slides.length) {
//         slideAtual = 0;
//     }
//     mostrarSlide(slideAtual);
//     atualizarLinkVejaMais();
// }

// function retrocederSlide() {
//     slideAtual--;
//     if (slideAtual < 0) {
//         slideAtual = slides.length - 1;
//     }
//     mostrarSlide(slideAtual);
//     atualizarLinkVejaMais();
// }

// document.querySelector('.botao-avancar').addEventListener('click', avancarSlide);
// document.querySelector('.botao-retroceder').addEventListener('click', retrocederSlide);

// mostrarSlide(slideAtual);
// atualizarLinkVejaMais();

