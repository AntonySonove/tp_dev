// // Manipuler le DOM

//     //Aller chercher des éléments dans le document

//         //Avec une balise

// const baliseH2= document.querySelectorAll("h2"); // J'ai récupéré les éléments <h2>
// console.log(baliseH2);

// const li2= document.querySelectorAll("li")[2]; // J'ai récupéré uniquement le troisième <li> en utilisant le [2] (même fonctionnement que les tableaux)
// console.log(li2);

// const li3= document.querySelector("li:nth-child(2)"); // Autre manière de récupérer un seul élément en utilisant nth-child (ici le deuxième enfant)
// console.log(li3);


//          //Avec une classe

// const classRow= document.querySelectorAll(".row"); //J'ai récupéré tous les éléments qui ont la classe .row (en utilisant un "." avant row)
// console.log(classRow);

// const classRow2= document.querySelectorAll(".row")[1]; //J'ai récupéré uniquement la deuxième classe .row en utilisant le [1] (même fonctionnement que les tableaux)
// console.log(classRow2);

//         //Avec une id

// const idTitre2= document.querySelectorAll("#titre2") // J'ai récupéré l'élément qui à l'id titre2 (en utilisant le "#" avant titre2)
// console.log(idTitre2);

// const idTitre2AutreMethode= document.querySelector("#titre2"); //querySelector sans le All suffit car je n'ai qu'un seul titre2
// console.log(idTitre2AutreMethode); 


// console.log(" ");
// //liste déroulante en hover

const triggerList= document.getElementById("titre1");
console.log(triggerList);
const showList= document.getElementById("showList");

triggerList.addEventListener("click",function(){
        showList.classList.toggle("listeCachee");
        console.log("ca marche");
        
});
