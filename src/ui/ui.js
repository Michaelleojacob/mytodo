import domFactory from '../domFactory/domFactory';
import Header from './header/header';
import AllTodayWeekMonth from '../ui/navMenu/allTodayWeekMonth/allTodayWeekMonth';
import AddProjectsToUI from '../ui/navMenu/projects/projects';
import TaskArea from './taskArea/taskArea';

export default class UI {
	static init() {
		this.parent = document.querySelector('#container');
		this.header();
		this.navMenu();
		this.tasks();
	}
	static header() {
		Header.init(this.parent);
	}
	static navMenu() {
		this.navWrap();
		this.renderAllTodayWeekMonthButtons();
		this.renderProjects();
	}
	static navWrap() {
		return (this.navWrap = domFactory.elementWithMultipleClasses({
			elementName: 'navWrap',
			classes: ['navWrap', 'closeOnClick'],
			parent: this.parent,
		}));
	}
	static renderAllTodayWeekMonthButtons() {
		AllTodayWeekMonth.init(this.navWrap);
	}
	static renderProjects() {
		AddProjectsToUI.init(this.navWrap);
	}
	static tasks() {
		TaskArea.init(this.parent);
	}
}
