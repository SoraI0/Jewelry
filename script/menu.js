export class Menu {
   constructor() {
      let $menuBtn = document.querySelector('.header__menu-img')
      let $menuBtnCross = document.querySelector('.header__menu-img-cross')
      let $menu = document.querySelector('.header__menu')
      let $menuItem = document.querySelectorAll('.header__menu-item')
      $menuBtn.addEventListener('click', () => {
         $menu.classList.toggle('active');
         $menuBtnCross.style.display = 'block'
      })
      $menuBtnCross.addEventListener('click', () => {
         $menu.classList.toggle('active');
         $menuBtnCross.style.display = 'none'
      })
      $menuItem.forEach(element => {
         element.addEventListener('click', () => {
            $menu.classList.toggle('active');
            $menuBtnCross.style.display = 'none'
         })
      })


   }

}