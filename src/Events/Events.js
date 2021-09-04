import NavEvent from './navEvent/navEvent';
import NavButtonEvent from './NavButtonOnClickEvent/NavButtonOnClickEvent';
import NewItemEvent from './createNewItemButton/createNewItemEvent';

export default class Events {
	static init() {
		this.handleNavEvent();
		this.handleNavButtonEvent();
		this.handleNewItemEvent();
	}
	static handleNavEvent() {
		NavEvent.closeNavMenu();
	}
	static handleNavButtonEvent() {
		NavButtonEvent.handleNavDelegation();
	}
	static handleNewItemEvent() {
		NewItemEvent.init();
	}
}
