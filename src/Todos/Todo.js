import GenerateRandomID from '../generateRandomID/generateRandomID';

export default class Todo {
	constructor(name, date, from) {
		this.name = name;
		this.date = date;
		this.from = from;
		this.id = GenerateRandomID.giveUniqueId();
		this.getAllTodos = 'all';
	}
	todoName(newName) {
		this.name = newName;
	}
	todoFrom(from) {
		this.from = from;
	}
}
