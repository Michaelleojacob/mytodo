import domFactory from '../../domFactory/domFactory';
import GenerateRandomID from '../../generateRandomID/generateRandomID';
import Storage from '../../Storage/Storage';

export default class IndividualTasksHTML {
	static init(parent) {
		this.parent = parent;
		this.getAllTasks();
	}
	static makeOneTask(obj) {
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
							text: obj.name,
						}),
						domFactory.domElement({
							classes: ['from'],
							type: 'span',
							text: obj.from,
						}),
						domFactory.domElement({
							type: 'input',
							classes: ['dateThing'],
							attributes: {
								type: 'date',
								max: '9999-12-31',
								maxlength: '4',
							},
						}),
					],
				}),
			],
		});
		this.parent.appendChild(this.task);
		this.deleteButton();
		this.modifyingNameEnterToBlur(this.task);
		this.showDeleteOnHover(this.task);
		this.getNewNameOnModify(this.task);
		this.getDateInput(this.task);
	}
	static deleteButton() {
		this.deleteBtn = domFactory.domElement({
			classes: ['deleteTask'],
			type: 'button',
			text: 'X',
		});
		this.task.appendChild(this.deleteBtn);
	}
	static modifyingNameEnterToBlur(element) {
		const disableEnterOn = element.childNodes[0].childNodes[0];
		disableEnterOn.addEventListener('keydown', e => {
			if (e.key === 'Enter') {
				e.preventDefault();
				disableEnterOn.blur();
			}
		});
	}
	static showDeleteOnHover(element) {
		this.task.addEventListener('mouseover', () => {
			element.childNodes[1].style.visibility = 'visible';
		});
		this.task.addEventListener('mouseout', () => {
			element.childNodes[1].style.visibility = 'hidden';
		});
	}
	static getNewNameOnModify(element) {
		let timeout = null;
		const nameModified = element.childNodes[0].childNodes[0];
		nameModified.addEventListener('input', () => {
			if (nameModified.textContent.trim() === '') return;
			clearTimeout(timeout);
			timeout = setTimeout(() => {
				if (nameModified.textContent.trim() === '') return;
				console.log(nameModified.textContent);
			}, 1000);
		});
	}
	static getDateInput(element) {
		let timeout = null;
		const mything = element.childNodes[0].childNodes[2];
		mything.addEventListener('input', () => {
			clearTimeout(timeout);
			timeout = setTimeout(() => {
				console.log(mything.value);
			}, 1000);
		});
	}
	static getAllTasks() {
		const tasks = Storage.getTodos();
		console.log(tasks);
		tasks.map(x => {
			this.makeOneTask(x);
		});
	}
}
