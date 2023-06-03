export class Favorites {
	constructor() {
		let $hearts = document.querySelectorAll('.heart')
      
		$hearts.forEach(element => {
			element.addEventListener('click', () => {
				element.classList.toggle('favorites-click')
				element.classList.toggle('isSaved')
            if (element.classList.contains('isSaved')) {
					element.src = './images/favorite-full.svg'
				} else {
					element.src = './images/favorite.svg'
				}
            let prod = element.parentElement.parentElement.parentElement
            let src = prod.querySelector('.product-image').src
            let name = prod.querySelector('.product__name').innerHTML
            let price = prod.querySelector('.product__price').innerHTML
            let id = prod.getAttribute('data-id')

            let arr = JSON.parse(localStorage.getItem('favorites') || '[]')
            let currentProduct = {"id" : id, "src" : src, "name" : name, "price" : price}

            if (arr.find(i => i.id === currentProduct.id)) {
               // arr.filter(i => i === currentProduct)
               arr = arr.filter(i => i.id !== currentProduct.id)
            } else {
               arr.push(currentProduct)
            }
            localStorage.setItem('favorites', JSON.stringify(arr))
			})
         
		})
		let $icon = document.querySelector('.header__icons-saved')
		let $listForm = document.querySelector('.favorites-list')
		let $landing = document.querySelector('.landing')
		let $header = document.querySelector('header')
		let $footer = document.querySelector('footer')
		let $scroll = document.querySelector('.scroll-to-top')
		let $catalog = document.querySelector('#catalog')
		let $exit = document.querySelector('.favorites-list__cross')
		toggleClick($icon)
		toggleClick($exit)

		function toggleClick(em) {
			em.addEventListener('click', () => {
            let favoritesList = document.querySelector('.favorites-list__list')
            favoritesList.innerHTML = ''
            let arr = JSON.parse(localStorage.getItem('favorites') || '[]')
            arr.forEach(e => {
               favoritesList.innerHTML += addItem(e.id , e.src, e.name, e.price)
            })
				$listForm.classList.toggle('hide')
				$landing.classList.toggle('blur')
				$header.classList.toggle('blur')
				$footer.classList.toggle('blur')
				$catalog.classList.toggle('blur')
				$scroll.classList.toggle('hide')
			})
		}

      function addItem (id, src, name, price){
         return `
            <div class="favorites-list__product" data-id = ${id}>
               <img src="${src}" alt="product">
               <div class="favorites-list__product-info">
                  <h3 class="favorites-list__product-title">${name}</h3>
                  <p class="favorites-list__price">${price}</p>
                  <div class="favorites-list__product-bottom">
                     <a href="#" class="button-white">Замовити</a>
                     <div class="favorites-list__fav">
                        <img class="favorites-list__icon-black heart isSaved" src="./images/favorite-full.svg"
                           alt="favorite">
                     </div>
                  </div>
               </div>
            </div>
         `
         
      }
	}
}