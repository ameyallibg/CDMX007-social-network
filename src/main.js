const state = () => {
    firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        showUser(user)
        
       
        console.log("existe usuario activo");
        //window.location.href= "wall.html"
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
  

  
    }
  });
  }
  
  state();

const showUser = (user) => {
  var user = user;
   
  if (user.emailVerified) {
      if (!location.href.match(/wall.html$/gm)) {
          location.replace("wall.html")


          
      }else{
        
      }
    
      let loc = window.location.href;
      if (loc.includes("wall")) {
          let showme = document.getElementById("showme");
          let emailUser = document.getElementById("emailUser");
          let nameUser = document.getElementById("name-user");
          let avatarUser = document.getElementById("avatar-user");
          let email = user.email;
          showme.innerHTML =  `<button onclick="signOutUserRegister()" style="color:white; border:none; background-color: #2e2e2e;">Cerrar sesion</button>`;  
          nameUser.innerHTML = `<p> ${user.displayName} </p>`
          emailUser.innerHTML = `${email}`
          avatarUser.innerHTML= `<img class="avatar" src="${user.photoURL}">`
      }
      
      
      console.log("e mail veirficado")
  }else{
  }
}

const signOutUserRegister = () => {
  firebase.auth().signOut()
  .then(function(){
      window.location.replace("index.html")
      console.log("saliendo...");


  })
  .catch(function(error){
      console.log(error);


  })


}

		


