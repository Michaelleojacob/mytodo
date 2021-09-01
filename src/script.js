import UI from './ui/ui';
import Events from './Events/Events';
import domFactory from './domFactory/domFactory';
import AddProjectsToUI from './testing';

(function () {
	const app = {
		init() {
			this.renderUI();
			// this.renderProjectsToUI();
			this.addEvents();
		},
		renderUI() {
			UI.init();
		},
		// renderProjectsToUI() {
		// 	AddProjectsToUI.init();
		// },
		addEvents() {
			Events.init();
		},
	};
	app.init();
})();

const myvar = 'hi';

const mything = document.querySelector('#container');
const thing = domFactory.elementWithMultipleClasses({
	elementName: myvar,
	classes: ['lol', 'xd', myvar],
	text: myvar,
	parent: mything,
});
