import domFactory from '../../domFactory/domFactory';
import Storage from '../../Storage/Storage';

export default class IndividualTasksHTML {
	static makeOneTask(obj) {
		this.task = domFactory.domElement({
			classes: ['taskwrap'],
			attributes: {
				id: obj.id,
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
							events: [
								{ type: 'keydown', handler: this.modifyingNameEnterToBlur },
								{ type: 'input', handler: this.getNewNameOnModify },
							],
						}),
						domFactory.domElement({
							classes: ['from'],
							type: 'span',
							text: this.onlyDisplayFromProjects(obj.from),
						}),
						domFactory.domElement({
							type: 'input',
							classes: ['dateThing'],
							attributes: {
								type: 'date',
								max: '9999-12-31',
								maxlength: '4',
								value: obj.date,
							},
							events: [{ type: 'input', handler: this.getDateInput }],
						}),
					],
				}),
				domFactory.domElement({
					classes: ['deleteTask'],
					type: 'button',
					text: 'X',
					attributes: { style: 'visibility:hidden' },
					events: [{ type: 'click', handler: this.deleteTask }],
				}),
			],
		});
		this.showDeleteOnHover(this.task);
		return this.task;
	}

	static onlyDisplayFromProjects(x) {
		if (x === 'all') {
			return;
		} else return x;
	}

	static deleteTask(e) {
		const elID = e.target.parentNode.id;
		Storage.removeTodo(elID);
		e.target.parentNode.remove();
	}

	static modifyingNameEnterToBlur(e) {
		if (e.key === 'Enter') {
			e.preventDefault();
			e.target.blur();
		}
	}
	static getNewNameOnModify(e) {
		let timeout = null;
		const parentID = e.target.parentNode.parentNode.id;
		const modifiedName = e.target.textContent.trim();
		if (modifiedName === '') return;
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			const changeName = modifiedName;
			Storage.newTaskName(parentID, changeName);
		}, 1000);
	}
	static getDateInput(e) {
		let timeout = null;
		const parentID = e.target.parentNode.parentNode.id;
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			const changedDate = e.target.value.trim();
			Storage.changeTaskDate(parentID, changedDate);
		}, 1000);
	}

	static showDeleteOnHover(element) {
		this.task.addEventListener('mouseover', () => {
			element.childNodes[1].style.visibility = 'visible';
		});
		this.task.addEventListener('mouseout', () => {
			element.childNodes[1].style.visibility = 'hidden';
		});
	}
}
