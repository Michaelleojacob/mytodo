import UI from './ui/ui';
import Events from './Events/Events';

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
