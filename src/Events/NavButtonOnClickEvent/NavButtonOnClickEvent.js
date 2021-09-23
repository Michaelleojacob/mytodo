import TargetAll from './targetAll';
import TargetProjects from './TargetProjects';
import TodayWeekMonth from './TodayWeekMonth';
import removeAllChildNodes from '../../removeAllChildNodes/removeAllChildNodes';

export default class NavButtonEvent {
	static handleNavDelegation() {
		this.cacheNavMenuUI();
		this.cacheRenderAreaUI();
		this.handleClick();
		this.clearTaskArea();
	}
	static cacheNavMenuUI() {
		this.navWrap = document.querySelector('.navWrap');
		this.tTitle = document.querySelector('.tTitle');
		this.renderTasks = document.querySelector('.renderTasks');
	}
	static cacheRenderAreaUI() {
		this.taskWrapper = document.querySelector('.taskWrapper');
		this.taskTitleWrapper = document.querySelector('.taskTitleWrapper');
		this.renderTasks = document.querySelector('.renderTasks');
		this.newItemButtonWrapper = document.querySelector('.newItemButtonWrapper');
	}
	static testing() {
		const myobject = {
			title: this.taskTitleWrapper,
			tasks: this.renderTasks,
			newbtn: this.newItemButtonWrapper,
		};
		return myobject;
	}

	static handleClick() {
		this.navWrap.addEventListener('click', e => {
			if (!e.target.classList.contains('navButton')) return;
			const target = e.target;
			const cList = target.classList;
			this.clearTaskArea();

			const lol = this.testing();

			if (cList.contains('all')) TargetAll.init(lol);
			else if (cList.contains('projTask')) console.log('project');
			else if (cList.contains('today')) console.log('today');
			else if (cList.contains('week')) console.log('week');
			else if (cList.contains('month')) console.log('month');
		});
	}
	static clearTaskArea() {
		this.taskWrapper.childNodes.forEach(child => {
			removeAllChildNodes(child);
		});
	}
}
