import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBU2zVh08SeMNqUiTP6R8F_-Mzc0ekBHmw",
    authDomain: "festival-7feab.firebaseapp.com",
    projectId: "festival-7feab",
    storageBucket: "festival-7feab.appspot.com",
    messagingSenderId: "661626288374",
    appId: "1:661626288374:web:a79066e49dbe9e6af314d7",
    measurementId: "G-1HCZEPNRPV"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);



const app = createApp(App)

app.use(router)

app.mount('#app')
