window.onload = function () {

	let todoList = [];
	if (localStorage.getItem('todo') != undefined) {
		todoList = JSON.parse(localStorage.getItem('todo'));
	}

	document.getElementById('add').onclick = function () {
		let d = document.getElementById('in').value;

		//{todo : Добавить хлеб, check: false}

		let temp = {};
		temp.todo = d;
		temp.check = false;

		let i = todoList.length;
		todoList[i] = temp;
		console.log(todoList);

		out();
		localStorage.setItem('todo', JSON.stringify(todoList));
	}

	function out() {
		let out = '';
		for (let key in todoList) {
			if (todoList[key].check == true) {
				out += '<input type="checkbox" checked>';
			}
			else {
				out += '<input type="checkbox">';
			}
			out += todoList[key].todo + '<br>';
		}
		document.getElementById('out').innerHTML = out;
	}
}