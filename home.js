import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import {getAuth, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js"
import {getFirestore, getDoc, doc} from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js"
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-analytics.js";

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

  const auth=getAuth();
  const db=getFirestore();
  const email=document.getFirestore('email');

  nologgeduser(auth, ()=>{
    if(loggedInUserId===false){
        window.location.href='index.html';
    }
  })
  onAuthStateChanged(auth, (user)=>{
    const loggedInUserId=localStorage.getItem('loggedInUserId');
    if(loggedInUserId){
        const docRef = doc(db, "users", loggedInUserId);
        getDoc(docRef)
        .then((docSnap)=>{
            if(docSnap.exists()){
                const userData=docSnap.data();
                document.getElementById('loggedUserUsername').innerText=userData.username;
                document.getElementById('loggedUserEmail').innerText=userData.email;
                document.getElementById('loggedUserName').innerText=userData.name;
            }
            else{
                console.log("no document found matching id")
            }
        })
        .catch((error)=>{
            console.log("Error getting document ");
        })
    }
    else{
        console.log("User Id not found in local storage.")
    }
  })

  const logoutButton=document.getElementById('logout');
  logoutButton.addEventListener('click',()=>{
    localStorage.removeItem('loggedInUserId');
    signOut(auth)
    .then(()=>{
        window.location.href='index.html';
    })
    .catch((error)=>{
        console.error('Error Signing Out: ', error);
    })
  })