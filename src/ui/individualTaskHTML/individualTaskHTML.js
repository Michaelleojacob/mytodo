import domFactory from '../../domFactory/domFactory';
import GenerateRandomID from '../../generateRandomID/generateRandomID';

export default class IndividualTasksHTML {
	static init(parent) {
		this.parent = parent;
		this.makeOneTask();
		this.makeOneTask();
		this.makeOneTask();
		this.checkDateThing();
		this.addListenerToModifyName();
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
							text: 'name',
						}),
						domFactory.domElement({
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
		// this.clickToModifyName(this.task);
	}
	static deleteButton() {
		this.deleteBtn = domFactory.domElement({
			type: 'button',
			text: 'X',
		});
		this.task.appendChild(this.deleteBtn);
	}
	static clickToModifyName(element) {
		element.addEventListener('click', e => {
			if (e.target.classList.contains('modifyName')) {
				console.log(e);
				const newName = prompt(`pick a new name`);
				e.target.textContent = newName;
			}
		});
	}
	static checkDateThing() {
		this.testDate = domFactory.domElement({
			classes: ['tdwrap'],
			children: [
				domFactory.domElement({
					classes: ['testdate'],
					type: 'input',
					attributes: { type: 'date' },
				}),
			],
		});
		this.parent.appendChild(this.testDate);
		this.addOnChange();
	}
	static addOnChange() {
		this.testDate.addEventListener('input', e => {
			console.log(e.target.value);
		});
	}
	static addListenerToModifyName() {
		const myNodeList = document.querySelectorAll('.modifyName');
		const myArr = Array.from(myNodeList);
		console.log(myArr);
		myArr.map(x => this.endEditOnEnter(x));
	}
	static endEditOnEnter(element) {
		element.addEventListener('keydown', e => {
			if (e.key === 'Enter') {
				e.preventDefault();
				element.blur();
			}
		});
	}
}
