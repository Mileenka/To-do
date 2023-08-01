const newChallengeComponent = (taskData) => {
   // New task
   const taskElement = document.createElement("div");
   taskElement.classList.add("task");

   // Task content
   const taskContentElement = document.createElement("div");
   taskContentElement.classList.add("content");

   // Task input
   const taskInputElement = document.createElement("input");
   taskInputElement.classList.add("text");
   taskInputElement.type = "text";
   taskInputElement.value = taskData.value;
   taskInputElement.setAttribute("readonly", "readonly");

   // Task buttons container
   const taskActionsElement = document.createElement("div");
   taskActionsElement.classList.add("actions");

   // Task button edit
   const taskEditElement = document.createElement("button");
   taskEditElement.classList.add("edit");
   let editImage = document.createElement("img");
   editImage.src = "./assets/pencil.png";
   editImage.alt = "Edit button";
   editImage.classList.add("edit-image");

   // Add event listener to the edit button
   taskEditElement.addEventListener("click", () => {
      taskInputElement.removeAttribute("readonly");
   });

   // Task button save (new button/icon for saving changes)
   const taskSaveElement = document.createElement("button");
   taskSaveElement.classList.add("save");
   let saveImage = document.createElement("img");
   saveImage.src = "./assets/save-file.png";
   saveImage.alt = "Save button";
   saveImage.classList.add("save-image");

   // Add event listener to the save button/icon
   taskSaveElement.addEventListener("click", () => {
      taskInputElement.setAttribute("readonly", "readonly");
   });

   // Task button delete
   const taskDeleteElement = document.createElement("button");
   taskDeleteElement.classList.add("delete");
   const trashImage = document.createElement("img");
   trashImage.src = "./assets/trash.png";
   trashImage.alt = "trash";
   trashImage.classList.add("trash-image");

   // Appends
   taskContentElement.appendChild(taskInputElement);
   taskElement.appendChild(taskContentElement);
   taskEditElement.appendChild(editImage);
   taskActionsElement.appendChild(taskEditElement);
   taskSaveElement.appendChild(saveImage);
   taskActionsElement.appendChild(taskSaveElement);
   taskDeleteElement.appendChild(trashImage);
   taskActionsElement.appendChild(taskDeleteElement);
   taskElement.appendChild(taskActionsElement);

   return taskElement;
};


export default newChallengeComponent;