import deleteChallengeHandler from "../handlers/deleteChallengeHandler.js";

document.querySelector("#challenges").addEventListener("click", (e) => {
   deleteChallengeHandler(e);
});
