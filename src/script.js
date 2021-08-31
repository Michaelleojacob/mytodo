import './style.css';
import domFactory from './domFactory/domFactory';

class UI {
	static init() {
		this.parent = document.querySelector('#container');
		this.myHeader();
		this.myNavButtons();
		this.myContent();
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
		return (this.navWrap = domFactory.createDiv({
			elementName: 'navWrap',
			parent: this.parent,
		}));
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

	//! < content > !\\

	static myContent() {
		this.makeContentWrap();
		this.title();
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
	//! </ content > !\\

	//! < placeholder > !!\
	static placeholdertxt() {
		return (this.title = domFactory.createDiv({
			elementName: 'thing',
			text: '',
			parent: '',
		}));
	}
	//! </ placeholder > !!\
}

UI.init();
