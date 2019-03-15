
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

    // const printData = (querySnapshot) => {
    //     const container = document.getElementById("contenido");
    //     container.innerHTML = "";
      
    //     querySnapshot.forEach((doc) => {
    //         container.innerHTML += `user: ${doc.data().userId} | time: ${doc.data().email} | ${doc.data().mujer}</br>`;
    //       });
    //   };
       

    const emailUser = document.getElementById("emailUser");
    const emailUserNew = emailUser.textContent
    
    // db.collection("posts").where("email", "==", emailUser.textContent).get().then(printData());

    db.collection("posts").where("capital", "==", emailUserNew)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
      
