import { setLedState, listenLedState } from "./backend/fbService.js";

const onButton = document.getElementById("onButton");
const offButton = document.getElementById("offButton");

onButton.addEventListener("click", function () {

    setLedState(1)
        .then(() => {
            console.log("LED ligado. Estado enviado: 1");
        })
        .catch((error) => {
            console.error("Erro ao ligar o LED:", error);
        });

});

offButton.addEventListener("click", function () {

    setLedState(0)
        .then(() => {
            console.log("LED desligado. Estado enviado: 0");
        })
        .catch((error) => {
            console.error("Erro ao desligar o LED:", error);
        });

});

listenLedState((state) => {
    if (state === 1) {
        console.log("LED ligado. Estado enviado: 1");

        onButton.classList.add("active");
        offButton.classList.remove("active");
        main.classList.add("lightON");
    }

    else {
        console.log("LED desligado. Estado enviado: 0");

        offButton.classList.add("active");
        onButton.classList.remove("active");
        main.classList.remove("lightON");
    }
});