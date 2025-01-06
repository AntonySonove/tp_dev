// Le but de cet exercice est de répondre à quelques questions concernant mes derniers relevés de Smarties®.

// Dans une boîte de Smarties®, il y a des bonbons de 8 couleurs différentes : rose, rouge, orange, jaune, vert, bleu, violet, marron
// Dans ma première boîte, j'ai eu 3, 6, 7, 3, 6, 2, 2 et 1 bonbons de chaque couleur, respectivement
// Comment pourrais-je stocker cette information là en js ?
console.log("Comment pourrais-je stocker cette information là en js ?");

// let boite=[3,6,7,3,6,2,2,1];
// let rose=boite[0];
// let rouge=boite[1];
// let orange=boite[2];
// let jaune=boite[3];
// let vert=boite[4];
// let bleu=boite[5];
// let violet=boite[6];
// let marron=boite[7];


// Comment pourrais-je stocker toutes les informations du fichier smarties.data ?
console.log(" ");
console.log("Comment pourrais-je stocker toutes les informations du fichier smarties.data ?")

let boites = [
    [3,6,7,3,6,2,2,1],
    [2,1,12,4,2,3,4,2],
    [3,4,8,7,4,0,1,3],
    [3,4,5,4,4,3,5,1],
    [2,4,6,3,3,2,5,4],
    [3,1,9,4,3,3,1,5],
    [2,2,6,5,5,2,1,6],
    [4,6,7,3,1,1,3,4],
    [6,4,4,5,1,0,4,5],
    [3,1,3,3,4,3,4,8],
    [4,3,6,4,2,3,6,2],
    [4,7,3,2,5,2,5,1],
    [1,0,13,6,2,0,5,2],
    [5,2,1,5,6,3,3,4],
    [2,4,3,4,7,3,2,4],
    [8,6,3,2,1,2,1,5],
    [6,4,3,4,4,0,3,5],
    [6,8,2,2,4,5,2,1],
    [3,6,2,5,5,2,3,3],
    [4,5,4,1,6,4,2,3],
    [2,6,2,3,4,2,6,4],
    [3,2,5,8,2,3,4,1],
    [3,2,3,3,6,5,3,4],
    [2,1,1,3,4,3,7,8],
    [2,3,2,5,2,3,6,6],
    [1,6,6,0,5,4,2,5],
    [2,2,6,2,3,4,4,6],
    [4,6,7,2,3,3,3,1],
    [3,5,0,9,1,6,3,2],
    [3,2,5,3,3,6,3,4],
    [4,3,4,0,6,5,4,3],
    [6,4,4,2,6,2,1,4],
    [6,2,2,2,5,5,4,3]
];
console.log(boites[0][1])

// Maintenant que j'ai ces données :
console.log(" ");
console.log("Maintenant que j'ai ces données :");
// Combien y a-t-il de Smarties® dans chaque boîte ?
console.log("Combien y a-t-il de Smarties® dans chaque boîte ?");

// console.log(boites.length);
 
for(let j=0;j<boites.length;j++){
    let somme=0;
    // let boiteNumeroJ = boites[j];
    for(let i=0;i<boites[j].length/*boiteNumeroJ*/;i++){
        somme+=boites[j][i];
        // somme+=boiteNumeroJ[i];
        
    }
    console.log(somme);
}

// Quel est le nombre minimum de Smarties® dans une boîte ?
console.log(" ");
console.log("Quel est le nombre minimum de Smarties® dans une boîte ?");



// Et le nombre maximum ?
console.log(" ");
console.log("Et le nombre maximum ?");



// Combien y a-t-il de Smarties® bleus en tout ?
console.log(" ");
console.log("Combien y a-t-il de Smarties® bleus en tout ?");

// console.log("smarties bleu de la boite 1 =",boites[0][5]);
// console.log("smarties bleu de la boite 2 =",boites[1][5]);

let sommeBleu=0;
for(let i=0;i<boites.length;i++){
    sommeBleu+=boites[i][5];
    
}
console.log(sommeBleu);

// Pour chaque couleur, compter le nombre de Smarties® de cette couleur.
console.log(" ");
console.log("Pour chaque couleur, compter le nombre de Smarties® de cette couleur.");

for(let j=0;j<boites.length;j++){
    let sommeCouleur=0;
    for(let i=0;i<boites[j].length;i++){
        sommeCouleur+=boites[j][i];
    }
    console.log(sommeCouleur);
}
// Quelle est la couleur la plus présente, en tout ?
console.log(" ");
console.log("Quelle est la couleur la plus présente, en tout ?");



// Quel est le nombre maximum de Smarties® d'une seule couleur, dans une boîte ?
console.log(" ");
console.log("Quel est le nombre maximum de Smarties® d'une seule couleur, dans une boîte ?");



// Dans combien de boîtes y' a-t-il 3 Smarties® bleues ?
console.log(" ");
console.log("Dans combien de boîtes y' a-t-il 3 Smarties® bleues ?");



// Dans combien de boîte une couleur est absente ?
console.log(" ");
console.log("Dans combien de boîte une couleur est absente ?");



// Dans combien de boîte les Smarties® oranges sont-ils les plus nombreux ?
console.log(" ");
console.log("Dans combien de boîte les Smarties® oranges sont-ils les plus nombreux ?");


