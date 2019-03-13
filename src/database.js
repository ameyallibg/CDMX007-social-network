var db = firebase.firestore();
buttonSignIn.addEventListener('click', (event)=>{
    const addForm = document.forms.namedItem("add-form");
	db.collection("posts").add({
    name: addForm.elements.name.value,
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

});