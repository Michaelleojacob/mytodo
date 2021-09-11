import domFactory from '../../domFactory/domFactory';
import toggleDisplay from '../toggleDisplay/toggleDisplay';

export default class NewItemEvent {
	static makeEntireSubtree({ parent }) {
		this.parent = parent;
		this.formWrapper();
		this.createForm();
		this.createInput();
		this.createButtonWrapper();
		this.submitButton();
		this.cancelButton();
		this.DOMTreePreventDefault();
		this.listenForParentClick();
		this.eventCancelForm();
	}
	static formWrapper() {
		this.startTree = domFactory.domElement({});
		this.parent.appendChild(this.startTree);
	}
	static createForm() {
		this.form = domFactory.domElement({
			type: 'form',
		});
		this.startTree.appendChild(this.form);
	}
	static createInput() {
		this.input = domFactory.domElement({
			type: 'input',
			attributes: { placeholder: 'text' },
		});
		this.form.appendChild(this.input);
	}
	static createButtonWrapper() {
		this.btnWrapper = domFactory.domElement({});
		this.form.appendChild(this.btnWrapper);
	}
	static submitButton() {
		this.submitBtn = domFactory.domElement({
			type: 'button',
			text: 'submit',
		});
		this.btnWrapper.appendChild(this.submitBtn);
	}
	static cancelButton() {
		this.cancelBtn = domFactory.domElement({
			type: 'button',
			text: 'cancel',
		});
		this.btnWrapper.appendChild(this.cancelBtn);
	}
	static DOMTreePreventDefault() {
		this.form.addEventListener('submit', e => {
			e.preventDefault();
			if (e.submitter.textContent === 'cancel') return;
			console.log(e);
		});
	}
	static eventCancelForm() {
		this.cancelBtn.addEventListener('click', e => {
			toggleDisplay(this.startTree);
		});
	}
	static listenForParentClick() {
		this.parent.childNodes[0].addEventListener('click', e => {
			toggleDisplay(this.startTree);
			if (this.startTree.style.display === 'flex') this.input.focus();
		});
	}
}
