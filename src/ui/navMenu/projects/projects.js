import domFactory from '../../../domFactory/domFactory';
import Storage from '../../../Storage/Storage';
import NewItemEvent from '../../../Events/newItemEvent/NewItemEvent';

export default class AddProjectsToUI {
	static init(parent) {
		this.parent = parent;
		this.renderStaticProjectText();
		this.makeProjectsWrapper();
		this.renderAllProjects();
		this.renderNewProjectButton();
		this.addInputArea();
		this.listenNewItemButtonToOpenForm();
	}

	static renderStaticProjectText() {
		return (this.staticProject = domFactory.createDiv({
			elementName: 'staticProject',
			text: 'Projects',
			parent: this.parent,
		}));
	}
	static makeProjectsWrapper() {
		return (this.projectsWrapper = domFactory.createDiv({
			elementName: 'projectsWrapper',
			parent: this.parent,
		}));
	}
	static renderAllProjects() {
		const myArr = Storage.getProjects();
		myArr.forEach(x => {
			const trimName = x.name.trim().split(' ').join('');
			return (x = domFactory.elementWithMultipleClasses({
				elementName: trimName,
				type: 'button',
				classes: ['navButton', 'projTask', 'sortByFrom', trimName],
				text: x.name,
				parent: this.projectsWrapper,
			}));
		});
	}
	static renderNewProjectButton() {
		this.newProjectButtonWrapper = domFactory.domElement({
			classes: ['newButtonWrapper', 'projectButtonWrapper'],
			children: [
				(this.newProjButton = domFactory.domElement({
					type: 'button',
					text: '+ new project',
					classes: ['newItem', 'newProj', 'closeOnClick'],
				})),
			],
		});
		this.parent.appendChild(this.newProjectButtonWrapper);
	}
	static addInputArea() {
		this.newItemForm = NewItemEvent.formDOMTree(
			this.newProjectButtonWrapper,
			'newproject'
		);
		NewItemEvent.getFormInput(this.newItemForm);
	}
	static listenNewItemButtonToOpenForm() {
		NewItemEvent.listenNewItemButtonToOpenForm({
			elementListening: this.newProjButton,
			toggler: this.newItemForm,
		});
	}
}
