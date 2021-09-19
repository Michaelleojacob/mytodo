export default class domFactory {
	static domElement({
		type = 'div',
		classes = null,
		attributes = null,
		text = null,
		children = null,
		events = null,
	}) {
		const el = document.createElement(type);
		if (classes !== null) {
			el.classList.add(...classes);
		}
		el.textContent = text;
		if (attributes !== null) {
			for (let key in attributes) {
				el.setAttribute(key, attributes[key]);
			}
		}
		if (children !== null) {
			children.map(x => el.appendChild(x));
		}
		if (events !== null) {
			events.map(({ type, handler }) => {
				el.addEventListener(type, handler);
			});
		}
		return el;
	}
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
		this.elementParent = document.createElement(type);
		this.elementParent.classList.add(parentName);
		this.elementName = document.createElement(type);
		this.elementName.classList.add(trimElementName);
		this.elementName.textContent = text;
		parent.appendChild(this.elementParent);
		this.elementParent.appendChild(this.elementName);
		return this.elementName;
	}
	static elementWithMultipleClasses({
		elementName,
		type = 'div',
		classes,
		text = null,
		parent,
	}) {
		this.elementName = document.createElement(type);
		this.elementName.classList.add(...classes);
		this.elementName.textContent = text;
		parent.appendChild(this.elementName);
		return this.elementName;
	}
}
