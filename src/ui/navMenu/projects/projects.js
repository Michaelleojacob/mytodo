import domFactory from '../../../domFactory/domFactory';
import Storage from '../../../Storage/Storage';

export default class AddProjectsToUI {
	static init(parent) {
		this.parent = parent;
		this.renderStaticProjectText();
		this.makeProjectsWrapper();
		this.renderAllProjects();
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
				classes: ['navButton', trimName],
				text: x.name,
				parent: this.projectsWrapper,
			}));
		});
	}
}
