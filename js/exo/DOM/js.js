// DOM


// Récupérer des éléments
// const titreEx1 = document.body.getElementsByTagName("h1");

// console.log(titreEx1);

// const paragraph = document.getElementsByClassName("paragraph");
// console.log(paragraph);

// const texte= document.getElementById("important");
// console.log(texte);


// Deplacer des éléments
// document.body.appendChild(appendChild);
// document.body.replaceChild(removeChild);


// Ajouter du texte

// function addName(nom) {

//     const newName = document.createElement("p");
//     newName.innerText = nom;
//     document.body.appendChild(newName);
//   }
//   addName("Athos");
//   addName("Porthos");
//   addName("Aramis");
//   addName("D'Artagnan");




// const titre = document.getElementById("titre");
// const txt = document.body.getElementsByTagName("p");

// const lien = document.body.getElementsByTagName("a")[0]; //get pur attribuer

// lien.setAttribute("href", "https://super.com"); //set pour écrire

// console.log(lien.getAttribute("href"));
// console.log(titre.getAttribute("id"));



const titre = document.getElementById("titre");
const txt = document.body.getElementsByTagName("p");
const lien = document.body.getElementsByTagName("a");

const texteTab = Array.from(txt);
texteTab.map(txt => txt.innerText = "LOL HACKED");


// console.log(texteTab);

console.log(`hauteur avec bordure`,titre.offsetHeight);
console.log(`largeur avec bordure`,titre.offsetWidth);
console.log(`hauteur sans bordure`,titre.clientHeight)
console.log(`largeur sans bordure`,titre.clientWidth);