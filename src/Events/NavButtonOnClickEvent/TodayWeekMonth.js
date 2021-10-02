import Storage from '../../Storage/Storage';
import domFactory from '../../domFactory/domFactory';
import IndividualTasksHTML from '../../ui/individualTaskHTML/individualTaskHTML';
import NavButtonEvent from './NavButtonOnClickEvent';
import Footer from '../../ui/footer/footer';

export default class TodayWeekMonth {
	static init({ titleParent, tasksParent, footerParent }) {
		this.titleParent = titleParent;
		this.tasksParent = tasksParent;
		this.footerParent = footerParent;
		this.dates = [];
		this.status = null;
		this.tasksParent.addEventListener('change', this.myfunc);
	}

	static setDatesArr(newDatesArr) {
		this.dates = [];
		this.dates = newDatesArr;
	}

	static myfunc = e => {
		this.status = NavButtonEvent.getTargetStatus();
		if (
			this.status === 'today' ||
			this.status === 'week' ||
			this.status === 'month'
		) {
			if (this.dates.includes(e.target.value)) return;
			else {
				e.target.parentNode.parentNode.remove();
			}
		} else {
			return;
		}
		return;
	};

	static renderTitleAndTasks(sortBy) {
		this.renderTitle(sortBy);
		switch (sortBy) {
			case 'today':
				this.getDates(0);
				break;
			case 'week':
				this.getDates(7);
				break;
			case 'month':
				this.getDates(30);
				break;
			default:
				return;
		}
	}
	static renderTitle(title) {
		this.titleParent.appendChild(
			domFactory.domElement({
				classes: ['mytitle'],
				text: title,
			})
		);
	}

	static getDates(num) {
		const dateArr = [];
		for (let i = 0; i <= num; i++) {
			var d = new Date();
			d.setDate(d.getDate() + i);
			let month = '' + (d.getMonth() + 1);
			let day = '' + d.getDate();
			let year = d.getFullYear();
			if (month.length < 2) month = '0' + month;
			if (day.length < 2) day = '0' + day;
			const formatedDate = [year, month, day].join('-');
			dateArr.push(formatedDate);
		}
		this.setDatesArr(dateArr);
		this.renderTasks(dateArr);
		this.renderFooter();
	}

	static renderTasks(el) {
		const arr = [];
		Storage.getTodos().map(task => {
			el.map(item => {
				if (task.date === item) {
					arr.push(task);
				}
			});
		});
		arr.map(task => {
			this.tasksParent.appendChild(IndividualTasksHTML.makeOneTask(task));
		});
	}
	static renderFooter() {
		Footer.init(this.footerParent);
	}
}
