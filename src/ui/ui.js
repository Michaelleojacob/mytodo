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
		this.allTodayMonth();
		// this.allButton('all');
		// this.todayButton('today');
		// this.monthButton('month');
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
	static allTodayMonth() {
		const arr = ['all', 'today', 'month'];
		arr.forEach(x => {
			return (this.x = domFactory.elementWithMultipleClasses({
				elementName: x,
				type: 'button',
				classes: ['navButton', x],
				text: x,
				parent: this.navWrap,
			}));
		});
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
			// text: 'title',
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
		return (
			(this.addNewTask = domFactory.createButton({
				elementName: 'addNewTask',
				text: '+ add task',
				parent: this.contentWrap,
			})),
			this.addNewTask.classList.add('addNew', 'closeOnClick')
		);
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
