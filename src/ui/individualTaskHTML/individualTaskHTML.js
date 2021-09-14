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
							type: 'span',
							text: 'name',
						}),
						domFactory.domElement({
							type: 'span',
							text: 'from',
						}),
						domFactory.domElement({
							type: 'input',
							attributes: { type: 'date' },
						}),
					],
				}),
			],
		});
		this.parent.appendChild(this.task);
		this.deleteButton();
		this.clickToModifyName(this.task);
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
}
