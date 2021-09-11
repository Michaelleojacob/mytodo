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
	static DOMTreePreventDefault(element) {
		console.log(element);
		element.addEventListener('submit', e => {
			e.preventDefault();
			if (e.submitter.textContent === 'cancel') return;
			console.log(e);
			console.log(e.target[0].value);
			e.target[0].value = '';
		});
	}
	// static eventCancelForm() {
	// 	this.cancelBtn.addEventListener('click', () => {
	// 		toggleDisplay(this.startTree);
	// 	});
	// }
	// static listenForParentClick() {
	// 	this.parent.childNodes[0].addEventListener('click', () => {
	// 		toggleDisplay(this.startTree);
	// 		if (this.startTree.style.display === 'flex') this.input.focus();
	// 	});
	// }
}
