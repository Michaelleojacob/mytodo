import domFactory from './domFactory/domFactory';

class UI {
	static init() {
		this.parent = document.querySelector('#container');
		this.wrapper = domFactory.createDiv({
			elementName: 'mydiv',
			text: 'hello',
			parent: this.parent,
		});
		domFactory.createDiv({
			elementName: 'hi',
			text: 'howdy',
			parent: this.wrapper,
		});
	}
}

UI.init();
