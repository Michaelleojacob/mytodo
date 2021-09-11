import domFactory from '../../domFactory/domFactory';
import toggleDisplay from '../toggleDisplay/toggleDisplay';

export default class NewItemEvent {
	static makeEntireSubtree(parent) {
		this.parent = parent;
		return this.formDomSubtree();
	}
	static formDomSubtree() {
		this.projectInput = domFactory.domElement({
			children: [
				domFactory.domElement({
					type: 'form',
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
		console.log(element);
		element.addEventListener('submit', e => {
			e.preventDefault();
			if (e.submitter.textContent === 'cancel') return toggleDisplay(element);
			if (e.target[0].value === '') return;
			console.log(e);
			console.log(e.target[0].value);
			e.target[0].value = '';
			return e.target[0].value;
		});
	}
	static listenNewItemButtonToOpenForm({ elementListening, toggler }) {
		elementListening.addEventListener('click', e => {
			toggleDisplay(toggler);
		});
	}
}
