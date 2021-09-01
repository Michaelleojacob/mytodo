import domFactory from '../../domFactory/domFactory';

export default class Header {
	static init(parent) {
		this.parent = parent;
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
}
