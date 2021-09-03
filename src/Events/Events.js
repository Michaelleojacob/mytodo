import NavEvent from './navEvent/navEvent';
import NavButtonEvent from './NavButtonOnClickEvent/NavButtonOnClickEvent';

export default class Events {
	static init() {
		this.handleNavEvent();
		this.handleNavButtonEvent();
	}
	static handleNavEvent() {
		NavEvent.closeNavMenu();
	}
	static handleNavButtonEvent() {
		NavButtonEvent.handleNavDelegation();
	}
}
