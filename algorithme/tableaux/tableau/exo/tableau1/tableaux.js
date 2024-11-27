// 1) Créer un tableau tab1 de 6 cases, qui contient les nombres 144, 202, 216, 216, 222 
//et 64.
console.log("exercice 1")
let tab1=[144,202,216,216,222,64];
// 2) Ajouter le nombre 0 à la fin du tableau tab1.
console.log("exercice 2")
tab1.push(0);
// 3) Afficher *un par un* tous les éléments du tableau tab1.
console.log("exercice 3")
for(let i=0;i<tab1.length;i++){
    console.log(tab1[i]);
}

// 4) Retirer le dernier élément du tableau tab1.
console.log("exercice 4")
tab1.pop();
// 5) Créer un tableau tab2 qui contient les nombres 238, 222, 228, 216, 200.
console.log("exercice 5")
let tab2=[238,222,228,216,200];
// 6) Ajouter le nombre 58 à la fin de tab2.
console.log("exercice 6")
tab2.push(58);
// 7) Ajouter *un par un* tous les éléments du tableau tab2 à la fin du tableau tab1.
console.log("exercice 7")
for(let i=0;i<tab2.length;i++){
    tab1.push(tab2[i]);
}

// 8) Afficher *un par un* tous les éléments du tableau tab1.
console.log("exercice 8")
for(let i=0;i<tab1.length;i++){
    console.log(tab1[i]);
}
// 9) Retirer et stocker dans la variable maVariable le dernier élément du tableau tab1.
console.log("exercice 9")
let maVariable=tab1.pop();
console.log("maVariable est",maVariable);
// 10) Afficher la taille du tableau tab1.
console.log("exercice 10")
console.log("la taille de tab1 est",tab1.length);
// 11) Ajouter le nombre 66 à la fin du tableau tab1.
console.log("exercice 11")
tab1.push(66);
// 12) Diviser par 2 toutes les variables contenues dans le tableau tab1.
console.log("exercice 12")
for(let i=0;i<tab1.length;i++){
    tab1[i]/=2;
    
}
// 13) Pour vérifier si vous êtes correctement arrivé(e) jusqu'ici, essayez les deux lignes 
//de code suivantes :
console.log("exercice 13")
console.log(tab1.reduce((acc,cur)=> acc+String.fromCharCode(cur),""));
console.log(String.fromCharCode(maVariable)+String.fromCharCode(maVariable-17));
// (On ne cherchera pas à comprendre ça)

