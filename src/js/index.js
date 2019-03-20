window.controlador = {

  firebase: firebase.initializeApp(config),

  registro: () => {
    const signIn = document.getElementById("sign-in-new");
    const password = document.getElementById("password-new");
    const buttonSignIn = document.getElementById("button-sign-in-new");
    const modalWarning = document.getElementById("modal-warning");
    const modalInvalidEmail = document.getElementById("modal-invalid-email");
    const nombre = document.getElementById("name")
    var db = firebase.firestore();

    buttonSignIn.addEventListener("click", () => {
      let signInValue = signIn.value;
      let passwordValue = password.value;
      let name = nombre.value;

      firebase.auth().createUserWithEmailAndPassword(signInValue, passwordValue)
        .then(function () {
          var user = firebase.auth().currentUser;

          user.updateProfile({
            displayName: name,

            photoURL: "assets/img/alien.png"
          }).then(function() {

            // Update successful.
          }).catch(function (error) {
            // An error happened.
          });
          verification()
            // }).then(function() {
            //   let user = firebase.auth().currentUser;
            // firebase.firestore().collection('posts').doc(user.uid).set({
            //     id: user.uid,
            //     name: name,
            //     email: user.email,
            //     photo: user.photoURL,
            //     })
            .catch(function (error) {
              var errorMessage = error.message;
              alert(errorMessage);
              modalInvalidEmail.innerHTML = ` <div class="alert alert-warning" role="alert">
                                          <p> ${errorMessage} </p></div>`;
            });
        });
    })

    const verification = () => {
      var user = firebase.auth().currentUser;

      user.sendEmailVerification().then(function () {
        // Email sent.
        modalWarning.innerHTML = ` <div class="alert alert-warning" role="alert">
        <p>Se te ha enviado un correo de verificacion de Usuario</p></div>`;


      }).then(function () {
        setTimeout(function () {
          window.location.hash = '#/';
        }, 3000);

      }).catch(function (error) {
        alert("error");
      });
    }

    if (window.location.href.includes("registro")) {
      buttonSignIn.addEventListener('click', (event) => {

        const addForm = document.forms.namedItem("add-form");

        db.collection("posts").add({
            name: addForm.elements.userId.value,
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
    const signinGoogle = document.getElementById("button-sign-in-google");
    const signInRegister = document.getElementById("sign-in-reg");
    const passwordRegister = document.getElementById("password-reg");
    const show = document.getElementById("show");

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
                                <p class="margin-warning">La direccion del correo no es valida</p></div>`;
          } else {
            show.innerHTML = ` <div class=" alert-warning alert" role="alert">
                                <p class="margin-warning">${errorCode}</p></div>`;

          }
        });
    });

    buttonSignInFacebook.addEventListener("click", () => {
      const provider = new firebase.auth.FacebookAuthProvider();

      firebase.auth().signInWithRedirect(provider).then(function (result) {}).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorCode);
        alert(errorMessage);
        // The email of the user's account used.
        var email = error.email;
        alert(email);
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        alert(credential)
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
        console.log(errorCode);
        console.log(errorMessage);
        // The email of the user's account used.
        var email = error.email;
        console.log(email);
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log(credential)
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
          alert(errorCode);
          alert(errorMessage);
          // The email of the user's account used.
          var email = error.email;
          alert(email);
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          alert(credential)
          // ...
        });

    })
    const state = () => {
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          showUser(user)
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
        setTimeout(function () {
          const signOut = document.getElementById("signOut")
          signOut.addEventListener("click", () => {

            firebase.auth().signOut()
              .then(function () {
                window.location.hash = '#/'

              })
              .catch(function (error) {
                console.log(error);
              })
          })

          let emailUser = document.getElementById("emailUser");
          let nameUser = document.getElementById("name-user");
          let avatarUser = document.getElementById("avatar-user");
          let email = user.email;
          nameUser.innerHTML = `<p> ${user.displayName} </p>`
          emailUser.innerHTML = `${email}`
          avatarUser.innerHTML = `<img class="avatar" src="${user.photoURL}">`
        }, 500);
      }
    }
  },

  muro: () => {
    var db = firebase.firestore();
    const emailUser = document.getElementById("emailUser");
    const emailUserNew = emailUser.textContent

    db.collection("posts").where("email", "==", emailUserNew).get().then((querySnapshot) => {
      const container = document.getElementById("contenido");
      container.innerHTML = "";

      querySnapshot.forEach((doc) => {
        container.innerHTML += `user: ${doc.data().userId} | time: ${doc.data().email} | ${doc.data().mujer}</br>`;
      });
    });
  },


  posteos: () => {

    var db = firebase.firestore();

    //Agregar comentarios
    var posteo = document.getElementById("publicar");


    posteo.addEventListener("click", () => {
      // var nombre = document.getElementById('nombre').value;
      const user = firebase.auth().currentUser;
      // db.collection("usuarios").add({      
      const photoUser = user.photoURL;
      const nameUser = user.displayName;
      const emailUser = user.email;
      var comentario = document.getElementById('comentario').value;
      let likes = 0
      if (comentario == "") {
        alert("debes agregar un comentario")


      } else {
        firebase.firestore().collection('publicaciones').add({
          photo: photoUser,
          autor: nameUser,
          mensaje: comentario,
          email:emailUser,
          like: 0,
          // const comentario: comentario,

          // })
          // .then(function (docRef) {
          //     console.log("Document written with ID: ", docRef.id);
          //     document.getElementById('nombre').value ="";
          //     document.getElementById('comentario').value="";

          // })
          // .catch(function (error) {
          //     console.error("Error adding document: ", error);
          // });
        })

      }
    })





    //leer info
    var muro = document.getElementById('muro');


    db.collection("publicaciones").onSnapshot((querySnapshot) => {
      muro.innerHTML = '';
      querySnapshot.forEach((doc) => {

        const user = firebase.auth().currentUser;

        const mailUser = user.email;

        if (mailUser === doc.data().email) {
          muro.innerHTML += `
        <div class="container-pub">

        <div class="alinear">
          <img src="${doc.data().photo}" class="avatar avatar-img">
          <p class="avatar-autor">${doc.data().autor}</p>
          <button id= "${doc.id}"  class="tablasEditar avatar-editar" ><u>Edt</u></button>
          <button id= "${doc.id}"  class="tablas avatar-like" data-like=${doc.data().like} ></button>
          
          </div>
          
          <textarea class="textarea"id= "${doc.id}" name="textarea" rows="10" cols="50" disabled="true">${doc.data().mensaje}</textarea>
          <button id= "${doc.id}"  class="tablasEliminar avatar-eliminar" ><u>Eliminar</u></button> 
          
        </div>
        `
        } else {
          muro.innerHTML += `
          <div class="container-pub">

          <div class="alinear">
            <img src="${doc.data().photo}" class="avatar avatar-img">
            <p class="avatar-autor">${doc.data().autor}</p>
            
            <button id= "${doc.id}"  class="tablas avatar-like" data-like=${doc.data().like} ></button>
            
            </div>
            
            <textarea class="textarea"id= "${doc.id}" name="textarea" rows="10" cols="50" disabled="true">${doc.data().mensaje}</textarea>
            
            
          </div>
          `
        }

      });


      const tablas = document.getElementsByClassName("tablas");


      for (let i = 0; i < tablas.length; i++) {
        // let liker = parseInt(tablas[i].value)
        tablas[i].addEventListener("click", (e) => {

          let id = tablas[i].id;

          let likeit = parseInt(e.target.dataset.like)
          likeit++;
          console.log(likeit)

          var sumar = db.collection("publicaciones").doc(id);
          return sumar.update({
              like: likeit,
            }).then(function () {
              console.log("Document successfully updated!");
            })
            .catch(function (error) {
              // The document probably doesn't exist.
              console.error("Error updating document: ", error);
            });

        })


      }

      const tablasEliminar = document.getElementsByClassName('tablasEliminar')
      for (let i = 0; i < tablasEliminar.length; i++) {

        tablasEliminar[i].addEventListener('click', () => {

          if (confirm("¿Estas seguro de eliminar este mensaje?") == true) {

            let id = tablasEliminar[i].id

            db.collection("publicaciones").doc(id).delete().then(function () {
              
              console.log("Document successfully deleted!");
            }).catch(function (error) {
              console.error("Error removing document: ", error);
            });
          }

        })
      }

      const tablasEditar = document.getElementsByClassName('tablasEditar')
      for (let i = 0; i < tablasEditar.length; i++) {

        tablasEditar[i].addEventListener('click', () => {
          if (confirm("¿Estas seguro de editar este mensaje?") == true) {

            let id = tablasEditar[i].id
            
            var publiEditada = db.collection("publicaciones").doc(id);

           const habilitaTtx= document.getElementById("txt").disabled= false;
            const msjEditado = habilitaTtx.value;


            return publiEditada.update({
                mensaje: msjEditado
              })
              .then(function () {
                console.log("Document successfully updated!");
                document.getElementById("txt").disabled= true;
              })
              .catch(function (error) {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
              });

          }
        })
      }





    });



    // const emailUser = document.getElementById("emailUser");
    //   const emailUserNew = emailUser.textContent

    //   db.collection("posts").where("email", "==", emailUserNew).get().then((querySnapshot) => {
    //     const container = document.getElementById("contenido");
    //     container.innerHTML = "";

    //     querySnapshot.forEach((doc) => {
    //       container.innerHTML += `user: ${doc.data().userId} | time: ${doc.data().email} | ${doc.data().mujer}</br>`;
    //     });
    //   });
  }


}