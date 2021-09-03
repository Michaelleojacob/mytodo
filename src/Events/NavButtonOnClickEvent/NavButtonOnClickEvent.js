import Storage from '../../Storage/Storage';
import domFactory from '../../domFactory/domFactory';
import removeAllChildNodes from '../../removeAllChildNodes/removeAllChildNodes';

export default class NavButtonEvent {
	static handleNavDelegation() {
		this.cacheDom();
		document.addEventListener('click', this.navButtonLogic);
	}
	static cacheDom() {
		this.title = document.querySelector('.tTitle');
		this.renderTasks = document.querySelector('.renderTasks');
	}
	static navButtonLogic(e) {
		if (e.target.classList.length === 0) return;
		if (e.target.classList.contains('sortByTime')) {
			console.log('sortTime');
			NavButtonEvent.renderTasksLogic(e, 'date', '5/5/2021');
		}
		if (e.target.classList.contains('sortByFrom')) {
			const clickTarget = e.target.textContent.trim();
			NavButtonEvent.renderTasksLogic(e, 'from', clickTarget);
		}
	}

	static renderTasksLogic(e, property, sortBy) {
		const storeTarget = e.target.textContent;
		this.title.textContent = storeTarget;
		removeAllChildNodes(this.renderTasks);
		const myArr = Storage.getAndFilterTodos(property, sortBy);
		for (let item of myArr) {
			const task = domFactory.domElement({
				type: 'button',
				classes: ['task'],
				text: item.name,
			});
			this.renderTasks.appendChild(task);
		}
	}
}
