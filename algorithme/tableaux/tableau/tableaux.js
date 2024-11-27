// Création d'un tableau
let t = [1,4,7,8,5,4,7,1];
// Le premier 1 est dans la case numéro 0
// Le premier 4 est dans la case numéro 1
// ...
console.log(t);

// Pour accéder à une case individuelle du tableau, il me faut son numéro
// t[numéro]

// J'affecte 25 à la permière case du tableau :
t[0] = 25;

console.log(t);

// Je veux afficher dans la console le contenu de la quatrième case du tableau
console.log("La quatrième case contient", t[3]);

// Ajouter une nouvelle case à la fin du tableau
t.push(-77);
console.log(t);

// Retirer la dernière case du tableau
t.pop();
console.log(t);
// La fonction .pop retourne une valeur : celle qui était dans la case qui vient d'être supprimée.
console.log("J'ai retiré le", t.pop(), "du tableau.");
console.log(t);

// Taille (nombre de cases du tableau)
t.length
console.log("Le tableau contient", t.length, "cases.");
let size = t.length;



function displayMessage(age) {
    if(age < 18) {
        console.log("La personne est mineure.");
    } else {
        console.log("La personne est majeure.");
    }
}


let age1 = 25;
let age2 = 5;
let age3 = 27;
let age4 = 11;

console.log("Sans tableau");
displayMessage(age1);
displayMessage(age2);
displayMessage(age3);
displayMessage(age4);

/* J'aimerais faire ça, mais ça ne marche pas
for(let i = 1 ; i < 5 ; i++) {
    displayMessage(agei);
}
*/

console.log("Avec tableau");
let ages = [25, 5, 27, 11];
/*
displayMessage(ages[0]);
displayMessage(ages[1]);
displayMessage(ages[2]);
displayMessage(ages[3]);
*/

for(let i = 0 ; i < ages.length ; i++) {
    console.log("i contient", i, "et ages[i] contient", ages[i]);
    displayMessage(ages[i]);
}