export default class Events {
	static init() {
		this.closeNavMenu();
	}
	static closeNavMenu() {
		const burger = document.querySelector('.burger');
		burger.addEventListener('click', this.burgerEvent);
	}
	static burgerEvent() {
		const navMenu = document.querySelector('.navWrap');
		if (navMenu.style.display === 'none') {
			navMenu.style.display = 'flex';
		} else {
			navMenu.style.display = 'none';
		}
	}
}
