export class Slider {
	constructor(sliderID) {
		 this.leftArrow = document.querySelector(`${sliderID} .left-arrow`)
		 this.rightArrow = document.querySelector(`${sliderID} .right-arrow`)
		 this.items = document.querySelectorAll(`${sliderID} .slider__product`)

		 this.index = 1;

		 this.rightArrow.addEventListener('click', () => {
			  if (this.index === this.items.length - 2) {
					this.index = 0;
			  }
			  this.index++;
			  this.updateSlider()
		 })

		 this.leftArrow.addEventListener('click', () => {
			  this.index--;
			  if (this.index <= 0) {
					this.index = this.items.length - 2;
			  }
			  this.updateSlider()
		 })

		 window.addEventListener('resize', () => this.updateSlider())
		 
	}

	updateSlider(){
		 this.items.forEach(item => {
			  item.style.display = 'none'
		 })
		 this.items[this.index].style.display = 'flex'
		 if (screen.width > 680) {
			  this.items[this.index - 1].style.display = 'flex'
		 }
		 if (screen.width > 920) {
			  this.items[this.index + 1].style.display = 'flex'
		 }
	}
}