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
        location.href = './wall.html';
          //window.location.replace = "wall.html"
          // showme.innerHTML =  `<button onclick="signOutUserRegister()">Cerrar sesion</button> `;
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