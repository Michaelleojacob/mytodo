import toggleDisplay from '../toggleDisplay/toggleDisplay';
export default class NavEvent {
	static init(event) {
		// console.log(event.target.parentNode.parentNode.parentNode.childNodes[1]);
		toggleDisplay(event.target.parentNode.parentNode.parentNode.childNodes[1]);
	}
}
