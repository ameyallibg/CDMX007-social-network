window.controlador ={
  firebase:firebase.initializeApp(config),

  registro: () => {
const signIn = document.getElementById("sign-in-new");
const password = document.getElementById("password-new");
const buttonSignIn = document.getElementById("button-sign-in-new");
const modalWarning = document.getElementById("modal-warning")
const modalInvalidEmail =document.getElementById("modal-invalid-email")



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
  
  var db = firebase.firestore();


  if (window.location.href.includes("index")) {
    
  
  buttonSignIn.addEventListener('click', (event)=>{
      const addForm = document.forms.namedItem("add-form");
    db.collection("posts").add({
      userId: addForm.elements.userId.value,
      email: addForm.elements.email.value,        
      mujer: addForm.elements.mujer.value,
      hombre: addForm.elements.hombre.value,
  
  })
  .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch((error) => {
      console.error("Error adding document: ", error);
  });
  //const userIds = addForm.elements.userId.value;
        
  });
}



  },

  iniciosesion: () => {
// termina registro de personas
const buttonSignInRegister = document.getElementById("button-sign-in-reg");
const buttonSignInFacebook = document.getElementById("button-sign-in-facebook");
const buttonSignInGit = document.getElementById("button-sign-in-git");
const signInRegister = document.getElementById("sign-in-reg");
const passwordRegister = document.getElementById("password-reg");
const show = document.getElementById("show");

    buttonSignInRegister.addEventListener("click", () =>{

        let signInValue = signInRegister.value;
        let passwordValue = passwordRegister.value;
        firebase.auth().signInWithEmailAndPassword(signInValue, passwordValue) 
        .catch(function(error) 
        {
            // Handle Errors here.
            var errorCode = error.code
            var errorMessage = error.message;
            if (errorMessage == 'The email address is badly formatted.') {
              show.innerHTML= ` <div class=" alert-warning alert" role="alert">
              <p class="margin-warning">La direccion del correo no es valida</p>
            </div>`;
              
            }else {
              show.innerHTML= ` <div class=" alert-warning alert" role="alert">
              <p class="margin-warning">${errorCode}</p>
            </div>`;

            }
          });



    })
    
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
  
const signinGoogle = document.getElementById("button-sign-in-google");
signinGoogle.addEventListener("click", () => {
  
  var googleProvider = new firebase.auth.GoogleAuthProvider()
  firebase.auth().signInWithRedirect(googleProvider)
  .catch(function(error) {
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
const state = () => {
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      showUser(user)
       
      console.log("existe usuario activo");

    var displayName = user.displayName;
    console.log(displayName)
    var emailVerified = user.emailVerified;
   console.log(user.emailVerified);

  } 
});
}

state();

const showUser = (user) => {
  
  var user = user;
  var providerId = user.providerData[0].providerId;
   
  if (user.emailVerified || providerId == "facebook.com" || providerId == "github.com") {
      window.location.hash = '#/wall';

    
      //poniendolo antes de las variables y dentro del settimeout
      setTimeout(function(){
        const signOut = document.getElementById("signOut")
signOut.addEventListener("click", () => {
  
 firebase.auth().signOut()
 .then(function(){
     window.location.hash = '#/' 
     console.log('saliendo...');


 })
 .catch(function(error){
     console.log(error);


 })

 


})
        
        let emailUser = document.getElementById("emailUser");
        let nameUser = document.getElementById("name-user");
        let avatarUser = document.getElementById("avatar-user");
        let email = user.email; 
        nameUser.innerHTML = `<p> ${user.displayName} </p>`
        emailUser.innerHTML = `${email}`
        avatarUser.innerHTML= `<img class="avatar" src="${user.photoURL}">`
    

    console.log("e mail veirficado")

        {
        
    }
 },500); 
 
}



}


  },

  muro: () => {
    var db = firebase.firestore();

     
  
  const emailUser = document.getElementById("emailUser");
  const emailUserNew = emailUser.textContent
  
  db.collection("posts").where("email", "==", emailUser.textContent).get().then((querySnapshot) => {
    const container = document.getElementById("contenido");
    container.innerHTML = "";
  
    querySnapshot.forEach((doc) => {
        container.innerHTML += `user: ${doc.data().userId} | time: ${doc.data().email} | ${doc.data().mujer}</br>`;
      });
  });
  
  
  }
}
