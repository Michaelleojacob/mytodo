import Storage from './Storage/Storage';
import domFactory from './domFactory/domFactory';

export default class AddProjectsToUI {
	static init(parent) {}
	// static init() {
	// 	const myArr = Storage.getProjects();
	// 	myArr.forEach(x => {
	// 		const trimName = x.name.trim().split(' ').join('');
	// 		return domFactory.elementWithMultipleClasses({
	// 			elementName: trimName,
	// 			type: 'button',
	// 			classes: ['navButton', trimName],
	// 			text: x.name,
	// 			// !need parent: projParent,
	// 		});
	// 	});
	// }
}
