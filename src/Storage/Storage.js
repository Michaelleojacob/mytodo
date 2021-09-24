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
	static removeTodosOnProjectDelete(project) {
		let todos = Storage.getTodos();
		todos = todos.filter((task, index) => {
			task.from !== project;
		});
		localStorage.setItem('todos', JSON.stringify(todos));
	}
	static getAndFilterTodos(filterFrom, filterBy) {
		const filtered = Storage.getTodos().filter(
			todo => todo[filterFrom] === filterBy
		);
		return filtered;
	}
}
