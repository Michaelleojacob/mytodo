import './taskArea.css';
import domFactory from '../../domFactory/domFactory';

export default class TaskArea {
	static init(parent) {
		this.parent = parent;
		this.taskAreaWrapper();
		this.taskTitle();
		this.renderTasksHere();
	}
	static taskAreaWrapper() {
		return (this.taskWrapper = domFactory.createDiv({
			elementName: 'taskWrapper',
			parent: this.parent,
		}));
	}
	static taskTitle() {
		return (this.tTitle = domFactory.createDiv({
			elementName: 'tTitle',
			parent: this.taskWrapper,
		}));
	}
	static renderTasksHere() {
		return (this.renderTasks = domFactory.createDiv({
			elementName: 'renderTasks',
			parent: this.taskWrapper,
		}));
	}
}
