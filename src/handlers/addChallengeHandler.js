import dom from '../dom.js';
import newChallengeComponent from '../components/newChallengeComponent.js';

const addChallengeHandler = (inputValue) => {
    let tasksData = [];
    const newChallenge = {
        id: tasksData.length + 1, // Assign a unique ID to each task
        value: inputValue,
    };

    tasksData.push(newChallenge);
    dom.challengesList.insertBefore(
        newChallengeComponent(newChallenge),
        dom.challengesList.firstChild,
    );
    dom.input.value = '';
};

export default addChallengeHandler;
