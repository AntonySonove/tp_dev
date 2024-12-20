// récupérer des éléments et le stocker dans un tableau

// const leTexte= document.querySelector("textarea");
// const txt= [];
// const voyelles= ["a","e","i","o","u","y"];

// leTexte.addEventListener("keypress",function(unEvent){
    
//     const touche= unEvent.key;
    
//         if(voyelles.includes(touche)){
//             txt.push(touche);
//         }

//         console.log(txt.join("-"));

// });



// Désactiver un bouton selon la longueur d'un texte


// pas reussi




const monForm= document.querySelector("form");

monForm;addEventListener("submit",function(event){
    event.preventDefault();
    console.log("ok");
    monForm.reset();
})