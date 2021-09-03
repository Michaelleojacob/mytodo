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
			text: 'title',
			parent: this.taskWrapper,
		}));
	}
	static renderTasksHere() {
		return (this.renderTasks = domFactory.createDiv({
			elementName: 'renderTasks',
			text: 'tasks',
			parent: this.taskWrapper,
		}));
	}
}

// static myContent() {
// 	this.makeContentWrap();
// 	this.title();
// 	this.renderEachTask();
// }
// static makeContentWrap() {
// 	return (this.contentWrap = domFactory.createDiv({
// 		elementName: 'contentWrap',
// 		parent: this.parent,
// 	}));
// }
// static title() {
// 	return (this.title = domFactory.createDiv({
// 		elementName: 'title',
// 		parent: this.contentWrap,
// 	}));
// }
// static renderEachTask() {
// 	return (this.task = domFactory.createDiv({
// 		elementName: 'task',
// 		parent: this.contentWrap,
// 	}));
// }
