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
		const arr = ['all', 'today', 'week', 'month'];
		arr.forEach(x => {
			return (this.x = domFactory.elementWithMultipleClasses({
				elementName: x,
				type: 'button',
				classes: ['navButton', x],
				text: x,
				parent: this.allTodayMonthWrapper,
			}));
		});
	}
}
