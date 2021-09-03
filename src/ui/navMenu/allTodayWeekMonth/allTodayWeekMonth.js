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
			{ name: 'all', classes: ['sortByFrom'] },
			{ name: 'today', classes: ['sortByTime'] },
			{ name: 'week', classes: ['sortByTime'] },
			{ name: 'month', classes: ['sortByTime'] },
		];

		items.forEach(({ name, classes }) => {
			const element = domFactory.elementWithMultipleClasses({
				elementName: name,
				type: 'button',
				classes: ['navButton', name, ...classes],
				text: name,
				parent: this.allTodayMonthWrapper,
			});
			return element;
		});
	}
}
