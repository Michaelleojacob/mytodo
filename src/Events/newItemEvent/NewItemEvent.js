import domFactory from '../../domFactory/domFactory';
import toggleDisplay from '../toggleDisplay/toggleDisplay';
import Projects from '../../Projects/Projects';
import Storage from '../../Storage/Storage';
import AddProjectsToUI from '../../ui/navMenu/projects/projects';
import Todo from '../../Todos/Todo';
import IndividualTasksHTML from '../../ui/individualTaskHTML/individualTaskHTML';

export default class NewItemEvent {
	static formDOMTree(parent, myid) {
		this.parent = parent;
		this.projectInput = domFactory.domElement({
			// attributes: { style: 'display:none' },
			children: [
				domFactory.domElement({
					type: 'form',
					attributes: { id: myid },
					children: [
						domFactory.domElement({
							type: 'input',
						}),
						domFactory.domElement({
							children: [
								domFactory.domElement({
									type: 'button',
									text: 'submit',
								}),
								domFactory.domElement({
									type: 'button',
									text: 'cancel',
								}),
							],
						}),
					],
				}),
			],
		});
		this.parent.appendChild(this.projectInput);
		return this.projectInput;
	}
	static listenNewItemButtonToOpenForm({ elementListening, toggler }) {
		elementListening.addEventListener('click', () => {
			toggleDisplay(toggler);
		});
	}
	static getFormInput(element) {
		element.addEventListener('submit', e => {
			e.preventDefault();
			if (e.submitter.textContent === 'cancel') return toggleDisplay(element);
			if (e.target[0].value === '') return;
			const userInput = e.target[0].value.trim();
			const elementID = e.target.id;
			e.target[0].value = '';
			this.delegateInput(elementID, userInput);
		});
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
				console.log('new project task');
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
		IndividualTasksHTML.makeOneTask(newAllTask);
		Storage.addTodo(newAllTask);
	}
	static newProjectTask(input) {
		const newProjectTask = new Todo(input, 'all');
	}
}
