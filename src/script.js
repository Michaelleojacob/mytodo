import UI from './ui/ui';
import Events from './Events/Events';
import testing from './testing';

(function () {
	const app = {
		init() {
			this.renderUI();
			// this.mytesting();
			this.addEvents();
		},
		renderUI() {
			UI.init();
		},
		addEvents() {
			Events.init();
		},
		mytesting() {
			testing();
		},
	};
	app.init();
})();
