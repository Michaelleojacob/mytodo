import './header.css';
import domFactory from '../../domFactory/domFactory';
import closeNavMenu from '../../Events/closeNavMenu/closeNavMenu';

export default class Header {
	static init(parent) {
		this.parent = parent;
		this.makeHeader();
	}

	static makeHeader() {
		this.headerTree = domFactory.domElement({
			classes: ['headerWrap'],
			children: [
				domFactory.domElement({
					classes: ['holdsHeaderChildren'],
					children: [
						//icon + text === sibling wrapper?
						domFactory.domElement({
							classes: ['siblingWrapper'],
							children: [
								//icon
								domFactory.domElement({
									classes: ['checkIcon', 'fas', 'fa-check-square'],
								}),
								//text
								domFactory.domElement({
									classes: ['headerText'],
									text: `Todo List`,
								}),
							],
						}),
						//burger
						domFactory.domElement({
							// type: 'button',
							classes: ['burger'],
							// classes: ['burger', 'fas', 'fa-bars'],
							events: [{ type: 'click', handler: closeNavMenu.init }],
							children: [
								domFactory.domElement({
									type: 'button',
									classes: ['icon', 'fas', 'fa-bars'],
								}),
							],
						}),
					],
				}),
			],
		});
		this.parent.appendChild(this.headerTree);
	}
}
