// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAd92cJFRsu90p4BgqhqiXZYHo7EzzlC50",
  authDomain: "midzooecg.firebaseapp.com",
  databaseURL: "https://midzooecg-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "midzooecg",
  storageBucket: "midzooecg.appspot.com",
  messagingSenderId: "175107107214",
  appId: "1:175107107214:web:8be329550d1a9658d81cdf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

const btnRegistro = document.getElementById('signUp');
    var user = document.getElementById('username').value;
    var email = document.getElementById('email');
    var password = document.getElementById('password');

    btnRegistro.addEventListener('click', (e) => {
        console.log(email.value);

        createUserWithEmailAndPassword(auth, email.value, password.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;

                alert("Usuario registrado con éxito!");
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                alert(errorMessage);
            });

        })