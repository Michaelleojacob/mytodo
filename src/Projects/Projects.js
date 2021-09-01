import GenerateRandomID from '../generateRandomID/generateRandomID';

export default class Projects {
	constructor(name) {
		this.name = name;
		this.id = GenerateRandomID.giveUniqueId();
	}
	rename(newName) {
		this.name = newName;
	}
}
