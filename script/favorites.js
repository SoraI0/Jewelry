export class Favorites {
	constructor() {
      let $hearts = document.querySelectorAll('.heart')
      $hearts.forEach(element => {
         element.addEventListener('click', () => {
            element.classList.toggle('favorites-click')
            element.classList.toggle('isSaved')
            if (element.classList.contains('isSaved')) {
               element.src = './images/favorite-full.svg'
               element.setAttributeNode
            } else {
               element.src = './images/favorite.svg'
            }
         })
      })
      let $icon = document.querySelector('.header__icons-saved')
      let $listForm = document.querySelector('.favorites-list')
      let $landing = document.querySelector('.landing')
      let $header = document.querySelector('header')
      let $scroll = document.querySelector('.scroll-to-top')
      let $exit = document.querySelector('.favorites-list__cross')
      toggleClick($icon)
      toggleClick($exit)

      function toggleClick (em) {
         em.addEventListener('click', () => {
            $listForm.classList.toggle('hide')
            $landing.classList.toggle('blur')
            $header.classList.toggle('blur')
            $scroll.classList.toggle('hide')
         })
      }
   }
}