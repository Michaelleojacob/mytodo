export default class domFactory {
	static createDiv({ elementName, text = null, parent }) {
		const trimElementName = elementName.trim();
		this.elementName = document.createElement('div');
		this.elementName.classList.add(trimElementName);
		this.elementName.textContent = text;
		parent.appendChild(this.elementName);
		return this.elementName;
	}
	static createButton({ elementName, text = null, parent }) {
		const trimElementName = elementName.trim();
		this.elementName = document.createElement('button');
		this.elementName.classList.add(trimElementName);
		this.elementName.textContent = text;
		parent.appendChild(this.elementName);
		return this.elementName;
	}
	static createElement({ elementName, type = 'div', text = null, parent }) {
		const trimElementName = elementName.trim();
		this.elementName = document.createElement(type);
		this.elementName.classList.add(trimElementName);
		this.elementName.textContent = text;
		parent.appendChild(this.elementName);
		return this.elementName;
	}
	static createElementWithParent({
		elementName,
		parentName,
		type = 'div',
		text = null,
		parent,
	}) {
		const trimElementName = elementName.trim();
		this.elementParent = document.createElement('div');
		this.elementParent.classList.add(parentName);
		this.elementName = document.createElement(type);
		this.elementName.classList.add(trimElementName);
		this.elementName.textContent = text;
		parent.appendChild(this.elementParent);
		this.elementParent.appendChild(this.elementName);
		return this.elementName;
	}
}
