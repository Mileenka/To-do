import dom from '../dom.js';

const deleteChallengeHandler = (e) => {
    if (e.target.className === 'trash-image') {
        const taskElement = e.target.closest('.task');
        const taskId = parseInt(taskElement.dataset.taskId, 10);

        dom.challengesList.removeChild(taskElement);
    }
};

export default deleteChallengeHandler;
