import domFactory from '../../domFactory/domFactory';
import Storage from '../../Storage/Storage';
import IndividualTasksHTML from '../../ui/individualTaskHTML/individualTaskHTML';
import NewItemEvent from '../newItemEvent/NewItemEvent';

export default class TargetProjects {
	static init(e, { titleParent, tasksParent, newbtnParent }) {
		this.titleText = e.target.textContent;
		this.titleParent = titleParent;
		this.tasksParent = tasksParent;
		this.newbtnParent = newbtnParent;
		this.renderTitle();
		this.renderThisProjTasks();
		this.renderNewItemButton();
	}
	static renderTitle() {
		this.titleParent.appendChild(
			domFactory.domElement({
				classes: ['mytitle'],
				text: this.titleText,
			})
		);
	}
	static renderThisProjTasks() {
		this.filteredTasks = Storage.getAndFilterTodos('from', this.titleText);
		this.filteredTasks.map(task => {
			this.tasksParent.appendChild(IndividualTasksHTML.makeOneTask(task));
		});
	}
	static renderNewItemButton() {
		this.formTree = NewItemEvent.formDOMTree('newProjTask', 'task');
		this.newbtnParent.appendChild(this.formTree);
	}
}
