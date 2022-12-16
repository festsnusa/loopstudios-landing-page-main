let burger = document.querySelector('.header__burger'),
  list = document.querySelector('.header__list'),
  boxes = document.querySelectorAll('.header__box'),
  dropdowns = document.querySelectorAll('.header__dropdown'),
  icons = document.querySelectorAll('.header__icon'),
  logo = document.querySelector('.header__logo'),
  headerLinks = document.querySelectorAll('.header__link'),
  images = document.querySelectorAll('.images__image')
  mediaQuery = window.matchMedia("(min-width: 950px)"),

  imagesCollection = [
    'image-deep-earth',
    'image-night-arcade',
    'image-soccer-team',
    'image-grid',
    'image-from-above',
    'image-pocket-borealis',
    'image-curiosity',
    'image-fisheye'
  ]

burger.addEventListener('click', () => {
  burger.classList.toggle('header__burger_active')
  list.classList.toggle('header__list_active')
  logo.classList.toggle('header__logo_active')
})

boxes.forEach((box, i) => {
  box.addEventListener('click', () => {
    dropdowns[i].classList.toggle('header__dropdown_active')
    icons[i].classList.toggle('header__icon_active')
  })
})

function changeVisibility() {
  if (mediaQuery.matches) {
    burger.classList.remove('header__burger_active')
    burger.classList.add('header__burger_invisible')
    list.classList.remove('header__list_active')
    list.classList.add('header__list_flex')
    logo.classList.remove('header__logo_active')

    headerLinks.forEach(headerLink => {
      headerLink.classList.add('header__link_flex')
    })

    fillImages('desktop')

    return
  }

  burger.classList.remove('header__burger_invisible')
  list.classList.remove('header__list_active')
  list.classList.remove('header__list_flex')

  headerLinks.forEach(headerLink => {
    headerLink.classList.remove('header__link_flex')
  })

  fillImages('mobile')

}

function fillImages(device) {

  images.forEach((image, i) => {
    image.style.backgroundImage = `url("./images/${device}/${imagesCollection[i]}.jpg")`
  })
}

mediaQuery.addEventListener("change", () => changeVisibility())
window.addEventListener('DOMContentLoaded', () => changeVisibility())