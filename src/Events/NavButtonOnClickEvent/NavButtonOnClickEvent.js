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
		if (e.target.classList.contains('sortByTime')) {
			// NavButtonEvent.renderTasksLogic(e, 'date', '5/5/2021');
			removeAllChildNodes(NavButtonEvent.renderTasks);
			const plsDelete = domFactory.domElement({
				classes: ['testingOnly', 'removeLater'],
				text: `these buttons don't render tasks yet. This will be a feature in a future update`,
			});
			NavButtonEvent.renderTasks.appendChild(plsDelete);
		}
		if (e.target.classList.contains('sortByFrom')) {
			const clickTarget = e.target.textContent.trim();
			NavButtonEvent.renderTasksLogic(e, 'from', clickTarget, false);
		}
	}

	static renderTasksLogic(e, property, sortBy, renderButtonTorF) {
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
		if (renderButtonTorF === false) {
			const newButton = domFactory.domElement({
				type: 'button',
				classes: ['addNewTask'],
				text: '+ new task',
			});
			this.renderTasks.appendChild(newButton);
		}
	}
}
