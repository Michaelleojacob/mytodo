import TargetAll from './targetAll';
import TargetProjects from './TargetProjects';

export default class NavButtonEvent {
	static handleNavDelegation() {
		this.listenForAllClick();
		this.listenForProjectClick();
	}
	static listenForAllClick() {
		TargetAll.init();
	}
	static listenForProjectClick() {
		TargetProjects.init();
	}
}
