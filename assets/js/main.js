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
const scrollUp = () => {
  const scrollUps = document.querySelector('#scroll-up')
  //when the scroll is higher than 350viewport height, add the show-scroll class to the a tag with the scroll-up class
  if (this.scrollY >= 350) scrollUps.classList.add('show-scroll')
  else scrollUps.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
  const scrollY = window.pageYOffset

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.add('active-link')
    } else {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.remove('active-link')
    }
  })
}

window.addEventListener('scroll', scrollActive)
