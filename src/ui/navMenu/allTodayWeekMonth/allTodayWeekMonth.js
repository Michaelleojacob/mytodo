import '../navMenu.css';
import domFactory from '../../../domFactory/domFactory';

export default class AllTodayWeekMonth {
	static init(parent) {
		this.parent = parent;
		this.allTodayMonthWrap();
	}
	static allTodayMonthWrap() {
		this.allTodayMonthWrapper = domFactory.domElement({
			classes: ['allTodayMonthWrapper'],
		});
		this.parent.appendChild(this.allTodayMonthWrapper);
		this.allTodayMonth();
	}
	static items = [
		{ name: 'all', icon: ['fa-list'] },
		{ name: 'today', icon: ['fa-inbox'] },
		{ name: 'week', icon: ['fa-calendar-week'] },
		{ name: 'month', icon: ['fa-calendar-alt'] },
	];
	static allTodayMonth() {
		AllTodayWeekMonth.items.forEach(({ name, icon }) => {
			const element = domFactory.domElement({
				type: 'button',
				classes: ['navButton', name],
				children: [
					//icon
					domFactory.domElement({
						classes: ['navIcon', 'fa', icon],
					}),
					//button
					domFactory.domElement({
						classes: ['navButtonText'],
						text: name,
					}),
				],
			});
			this.allTodayMonthWrapper.appendChild(element);
		});
	}
}
