export class PageTransition {
	constructor() {
		const $catalogLink = document.querySelectorAll('.catalog-link')
		const $landingLink = document.querySelectorAll('.landing-link')
		const $catalog = document.querySelectorAll('#catalog')
		const $landing = document.querySelectorAll('.landing')
		const $header = document.querySelector('header')


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
			})
		})
	}
}

		// 	let counterCatalog = 0
		// 	let counterlanding = 0

		// 	$catalogMenu.forEach(item => {
		// 		item.addEventListener('click', () => {
		// 			if (counterlanding > 0) {
		// 				counterCatalog = 0
		// 			}
		// 			counterCatalog = transition($landing, $catalog, counterCatalog)
		// 			$header.style.backgroundImage = 'none'
		// 		})
		// 	})


		// 	$landingMenu.forEach(item => {
		// 		item.addEventListener('click', () => {
		// 			if (counterCatalog > 0) {
		// 				counterlanding = 0
		// 			}
		// 			counterlanding = transition($catalog, $landing, counterlanding)
		// 			$header.style.transform = 'translateX(0%)'
		// 			$header.style.transition = 'transform 0.2s'
		// 			setTimeout(() => {

		// 				$header.style.backgroundImage = ' url(./images/background.png)'
		// 			})

		// 		})
		// 	})




		// 	function transition(hide, show, counter) {
		// 		if (counter === 0) {
		// 			hide.forEach(item => {
		// 				setTimeout(() => {
		// 					item.style.display = 'none'
		// 				}, 200)
		// 			})

		// 			hide.forEach(item => {
		// 				item.style.transform = 'translateX(-110%)'
		// 				item.style.transition = 'transform 0.2s'
		// 			})

		// 			show.forEach(item => {
		// 				item.style.transform = 'translateX(100%)'
		// 				item.style.display = 'block'
		// 			})

		// 			show.forEach(item => {

		// 				item.style.transition = 'transform 0.2s'
		// 				setTimeout(() => {
		// 					item.style.transform = 'translateX(0)'
		// 				}, 200)
		// 			})
		// 		}
		// 		counter++
		// 		return counter
		// 	}
