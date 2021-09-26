import './normalizeCss.css';
import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import UI from './ui/ui';
import Events from './Events/Events';

(function () {
	const app = {
		init() {
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
