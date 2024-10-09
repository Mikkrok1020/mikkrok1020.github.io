  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
  import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js"
  import {getFirestore, setDoc, doc} from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js"
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA-sUt1u7uK1GN_x4XkmDgTzunzNHR1N3U",
    authDomain: "register-and-login-61c50.firebaseapp.com",
    databaseURL: "https://register-and-login-61c50-default-rtdb.firebaseio.com",
    projectId: "register-and-login-61c50",
    storageBucket: "register-and-login-61c50.appspot.com",
    messagingSenderId: "248872359218",
    appId: "1:248872359218:web:7fdd5b2442b58498cb732b",
    measurementId: "G-T6MGC522FC"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  function showMessage(message, divId) {
    var messageDiv=document.getElementById(divId);
    messageDiv.style.display="block";
    messageDiv.innerHTML
  }
  const signUp=document.getElementById('submitSignUp')
  signUp.addEventListener('click', (event)=>{
    event.preventDefault();
    const email=document.getElementById('remail').value;
    const password=document.getElementById('rpassword').value;
    const name=document.getElementById('rname').value;
    const username=document.getElementById('rusername').value;
    
    const auth=getAuth();
    const db=getFirestore();

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
      const user=userCredential.user;
      const userData={
        email: email,
        name: name,
        username: username,
      };
    })
  })