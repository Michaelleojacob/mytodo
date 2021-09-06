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
	static items = [
		{ name: 'all', sortByProperty: 'from', filterBy: '' },
		{ name: 'runescape', sortByProperty: 'from', filterBy: 'runescape' },
		{ name: 'week', sortByProperty: 'date', filterBy: '5/5/2021' },
	];

	static navButtonLogic(e) {
		if (e.target.classList.length === 0) return;
		const clickTarget = e.target.textContent.trim();
		if (e.target.classList.contains('sortByTime')) {
			removeAllChildNodes(NavButtonEvent.renderTasks);
			NavButtonEvent.handleSortByTime();
		}
		if (e.target.classList.contains('sortByFrom')) {
			removeAllChildNodes(NavButtonEvent.renderTasks);
			// NavButtonEvent.renderTasksLogic(e, 'from', clickTarget, true);
		}
	}

	static handleSortByTime() {
		const plsDelete = domFactory.domElement({
			classes: ['testingOnly', 'removeLater'],
			text: `these buttons don't render tasks yet. This will be a feature in a future update`,
		});
		NavButtonEvent.renderTasks.appendChild(plsDelete);
	}

	static renderAndAppendTasks(property, sortBy) {
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

	static renderTasksLogic(e, property, sortBy, renderButtonTorF) {
		// < cache dom aspects > \\
		const storeTarget = e.target.textContent;
		this.title.textContent = storeTarget;
		// </ cache dom aspects > \\

		// < initiate myArr holding all relevant tasks > \\
		// </ initiate myArr holding all relevant tasks > \\

		// < ternary for getting a variable, to see if the content change will be a new task, or a new project task > \\
		let taskOrProjTask;
		e.target.classList.contains('all')
			? (taskOrProjTask = 'newTask')
			: (taskOrProjTask = 'newProjTask');
		// </ ternary for getting a variable, to see if the content change will be a new task, or a new project task > \\

		NavButtonEvent.renderAndAppendTasks(property, sortBy);

		// < (all/projects) = yes'+ add' button. (sortByTime) = no '+ add' button
		if (renderButtonTorF) {
			const newButton = domFactory.domElement({
				type: 'button',
				classes: [taskOrProjTask, 'closeOnClick', 'newItemButton'],
				text: '+ new task',
			});
			this.renderTasks.appendChild(newButton);
		}
		// </ (all/projects) = yes'+ add' button. (sortByTime) = no '+ add' button
	}
}
