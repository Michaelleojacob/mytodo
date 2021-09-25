import UI from './ui/ui';
import Events from './Events/Events';

(function () {
	const app = {
		init() {
			localStorage.clear();
			this.renderUI();
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
	};
	app.init();
})();
