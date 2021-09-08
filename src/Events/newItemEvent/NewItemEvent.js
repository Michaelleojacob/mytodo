import domFactory from '../../domFactory/domFactory';

export default class NewItemEvent {
	static init() {
		this.cacheDom();
		this.testing();
	}
	static cacheDom() {
		this.newProjectBtn = document.querySelector('.projectButtonWrapper');
		this.newProj = document.querySelector('.newProj');
	}
	static testing() {
		this.newProj.addEventListener('click', this.myfunction);
	}
	static myfunction = e => {
		// console.log(e);
		// console.log(e.target.parentNode);
		// console.log(e.target.parentNode.childElementCount);
		// if (e.target.parentNode.childElementCount > 1) return;
		this.projectInput = domFactory.domElement({
			type: 'form',
			classes: ['idkyet'],
			children: [
				domFactory.domElement({
					type: 'input',
				}),
				domFactory.domElement({
					type: 'button',
					text: 'submit',
				}),
			],
		});
		this.newProjectBtn.appendChild(this.projectInput);
	};
}
