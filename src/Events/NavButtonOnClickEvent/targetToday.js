import Storage from '../../Storage/Storage';
import domFactory from '../../domFactory/domFactory';
import IndividualTasksHTML from '../../ui/individualTaskHTML/individualTaskHTML';

export default class TargetToday {
	static init({ titleParent, tasksParent }) {
		this.titleParent = titleParent;
		this.tasksParent = tasksParent;
		this.today = this.getTodaysDate();
		this.renderTitle();
		this.renderTasks();
	}

	static getTodaysDate() {
		var d = new Date(),
			month = '' + (d.getMonth() + 1),
			day = '' + d.getDate(),
			year = d.getFullYear();
		if (month.length < 2) month = '0' + month;
		if (day.length < 2) day = '0' + day;
		return [year, month, day].join('-');
	}
	static renderTitle() {
		this.titleParent.appendChild(
			domFactory.domElement({
				text: 'Today',
			})
		);
	}

	static renderTasks() {
		const tasksForTodayArr = Storage.getTodos().filter(task => {
			if (task.date === this.today) {
				return task;
			}
		});
		tasksForTodayArr.map(task => {
			this.tasksParent.appendChild(IndividualTasksHTML.makeOneTask(task));
		});
	}
}
