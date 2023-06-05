export class Favorites {
	constructor() {
		// let favList = document.querySelector('.favorites-list__list')
		let $hearts = document.querySelectorAll('.heart')
		let $arrProducts = document.querySelectorAll('.product')
		// let text = document.createElement('p')
		// text.innerText = 'Немає обраних товарів'
		// text.style.width = '100%'
		// text.style.display = 'flex'
		// text.style.justifyContent = 'center'
		// text.style.margin = '30px 0'
		// favList.after(text)
		// if (!(localStorage.getItem('favorites') === [])) {
		// 	favList.after(text)
		// 	console.log('awawf');
		// } else {
		// 	text.textContent = ''
		// }

		checkHearts()
		$hearts.forEach(element => {
			element.parentElement.classList.contains('slider__fav') ? isClick(element, 2) : isClick(element, 0)
		})

		function isClick(element, type) {
			element.addEventListener('click', () => {
				element.classList.toggle('favorites-click')
				element.classList.toggle('isSaved')
				if (element.classList.contains('isSaved')) {
					element.src = './images/favorite-full.svg'
				} else {
					element.src = './images/favorite.svg'
				}
				if (type === 0) {
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
				} else if (type === 1) {
					let prod = element.parentElement.parentElement.parentElement.parentElement
					let src = prod.querySelector('img').src
					let name = prod.querySelector('.favorites-list__product-title').innerHTML
					let price = prod.querySelector('.favorites-list__price').innerHTML
					let id = prod.getAttribute('data-id')

					let arr = JSON.parse(localStorage.getItem('favorites') || '[]')
					let currentProduct = { "id": id, "src": src, "name": name, "price": price }
					delHearts(element)
					if (arr.find(i => i.id === currentProduct.id)) {
						arr = arr.filter(i => i.id !== currentProduct.id)
					} else {
						arr.push(currentProduct)
					}
					localStorage.setItem('favorites', JSON.stringify(arr))
				} else if (type === 2) {
					let prod = element.parentElement.parentElement.parentElement
					let src = prod.querySelector('.slider__img').src
					let name = prod.querySelector('.slider__product-title').innerHTML
					let price = prod.querySelector('.slider__price').innerHTML
					let id = prod.getAttribute('data-id')

					let arr = JSON.parse(localStorage.getItem('favorites') || '[]')
					let currentProduct = { "id": id, "src": src, "name": name, "price": price }

					if (arr.find(i => i.id === currentProduct.id)) {
						arr = arr.filter(i => i.id !== currentProduct.id)
					} else {
						arr.push(currentProduct)
					}
					localStorage.setItem('favorites', JSON.stringify(arr))
				}
			})
		}

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

			isClick(newImgHeart, 1)

			return newListProduct
		}

		function checkHearts() {
			$arrProducts.forEach(el => {
				let arr = JSON.parse(localStorage.getItem('favorites') || '[]')

				arr.forEach(e => {
					if (el.getAttribute('data-id') === e.id) {
						$arrProducts[e.id - 1].querySelector('.heart').src = './images/favorite-full.svg'
						$arrProducts[e.id - 1].querySelector('.heart').classList.add('isSaved')
					}
				})
			})
		}

		function delHearts(i) {
			let arr = JSON.parse(localStorage.getItem('favorites') || '[]')

			arr.forEach(e => {
				if (e.id === i.parentElement.parentElement.parentElement.parentElement.getAttribute('data-id')) {
					$arrProducts[e.id - 1].querySelector('.heart').src = './images/favorite.svg'
					$arrProducts[e.id - 1].querySelector('.heart').classList.remove('isSaved')
				}
			})
		}
		const allElements = document.querySelectorAll('.scroll-to-top, header, #landing, #catalog, footer')

		$icon.addEventListener('click', () => {
			allElements.forEach(el => {
				el.style.pointerEvents = 'none'
				document.body.style.overflow = 'hidden'
			})
		})
		$exit.addEventListener('click', () => {
			allElements.forEach(el => {
				el.style.pointerEvents = 'unset'
				document.body.style.overflow = 'auto'
			})
		})
	}
}