import domFactory from '../../domFactory/domFactory';
import removeAllChildNodes from '../../removeAllChildNodes/removeAllChildNodes';
import Storage from '../../Storage/Storage';
import NewItemEvent from '../newItemEvent/NewItemEvent';

export default class TargetProjects {
	static init() {
		this.cacheDom();
		this.projectClickedOn();
	}
	static cacheDom() {
		this.title = document.querySelector('.tTitle');
		this.renderTasks = document.querySelector('.renderTasks');
		this.projectsWrapper = document.querySelector('.projectsWrapper');
	}

	static projectClickedOn() {
		this.projectsWrapper.addEventListener('click', this.handleProjectClickedOn);
	}
	static makeNewItemButton() {
		this.buttonWrapper = domFactory.domElement({
			attributes: { id: 'newItemProjTaskWrapper' },
			children: [
				(this.newTaskButton = domFactory.domElement({
					type: 'button',
					classes: ['closeOnClick', 'newProjTask', 'newItem'],
					text: `+ new task`,
				})),
			],
		});
		this.renderTasks.appendChild(this.buttonWrapper);
		return this.buttonWrapper, this.newTaskButton;
	}
	static handleProjectClickedOn = e => {
		if (e.target.classList.contains('projTask')) {
			const varTitle = e.target.textContent;

			this.title.textContent = varTitle;
			removeAllChildNodes(this.renderTasks);
			const arr = Storage.getAndFilterTodos('from', varTitle);
			for (let x of arr) {
				const element = domFactory.domElement({
					type: 'button',
					classes: [x.name, 'tasks'],
					text: x.name,
				});
				this.renderTasks.appendChild(element);
			}
			this.makeNewItemButton();
			this.newItemForm = NewItemEvent.formDOMTree(
				this.buttonWrapper,
				'newProjTask'
			);
			NewItemEvent.getFormInput(this.newItemForm);
			NewItemEvent.listenNewItemButtonToOpenForm({
				elementListening: this.newTaskButton,
				toggler: this.newItemForm,
			});
		}
	};
	static;
}
