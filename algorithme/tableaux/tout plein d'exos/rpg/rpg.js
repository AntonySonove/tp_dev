// Le but de cet exercice est de simuler des combats entre des personnages
// Un personnage sera représenté par un nom, un nombre de points de vie, un nombre de points 
//de mana, une force

// 1) Comment faire pour stocker toutes ces informations dans une seule variable ?

// 2) Créer une variable firstPlayer et stocker dedans le personnage "Nico Minoru" qui a 
//50 points de vie, 100 points de mana, et 10 de force.
let firstPlayer = ["Nico Minoru",50,100,10];
// 3) Créer une variable secondPlayer et stocker dedans le personnage "Spiderman" qui a 
//120 points de vie, 0 point de mana, et 50 de force.
let secondPlayer = ["Spiderman",120,0,50];
// ?) Donner 25 points de vie supplémentaires au premier personnage.
firstPlayer[1]+=25;
// ?) Créer une fonction displayInfo qui reçoit un personnage en entrée et qui affiche dans 
//la console un message à propos de ce personnage (cf en dessous de la fonction).
function pluriel(valeur){
    if(valeur > 1){
        return "s";
    }
    return "";
}

function displayInfo(player) {

    console.log(player[0],"a",player[1],"point"+pluriel(player[1]),"de vie,",player[2],"point"+pluriel(player[2]),"de mana","et",player[3],"point"+pluriel(player[3]),"de force");

    /*
    let pdv="point";
    let pdm="point";
    let pdf="point";

    if (player[1]>1){
        pdv="points";
    }
    if (player[2]>1){
        pdm="points";
    }
    if (player[3]>1){
        pdf="points";
    }
    console.log(player[0],"a",player[1],pdv,"de vie,",player[2],pdm,"de mana","et",player[3],pdf,"de force");
*/
}

   // Par exemple, 
displayInfo(firstPlayer);
// devra afficher :
// Nico Minoru a 50 points de vie, 100 points de mana et 10 points de force.

// ?) Trouver l'erreur de français dans la fonction précédente (:innocent:) en la testant 
//avec le second personnage.
displayInfo(secondPlayer);
console.log("L'erreur est qu'il n'y a pas de s à points quand la valeur est à 0 ou 1");
// ?) Corriger la fonction pour faire disparaître cette erreur.
console.log("Corriger l'erreur de français");
// https://legendary-digital-network-assets.s3.amazonaws.com/wp-content/uploads/2021/11/12201506/clean_259.jpg
// ?) Le deuxième personnage a perdu 3 de vie. Décrémenter la variable correspondante.
secondPlayer[1]-=3;
// ?) Vérifier que
displayInfo(secondPlayer);
// affiche bien : "Spiderman a 117 points de vie, 0 point de mana, et 50 de force."

// ?) Écrire une fonction directHit qui reçoit deux personnages en entrée et qui fait perdre 
//des points de vie au second. Le nombre de points de vie perdus sera égal à la force du 
//premier personnage.
function directHit(player1,player2) {
	console.log(player1[0],"tape",player2[0]);
    
    if (player2[1]>=1){
        console.log("Il reste",player2[1]-player1[3],"points de vie à",player2[0]);
        if (player2[1]<=0) {
            (death(player2));
        }
        else {
            console.log("Il reste",player2[1],"point"+pluriel(player2[1]),"de vie à",player2[0]+".");
        }    
    }
    else {console.log("il reste",player2[1]-player1[3],"point de vie à",player2[0]);

    }
}

// ?) Utiliser la fonction précédente pour que le second personnage tape le premier personnage.
directHit(firstPlayer,secondPlayer);
// ?) Le second personnage boit une potion de soin ! Ajouter 3 points de vie à Spiderman.
function potion(player){
    console.log(player[0],"boit une potion et récupère 3 points de vies");
    console.log(player[0],"a",player[1]+=3,"points de vie");
}
potion(firstPlayer);
// ?) Le premier personnage va boire plusieurs potions.
let randomNumber = Math.floor(Math.random()*8)+2;
console.log("Nico Minoru s'apprête à boire",randomNumber,"potions de vie !");
// TODO
displayInfo(firstPlayer);

// ?) Écrire une fonction qui reçoit deux personnages A et B en entrée et qui fait lancer un 
//sort à A pour attaquer B
// Cette fonction doit :
// - vérifier que le personnage a au moins 10 points de mana ; si ce n'est pas le cas, la 
//fonction est terminée
// - faire perdre 10 points de mana à A
// - faire perdre 25 points de vie à B

let A=["A",100,100,25];
let B=["B",100,20,25];

function bouleDeFeu(player1,player2){
    if (player1[2]>10) {
        player1[2]-=10;
        player2[1]-=player1[3];
        console.log(player1[0],"lance boule de feu sur",
            player2[0],"pour",player1[3],"dégât"+pluriel(player1[3])+".",
        "Il reste",A[2],"point"+pluriel(player1[2]),"de mana à",player1[0]+".");
          
            if (player2[1]<=0) {
                death(player2);
            }
            else {
                console.log("Il reste",player2[1],"point"+pluriel(player2[1]),"de vie à",player2[0]+".");
            }    
    }
    else {
        console.log(player1[0],"n'a pas assez de mana.");
    }
}
function death(player){
    console.log((player[0]),"est mort.")
}

bouleDeFeu(A,B);
bouleDeFeu(B,A);
bouleDeFeu(A,B);
bouleDeFeu(B,A);
bouleDeFeu(A,B);
bouleDeFeu(B,A);
bouleDeFeu(A,B);