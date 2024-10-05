
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA-sUt1u7uK1GN_x4XkmDgTzunzNHR1N3U",
    authDomain: "register-and-login-61c50.firebaseapp.com",
    projectId: "register-and-login-61c50",
    storageBucket: "register-and-login-61c50.appspot.com",
    messagingSenderId: "248872359218",
    appId: "1:248872359218:web:7fdd5b2442b58498cb732b",
    measurementId: "G-T6MGC522FC"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = firebase.auth()
  const database = firebase.database()

  function register () {
    email=document.getElementById('email').value
    username=document.getElementById('username').value
    password=document.getElementById('password').value
    password_repeat=document.getElementById('password_repeat').value
    name=document.getElementById('name').value
    if (validate_email(email)==false || validate_password(password)) 
        {
            alert('E-mail lub Hasło są niezgodne.')
            return
        }
    if (validate_field(username)==false || validate_field(name)==false) 
    {
        alert('Nie wszystkie pola są wypełnione.')
        return
    }
  }

  auth.createUserWithEmailAndPassword(email, password
    .then(function() {
        var user = auth.currentUser
        alert('Konto utworzone.')

        var database_ref = database.ref()

        var user_data = {
            email : email,
            username : username,
            password : password,
            name : name,
            last_login : Date.now()
        }
        database_ref.child('users/' + user.uid).set(user_data)
    })
    .catch(function(error) {
        var error_code = error_code
        var error_message = error_message

        alert(error_message)
    })
  )

  function validate_email(email)
  {
    /^[^@]+@\w+(\.\w+)+\w$/test(str);
    if (expression.test(email) == true) return true
    else return false
  }
function validate_password(password)
{
    if (password < 6) return false
    if (password != password_repeat) return false
    else return true
}
function validate_field(field)
{
    if (field == null) return false
    if (field.length <= 0) return false
    else return true
}