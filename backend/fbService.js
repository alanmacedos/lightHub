import { ref, set, onValue } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";
import { database } from "./fbConfig.js";

const ledRef = ref(database, "led/state")

function setLedState(state) {
    return set(ledRef, state);
}

export function listenLedState(callback) {
    return onValue(ledRef, (snapshot) => {
        callback(snapshot.val());
    });
}

export { setLedState };