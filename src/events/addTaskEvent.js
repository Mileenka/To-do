import { dom } from "../dom.js";

import { addTaskHandler } from "../handlers/addTaskHandler.js";
import { deleteTaskHandler } from "../handlers/deleteTaskHandler.js";
// import { editTaskHandler } from "../handlers/editTaskHandler.js";


window.addEventListener('load', () => {
    dom.form.addEventListener('submit', e => {
        e.preventDefault();
        addTaskHandler();
        
        const taskEditElement = document.createElement('button');
        taskEditElement.addEventListener('click', (e) => {
            const taskContentElement = document.createElement('div');
            const taskInputElement= document.createElement('input');
            taskContentElement.appendChild(taskInputElement);
                });

                const taskDeleteElement = document.createElement('button');
                
                taskDeleteElement.addEventListener('click', deleteTaskHandler);
    })
});