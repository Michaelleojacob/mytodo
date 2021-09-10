import domFactory from '../../domFactory/domFactory';

export default class NewItemEvent {
	static init(parent) {
		this.parent = parent;
		this.createNewItemInputDomTree();
		this.cacheDom();
		this.cacheAndAddListener();
	}
	static cacheDom() {
		this.newProjectFormWrap = document.querySelector('.newProjectFormWrap');
		console.log(this.newProjectFormWrap);
	}
	static cacheAndAddListener() {
		this.parent.addEventListener('click', e => {
			console.log(e);
			console.log(this.newProjectFormWrap);
			this.toggleDisplay(this.newProjectFormWrap);
		});
	}
	static toggleDisplay(element) {
		if (element.style.display === 'none') {
			element.style.display = 'flex';
		} else {
			element.style.display = 'none';
		}
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
}
