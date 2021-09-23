import './projects.css';
import domFactory from '../../../domFactory/domFactory';
import Storage from '../../../Storage/Storage';
import NewItemEvent from '../../../Events/newItemEvent/NewItemEvent';

export default class AddProjectsToUI {
	static init(parent) {
		this.parent = parent;
		this.renderStaticProjectText();
		this.makeProjectsWrapper();
		this.renderAllProjects();
		this.addInputArea();
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
			this.renderSingleProject(x);
		});
	}

	static addInputArea() {
		this.newItemForm = NewItemEvent.formDOMTree(
			this.newProjectButtonWrapper,
			'newproject'
		);
	}

	static renderSingleProject(item) {
		this.project = item;
		const trimmedName = this.project.name.trim().split(' ').join('');
		const elementToRender = domFactory.domElement({
			classes: ['navbutton', 'projectItemWrapper'],
			attributes: { id: this.project.id },
			children: [
				domFactory.domElement({
					type: 'button',
					text: this.project.name,
					classes: ['navButton', 'projTask', 'sortByFrom', trimmedName],
				}),
				domFactory.domElement({
					classes: ['deleteProj'],
					type: 'button',
					text: 'X',
				}),
			],
		});
		this.projectsWrapper.appendChild(elementToRender);
	}
	//! find good spot for rendering the button !\\
}
