window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const listElement = document.querySelector("#challenges");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;

		const taskElement = document.createElement('div');
		taskElement.classList.add('task');

		const taskContentElement = document.createElement('div');
		taskContentElement.classList.add('content');

		taskElement.appendChild(taskContentElement);

		const taskInputElement = document.createElement('input');
		taskInputElement.classList.add('text');
		taskInputElement.type = 'text';
		taskInputElement.value = task;
		taskInputElement.setAttribute('readonly', 'readonly');

		taskContentElement.appendChild(taskInputElement);

		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');

		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		const editImage = document.createElement('img');
		editImage.src = './assets/pencil.png';
		editImage.alt = 'trash';
		editImage.classList.add('edit-image');


		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');


		const trashImage = document.createElement('img');
		trashImage.src = './assets/trash.png';
		trashImage.alt = 'trash';
		trashImage.classList.add('trash-image');

		task_edit_el.appendChild(editImage);
		task_delete_el.appendChild(trashImage);
		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);

		taskElement.appendChild(task_actions_el);

		listElement.appendChild(taskElement);

		input.value = '';

		task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerText = "Save";
				taskInputElement.removeAttribute("readonly");
				taskInputElement.focus();
			} else {
				task_edit_el.innerText = "Edit";
				taskInputElement.setAttribute("readonly", "readonly");
			}
		});

		task_delete_el.addEventListener('click', (e) => {
			listElement.removeChild(taskElement);
		});
	});
});