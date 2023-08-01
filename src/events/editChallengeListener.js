import editChallengeHandler from '../handlers/editChallengeHandler.js';

document.querySelector('#challenges').addEventListener('click', (e) => {
    editChallengeHandler(e);
});
