// Exercice divers_1 :	écrire une fonction qui retourne **la position** du plus grand 
//élément d'un tableau.
// Exemple : positionBiggest([4,7,5,5,6]) retourne 1 car le plus grand est dans la case 
//numéro 1
console.log("écrire une fonction qui retourne la position du plus grand nombre :");

//je veux comparer chaque case entre elles : t[0]>t[1], t[1]>t[2], t[2]>t[3]
//si t[0]>t[1]
// t[3]>t[2] vrai, 

let t=[4,7,-5,-1,5,6];

function positionBiggest(tableau){
    let a=0
    for(let i=0; i<tableau.length; i++){
        if (tableau[i]>tableau[a]){
            a=i;
        } 
    }
    return a;
}
console.log(positionBiggest(t)); 

// Exercice divers_2 : écrire une fonction qui fait la somme de tous les éléments d'un 
//tableau.
console.log("écrire la somme de tous les éléments du tableau :");

//t[0]+t[1]+t[2]+t[3]...
//i=numéro de case

function somme(tableau){
    let a=0
    for(let i=0; i<tableau.length; i++){
        a+=tableau[i];
    }
    return a;
}
console.log(somme(t));


// Exercice divers_3 : écrire une fonction qui retourne la somme des valeurs positives d'un 
//tableau.
console.log("écrire une fonction qui retourne la somme des valeurs positives du tableau :");

function positif(tableau){
    let a = 0;
    for(let i=0; i<tableau.length; i++){
        if (tableau[i]>=0){
            a+=tableau[i]; 
        }
    }
    return a; 
}
console.log(positif(t));

// Exercice divers_4 : En utilisant les deux fonctions précédentes, écrire une fonction qui 
//retourne la somme des valeurs négatives d'un tableau.
console.log("écrire une fonction en utilisant les deux fonctions précédentes qui retourne la somme négative d'un tableau :");

function négatif(tableau){
    let a=0
    return somme(tableau) - positif(tableau);
   
    /*for(let i=0; i<tableau.length; i++){
        if (tableau[i]<0){
            a+=tableau[i];
        }      
    }
    return a; */
}
console.log(négatif(t));
