export class Filter {
	constructor() {
		const $productsWrapper = document.querySelector('.main__products-inner')
		const $products = document.querySelectorAll('.main__products-product')
		const $typeCheckbox = document.querySelectorAll('#type input')
		const $materialCheckbox = document.querySelectorAll('#material input')
		const $testCheckbox = document.querySelectorAll('#test input')
		const $priceFrom = document.getElementById('price-from')
		const $priceTo = document.getElementById('price-to')
		const $submitButton = document.querySelector('.filter__button')
		const $notAFound = document.querySelector('.main__not-a-found')
		const $filterShowButton = document.querySelector('.filter__form-button')
		const $filter = document.querySelector('#filter')
		const $filterTitle = document.querySelector('.filter__title')
		



		let isClicked = true;
		$filterShowButton.addEventListener('click', () => {
			if (isClicked) {
				$filterTitle.style.display = 'none'
				$filter.style.display = 'block'
				$filter.style.marginTop = '20px'
				$productsWrapper.style.display = 'none'
			} else {
				$filterTitle.style.display = 'none'
				$filter.style.display = 'none'
				$filter.style.marginTop = '0px'
				$productsWrapper.style.display = 'flex'
			}

			isClicked = !isClicked
		})

		$submitButton.addEventListener('click', () => {


			if (screen.width < 829) {
				$filterTitle.style.display = 'none'
				$filter.style.display = 'none'
				$filter.style.marginTop = '0px'
				$productsWrapper.style.display = 'flex'
			}
		})

		$submitButton.addEventListener('click', (event) => {
			event.preventDefault()
			$priceFrom.style.borderColor = 'unset'
			$priceTo.style.borderColor = 'unset'
			if (+$priceFrom.value > +$priceTo.value) {
				$priceFrom.style.borderColor = '#ff00008a'
				$priceTo.style.borderColor = '#ff00008a'
				return
			}

			$products.forEach(item => { item.style.display = 'none' })

			let priceIndexes = priceFilter($priceFrom.value, $priceTo.value)
			let typeIndexes = groupCheckboxes($typeCheckbox, 'data-type')
			let materialIndexes = groupCheckboxes($materialCheckbox, 'data-material')
			let testIndexes = groupCheckboxes($testCheckbox, 'data-test')

			let indexes = showProducts(typeIndexes, materialIndexes, testIndexes, priceIndexes)

			if (indexes.length !== 0) {
				$notAFound.classList.add('hide')
			} else {
				$notAFound.classList.remove('hide')
			}
		})

		function groupCheckboxes(group, data) {
			let numberOfChecked = 0
			group.forEach(item => {
				if (item.checked) {
					numberOfChecked++
				}
			})
			if (numberOfChecked === 0) { return Array.from(Array($products.length).keys()) }

			let arr = []
			for (let i = 0; i < $products.length; i++) {
				group.forEach(checkbox => {
					if ($products[i].getAttribute(data) === checkbox.name && checkbox.checked) {
						arr.push(i);
					}
				})
			}
			return arr
		}

		function showProducts(...arrays) {
			let result = arrays.reduce((result, currentArray) => result.filter(currentElement => currentArray.includes(currentElement)));
			result.forEach(i => $products[i].style.display = 'flex')
			return result
		}

		function priceFilter(from, to) {
			if (from === '' && to === '') { return Array.from(Array($products.length).keys()) }
			let arr = []
			for (let i = 0; i < $products.length; i++) {
				if (+$products[i].getAttribute('data-price') >= +from && +$products[i].getAttribute('data-price') <= +to) {
					arr.push(i);
				}
			}
			return arr
		}
	}
}