import closeNavMenu from './closeNavMenu/closeNavMenu';
import NavButtonEvent from './NavButtonOnClickEvent/NavButtonOnClickEvent';
import NewItemEvent from './newItemEvent/NewItemEvent';
import TodayWeekMonth from './NavButtonOnClickEvent/TodayWeekMonth';

export default class Events {
	static init() {
		// console.log(this.taskAreaDomObj);
		this.handleNavButtonEvent();
		this.handleNewItemEvent();
		this.cacheForTodayWeekMonth();
	}
	static handleNavButtonEvent() {
		NavButtonEvent.handleNavDelegation(this.taskAreaDomObj);
	}
	static handleNewItemEvent() {
		NewItemEvent.init(this.taskAreaDomObj);
	}
	static cacheForTodayWeekMonth() {
		TodayWeekMonth.init(this.taskAreaDomObj);
	}
}
