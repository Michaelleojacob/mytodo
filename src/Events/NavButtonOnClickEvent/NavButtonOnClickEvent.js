import domFactory from '../../domFactory/domFactory';
import Storage from '../../Storage/Storage';

export default class NavButtonEvent {
	static handleNavDelegation() {
		this.cacheDom();
		this.allClickedOn();
		this.handleAllClick();
	}
	static cacheDom() {
		this.renderTasks = document.querySelector('.renderTasks');
		this.all = document.querySelector('.all');
		this.today = document.querySelector('.today');
		this.week = document.querySelector('.week');
		this.month = document.querySelector('.month');
	}
	static allClickedOn() {
		this.all.addEventListener('click', this.handleAllClick);
	}
	static handleAllClick(e) {
		const arr = Storage.getTodos();
		for (let x of arr) {
			const element = domFactory.domElement({
				type: 'button',
				classes: [x.name, 'tasks'],
				text: x.name,
			});
			NavButtonEvent.renderTasks.appendChild(element);
		}
	}
}
