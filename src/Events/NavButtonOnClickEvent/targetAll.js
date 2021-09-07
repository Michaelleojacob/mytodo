import domFactory from '../../domFactory/domFactory';
import removeAllChildNodes from '../../removeAllChildNodes/removeAllChildNodes';
import Storage from '../../Storage/Storage';

export default class TargetAll {
	static init() {
		this.cacheDom();
		this.allClickedOn();
	}
	static cacheDom() {
		this.all = document.querySelector('.all');
		this.title = document.querySelector('.tTitle');
		this.renderTasks = document.querySelector('.renderTasks');
	}

	static allClickedOn() {
		this.all.addEventListener('click', this.handleAllClick);
	}
	static handleAllClick() {
		const that = TargetAll;
		that.title.textContent = 'all';
		removeAllChildNodes(that.renderTasks);
		const arr = Storage.getTodos();
		for (let x of arr) {
			const element = domFactory.domElement({
				type: 'button',
				classes: [x.name, 'tasks'],
				text: x.name,
			});
			that.renderTasks.appendChild(element);
		}
		that.newTaskButton = domFactory.domElement({
			type: 'button',
			classes: ['closeOnClick', 'newTask', 'newItem'],
			text: `+ new task`,
		});
		that.renderTasks.appendChild(that.newTaskButton);
	}
}
