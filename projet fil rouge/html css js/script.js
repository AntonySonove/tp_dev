// Dropdown menu créer et gérer

    //Dropdown créer et gérer

        //créer

const dropdownMenuCreer= document.getElementById("dropdownMenuCreer");
const showMenuCreer= document.getElementById("showMenuCreer");

dropdownMenuCreer.onmouseenter=(function(){mouseEnterCreer()});
dropdownMenuCreer.onmouseleave=(function(){mouseLeaveCreer()});

function mouseEnterCreer(){
    showMenuCreer.classList.remove("menuCache");
}
function mouseLeaveCreer(){
    showMenuCreer.classList.add("menuCache")
    // showMenuCreer.classList.add("menuCache");
}
        //gérer

const dropdownMenuGerer= document.getElementById("dropdownMenuGerer");
const showMenuGerer= document.getElementById("showMenuGerer");

dropdownMenuGerer.onmouseenter=(function(){mouseEnterGerer()});
dropdownMenuGerer.onmouseleave=(function(){mouseLeaveGerer()});

function mouseEnterGerer(){
    showMenuGerer.classList.remove("menuCache");
}
function mouseLeaveGerer(){
    showMenuGerer.classList.add("menuCache")
    // showMenuGerer.classList.add("menuCache");
}

// simulation

// joueur
let joueur=[
    stat={
        nom:"Antony",
        pv:15,
        pm:10,
        atk:10,
        atkm:15,
        def:10,
        defm:10,
        vit:2,
    },
];
compJoueur=[
    attaquePhysique={
        cout:0,
        degats:joueur[0].atk,
    },
    attaqueMagique={
        cout:2,
        degats:joueur[0].atkm,
    }
];
joueur.push(compJoueur);
console.log(joueur);

// pnj
let pnj=[
    stat={
        nom:"Jury",
        pv:15,
        pm:5,
        atk:5,
        atkm:5,
        def:5,
        defm:5,
        vit:3,
    },
];
compPnj=[
    attaquePhysique={
        cout:0,
        degats:pnj[0].atk,
    },
    attaqueMagique={
        cout:2,
        degats:pnj[0].atkm,
    }
];
pnj.push(compPnj);
console.log(pnj);

//! attaque physique et magique
//* le joueur lance attaquePhysique sur le pnj
// pnj[0].pv-=joueur[1][0].degats-pnj[0].def;
// console.log(pnj[0].pv);

//* le pnj lance attaquePhysique sur le joueur 
//? /!\ la defense du joueur est plus haute que l'attaque du pnj, donc il faut faire une condition, sinon la différence s'ajoute aux pv du joueur, ce qu'on veut éviter
// if (pnj[1][0].degats<joueur[0].def){
// } else {
//     joueur[0].pv-=pnj[1][0].degats-joueur[0].def;
// }
// console.log(joueur[0].pv);

//* le joueur lance attaqueMagique sur le pnj
// pnj[0].pv-=joueur[1][1].degats-pnj[0].defm;
// console.log(pnj[0].pv);


//* ajout de conditions (vitesse et cout en pm) pour l'attaqueMagique;
// if (joueur[0].vit>pnj[0].vit){
//     if (joueur[0].pm>joueur[1][1].cout){
//         joueur[0].pm-=joueur[1][1].cout;
//         pnj[0].pv-=joueur[1][1].degats-pnj[0].defm;
//     }
// }else{

// }
// console.log(joueur);
// console.log(pnj);

//! création des fonctions
//* réalistation d'une attaque physique
function attaqueP(j1,j2){
    if (j1[0].pm>=j1[1][0].cout){ //? vérif cout en mp
        j1[0].pm-=j1[1][0].cout; //? déduction du coût en mp
        if (j1[1][0].degats>j2[0].defm){ //? vérif stats pour ne pas se retrouver avec des valeurs négatives
            j2[0].pv-=j1[1][0].degats-pnj[0].defm; //? déduction des dégâts sur les pv
        }
    }
}
// attaqueP(joueur,pnj);
// console.log(joueur);
// console.log(pnj);

// attaqueP(pnj,joueur);
// console.log(joueur);
// console.log(pnj);

//* réalistation d'une attaque magique
function attaqueM(j1,j2){
    if (j1[0].pm>=j1[1][1].cout){ //? vérif cout en mp
        j1[0].pm-=j1[1][1].cout; //? déduction du coût en mp
        if (j1[1][1].degats>j2[0].defm){ //? vérif stats pour ne pas se retrouver avec des valeurs négatives
        j2[0].pv-=j1[1][1].degats-pnj[0].defm; //? déduction des dégâts sur les pv
        }
    }
}
// attaqueM(joueur,pnj);
// console.log(joueur);
// console.log(pnj);

// attaqueM(pnj,joueur);
// console.log(joueur);
// console.log(pnj);

//* fonction qui contrôle les priorités grâce à la stat de vit et qui permet de un choix d'attaque
let choixJ1;
let choixJ2
function priorite(j1,choixJ1,j2,choixJ2){
    if (j1[0].vit>j2[0].vit){ //? vérif des vit
        choixJ1(j1,j2);
        if(j2[0].pv>0){
            choixJ2(j2,j1);
        }
    } else {
        choixJ2(j2,j1);
        if(j1[0].pv>0){
            choixJ1(j1,j2);
        }
    }
    console.log(joueur);
    console.log(pnj);
}
// priorite(joueur,attaqueM,pnj,attaqueM);
// console.log(joueur);
// console.log(pnj);

// priorite(pnj,attaqueM,joueur,attaqueM);
// console.log(joueur);
// console.log(pnj);


function choixAttaqueJ1(f){
    choixJ1=f;
    console.log(choixJ1);
}

function choixAttaqueJ2(f){
    choixJ2=f;
}
// choixAttaqueJ1(attaqueM);
// console.log(choixJ1);

// choixAttaqueJ2(attaqueP);
// console.log(choixJ2);