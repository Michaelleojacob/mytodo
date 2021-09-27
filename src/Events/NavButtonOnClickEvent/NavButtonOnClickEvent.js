import TargetAll from './targetAll';
import TargetProjects from './TargetProjects';
import removeAllChildNodes from '../../removeAllChildNodes/removeAllChildNodes';
import TodayWeekMonth from './TodayWeekMonth';

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
			} else if (cList.contains('projectItemWrapper'))
				TargetProjects.init(e, this.obj);
			else if (cList.contains('today'))
				TodayWeekMonth.renderTitleAndTasks('today');
			else if (cList.contains('week'))
				TodayWeekMonth.renderTitleAndTasks('week');
			else if (cList.contains('month'))
				TodayWeekMonth.renderTitleAndTasks('month');
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
			if (child !== null) {
				removeAllChildNodes(child);
			}
		});
	}
}
