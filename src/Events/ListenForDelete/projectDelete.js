import removeAllChildNodes from '../../removeAllChildNodes/removeAllChildNodes';
import Storage from '../../Storage/Storage';

export default class DeleteProject {
	static cacheDom() {
		this.parent = document.querySelector('.projectsWrapper');
		this.addListenerToParentElement();
	}
	static addListenerToParentElement() {
		this.parent.addEventListener('click', e => {
			if (e.target.classList.contains('deleteProj')) {
				const getID = e.target.parentNode.id;
				const targetTextContent = e.target.parentNode.childNodes[0].textContent;
				this.checkIfTextAreaIsTheDeletedProject(targetTextContent);
				e.target.parentNode.remove();
				Storage.removeProj(getID);
			}
		});
	}
	static checkIfTextAreaIsTheDeletedProject(element) {
		this.textAreaTitle = document.querySelector('.tTitle');
		if (element === this.textAreaTitle.textContent) {
			this.renderTasks = document.querySelector('.renderTasks');
			removeAllChildNodes(this.renderTasks);
			this.textAreaTitle.textContent = '';
		}
		return;
	}
}
