import domFactory from '../../domFactory/domFactory';
import GenerateRandomID from '../../generateRandomID/generateRandomID';

export default class IndividualTasksHTML {
	static init(parent) {
		this.parent = parent;
		this.makeOneTask();
		this.makeOneTask();
		this.makeOneTask();
	}
	static makeOneTask() {
		this.task = domFactory.domElement({
			classes: ['taskwrap'],
			attributes: {
				id: GenerateRandomID.giveUniqueId(),
			},
			children: [
				domFactory.domElement({
					classes: ['childwrap'],
					children: [
						domFactory.domElement({
							classes: ['modifyName'],
							attributes: { contenteditable: 'true' },
							type: 'span',
							text: 'nameasdksadsajdjksadja',
						}),
						domFactory.domElement({
							classes: ['from'],
							type: 'span',
							text: 'from',
						}),
						domFactory.domElement({
							type: 'input',
							classes: ['dateThing'],
							attributes: { type: 'date' },
						}),
					],
				}),
			],
		});
		this.parent.appendChild(this.task);
		this.deleteButton();
		this.modifyTaskNameListener(this.task);
		this.showDelete(this.task);
	}
	static deleteButton() {
		this.deleteBtn = domFactory.domElement({
			classes: ['deleteTask'],
			type: 'button',
			text: 'X',
		});
		this.task.appendChild(this.deleteBtn);
	}
	static modifyTaskNameListener(element) {
		console.log(element.childNodes[0].childNodes[0]);
		element.childNodes[0].childNodes[0].addEventListener('keydown', e => {
			if (e.key === 'Enter') {
				e.preventDefault();
				element.childNodes[0].childNodes[0].blur();
			}
		});
	}
	static showDelete(element) {
		console.log(element.childNodes[1]);
		this.task.addEventListener('mouseover', e => {
			element.childNodes[1].style.visibility = 'visible';
		});
		this.task.addEventListener('mouseout', e => {
			element.childNodes[1].style.visibility = 'hidden';
		});
	}

	// static checkDateThing() {
	// 	this.testDate = domFactory.domElement({
	// 		classes: ['tdwrap'],
	// 		children: [
	// 			domFactory.domElement({
	// 				classes: ['testdate'],
	// 				type: 'input',
	// 				attributes: { type: 'date' },
	// 			}),
	// 		],
	// 	});
	// 	this.parent.appendChild(this.testDate);
	// }
	// static addOnChange() {
	// 	this.testDate.addEventListener('input', e => {
	// 		console.log(e.target.value);
	// 	});
	// }
	// static addListenerToModifyName() {
	// 	const myArr = Array.from(document.querySelectorAll('.modifyName'));
	// 	myArr.map(x => this.endEditOnEnter(x));
	// }
	// static endEditOnEnter(element) {
	// 	element.addEventListener('keydown', e => {
	// 		if (e.key === 'Enter') {
	// 			e.preventDefault();
	// 			element.blur();
	// 		}
	// 	});
	// }
	// static clickToModifyName(element) {
	// 	element.addEventListener('click', e => {
	// 		if (e.target.classList.contains('modifyName')) {
	// 			console.log(e);
	// 			const newName = prompt(`pick a new name`);
	// 			e.target.textContent = newName;
	// 		}
	// 	});
	// }
}
