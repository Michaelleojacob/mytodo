import closeNavMenu from './closeNavMenu/closeNavMenu';
import NavButtonEvent from './NavButtonOnClickEvent/NavButtonOnClickEvent';
import NewItemEvent from './newItemEvent/NewItemEvent';

export default class Events {
	static init() {
		// console.log(this.taskAreaDomObj);
		this.handlecCloseNavMenu();
		this.handleNavButtonEvent();
		this.handleNewItemEvent();
	}
	static handlecCloseNavMenu() {
		closeNavMenu.closeNavMenu();
	}
	static handleNavButtonEvent() {
		NavButtonEvent.handleNavDelegation(this.taskAreaDomObj);
	}
	static handleNewItemEvent() {
		NewItemEvent.init(this.taskAreaDomObj);
	}
}
