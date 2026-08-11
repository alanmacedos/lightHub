import { setLedState } from "../backend/fbService.js";

const onButton = document.getElementById("onButton");
const offButton = document.getElementById("offButton");

onButton.addEventListener("click", function () {

    setLedState(0)
        .then(() => {
            console.log("LED ligado. Estado enviado: 0");

            onButton.classList.add("active");
            offButton.classList.remove("active");
        })
        .catch((error) => {
            console.error("Erro ao ligar o LED:", error);
        });

});

offButton.addEventListener("click", function () {

    setLedState(1)
        .then(() => {
            console.log("LED desligado. Estado enviado: 1");

            offButton.classList.add("active");
            onButton.classList.remove("active");
        })
        .catch((error) => {
            console.error("Erro ao desligar o LED:", error);
        });

});