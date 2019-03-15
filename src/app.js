firebase.initializeApp({
    apiKey: "AIzaSyDYw8A17rtchUb_1PmxRdpYVWC1SgNvsm4",
    authDomain: 'devtinder-faf61.firebaseapp.com',
    projectId: 'devtinder-faf61'
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

//Agregar comentarios
function publicar() {
    var nombre = document.getElementById('nombre').value;
    var comentario = document.getElementById('comentario').value;
   

    db.collection("usuarios").add({
            nombre: nombre,
            comentario: comentario,
            
        })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
            document.getElementById('nombre').value ="";
            document.getElementById('comentario').value="";
            
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
}

//leer info
var muro = document.getElementById('muro');
db.collection("usuarios").onSnapshot((querySnapshot) => {
   muro.innerHTML=''; 
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().nombre}`);
        muro.innerHTML += `
        <tr>
        <td>${doc.data().nombre}</td>
        <td>${doc.data().comentario}</td>
      </tr>
      `
    });
});