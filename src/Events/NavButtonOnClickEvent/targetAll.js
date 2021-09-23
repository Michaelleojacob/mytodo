import domFactory from '../../domFactory/domFactory';
import Storage from '../../Storage/Storage';
import IndividualTasksHTML from '../../ui/individualTaskHTML/individualTaskHTML';
import NewItemEvent from '../newItemEvent/NewItemEvent';

export default class TargetAll {
	static init({ title, tasks, newbtn }) {
		this.title = title;
		this.tasks = tasks;
		this.newbtn = newbtn;
		this.renderTitle();
		this.renderTasks();
		this.renderNewItemButton();
	}
	static renderTitle() {
		this.title.appendChild(
			domFactory.domElement({
				text: 'All',
			})
		);
	}
	static renderTasks() {
		this.allTasks = Storage.getTodos();
		this.allTasks.map(task => {
			this.tasks.appendChild(IndividualTasksHTML.makeOneTask(task));
		});
	}
	static renderNewItemButton() {
		this.formTree = NewItemEvent.formDOMTree('newAllTask');
		this.newbtn.appendChild(this.formTree);
	}
}
