import './ui.css';
import domFactory from '../domFactory/domFactory';
import Header from './header/header';
import AllTodayWeekMonth from '../ui/navMenu/allTodayWeekMonth/allTodayWeekMonth';
import AddProjectsToUI from '../ui/navMenu/projects/projects';
import TaskArea from './taskArea/taskArea';
import NewItemEvent from '../Events/newItemEvent/NewItemEvent';
import toggleDisplay from '../Events/toggleDisplay/toggleDisplay';

export default class UI {
	static init() {
		this.parent = document.querySelector('#container');
		this.header();
		this.navMenu();
		this.tasks();
		this.listenNewItemButtonToOpenForm();
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
	static makeButton() {
		return (this.newProjButton = domFactory.domElement({
			type: 'button',
			text: '+ new project',
			classes: ['newItem', 'newProj', 'closeOnClick'],
		}));
	}
	static renderNewProjectButton() {
		this.newProjectButtonWrapper = domFactory.domElement({
			classes: ['newButtonWrapper', 'projectButtonWrapper'],
			children: [this.makeButton()],
		});
		this.navWrap.appendChild(this.newProjectButtonWrapper);
		this.newItemForm = NewItemEvent.makeEntireSubtree(
			this.newProjectButtonWrapper
		);
		NewItemEvent.getFormInput(this.newItemForm);
	}
	static tasks() {
		TaskArea.init(this.parent);
	}
	static listenNewItemButtonToOpenForm() {
		NewItemEvent.listenNewItemButtonToOpenForm({
			elementListening: this.newProjButton,
			toggler: this.newItemForm,
		});
	}
}
