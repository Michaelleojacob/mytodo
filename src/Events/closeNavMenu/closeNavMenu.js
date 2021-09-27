import toggleDisplay from '../toggleDisplay/toggleDisplay';
export default class NavEvent {
	static init(event) {
		toggleDisplay(event.target.parentNode.parentNode.parentNode.childNodes[1]);
	}
}
