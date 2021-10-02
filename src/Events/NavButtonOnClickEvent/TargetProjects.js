import domFactory from '../../domFactory/domFactory';
import Storage from '../../Storage/Storage';
import Footer from '../../ui/footer/footer';
import IndividualTasksHTML from '../../ui/individualTaskHTML/individualTaskHTML';
import NewItemEvent from '../newItemEvent/NewItemEvent';

export default class TargetProjects {
	static init(e, { titleParent, tasksParent, newbtnParent, footerParent }) {
		this.titleText = e.target.textContent;
		this.titleParent = titleParent;
		this.tasksParent = tasksParent;
		this.newbtnParent = newbtnParent;
		this.footerParent = footerParent;
		this.renderTitle();
		this.renderThisProjTasks();
		this.renderNewItemButton();
		this.renderFooter();
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
	static renderFooter() {
		Footer.init(this.footerParent);
	}
}
