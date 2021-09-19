import GenerateRandomID from '../generateRandomID/generateRandomID';

export default class Todo {
	constructor(name, from, date) {
		this.name = name;
		this.date = date;
		this.from = from;
		this.id = GenerateRandomID.giveUniqueId();
		this.getAllTodos = 'all';
	}
}
