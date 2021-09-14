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
	}
	static deleteButton() {
		this.deleteBtn = domFactory.domElement({
			type: 'button',
			text: 'X',
		});
		this.task.appendChild(this.deleteBtn);
	}
}
