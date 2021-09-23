import domFactory from '../../domFactory/domFactory';
import toggleDisplay from '../toggleDisplay/toggleDisplay';
import Projects from '../../Projects/Projects';
import Storage from '../../Storage/Storage';
import AddProjectsToUI from '../../ui/navMenu/projects/projects';
import Todo from '../../Todos/Todo';
import IndividualTasksHTML from '../../ui/individualTaskHTML/individualTaskHTML';

export default class NewItemEvent {
	static formDOMTree(myid) {
		this.parent = parent;
		this.formTree = domFactory.domElement({
			children: [
				domFactory.domElement({
					type: 'button',
					text: '+ new item',
					events: [{ type: 'click', handler: this.renameLater }],
				}),
				domFactory.domElement({
					type: 'form',
					attributes: { id: myid },
					// attributes: { id: myid, style: 'display:none' },
					// attributes: { style: 'display:none' },
					events: [{ type: 'submit', handler: this.getFormInput }],
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
		return this.formTree;
	}
	static listenNewItemButtonToOpenForm({ elementListening, toggler }) {
		elementListening.addEventListener('click', () => {
			toggleDisplay(toggler);
		});
	}
	static renameLater() {
		console.log('hi');
	}
	static getFormInput(e) {
		e.preventDefault();
		console.log(this);
		console.log(e.submitter);
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
				console.log(`new project`);
				this.newProject(formInput);
				break;
			case 'newAllTask':
				console.log(`new all task`);
				this.newAllTask(formInput);
				break;
			case 'newProjTask':
				console.log(`new project task`);
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
		document
			.querySelector('.renderTasks')
			.appendChild(IndividualTasksHTML.makeOneTask(newAllTask));
		Storage.addTodo(newAllTask);
	}
	static newProjectTask(input, objFrom) {
		const newProjectTask = new Todo(input, objFrom);
	}
}
