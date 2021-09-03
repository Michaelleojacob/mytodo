import domFactory from '../../../domFactory/domFactory';

export default class AllTodayWeekMonth {
	static init(parent) {
		this.parent = parent;
		this.allTodayMonthWrap();
		this.allTodayMonth();
	}
	static allTodayMonthWrap() {
		return (this.allTodayMonthWrapper = domFactory.createDiv({
			elementName: 'allTodayMonthWrapper',
			parent: this.parent,
		}));
	}
	static allTodayMonth() {
		const items = [
			{ name: 'all', classes: ['time'] },
			{ name: 'today', classes: ['from'] },
			{ name: 'week', classes: ['from'] },
			{ name: 'month', classes: ['from'] },
		];

		items.forEach(({ name, classes }) => {
			const element = domFactory.elementWithMultipleClasses({
				elementName: name,
				type: 'button',
				classes: ['navButton', name, ...classes],
				text: name,
				parent: this.allTodayMonthWrapper,
			});
		});
	}
}
