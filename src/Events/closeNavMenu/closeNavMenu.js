import toggleDisplay from '../toggleDisplay/toggleDisplay';
export default class NavEvent {
	static closeNavMenu() {
		const burger = document.querySelector('.burger');
		const navMenu = document.querySelector('.navWrap');
		burger.addEventListener('click', e => {
			toggleDisplay(navMenu);
		});
	}
}
