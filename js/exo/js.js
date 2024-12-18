// exo 1
console.log("exo 1");

let monPrenom = "antony";
let monAge = 33;
let monPrenomMonAge = "bonjour "+monPrenom+" tu as "+monAge+" ans aujourd'hui, c'est la fiesta";
console.log(monPrenomMonAge);


console.log(" "); // exo 2
console.log("exo 2");

let exo2 = "j'aime beaucoup manger";
let lastLetter= exo2.length;

console.log(lastLetter); // affiche le numéro de case de la dernière lettre (22)
console.log(exo2[exo2.length-1]); // affiche la lettre de la dernière case (case 21 car le tableau démarre de 0)


console.log(" "); // exo 3
console.log("exo 3");

let nom = "sonove";
let prenom = "antony";
let initiales = nom[0] + prenom[0];
let phrase = [nom,prenom];
phrase.push(initiales);
console.log(phrase);


console.log(" "); // exo 4
console.log("exo 4");

let noteA;
let noteB;

function moyenne (noteA,noteB){
    return (noteA+noteB)/2;
}
console.log(moyenne(10,20));


console.log(" "); // exo 5
console.log("exo 5");

let note1 = 10;
let note2 = 10;
let note3 = 10;
let noteBac=[note1,note2,note3];

function appreciation(t){
    let moyenne;
    let somme=0;

    for(let i=0; i<t.length; i++){
        somme+=t[i];
    }
    moyenne=somme/t.length;

    // moyenne=(noteBac[0]+noteBac[1]+noteBac[2])/t.length;

    if (moyenne>=15){
        return console.log("Très Bien");
    }
    if (moyenne>=10){
        return console.log("Assez Bien");
    }
    else {
        return console.log("Refus");
    }
}
appreciation(noteBac);


console.log(" "); // exo 6
console.log("exo 6");

let voiture={
    "nbChevaux": 500,
    "vitesseMax": 450,
    "faiblesse":["accéleration","adhérence"],
    "pilotes": {
        "pilote": "antony",
        "copilote": "pauline"
    }
};
let afficher="vitesseMax";

console.log(voiture.vitesseMax);
console.log(voiture["vitesseMax"]);
console.log(voiture[afficher]);
console.log(voiture.faiblesse[1]);
// affiche la propriété de l'objet demandé.

voiture.marque= "Kia";
voiture.couleur= "rouge";
console.log(voiture);

delete voiture.marque;
console.log(voiture);

console.log(voiture.hasOwnProperty("vitesseMax"));
// retourne "true" si l'objet contient la propriété demandée.

console.log(voiture.pilotes);


console.log(" "); // exo 7
console.log("exo 7");

let tableau= {
    "peinture": "aquarelle",
    "pinceau": "petit",
    "cadre": "bois"
};
let livre={
    "genre": "fantastique",
    "couverture": "cuir",
    "pages": 100
};
let cd={
    "genre": "metal",
    "artiste": "metalica",
    "durée": 50
};
tableau.artiste="picasso";
console.log(tableau.artiste);
delete livre.pages;
console.log(livre);
console.log(cd.hasOwnProperty("artiste"));


console.log(" "); // exo 8
console.log("exo 8");

let dessin= [];
let i= 0;
while(i<10){
    i++;
    dessin.push("#");
    console.log(dessin);
}


console.log(" "); // exo 9
console.log("exo 9");

let dessin2= [];
for(let i=10; i>0; i-=2){
    dessin2.push("#");
    console.log(dessin2);
}


console.log(" "); // exo 10
console.log("exo 10");

let notes=[];
notes.push(1,2,3,4,5);

function moyennes(t){

    let somme=0;
    
    for(let i=0; i<t.length; i++){
        somme+=t[i];
    }
    
return somme/t.length;
}
console.log(moyennes(notes));


console.log(" "); // exo 11
console.log("exo 11");

// let lePrenom="antony";
// let leNom="sonove"
// let leAge=33;

const identité={
    prenom:"antony",
    nom:"sonove",
    age:33
};
console.log(`je m'appelle ${identité.prenom} ${identité.nom}, j'ai ${identité.age} ans.`);

identité.age=34;
console.log(`je m'appelle ${identité.prenom} ${identité.nom}, j'ai ${identité.age} ans.`);


console.log(" "); // exo 12
console.log("exo 12");

function bonjour(){
    console.log("bonjour");
}
bonjour();

let salut= function(){
    console.log("salut salut");
}
salut();

let bye= ()=> console.log("au revoir");
bye();