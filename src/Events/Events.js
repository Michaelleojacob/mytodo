import domFactory from '../domFactory/domFactory';
import removeAllChildNodes from '../removeAllChildNodes/removeAllChildNodes';
import Storage from '../Storage/Storage';

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
		const title = document.querySelector('.title');
		title.textContent = e.target.textContent;
		const parent = document.querySelector('.task');
		removeAllChildNodes(parent);
		const myArr = Storage.getAndFilterTodos('all');
		for (let x of myArr) {
			domFactory.createDiv({
				elementName: x.name.trim(),
				text: x.name,
				parent: parent,
			});
		}
		// domFactory.createDiv({
		// 	elementName: 'hello',
		// 	text: 'hello',
		// 	parent: parent,
		// });
	}
	//! </ content Buttons > !\\
}
