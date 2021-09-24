import TargetAll from './targetAll';
import TargetProjects from './TargetProjects';
import TodayWeekMonth from './TodayWeekMonth';
import removeAllChildNodes from '../../removeAllChildNodes/removeAllChildNodes';
import TargetToday from './targetToday';
import TargetWeek from './targetWeek';
import TargetMonth from './TargetMonth';

export default class NavButtonEvent {
	static handleNavDelegation(obj) {
		this.obj = obj;
		this.taskParent = obj.taskParent;
		this.targetStatus = '';
		this.cacheNavMenuUI();
		this.handleClick();
		this.clearTaskArea();
	}
	static cacheNavMenuUI() {
		this.navWrap = document.querySelector('.navWrap');
		this.tTitle = document.querySelector('.tTitle');
		this.renderTasks = document.querySelector('.renderTasks');
	}

	static handleClick() {
		this.navWrap.addEventListener('click', e => {
			if (!e.target.classList.contains('navButton')) return;
			const target = e.target;
			const cList = target.classList;
			this.setTargetStatus(e.target.textContent.trim());
			this.clearTaskArea();

			if (cList.contains('all')) {
				TargetAll.init(this.obj);
			} else if (cList.contains('projTask')) TargetProjects.init(e, this.obj);
			else if (cList.contains('today')) TargetToday.init(this.obj);
			else if (cList.contains('week')) TargetWeek.init(this.obj);
			else if (cList.contains('month')) TargetMonth.init(this.obj);
		});
	}
	static getTargetStatus() {
		return this.targetStatus;
	}
	static setTargetStatus(newTarget) {
		return (this.targetStatus = newTarget);
	}
	static clearTaskArea() {
		this.taskParent.childNodes.forEach(child => {
			removeAllChildNodes(child);
		});
	}
}
