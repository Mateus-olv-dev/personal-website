document.addEventListener('DOMContentLoaded', function () {
  AOS.init();
});

const copyButton = document.querySelector('.copy_button');
const textToCopy = document.querySelector('.email');
const emailAfter = document.querySelector('.email_after');
const imgButton1 = document.querySelector('.img_button1');
const imgButton2 = document.querySelector('.img_button2');

const nVisivel = () => {
  textToCopy.style.display = 'none';
};

const visible = () => {
  emailAfter.style.display = 'block';
};

const trocarImg = () => {
  imgButton1.style.display = 'none';
  imgButton2.style.display = 'block';
};

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
});

const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const mobileMenu = document.querySelector('.mobile-menu');

document.addEventListener('DOMContentLoaded', () => {
  const menuOpen = document.querySelector('.menu-open');
  const menuClose = document.querySelector('.menu-close');

  const toggleMenu = () => {
    if (
      mobileMenu.style.display === 'none' ||
      mobileMenu.style.display === ''
    ) {
      mobileMenu.style.display = 'block';
      menuOpen.style.display = 'none';
      menuClose.style.display = 'block';
    } else {
      mobileMenu.style.display = 'none';
      menuOpen.style.display = 'block';
      menuClose.style.display = 'none';
    }
  };

  mobileMenuIcon.addEventListener('click', toggleMenu);
});
