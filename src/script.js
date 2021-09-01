import UI from './ui/ui';
import Events from './Events/Events';
import domFactory from './domFactory/domFactory';

(function () {
	const app = {
		init() {
			this.renderUI();
			this.addEvents();
		},
		renderUI() {
			UI.init();
		},
		addEvents() {
			Events.init();
		},
	};
	app.init();
})();

const mything = document.querySelector('#container');
const thing = domFactory.testing({
	elementName: 'thing',
	className: ['lol', 'haha', 'xd'],
	text: 'thing',
	parent: mything,
});
console.log(thing);
