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
				//icon + text === sibling wrapper?
				domFactory.domElement({
					classes: ['siblingWrapper'],
					children: [
						//icon
						domFactory.domElement({
							classes: ['checkIcon', 'fas', 'fa-check'],
						}),
						//text
						domFactory.domElement({
							classes: ['headerText'],
							text: `header`,
						}),
					],
				}),
				//burger
				domFactory.domElement({
					type: 'button',
					classes: ['burger'],
					events: [{ type: 'click', handler: closeNavMenu.init }],
					children: [
						domFactory.domElement({
							classes: ['fas', 'fa-bars'],
						}),
					],
				}),
			],
		});
		this.parent.appendChild(this.headerTree);
	}
}
