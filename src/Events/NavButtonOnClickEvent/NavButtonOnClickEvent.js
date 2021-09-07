import TargetAll from './targetAll';
import TargetProjects from './TargetProjects';
import TodayWeekMonth from './TodayWeekMonth';

export default class NavButtonEvent {
	static handleNavDelegation() {
		this.listenForAllClick();
		this.listenForProjectClick();
		this.listenForTodayWeekMonth();
	}
	static listenForAllClick() {
		TargetAll.init();
	}
	static listenForProjectClick() {
		TargetProjects.init();
	}
	static listenForTodayWeekMonth() {
		TodayWeekMonth.init();
	}
}
