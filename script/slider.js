export class Slider {
	constructor() {
		const leftArrowNewness = document.querySelector('#newness .left-arrow')
		const rightArrowNewness = document.querySelector('#newness .right-arrow')

		const leftArrowRings = document.querySelector('#rings .left-arrow')
		const rightArrowRings = document.querySelector('#rings .right-arrow')

		const newness = document.querySelectorAll('#newness .slider__product')
		const rings = document.querySelectorAll('#rings .slider__product')

		let screenWidth = screen.width;

		let slideNewness = 1;
		let slideRings = 1;

		slideSlider(slideNewness, newness, leftArrowNewness, rightArrowNewness)
		slideSlider(slideRings, rings, leftArrowRings, rightArrowRings)


		function slideSlider(slide, sliderItems, left, right) {

			if (screenWidth <= 680) {
				sliderItems[slide + 1].style.display = 'none'
				sliderItems[slide - 1].style.display = 'none'
			}
			if (screenWidth <= 920) {
				sliderItems[slide + 1].style.display = 'none'
			}
			if (screenWidth >= 920) {
				right.addEventListener('click', () => {
					if (slide === sliderItems.length - 2) {
						slide = 1;
					}

					slide++;

					sliderItems.forEach(item => {
						item.style.display = 'none'
					})
					sliderItems[slide - 1].style.display = 'flex'
					sliderItems[slide].style.display = 'flex'
					sliderItems[slide + 1].style.display = 'flex'

				})

				left.addEventListener('click', () => {
					slide--;
					if (slide <= 0) {
						slide = sliderItems.length - 3;
					}

					sliderItems.forEach(item => {
						item.style.display = 'none'
					})
					sliderItems[slide - 1].style.display = 'flex'
					sliderItems[slide].style.display = 'flex'
					sliderItems[slide + 1].style.display = 'flex'
				})
			} else if (screenWidth > 680 && screenWidth < 920) {
				right.addEventListener('click', () => {

					if (slide === sliderItems.length - 2) {
						slide = 1;
					}
					slide++;

					sliderItems.forEach(item => {
						item.style.display = 'none'
					})
					sliderItems[slide - 1].style.display = 'flex'
					sliderItems[slide].style.display = 'flex'
				})

				left.addEventListener('click', () => {
					slide--;
					if (slide <= 0) {
						slide = sliderItems.length - 3;
					}

					sliderItems.forEach(item => {
						item.style.display = 'none'
					})
					sliderItems[slide - 1].style.display = 'flex'
					sliderItems[slide].style.display = 'flex'
				})
			} else if (screenWidth <= 680) {
				right.addEventListener('click', () => {

					if (slide === sliderItems.length - 2) {
						slide = 1;
					}
					slide++;

					sliderItems.forEach(item => {
						item.style.display = 'none'
					})
					sliderItems[slide].style.display = 'flex'
				})

				left.addEventListener('click', () => {
					slide--;
					if (slide <= 0) {
						slide = sliderItems.length - 3;
					}

					sliderItems.forEach(item => {
						item.style.display = 'none'
					})
					sliderItems[slide].style.display = 'flex'
				})
			}

		}
		
	}

}

