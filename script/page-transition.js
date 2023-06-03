export class PageTransition {
	constructor() {
		const $catalogMenu = document.querySelector('.catalog-menu')
		const $catalog = document.querySelector('#catalog')
		const $landing = document.querySelector('#landing')

		$catalogMenu.addEventListener('click', () => {
			$catalog.style.display = 'block'
			$landing.style.display = 'none'
		})
	}
}