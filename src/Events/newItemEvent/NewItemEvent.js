import domFactory from '../../domFactory/domFactory';
import toggleDisplay from '../toggleDisplay/toggleDisplay';

export default class NewItemEvent {
	static formDOMTree(parent, myid) {
		this.parent = parent;
		this.projectInput = domFactory.domElement({
			// attributes: { style: 'display:none' },
			children: [
				domFactory.domElement({
					type: 'form',
					attributes: { id: myid },
					children: [
						domFactory.domElement({
							type: 'input',
						}),
						domFactory.domElement({
							children: [
								domFactory.domElement({
									type: 'button',
									text: 'submit',
								}),
								domFactory.domElement({
									type: 'button',
									text: 'cancel',
								}),
							],
						}),
					],
				}),
			],
		});
		this.parent.appendChild(this.projectInput);
		return this.projectInput;
	}
	static getFormInput(element) {
		element.addEventListener('submit', e => {
			e.preventDefault();
			if (e.submitter.textContent === 'cancel') return toggleDisplay(element);
			if (e.target[0].value === '') return;
			const userInput = e.target[0].value;
			e.target[0].value = '';
			console.log(e);
			console.log(`userinput: ${userInput}`);
			return userInput;
		});
	}
	static listenNewItemButtonToOpenForm({ elementListening, toggler }) {
		elementListening.addEventListener('click', () => {
			toggleDisplay(toggler);
		});
	}
}
