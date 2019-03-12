const signIn = document.getElementById("sign-in-new");
const password = document.getElementById("password-new");
const buttonSignIn = document.getElementById("button-sign-in-new");
const signinGoogle = document.getElementById("button-sign-in-google");
const buttonSignInFacebook = document.getElementById("button-sign-in-facebook");
const signInRegister = document.getElementById("sign-in-reg");
const passwordRegister = document.getElementById("password-reg");
const buttonSignInRegister = document.getElementById("button-sign-in-reg");
const buttonSignInGit = document.getElementById("button-sign-in-git");
const show = document.getElementById("show")
const modalWarning = document.getElementById("modal-warning")
const modalInvalidEmail = document.getElementById("modal-invalid-email")
const nameUser = document.getElementById("name")
const userNameWall = document.getElementById("userNameWall")


buttonSignIn.addEventListener("click", () => {

  let signInValue = signIn.value;
  let passwordValue = password.value;
  console.log(signInValue);
  

  firebase.auth().createUserWithEmailAndPassword(signInValue, passwordValue)
    .then(function () {
      verification()
    })
    .catch(function (error) {
      // Handle Errors here.
      // var errorCode = error.code;
      var errorMessage = error.message;
      // console.log(errorCode);
      console.log(errorMessage);
      modalInvalidEmail.innerHTML = ` <div class="alert alert-warning" role="alert">
    <p> ${errorMessage} </p>
  </div>`;
    });

})


buttonSignInRegister.addEventListener("click", () => {

  let signInValue = signInRegister.value;
  let passwordValue = passwordRegister.value;
  firebase.auth().signInWithEmailAndPassword(signInValue, passwordValue)
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code
      var errorMessage = error.message;
      if (errorMessage == 'The email address is badly formatted.') {
        show.innerHTML = ` <div class=" alert-warning alert" role="alert">
              <p class="margin-warning">La direccion del correo no es valida</p>
            </div>`;

      } else {
        show.innerHTML = ` <div class=" alert-warning alert" role="alert">
              <p class="margin-warning">${errorCode}</p>
            </div>`;

      }


      // ...
    });



})

const verification = () => {
  var user = firebase.auth().currentUser;

  user.sendEmailVerification().then(function () {
    // Email sent.
    modalWarning.innerHTML = ` <div class="alert alert-warning" role="alert">
  <p>Se te ha enviado un correo de verificacion de Usuario</p>
</div>`;

  }).catch(function (error) {
    console.log("error");

    // An error happened.
  });
}
// const getName = () => {
// let nameValue = nameUser.value;
// localStorage.setItem('nombreusuario',nameValue);
// window.location.href = "wall.html";
// }

buttonSignInFacebook.addEventListener("click", () => {

  const provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithRedirect(provider).then(function (result) {
    if (result.credential) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // ...
    }
    // The signed-in user info.
    var user = result.user;
  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
});

buttonSignInGit.addEventListener("click", () => {

  var provider = new firebase.auth.GithubAuthProvider();

  firebase.auth().signInWithRedirect(provider).then(function (result) {
    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
});



signinGoogle.addEventListener("click", () => {

  var googleProvider = new firebase.auth.GoogleAuthProvider()
  firebase.auth().signInWithRedirect(googleProvider)
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });

})