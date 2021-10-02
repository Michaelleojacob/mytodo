import domFactory from '../../domFactory/domFactory';
import Storage from '../../Storage/Storage';
import Footer from '../../ui/footer/footer';
import IndividualTasksHTML from '../../ui/individualTaskHTML/individualTaskHTML';
import NewItemEvent from '../newItemEvent/NewItemEvent';

export default class TargetAll {
	static init({ titleParent, tasksParent, newbtnParent, footerParent }) {
		this.titleParent = titleParent;
		this.tasksParent = tasksParent;
		this.newbtnParent = newbtnParent;
		this.footerParent = footerParent;
		this.renderTitle();
		this.renderTasks();
		this.renderNewItemButton();
		this.renderFooter();
	}
	static renderTitle() {
		this.titleParent.appendChild(
			domFactory.domElement({
				classes: ['mytitle'],
				text: 'all',
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
	static renderFooter() {
		Footer.init(this.footerParent);
	}
}
