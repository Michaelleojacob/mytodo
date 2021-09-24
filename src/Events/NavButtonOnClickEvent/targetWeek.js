import Storage from '../../Storage/Storage';
import domFactory from '../../domFactory/domFactory';
import IndividualTasksHTML from '../../ui/individualTaskHTML/individualTaskHTML';

export default class TargetWeek {
	static init({ titleParent, tasksParent }) {
		this.titleParent = titleParent;
		this.tasksParent = tasksParent;
		this.renderTitle();
		this.dates = [];
		this.result = [];
		this.getTodaysDate();
		this.renderTasks();
	}

	static getTodaysDate() {
		for (let i = 0; i <= 7; i++) {
			var d = new Date();
			d.setDate(d.getDate() - i);
			let month = '' + (d.getMonth() + 1);
			let day = '' + d.getDate();
			let year = d.getFullYear();
			if (month.length < 2) month = '0' + month;
			if (day.length < 2) day = '0' + day;
			const formatedDate = [year, month, day].join('-');
			this.dates.push(formatedDate);
		}
	}
	static renderTitle() {
		this.titleParent.appendChild(
			domFactory.domElement({
				text: 'Week',
			})
		);
	}

	static renderTasks() {
		Storage.getTodos().map(task => {
			this.dates.map(weekItem => {
				if (task.date === weekItem) {
					this.result.push(task);
				}
			});
		});
		this.result.map(task => {
			this.tasksParent.appendChild(IndividualTasksHTML.makeOneTask(task));
		});
	}
}
