import domFactory from '../../domFactory/domFactory';
import toggleDisplay from '../toggleDisplay/toggleDisplay';

export default class NewItemEvent {
	static init(parent) {
		this.parent = parent;
		this.createNewItemInputDomTree();
		this.newItemButtonToListenFor();
		this.cacheAndAddListener();
	}
	static createNewItemInputDomTree() {
		this.projectInput = domFactory.domElement({
			classes: ['newProjectFormWrap'],
			children: [
				domFactory.domElement({
					type: 'form',
					attributes: { id: 'newProjectForm' },
					children: [this.subTreeInput('new project'), this.subTreeButtons()],
				}),
			],
		});
		this.parent.appendChild(this.projectInput);
		this.preventDefaultSubmit();
	}
	static preventDefaultSubmit() {
		this.inputForm = document.querySelector('#newProjectForm');
		this.inputForm.addEventListener('submit', e => {
			e.preventDefault();
			console.log(e);
		});
	}
	static subTreeInput(myplaceholder) {
		return (this.input = domFactory.domElement({
			type: 'input',
			attributes: { placeholder: myplaceholder },
		}));
	}
	static subTreeButtons() {
		return (this.buttons = domFactory.domElement({
			classes: ['formButtonWrapper'],
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
		}));
	}
	static newItemButtonToListenFor() {
		this.newProjectFormWrap = document.querySelector('.newProjectFormWrap');
		this.newProjectFormWrap.setAttribute('style', 'display:none');
		// this.projectInput.setAttribute('style', 'display:none');
	}
	static cacheAndAddListener() {
		this.parentButton = document.querySelector('.newProj');
		console.log(this.parent);
		const that = NewItemEvent;
		this.parentButton.addEventListener('click', e => {
			toggleDisplay(this.newProjectFormWrap);
		});
	}
}
