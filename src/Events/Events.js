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
		document.addEventListener('DOMContentLoaded', () => {
			document.addEventListener('click', this.navButtonEvents);
		});
	}
	static navButtonEvents(e) {
		if (e.target.classList.contains('navButton')) {
			console.log(e);
			const targetName = e.target.textContent;
			console.log(targetName);
			const title = document.querySelector('.title');
			title.textContent = e.target.textContent;
			const parent = document.querySelector('.task');
			removeAllChildNodes(parent);
			const myArr = Storage.getAndFilterTodos('from', targetName);
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
	}
	//! </ content Buttons > !\\
}