import './projects.css';
import domFactory from '../../../domFactory/domFactory';
import Storage from '../../../Storage/Storage';
import NewItemEvent from '../../../Events/newItemEvent/NewItemEvent';
import NavButtonEvent from '../../../Events/NavButtonOnClickEvent/NavButtonOnClickEvent';

export default class AddProjectsToUI {
	static init(parent) {
		this.parent = parent;
		this.renderStaticProjectText();
		this.makeProjectsWrapper();
		this.renderAllProjects();
		this.renderNewProjectButton();
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

	static renderSingleProject(item) {
		this.project = item;
		const trimmedName = this.project.name.trim().split(' ').join('');
		const elementToRender = domFactory.domElement({
			type: 'button',
			classes: [
				'navbutton',
				'projectItemWrapper',
				'navButton',
				'projTask',
				trimmedName,
			],
			attributes: { id: this.project.id },
			events: [{ type: 'click', handler: this.renameLater }],
			children: [
				domFactory.domElement({}),
				domFactory.domElement({
					// type: 'div',
					text: item.name,
					classes: ['projText'],
				}),
				domFactory.domElement({
					// type: `button`,
					classes: ['deleteProj'],
					children: [
						domFactory.domElement({
							classes: ['fas', 'fa-minus-circle'],
						}),
					],
					// events: [{ type: 'click', handler: this.deleteProject }],
				}),
			],
		});
		this.projectsWrapper.appendChild(elementToRender);
	}
	static renderNewProjectButton() {
		this.newprojbtn = NewItemEvent.formDOMTree('newproject', 'project');
		this.parent.appendChild(this.newprojbtn);
	}
	static renameLater = e => {
		if (e.target.classList.contains('deleteProj')) {
			return this.deleteProject(e.target);
		}
	};
	static deleteProject(clickTarget) {
		clickTarget.parentNode.remove();
		Storage.removeProj(clickTarget.parentNode.id);
		Storage.removeTodosOnProjectDelete(
			clickTarget.parentNode.textContent.trim()
		);
		NavButtonEvent.clearTaskArea();
	}
}
