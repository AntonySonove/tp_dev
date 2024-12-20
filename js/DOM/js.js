// DOM


// Récupérer des éléments

// const titreEx1 = document.body.getElementsByTagName("h1");
// console.log(titreEx1);

// const paragraphe = document.getElementsByClassName("paragraphe");
// console.log(paragraphe);

// const texte= document.getElementById("important");
// console.log(texte);


console.log(" ");// Deplacer des éléments

// const appendChild= document.getElementById("p1");
// document.body.appendChild("appendChild");

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



// const titre = document.getElementById("titre");
// const txt = document.body.getElementsByTagName("p");
// const lien = document.body.getElementsByTagName("a")[0];

// const texteTab = Array.from(txt);
// texteTab.map(txt => txt.innerText = "LOL HACKED");


console.log(" ");// console.log(texteTab);

// console.log(`hauteur avec bordure`,titre.offsetHeight,`| largeur avec bordure`,titre.offsetWidth,`| hauteur sans bordure`,titre.clientHeight,`| largeur sans bordure`,titre.clientWidth);

// console.log(`largeur avec bordure`,titre.offsetWidth);
// console.log(`hauteur sans bordure`,titre.clientHeight);
// console.log(`largeur sans bordure`,titre.clientWidth);


console.log(" ");//changer la couleur d'un élément

//titre.style.color= "red";


// console.log(" "); //querySelector et addEventListener

// const titre= document.querySelector("h1");
// const lien= document.querySelectorAll("a");

// lien[0].addEventListener("click",function(){
//     titre.classList.add("maCouleur");
// });

// lien[1].addEventListener("click",function(){
//     titre.classList.remove("maCouleur");
// });

// lien[2].addEventListener("click",function(){
//     titre.classList.toggle("maCouleur");
// });


console.log(" ");

const titre1= document.getElementById("t1"); //NE PAS METTRE DE "S" A ELEMENT!!!
const titre2= document.getElementById("t2"); //NE PAS METTRE DE "S" A ELEMENT!!!
const titre3= document.getElementById("t3"); //NE PAS METTRE DE "S" A ELEMENT!!!

// function scroll(){
//     window.scrollTo(0, 5000);
// }


// console.log(titre3);

titre3.addEventListener("click",function(){
    // console.log("coucou");
    window.scrollTo({top:titre3.offsetTop}); //renvoi l'ecran au debut du titre3
});

// const link= document.querySelector("a");

// link.addEventListener("click", function(){
//     console.log("bonjour");
// })



console.log(" "); // addEventListener

// const link= document.querySelector("a");

// function monClick(){
//     console.log("bonjour");
//     link.removeEventListener(monClick,monClick);
// }
// link.addEventListener("click",monClick);
    
// addEventListener("keypress",function(event){
//     console.log(event);
// });


// function myFunction() {
//     console.log("bonjour");
//     let person = prompt();
// }

// link.addEventListener("click")

console.log(" ");

// const link= document.querySelector("a");

// link.addEventListener("click",function(event){
//     let person= prompt();

//     if(person != null){
//         document.getElementById("demo").innerText= person;
//         console.log(person); //ca marche!
//     }
// });

// // Ecrire dans le html : 
// <p id="demo"></p>
