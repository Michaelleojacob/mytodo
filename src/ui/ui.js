import './ui.css';
import domFactory from '../domFactory/domFactory';

export default class UI {
	static init() {
		this.parent = document.querySelector('#container');
		this.myHeader();
		this.myNavButtons();
		this.myContent();
		this.myProjects();
	}

	//! < header > !\\
	static myHeader() {
		this.makeHeaderWrap();
		this.makeBurger();
	}
	static makeHeaderWrap() {
		return (this.headerWrap = domFactory.createDiv({
			elementName: 'headerWrap',
			parent: this.parent,
		}));
	}
	static makeBurger() {
		return (this.burger = domFactory.createButton({
			elementName: 'burger',
			text: 'burger',
			parent: this.headerWrap,
		}));
	}
	//! </ header > !\\

	//! < buttons > !!\
	static myNavButtons() {
		this.makeNavWrap();
		this.allButton();
		this.todayButton();
		this.monthButton();
	}
	static makeNavWrap() {
		return (
			(this.navWrap = domFactory.createDiv({
				elementName: 'navWrap',
				parent: this.parent,
			})),
			this.navWrap.classList.add('closeOnClick')
		);
	}
	static allButton() {
		return (this.allbtn = domFactory.createButton({
			elementName: 'all',
			text: 'all',
			parent: this.navWrap,
		}));
	}
	static todayButton() {
		return (this.todayBtn = domFactory.createButton({
			elementName: 'today',
			text: 'today',
			parent: this.navWrap,
		}));
	}
	static monthButton() {
		return (this.monthBtn = domFactory.createButton({
			elementName: 'month',
			text: 'month',
			parent: this.navWrap,
		}));
	}
	//! </ buttons > !!\

	//! < projects > !\\

	static myProjects() {
		this.makeStaticProjectLine();
	}
	static makeStaticProjectLine() {
		return (this.staticProject = domFactory.createDiv({
			elementName: 'staticProject',
			text: 'Projects',
			parent: this.navWrap,
		}));
	}
	//! </ projects > !\\

	//! < content > !\\

	static myContent() {
		this.makeContentWrap();
		this.title();
		this.renderEachTask();
		this.renderAddnewTask();
	}
	static makeContentWrap() {
		return (this.contentWrap = domFactory.createDiv({
			elementName: 'contentWrap',
			parent: this.parent,
		}));
	}
	static title() {
		return (this.title = domFactory.createDiv({
			elementName: 'title',
			text: 'title',
			parent: this.contentWrap,
		}));
	}
	static renderEachTask() {
		return (this.task = domFactory.createDiv({
			elementName: 'task',
			// text: 'task',
			parent: this.contentWrap,
		}));
	}
	static renderAddnewTask() {
		return (this.addNewTask = domFactory.createButton({
			elementName: 'addNewTask',
			text: '+ add task',
			parent: this.contentWrap,
		}));
	}
	//! </ content > !\\

	//! < placeholder > !!\
	static placeholdertxt() {
		return (this.thing = domFactory.createDiv({
			elementName: 'thing',
			text: '',
			parent: '',
		}));
	}
	//! </ placeholder > !!\
}
