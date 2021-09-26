import domFactory from '../../domFactory/domFactory';
import toggleDisplay from '../toggleDisplay/toggleDisplay';
import Projects from '../../Projects/Projects';
import Storage from '../../Storage/Storage';
import AddProjectsToUI from '../../ui/navMenu/projects/projects';
import Todo from '../../Todos/Todo';
import IndividualTasksHTML from '../../ui/individualTaskHTML/individualTaskHTML';
import NavButtonEvent from '../NavButtonOnClickEvent/NavButtonOnClickEvent';

export default class NewItemEvent {
	static init() {
		this.container = document.querySelector('#container');
		this.renderTasks = document.querySelector('.renderTasks');
	}
	static formDOMTree(formID, formText) {
		formText = formText.trim();
		this.formTree = domFactory.domElement({
			classes: [`formSubTree`],
			children: [
				domFactory.domElement({
					type: 'button',
					text: `+ ${formText}`,
					events: [{ type: 'click', handler: this.toggleInputArea }],
				}),
				domFactory.domElement({
					type: 'form',
					classes: [`formInputAndBtnWrap`],
					attributes: { id: formID },
					// attributes: { id: formID, style: 'display:none' },
					// attributes: { style: 'display:none' },
					events: [{ type: 'submit', handler: this.getFormInput }],
					children: [
						domFactory.domElement({
							classes: [`formInput`],
							type: 'input',
							attributes: { placeholder: `new ${formText}` },
						}),
						domFactory.domElement({
							classes: [`formButtonWrap`],
							children: [
								domFactory.domElement({
									type: 'button',
									text: 'submit',
								}),
								domFactory.domElement({
									type: 'button',
									text: 'cancel',
									events: [{ type: 'click', handler: this.closeNavFromCancel }],
								}),
							],
						}),
					],
				}),
			],
		});
		return this.formTree;
	}
	static listenNewItemButtonToOpenForm({ elementListening, toggler }) {
		elementListening.addEventListener('click', () => {
			toggleDisplay(toggler);
		});
	}
	static toggleInputArea(e) {
		toggleDisplay(e.target.parentNode.childNodes[1]);
	}
	static closeNavFromCancel(e) {
		const targetParent = e.target.parentNode.parentNode;
		targetParent[0].value = '';
		toggleDisplay(targetParent);
	}
	static getFormInput(e) {
		e.preventDefault();
		if (e.submitter.textContent === 'cancel') return;
		if (e.target[0].value.trim() === '') return;
		const userInput = e.target[0].value.trim();
		const elementID = e.target.id;
		e.target[0].value = '';
		NewItemEvent.delegateInput(elementID, userInput);
	}
	static delegateInput(elID, formInput) {
		switch (elID) {
			case 'newproject':
				this.newProject(formInput);
				break;
			case 'newAllTask':
				this.newAllTask(formInput);
				break;
			case 'newProjTask':
				this.newProjectTask(formInput);
				break;
		}
	}
	static newProject(input) {
		const newProject = new Projects(input);
		AddProjectsToUI.renderSingleProject(newProject);
		Storage.addProject(newProject);
	}
	static newAllTask(input) {
		const newAllTask = new Todo(input, 'all');
		this.renderTasks.appendChild(IndividualTasksHTML.makeOneTask(newAllTask));
		Storage.addTodo(newAllTask);
	}
	static newProjectTask(input) {
		const objFrom = NavButtonEvent.getTargetStatus();
		const newProjectTask = new Todo(input, objFrom);
		Storage.addTodo(newProjectTask);
		this.renderTasks.appendChild(
			IndividualTasksHTML.makeOneTask(newProjectTask)
		);
	}
}
