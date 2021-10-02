import './footer.css';
import domFactory from '../../domFactory/domFactory';

export default class Footer {
	static init(parent) {
		this.parent = parent;
		console.log(this.parent);
		this.makeFooterTree();
	}
	static makeFooterTree() {
		this.testing = domFactory.domElement({
			classes: ['footerHolder'],
			children: [
				domFactory.domElement({
					classes: ['far', 'fa-copyright'],
				}),
				domFactory.domElement({
					classes: ['footerText'],
					text: 'Michael Jacob',
				}),
				domFactory.domElement({
					type: 'button',
					events: [{ type: 'click', handler: this.github }],
					children: [
						domFactory.domElement({
							classes: ['fab', 'fa-github'],
							attributes: { href: 'https://github.com/Michaelleojacob/mytodo' },
						}),
					],
				}),
				domFactory.domElement({
					type: 'button',
					events: [{ type: 'click', handler: this.repo }],
					children: [
						domFactory.domElement({
							classes: ['fas', 'fa-code'],
							attributes: { href: 'https://github.com/Michaelleojacob/mytodo' },
						}),
					],
				}),
				domFactory.domElement({
					type: 'button',
					events: [{ type: 'click', handler: this.linkedin }],
					children: [
						domFactory.domElement({
							type: 'a',
							classes: ['fab', 'fa-linkedin'],
						}),
					],
				}),
			],
		});
		this.parent.appendChild(this.testing);
	}
	static github = () => {
		window.open('https://github.com/Michaelleojacob');
	};
	static repo = () => {
		window.open('https://github.com/Michaelleojacob/mytodo');
	};
	static linkedin = () => {
		window.open('https://www.linkedin.com/in/michael-leo-jacob');
	};
}
