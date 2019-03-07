const signIn = document.getElementById("sign-in-new");
const password = document.getElementById("password-new");
const buttonSignIn = document.getElementById("button-sign-in-new");

const signInRegister = document.getElementById("sign-in-reg");
const passwordRegister = document.getElementById("password-reg");
const buttonSignInRegister = document.getElementById("button-sign-in-reg");
const show = document.getElementById("show")
const modalWarning = document.getElementById("modal-warning")
const modalInvalidEmail =document.getElementById("modal-invalid-email")
const nameUser = document.getElementById("name")
const userNameWall = document.getElementById("userNameWall")





    buttonSignIn.addEventListener("click",() => {
        let signInValue = signIn.value;
        let passwordValue = password.value;
        console.log(signInValue);
        console.log(passwordValue);

   firebase.auth().createUserWithEmailAndPassword(signInValue, passwordValue)
   .then(function(){
       verification()
   })
   .catch(function(error) {
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


    buttonSignInRegister.addEventListener("click", () =>{

        let signInValue = signInRegister.value;
        let passwordValue = passwordRegister.value;
        firebase.auth().signInWithEmailAndPassword(signInValue, passwordValue).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;

            show.innerHTML= ` <div class="alert alert-warning" role="alert">
            <p>${errorCode} o ${errorMessage}</p>
          </div>`;
            // ...
          });



    })
const state = () => {
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      showUser(user)
      console.log("existe usuario activo");
    //

    // User is signed in.
    var displayName = user.displayName;
    console.log(displayName)
    var email = user.email;
    var emailVerified = user.emailVerified;
    console.log(user.emailVerified);
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;



    // ...
  } else {
    // User is signed out.
    // ...

    show.innerHTML= ` <div class="alert alert-warning" role="alert">
    <p>Sesion no iniciada</p>
  </div>`;

  }
});
}

state();

const showUser = (user) => {
    var user = user;
    if (user.emailVerified) {
        //window.location.replace = "wall.html"
        show.innerHTML =  `<button onclick="signOutUserRegister()">Cerrar sesion</button> `;
        // localStorage.setItem('botonCerrar',buttonClose)
        //     window.location.href = "wall.html"

        //     userNameWall.innerHTML = "Hola " + localStorage.getItem('botonCerrar')

    }else{
        console.log("no verificado");


    }


}

const signOutUserRegister = () => {
        firebase.auth().signOut()
        .then(function(){
            //window.location.replace("wall.html")
            console.log("saliendo...");


        })
        .catch(function(error){
            console.log(error);


        })


}

const verification = () => {
    var user = firebase.auth().currentUser;

user.sendEmailVerification().then(function() {
  // Email sent.
  modalWarning.innerHTML= ` <div class="alert alert-warning" role="alert">
  <p>Se te ha enviado un correo de verificacion de Usuario</p>
</div>`;

}).catch(function(error) {
    console.log("error");

  // An error happened.
});
}
// const getName = () => {
// let nameValue = nameUser.value;
// localStorage.setItem('nombreusuario',nameValue);
// window.location.href = "wall.html";
// }
