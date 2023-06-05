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
				let currentProduct = { "id": id, "src": src, "name": name, "price": price }

				if (arr.find(i => i.id === currentProduct.id)) {
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
					favoritesList.appendChild(addItem(e.id, e.src, e.name, e.price))
				})
				$listForm.classList.toggle('hide')
				$landing.classList.toggle('blur')
				$header.classList.toggle('blur')
				$footer.classList.toggle('blur')
				$catalog.classList.toggle('blur')
				$scroll.classList.toggle('hide')
			})
		}

		function addItem(id, src, name, price) {
			var newListProduct = document.createElement('div')
			newListProduct.className = 'favorites-list__product'
			newListProduct.setAttribute('data-id', id)
			var newListImgCover = document.createElement('div')
			newListImgCover.className = 'favorites-list__img-cover'
			var newImgProduct = document.createElement('img')
			newImgProduct.src = src
			var newListProductInfo = document.createElement('div')
			newListProductInfo.className = 'favorites-list__product-info'
			var newH3 = document.createElement('h3')
			newH3.className = 'favorites-list__product-title'
			newH3.innerText = name
			var newP = document.createElement('p')
			newP.className = 'favorites-list__price'
			newP.innerText = price
			var newListProductBottom = document.createElement('div')
			newListProductBottom.className = 'favorites-list__product-bottom'
			var newA = document.createElement('a')
			newA.className = 'favorites-list__product-button'
			newA.href = '#'
			newA.innerText = 'Замовити'
			var newListFav = document.createElement('div')
			newListFav.className = 'favorites-list__fav'
			var newImgHeart = document.createElement('img')
			newImgHeart.src = "./images/favorite-full.svg"
			newImgHeart.className = 'favorites-list__icon-black heart isSaved'

			newListProduct.appendChild(newListImgCover)
			newListImgCover.appendChild(newImgProduct)
			newListProduct.appendChild(newListProductInfo)
			newListProductInfo.appendChild(newH3)
			newListProductInfo.appendChild(newP)
			newListProductInfo.appendChild(newListProductBottom)
			newListProductBottom.appendChild(newA)
			newListProductBottom.appendChild(newListFav)
			newListFav.appendChild(newImgHeart)
			console.log(newListProduct)
			return newListProduct
			// `
			//    <div class="favorites-list__product" data-id = ${id}>
			//       <img src="${src}" alt="product">
			//       <div class="favorites-list__product-info">
			//          <h3 class="favorites-list__product-title">${name}</h3>
			//          <p class="favorites-list__price">${price}</p>
			//          <div class="favorites-list__product-bottom">
			//             <a href="#" class="button-white">Замовити</a>
			//             <div class="favorites-list__fav">
			//                <img class="favorites-list__icon-black heart isSaved" src="./images/favorite-full.svg"
			//                   alt="favorite">
			//             </div>
			//          </div>
			//       </div>
			//    </div>
			// `


		}


		//--------------------------------------------------------------------------------------------------
		const allElements = document.querySelectorAll('.scroll-to-top, header, #landing, #catalog, footer')

		$icon.addEventListener('click', () => {
			allElements.forEach(el => {
				el.style.pointerEvents = 'none'

				el.style.userSelect = 'none'
				document.body.style.overflow = 'hidden'
			})
		})
		$exit.addEventListener('click', () => {
			allElements.forEach(el => {
				el.style.pointerEvents = 'all'
				el.style.userSelect = 'all'
				document.body.style.overflow = 'auto'
			})
		})
	}
}