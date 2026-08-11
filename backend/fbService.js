import { ref, set } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";
import { database } from "./fbConfig.js";

function setLedState(state) {
    const ledRef = ref(database, "led/state");

    return set(ledRef, state);
}

export { setLedState };