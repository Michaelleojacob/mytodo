import domFactory from '../../domFactory/domFactory';
import removeAllChildNodes from '../../removeAllChildNodes/removeAllChildNodes';
import Storage from '../../Storage/Storage';
import NewItemEvent from '../newItemEvent/NewItemEvent';

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
	static makeNewItemButton() {
		this.buttonWrapper = domFactory.domElement({
			attributes: { id: 'newItemAllTasksWrapper' },
			children: [
				(this.newTaskButton = domFactory.domElement({
					type: 'button',
					classes: ['closeOnClick', 'newTask', 'newItem'],
					text: `+ new task`,
				})),
			],
		});
		this.renderTasks.appendChild(this.buttonWrapper);
		return this.buttonWrapper, this.newTaskButton;
	}
	static handleAllClick = e => {
		this.title.textContent = 'all';
		removeAllChildNodes(this.renderTasks);
		const arr = Storage.getTodos();
		for (let x of arr) {
			const element = domFactory.domElement({
				type: 'button',
				classes: [x.name, 'tasks'],
				text: x.name,
			});
			this.renderTasks.appendChild(element);
		}
		this.makeNewItemButton();
		this.newItemForm = NewItemEvent.makeEntireSubtree(this.buttonWrapper);
		NewItemEvent.getFormInput(this.newItemForm);
		NewItemEvent.listenNewItemButtonToOpenForm({
			elementListening: this.newTaskButton,
			toggler: this.newItemForm,
		});
	};
}
