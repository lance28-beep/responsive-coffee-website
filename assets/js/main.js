/*=============== LOADER ===============*/

/*=============== SHOW MENU ===============*/
const navMenu = document.querySelector('.nav__menu'),
  navToggle = document.querySelector('.nav__toggle'),
  navClose = document.querySelector('.nav__close')

/*=============== SHOW MENU ===============*/
/*validate if constant exist*/
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

/*===============Menu Hidden===============*/
/*validate if constant exist*/
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll('.nav__link')

const linkAction = () => {
  navMenu.classList.remove('show-menu')
}

navLinks.forEach((link) => {
  link.addEventListener('click', linkAction)
})
/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.querySelector('.header')
  //when the scroll is greater than 50viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 50) header.classList.add('header-scroll')
  else header.classList.remove('header-scroll')
}

window.addEventListener('scroll', scrollHeader)
/*=============== MIXITUP FILTER PRODUCTS ===============*/
let mixerProducts = mixitup('.products__content', {
  selectors: {
    target: '.products__card',
  },
  animation: {
    duration: 300,
  },
})
/* Default filter products */
mixerProducts.filter('.delicacies')
/* Link active products */
const linkProducts = document.querySelectorAll('.products__item')

linkProducts.forEach((link) => {
  link.addEventListener('click', () => {
    linkProducts.forEach((link) => {
      link.classList.remove('active-product')
    })
    link.classList.add('active-product')
  })
})

/*=============== SHOW SCROLL UP ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
