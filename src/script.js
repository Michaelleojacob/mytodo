import UI from './ui/ui';
import Events from './Events/Events';
import testing from './testing';

(function () {
	const app = {
		init() {
			this.renderUI();
			// this.mytesting();
			this.addEvents();
			this.triggerClickAll();
		},
		renderUI() {
			UI.init();
		},
		addEvents() {
			Events.init();
		},
		triggerClickAll() {
			document.querySelector('.all').click();
		},
		mytesting() {
			testing();
		},
	};
	app.init();
})();
