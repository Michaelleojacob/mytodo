import domFactory from '../../domFactory/domFactory';

class lolDeleteThis {
	static init() {
		this.cacheDom();
		this.addListenerToNewProject();
	}
	static cacheDom() {
		this.newProjectBtn = document.querySelector('.projectButtonWrapper');
		this.newProj = document.querySelector('.newProj');
	}
	static addListenerToNewProject() {
		this.newProj.addEventListener('click', this.newItemDomTree);
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
	static newItemDomTree = e => {
		if (e.target.parentNode.childElementCount >= 2) return;
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
		this.newProjectBtn.appendChild(this.projectInput);
		this.preventDefaultSubmit();
	};
	static preventDefaultSubmit() {
		this.inputForm = document.querySelector('#newProjectForm');
		this.inputForm.addEventListener('submit', e => {
			e.preventDefault();
			console.log(e);
		});
		this.inputForm.addEventListener('click', e => {
			if (e.target.textContent === 'cancel') {
				console.log(e);
				console.log(this.input);
				console.log(this.input.parentNode);
				console.log(this.input.parentNode.parentNode);
				console.log(this.input.parentNode.parentNode.parentNode);
				this.input.parentNode.parentNode.setAttribute('style', 'display:none');
			}
		});
	}

	static FULLFRONTAL() {
		this.projectInput = domFactory.domElement({
			classes: ['newProjectFormWrap'],
			children: [
				domFactory.domElement({
					type: 'form',
					children: [
						domFactory.domElement({
							type: 'input',
							attributes: { placeholder: 'new project', id: 'newProjectForm' },
							classes: ['newProjectForm'],
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
	}
}

export default class thisHereIsAMeme {
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
