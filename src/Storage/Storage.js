import Todo from '../Todos/Todo';
import Projects from '../Projects/Projects';

export default class Storage {
	static getTodos() {
		let todos;
		if (localStorage.getItem('todos') === null) {
			todos = [];
		} else {
			todos = JSON.parse(localStorage.getItem('todos'));
		}
		return todos;
	}
	static addTodo(todo) {
		const todos = Storage.getTodos();
		todos.push(todo);
		localStorage.setItem('todos', JSON.stringify(todos));
	}
	static newTaskName(taskid, newName) {
		const todos = Storage.getTodos();
		todos.map(task => {
			if (task.id === taskid) {
				return (task.name = newName);
			}
		});
		localStorage.setItem('todos', JSON.stringify(todos));
	}
	static changeTaskDate(taskid, newDate) {
		const todos = Storage.getTodos();
		todos.map(task => {
			if (task.id === taskid) {
				return (task.date = newDate);
			}
		});
		localStorage.setItem('todos', JSON.stringify(todos));
	}
	static removeTodo(id) {
		const todos = Storage.getTodos();
		todos.forEach((todo, index) => {
			if (todo.id === id) {
				todos.splice(index, 1);
			}
		});
		localStorage.setItem('todos', JSON.stringify(todos));
	}
	static getProjects() {
		let projects;
		if (localStorage.getItem('projects') === null) {
			projects = [];
		} else {
			projects = JSON.parse(localStorage.getItem('projects'));
		}
		return projects;
	}
	static addProject(project) {
		const projects = Storage.getProjects();
		projects.push(project);
		localStorage.setItem('projects', JSON.stringify(projects));
	}
	static removeProj(id) {
		const projects = Storage.getProjects();
		projects.forEach((project, index) => {
			if (project.id === id) {
				projects.splice(index, 1);
			}
		});
		localStorage.setItem('projects', JSON.stringify(projects));
	}
	static getAndFilterTodos(filterFrom, filterBy) {
		const filtered = Storage.getTodos().filter(
			todo => todo[filterFrom] === filterBy
		);
		return filtered;
	}
}

function dummytodos() {
	const todo1 = new Todo('todo1', '1/1/2021', 'all');
	const todo2 = new Todo('todo2', '2/2/2021', 'all');
	const todo3 = new Todo('todo3', '3/3/2021', 'project1');
	const todo4 = new Todo('todo4', '4/4/2021', 'project2');
	const todo5 = new Todo('todo5', '5/5/2021', 'all');
	const todo6 = new Todo('todo6', '5/5/2021', 'all');
	const todo7 = new Todo('todo7', '5/5/2021', 'all');
	const todo8 = new Todo('todo8', '5/5/2021', 'project three');
	const todo9 = new Todo(
		'mytodo9withprojectname',
		'1/1/2021',
		'escape from tarkov'
	);

	Storage.addTodo(todo1);
	Storage.addTodo(todo2);
	Storage.addTodo(todo3);
	Storage.addTodo(todo4);
	Storage.addTodo(todo5);
	Storage.addTodo(todo6);
	Storage.addTodo(todo7);
	Storage.addTodo(todo8);
	Storage.addTodo(todo9);
}

if (localStorage.getItem('todos') === null) {
	dummytodos();
}
