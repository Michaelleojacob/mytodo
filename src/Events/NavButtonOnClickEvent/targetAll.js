import domFactory from '../../domFactory/domFactory';
import removeAllChildNodes from '../../removeAllChildNodes/removeAllChildNodes';
import Storage from '../../Storage/Storage';
import NewItemEvent from '../newItemEvent/NewItemEvent';
import IndividualTasksHTML from '../../ui/individualTaskHTML/individualTaskHTML';

export default class TargetAll {
	static init() {
		this.cacheDom();
		this.allClickedOn();
		this.simulateAllWasClicked();
	}
	static cacheDom() {
		this.all = document.querySelector('.all');
		this.title = document.querySelector('.tTitle');
		this.renderTasks = document.querySelector('.renderTasks');
	}

	static allClickedOn() {
		this.all.addEventListener('click', this.handleAllClick);
	}

	static handleAllClick = e => {
		this.title.textContent = 'all';
		removeAllChildNodes(this.renderTasks);
		const arr = Storage.getTodos();
		for (let x of arr) {
			const element = IndividualTasksHTML.makeOneTask(x);
			this.renderTasks.appendChild(element);
		}
		this.makeNewItemButton();
		this.addInputArea();
		this.listenForNewItemButtonClick();
	};
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
	static addInputArea() {
		this.newItemForm = NewItemEvent.formDOMTree(
			this.buttonWrapper,
			'newAllTask'
		);
		NewItemEvent.getFormInput(this.newItemForm);
	}
	static listenForNewItemButtonClick() {
		NewItemEvent.listenNewItemButtonToOpenForm({
			elementListening: this.newTaskButton,
			toggler: this.newItemForm,
		});
	}
	static simulateAllWasClicked() {
		document.addEventListener('DOMContentLoaded', () => {
			this.all.click();
		});
	}
}
