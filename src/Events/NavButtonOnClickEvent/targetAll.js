import domFactory from '../../domFactory/domFactory';
import Storage from '../../Storage/Storage';
import IndividualTasksHTML from '../../ui/individualTaskHTML/individualTaskHTML';
import NewItemEvent from '../newItemEvent/NewItemEvent';

export default class TargetAll {
	static init({ titleParent, tasksParent, newbtnParent }) {
		// console.log(obj);
		this.titleParent = titleParent;
		this.tasksParent = tasksParent;
		this.newbtnParent = newbtnParent;
		this.renderTitle();
		this.renderTasks();
		this.renderNewItemButton();
	}
	static renderTitle() {
		this.titleParent.appendChild(
			domFactory.domElement({
				text: 'All',
			})
		);
	}
	static renderTasks() {
		this.allTasks = Storage.getTodos();
		this.allTasks.map(task => {
			this.tasksParent.appendChild(IndividualTasksHTML.makeOneTask(task));
		});
	}
	static renderNewItemButton() {
		this.formTree = NewItemEvent.formDOMTree('newAllTask', 'task');
		this.newbtnParent.appendChild(this.formTree);
	}
}
