import closeNavMenu from './closeNavMenu/closeNavMenu';
import DeleteProject from './ListenForDelete/projectDelete';
import NavButtonEvent from './NavButtonOnClickEvent/NavButtonOnClickEvent';

export default class Events {
	static init() {
		this.handlecCloseNavMenu();
		this.handleNavButtonEvent();
		this.handleProjectDelete();
	}
	static handlecCloseNavMenu() {
		closeNavMenu.closeNavMenu();
	}
	static handleNavButtonEvent() {
		NavButtonEvent.handleNavDelegation();
	}
	static handleProjectDelete() {
		DeleteProject.cacheDom();
	}
}
