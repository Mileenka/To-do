/**
 * @jest-environment jsdom
 */

import newChallengeComponent from './newChallengeComponent.js';

describe('newChallengeComponent', () => {
    it('should create a task component with read-only input field and buttons', () => {
        const taskData = { value: 'Sample task data' };

        const taskComponent = newChallengeComponent(taskData);

        expect(taskComponent).toBeDefined();
        expect(taskComponent.tagName).toBe('DIV');
        expect(taskComponent.classList.contains('task')).toBe(true);

        const taskInputElement = taskComponent.querySelector('.text');
        expect(taskInputElement).toBeDefined();
        expect(taskInputElement.tagName).toBe('INPUT');
        expect(taskInputElement.getAttribute('type')).toBe('text');
        expect(taskInputElement.getAttribute('readonly')).toBe('readonly');
        expect(taskInputElement.value).toBe(taskData.value);

        const editButton = taskComponent.querySelector('.edit');
        expect(editButton).toBeDefined();
        expect(editButton.tagName).toBe('BUTTON');
        expect(editButton.querySelector('.edit-image')).toBeDefined();

        const saveButton = taskComponent.querySelector('.save');
        expect(saveButton).toBeDefined();
        expect(saveButton.tagName).toBe('BUTTON');
        expect(saveButton.querySelector('.save-image')).toBeDefined();

        const deleteButton = taskComponent.querySelector('.delete');
        expect(deleteButton).toBeDefined();
        expect(deleteButton.tagName).toBe('BUTTON');
        expect(deleteButton.querySelector('.trash-image')).toBeDefined();
    });

    it('should enable task editing when clicking the edit button', () => {
        const taskData = { value: 'Sample task data' };
        const taskComponent = newChallengeComponent(taskData);
        const taskInputElement = taskComponent.querySelector('.text');
        const editButton = taskComponent.querySelector('.edit');

        editButton.click();

        expect(taskInputElement.getAttribute('readonly')).toBeNull();
    });

    it('should disable task editing and make the task read-only when clicking the save button', () => {
        const taskData = { value: 'Sample task data' };
        const taskComponent = newChallengeComponent(taskData);
        const taskInputElement = taskComponent.querySelector('.text');
        const saveButton = taskComponent.querySelector('.save');

        taskInputElement.removeAttribute('readonly');
        saveButton.click();

        expect(taskInputElement.getAttribute('readonly')).toBe('readonly');
    });
});
