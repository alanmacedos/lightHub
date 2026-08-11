// firebaseConfig.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";

// Configuração do Firebase
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIiRGxL6d5hHzpSKRvQ9xxvyZQOMtPhEU",
  authDomain: "esp32-lampada.firebaseapp.com",
  databaseURL: "https://esp32-lampada-default-rtdb.firebaseio.com",
  projectId: "esp32-lampada",
  storageBucket: "esp32-lampada.firebasestorage.app",
  messagingSenderId: "77209930508",
  appId: "1:77209930508:web:5febc2d0d6d6c9570f5729",
  measurementId: "G-JY6PDEH6VW"
};

// Inicialização do Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Exporta apenas o banco de dados
export { database };