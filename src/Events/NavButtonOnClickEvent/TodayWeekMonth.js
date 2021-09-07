import domFactory from '../../domFactory/domFactory';
import removeAllChildNodes from '../../removeAllChildNodes/removeAllChildNodes';
import Storage from '../../Storage/Storage';

export default class TodayWeekMonth {
	static init() {
		this.cacheDom();
		this.addListener();
	}
	static cacheDom() {
		this.title = document.querySelector('.tTitle');
		this.renderTasks = document.querySelector('.renderTasks');
		this.today = document.querySelector('.today');
		this.week = document.querySelector('.week');
		this.month = document.querySelector('.month');
		return (this.items = [this.today, this.week, this.month]);
	}
	static addListener() {
		this.items.map(x => x.addEventListener('click', this.handleLogic));
	}
	static handleLogic = e => {
		this.title.textContent = e.target.textContent;
		this.renderTasks.textContent = `this feature will be introduced at a later date`;
	};
}
