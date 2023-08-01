const editChallengeHandler = (e) => {
    if (e.target.className === 'edit-image') {
        const taskElement = e.target.closest('.task');
        const inputElement = taskElement.querySelector('.text');
        inputElement.removeAttribute('readonly');
        inputElement.focus();

        const saveButton = taskElement.querySelector('.save-image');

        // Add event listener to the save button/icon
        saveButton.addEventListener('click', () => {
            inputElement.setAttribute('readonly', 'readonly');
        });
    }
};

export default editChallengeHandler;
