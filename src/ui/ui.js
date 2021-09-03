import './ui.css';
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
		this.renderNewProjectButton();
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
	//! might get rid of this
	static renderNewProjectButton() {
		return (this.newProjectButton = domFactory.elementWithMultipleClasses({
			elementName: this.newProjectButton,
			type: 'button',
			classes: ['newProj', 'closeOnClick'],
			text: `+ add`,
			parent: this.navWrap,
		}));
	}
	static tasks() {
		TaskArea.init(this.parent);
	}
}
