import domFactory from '../domFactory/domFactory';

export default class Events {
	static init() {
		this.closeNavMenu();
		this.allTasks();
	}
	//! < nav > !\\
	static closeNavMenu() {
		const burger = document.querySelector('.burger');
		burger.addEventListener('click', this.burgerEvent);
	}
	static burgerEvent() {
		const navMenu = document.querySelector('.navWrap');
		if (navMenu.style.display === 'none') {
			navMenu.style.display = 'flex';
		} else {
			navMenu.style.display = 'none';
		}
	}
	//! </ nav > !\\

	//! < content Buttons > !\\
	static allTasks() {
		const allTasksBtn = document.querySelector('.all');
		allTasksBtn.addEventListener('click', this.allEvent);
	}
	static allEvent(e) {
		console.log(e);
		const parent = document.querySelector('.task');
		parent.appendChild(
			domFactory.createDiv({
				elementName: 'hello',
				text: 'hello',
				parent: parent,
			})
		);
	}
	//! </ content Buttons > !\\
}
