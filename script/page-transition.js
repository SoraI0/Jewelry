export class PageTransition {
	constructor() {
		const $catalogLink = document.querySelectorAll('.catalog-link, #gallery-rings, #gallery-sets, #gallery-chains, #gallery-bracelets, #gallery-earrings, #circlets-link, #newness-link')
		const $landingLink = document.querySelectorAll('.landing-link')
		const $catalog = document.querySelectorAll('#catalog')
		const $landing = document.querySelectorAll('.landing, .header__info')
		const $header = document.querySelector('header')
		const $typeCheckbox = document.querySelectorAll('#type input')
		const $submitButton = document.querySelector('.filter__button')
		const $products = document.querySelectorAll('.main__products-product')
		const $priceValue = document.querySelectorAll('#price-from, #price-to')
		const $notAFound = document.querySelector('.main__not-a-found')


		catalogShow($catalogLink)

		$catalogLink.forEach(item => {
			item.addEventListener('click', () => {
				$catalog.forEach(item => item.style.display = 'block')
				$landing.forEach(item => item.style.display = 'none')
				$header.style.backgroundImage = 'none'
			})
		})

		$landingLink.forEach(item => {
			item.addEventListener('click', () => {
				$catalog.forEach(item => item.style.display = 'none')
				$landing.forEach(item => item.style.display = 'block')
				$header.style.backgroundImage = 'url(./images/background.png)'
				document.querySelectorAll('input').forEach(element => {
					element.checked = false;
					$priceValue.forEach(el => {
						el.value = ''
					})
					$notAFound.classList.add('hide')
					$products.forEach(item => item.style.display = 'flex')
				});
			})
		})

		function catalogShow(link) {
			link.forEach(item => {
				item.addEventListener('click', () => {
					$catalog.forEach(item => item.style.display = 'block')
					$landing.forEach(item => item.style.display = 'none')
					$header.style.backgroundImage = 'none'
					$typeCheckbox.forEach(checkBox => {
						checkBox.removeAttribute('checked')
					})
					$typeCheckbox.forEach(checkBox => {
						if ((item.getAttribute('data-type') === checkBox.name) || item.getAttribute('data-type') === 'sets') {
							checkBox.checked = true;
							$submitButton.click()
						}
					})
				})
			})
		}
	}
}