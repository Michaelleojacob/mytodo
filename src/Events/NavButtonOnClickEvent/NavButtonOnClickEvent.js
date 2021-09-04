import './NavButtonOnClickEvent.css';
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
		const clickTarget = e.target.textContent.trim();
		if (e.target.classList.contains('sortByTime')) {
			removeAllChildNodes(NavButtonEvent.renderTasks);
			NavButtonEvent.handleSortByTime();
		}
		if (e.target.classList.contains('sortByFrom')) {
			removeAllChildNodes(NavButtonEvent.renderTasks);
			NavButtonEvent.renderTasksLogic(e, 'from', clickTarget, true);
		}
	}

	static handleSortByTime() {
		const plsDelete = domFactory.domElement({
			classes: ['testingOnly', 'removeLater'],
			text: `these buttons don't render tasks yet. This will be a feature in a future update`,
		});
		NavButtonEvent.renderTasks.appendChild(plsDelete);
	}

	static renderTasksLogic(e, property, sortBy, renderButtonTorF) {
		const storeTarget = e.target.textContent;
		this.title.textContent = storeTarget;
		const myArr = Storage.getAndFilterTodos(property, sortBy);
		let taskOrProjTask;
		e.target.classList.contains('all')
			? (taskOrProjTask = 'newTask')
			: (taskOrProjTask = 'newProjTask');
		for (let item of myArr) {
			const task = domFactory.domElement({
				type: 'button',
				classes: ['task'],
				text: item.name,
			});
			this.renderTasks.appendChild(task);
		}
		if (renderButtonTorF) {
			const newButton = domFactory.domElement({
				type: 'button',
				classes: [taskOrProjTask, 'closeOnClick', 'newItemButton'],
				text: '+ new task',
			});
			this.renderTasks.appendChild(newButton);
		}
	}
}
