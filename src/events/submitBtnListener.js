import dom from "../dom.js";
import addChallengeHandler from '../handlers/addChallengeHandler.js'

dom.submitBtn.addEventListener("click", (e) => {
   e.preventDefault();
   addChallengeHandler(dom.input.value);
});
