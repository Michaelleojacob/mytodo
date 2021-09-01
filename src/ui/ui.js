import './ui.css';
import domFactory from '../domFactory/domFactory';
import Header from './header/header';
import AllTodayWeekMonth from '../ui/navMenu/allTodayWeekMonth/allTodayWeekMonth';
import AddProjectsToUI from '../ui/navMenu/projects/projects';

export default class UI {
	static init() {
		this.parent = document.querySelector('#container');
		this.renderHeader();
		this.renderContent();
	}
	static renderHeader() {
		Header.init(this.parent);
	}
	static renderContent() {
		this.renderNavWrap();
		this.renderAllTodayWeekMonthButtons();
		this.renderProjects();
		this.renderNewProjectButton();
	}
	static renderNavWrap() {
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

	//! < content > !\\

	// static myContent() {
	// 	this.makeContentWrap();
	// 	this.title();
	// 	this.renderEachTask();
	// }
	// static makeContentWrap() {
	// 	return (this.contentWrap = domFactory.createDiv({
	// 		elementName: 'contentWrap',
	// 		parent: this.parent,
	// 	}));
	// }
	// static title() {
	// 	return (this.title = domFactory.createDiv({
	// 		elementName: 'title',
	// 		parent: this.contentWrap,
	// 	}));
	// }
	// static renderEachTask() {
	// 	return (this.task = domFactory.createDiv({
	// 		elementName: 'task',
	// 		parent: this.contentWrap,
	// 	}));
	// }

	//! </ content > !\\
}
