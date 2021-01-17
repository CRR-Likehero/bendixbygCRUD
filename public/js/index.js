import Swiper from 'swiper/bundle';
import { login } from './login';
import { logOut} from './logout';

// SWIPER CONTAINER SETTINGS

const swiper = new Swiper ('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
        reverseDirection: true
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      }

  }
);

// DOM ELEMENTS

const menuToggle = document.querySelector('.burger_menu');
const nav = document.querySelector('.mobile_nav');
const body = document.querySelector('body');
const heroHeading = document.querySelector('.hero_heading');
const heroLogo = document.querySelector('.hero_logo');

const loginForm = document.querySelector('.form');

const logoutBtn = document.querySelector('#logoutbtn');

const item = document.querySelectorAll('.item1');

const closeModal = document.querySelectorAll('.close_modal')

// DOM ACTIONS

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active')
    nav.classList.toggle('active')
    body.classList.toggle('active')
    heroHeading.classList.toggle('active')
    heroLogo.classList.toggle('active')
});
};

if (item) {
  item.forEach( el => {
    el.addEventListener('click', () => {
      const modal = el.getAttribute('alt')

      document.getElementById(modal).style.display = 'flex'
    })
  });
}

if (closeModal) {
  closeModal.forEach( el => {
    el.addEventListener('click', () => {
      el.parentNode.style.display = 'none'
      
    })
  })
}

if (loginForm) {
  loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    login(email, password);
  });
};

if (logoutBtn) {
  logoutBtn.addEventListener('click', e => {
    e.preventDefault();
    logOut();
  });
};