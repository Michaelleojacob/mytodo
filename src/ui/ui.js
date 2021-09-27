import './mediaQueryLargeScreen.css';
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
		this.makeNavWrap();
		this.renderAllTodayWeekMonthButtons();
		this.renderProjects();
	}
	static makeNavWrap() {
		this.navWrap = domFactory.domElement({
			classes: ['navWrapOutside'],
			children: [
				domFactory.domElement({
					classes: ['navWrap'],
				}),
			],
		});
		this.navParent = this.navWrap.childNodes[0];
		this.parent.appendChild(this.navWrap);
	}
	static renderAllTodayWeekMonthButtons() {
		AllTodayWeekMonth.init(this.navParent);
	}
	static renderProjects() {
		AddProjectsToUI.init(this.navParent);
	}
	static tasks() {
		TaskArea.init(this.parent);
	}
}
