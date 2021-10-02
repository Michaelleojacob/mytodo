import './taskArea.css';
import domFactory from '../../domFactory/domFactory';
import Events from '../../Events/Events';

export default class TaskArea {
	static init(parent) {
		this.parent = parent;
		this.taskAreaWrapper();
		this.taskTitle();
		this.renderTasksHere();
		this.newItemButtonArea();
		this.footer();
		this.getTaskAreaElements();
	}
	static taskAreaWrapper() {
		return (this.taskWrapper = domFactory.createDiv({
			elementName: 'taskWrapper',
			parent: this.parent,
		}));
	}
	static taskTitle() {
		this.taskTitleWrapper = domFactory.domElement({
			attributes: { class: 'taskTitleWrapper' },
		});
		this.taskWrapper.appendChild(this.taskTitleWrapper);
	}
	static renderTasksHere() {
		return (this.renderTasks = domFactory.createDiv({
			elementName: 'renderTasks',
			parent: this.taskWrapper,
		}));
	}
	static newItemButtonArea() {
		this.newItemButtonWrapper = domFactory.domElement({
			classes: ['newItemButtonWrapper'],
		});
		this.taskWrapper.appendChild(this.newItemButtonWrapper);
	}
	static footer() {
		this.myFooter = domFactory.domElement({
			classes: ['footer'],
		});
		this.taskWrapper.appendChild(this.myFooter);
	}
	static getTaskAreaElements() {
		Events.taskAreaDomObj = {
			taskParent: this.taskWrapper,
			titleParent: this.taskTitleWrapper,
			tasksParent: this.renderTasks,
			newbtnParent: this.newItemButtonWrapper,
			footerParent: this.myFooter,
		};
	}
}
