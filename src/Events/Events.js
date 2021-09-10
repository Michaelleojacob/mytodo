import closeNavMenu from './closeNavMenu/closeNavMenu';
import NavButtonEvent from './NavButtonOnClickEvent/NavButtonOnClickEvent';
import NewItemEvent from './newItemEvent/NewItemEvent';

export default class Events {
	static init() {
		this.handlecCloseNavMenu();
		this.handleNavButtonEvent();
	}
	static handlecCloseNavMenu() {
		closeNavMenu.closeNavMenu();
	}
	static handleNavButtonEvent() {
		NavButtonEvent.handleNavDelegation();
	}
}
