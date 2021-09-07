import TargetAll from './targetAll';
export default class NavButtonEvent {
	static handleNavDelegation() {
		this.listenForAllClick();
	}
	static listenForAllClick() {
		TargetAll.init();
	}
}
