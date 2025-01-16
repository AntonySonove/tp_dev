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
//! dropdown des attaques
const boutonAttaqueJ1= document.getElementById("boutonAttaqueJ1");
const showMenuAttaqueJ1= document.getElementById("showMenuAttaqueJ1");

boutonAttaqueJ1.onmouseenter=(function(){mouseEnterAttaqueJ1()});
boutonAttaqueJ1.onmouseleave=(function(){mouseLeaveAttaqueJ1()});

function mouseEnterAttaqueJ1(){
    showMenuAttaqueJ1.classList.remove("menuCache");
}
function mouseLeaveAttaqueJ1(){
    showMenuAttaqueJ1.classList.add("menuCache")
}
const boutonAttaqueJ2= document.getElementById("boutonAttaqueJ2");
const showMenuAttaqueJ2= document.getElementById("showMenuAttaqueJ2");

boutonAttaqueJ2.onmouseenter=(function(){mouseEnterAttaqueJ2()});
boutonAttaqueJ2.onmouseleave=(function(){mouseLeaveAttaqueJ2()});

function mouseEnterAttaqueJ2(){
    showMenuAttaqueJ2.classList.remove("menuCache");
}
function mouseLeaveAttaqueJ2(){
    showMenuAttaqueJ2.classList.add("menuCache")
}

// simulation

// joueur
let joueur=[
    stat={
        nom:"Antony",
        pv:50,
        pm:10,
        atk:10,
        atkm:10,
        def:5,
        defm:5,
        vit:2,
        pvMax:50,
        pmMax:10,
    },
];
compJoueur=[
    attaquePhysique={
        cout:0,
        degats:0,
    },
    attaqueMagique={
        cout:0,
        degats:0,
    }
];
joueur.push(compJoueur);
console.log(joueur);

// pnj
let pnj=[
    stat={
        nom:"Jury",
        pv:50,
        pm:10,
        atk:10,
        atkm:10,
        def:5,
        defm:5,
        vit:1,
        pvMax:50,
        pmMax:10,
    },
];
compPnj=[
    attaquePhysique={
        cout:0,
        degats:0,
    },
    attaqueMagique={
        cout:0,
        degats:0,
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

//! création des fonctions de simulation de combat
//* réalistation d'une attaque physique
function attaqueP(j1,j2){
    if (j1[0].pm>=j1[1][0].cout){ //? vérif cout en mp
        j1[0].pm-=j1[1][0].cout; //? déduction du coût en mp
        if (j1[1][0].degats+j1[0].atk>j2[0].def){ //? vérif stats pour ne pas se retrouver avec des valeurs négatives
            j2[0].pv-=j1[1][0].degats+j1[0].atk-pnj[0].def; //? déduction des dégâts sur les pv
        }
    } else { console.log(j1[0].nom,"n'a pas assez de pm.");

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
        if (j1[1][1].degats+j1[0].atkm>j2[0].defm){ //? vérif stats pour ne pas se retrouver avec des valeurs négatives
            j2[0].pv-=j1[1][1].degats+j1[0].atkm-pnj[0].defm; //? déduction des dégâts sur les pv
        }
    } else { console.log(j1[0].nom,"n'a pas assez de pm.");

    }
}
// attaqueM(joueur,pnj);
// console.log(joueur);
// console.log(pnj);

// attaqueM(pnj,joueur);
// console.log(joueur);
// console.log(pnj);

//* fonctions pour le choix de l'attaque (permet de stocker le fonction(attaque) dans une variable)
let choixJ1;
let choixJ2;

function choixAttaqueJ1(f){
    choixJ1=f;
    // console.log(choixJ1);
}
function choixAttaqueJ2(f){
    choixJ2=f;
    // console.log(choixJ2);
}
// choixAttaqueJ1(attaqueM);
// console.log(choixJ1);

// choixAttaqueJ2(attaqueP);
// console.log(choixJ2);

//* fonction qui contrôle les pv et les priorités grâce à la stat de vit
const currentNameJ1=document.getElementById("currentNameJ1");
const currentNameJ2=document.getElementById("currentNameJ2");
currentNameJ1.innerText=joueur[0].nom
currentNameJ2.innerText=pnj[0].nom

const currentPvJ1=document.getElementById("currentPvJ1");
const currentPmJ1=document.getElementById("currentPmJ1");
const currentPvJ2=document.getElementById("currentPvJ2");
const currentPmJ2=document.getElementById("currentPmJ2");
currentPvJ1.style.color="red";
currentPmJ1.style.color="blue";
currentPvJ2.style.color="red";
currentPmJ2.style.color="blue";
currentPvJ1.innerText=`${joueur[0].pv}/${joueur[0].pvMax}`;
currentPmJ1.innerText=`${joueur[0].pm}/${joueur[0].pmMax}`;
currentPvJ2.innerText=`${pnj[0].pv}/${pnj[0].pvMax}`;
currentPmJ2.innerText=`${pnj[0].pm}/${pnj[0].pmMax}`;

function priorite(j1,choixJ1,j2,choixJ2){
    if (j1[0].pv>0 && j2[0].pv>0){ //? vérif des pv 
        if (j1[0].vit>j2[0].vit){ //? vérif des vit (dans ce if j1 agira en premier)
            choixJ1(j1,j2); //? attaque de j1
            if(j2[0].pv<=0){ //? vérif si j2 est mort
                j2[0].pv=0;
            console.log(j1[0].nom,"a vaincu",j2[0].nom,"!");
            recapBattle.innerText+=`${j1[0].nom} a vaincu ${j2[0].nom}!\n`;
            } 
            else {
                choixJ2(j2,j1); //? attaque de j2
                if(j1[0].pv<=0){ //? vérif si j1 est mort
                    j1[0].pv=0;
                    console.log(j2[0].nom,"a vaincu",j1[0].nom,"!");
                    recapBattle.innerText+=`${j2[0].nom} a vaincu ${j1[0].nom}!\n`;
                }
            }    
        } 
        else { //? dans le cas ou j2 est plus rapide que j1
            choixJ2(j2,j1); //? attaque de j2
            if(j1[0].pv<=0){ //? vérif si j1 est mort
                j1[0].pv=0;
                console.log(j2[0].nom,"a vaincu",j1[0].nom,"!");
                recapBattle.innerText+=`${j2[0].nom} a vaincu ${j1[0].nom}!\n`;
            } 
            else {
                choixJ1(j1,j2); //? attaque de j1
                if(j2[0].pv<=0){ //? vérif si j2 est mort
                    j2[0].pv=0;
                console.log(j1[0].nom,"a vaincu",j2[0].nom,"!");
                recapBattle.innerText+=`${j1[0].nom} a vaincu ${j2[0].nom}!\n`;
                }
            }
        }    
        console.log(j1[0].nom,":",j1[0].pv,"pv",j1[0].pm,"pm");
        console.log(j2[0].nom,":",j2[0].pv,"pv",j2[0].pm,"pm");
        currentPvJ1.innerText=`${j1[0].pv}/${j1[0].pvMax}`
        currentPmJ1.innerText=`${j1[0].pm}/${j1[0].pmMax}`
        currentPvJ2.innerText=`${j2[0].pv}/${j2[0].pvMax}`
        currentPmJ2.innerText=`${j2[0].pm}/${j2[0].pmMax}`
        // boutonBattle.disabled=true;
        // boutonJ2.disabled=true;
        readyJ1=0;
        readyJ2=0;
        disabledBattle();
    } 
    else {
        if (j1[0].pv<=0){
            console.log(j1[0].nom,"n'a plus de pv.");
            recapBattle.innerText+=`${j1[0].nom} n'a plus de pv.\n`
        } 
        else{ 
            console.log(j2[0].nom,"n'a plus de pv.");
            recapBattle.innerText+=`${j2[0].nom} n'a plus de pv.\n`
        }
    }
}  
// priorite(joueur,attaqueM,pnj,attaqueM);
// console.log(joueur);
// console.log(pnj);

// priorite(pnj,attaqueM,joueur,attaqueM);
// console.log(joueur);
// console.log(pnj);

//! config boutons battle
const boutonBattle=document.getElementById("boutonBattle");
let readyJ1=0;
let readyJ2=0; //? variables qui permettront de vérouiller/dévérouiller le bouton Battle si les deux joueurs n'on pas sélectionné une attaque (0=vérouillé, 1=dévérouillé)

function readyCheckJ1(){ //? fonction qui permet de valider qu'un choix à été fait par J1
    readyJ1=1;
    // console.log(readyJ1);
}
function readyCheckJ2(){ //? fonction qui permet de valider qu'un choix à été fait par J2
    readyJ2=1;
    // console.log(readyJ2);
}
function disabledBattle(){ //? fonction qui controle les valeurs 0 et 1 pour vérouiller/dévérouiller le bouton Battle
    if(readyJ1==0 || readyJ2==0){
        boutonBattle.disabled=true;
    }
    else if(readyJ1==1 && readyJ2==1){
        boutonBattle.disabled=false;
    }  
}
disabledBattle();

//! création des fonctions pour les différentes attaques
const selectCoupEpee=document.getElementsByClassName("coupEpee");
const selectBouleDeFeu=document.getElementsByClassName("bouleDeFeu");

function coupEpee(j1,j2){
    j1[1][0].degats+=2;
    console.log(j1[0].nom,"utilise Coup d'épée!")
    recapBattle.innerText+=`${j1[0].nom} utilise Coup d'épée!\n`;
    // console.log(j1[1][0].degats);
    attaqueP(j1,j2);
    j1[1][0].degats=0;
    // console.log(j1[1][0].degats);
}
function bouleDeFeu(j1,j2){
    j1[1][1].cout+=2;
    j1[1][1].degats+=4;
    console.log(j1[0].nom,"utilise Boule de feu!")
    recapBattle.innerText+=`${j1[0].nom} utilise Boule de feu!\n`;
    // console.log(j1[1][1].degats);
    // console.log(j1[1][1].cout);
    attaqueM(j1,j2);
    j1[1][1].degats=0;
    j1[1][1].cout=0;
    // console.log(j1[1][1].degats);
    // console.log(j1[1][1].cout);
}

//! infos qui apparaitront dans le html
const infoJ1=document.getElementById("infoJ1");
const infoJ2=document.getElementById("infoJ2");

const recapBattle=document.createElement("div");
const recapBattleP =document.getElementById("recapBattleP");
const recapBattleB =document.getElementById("recapBattleB");
// const lancerPartie=document.getElementById("lancerPartie");
// const infoJoueur=document.getElementById("infoJoueur");
recapBattle.classList.add("divJaune");
recapBattle.style.minWidth="300px"
recapBattle.style.fontSize="20px"
recapBattleP.insertBefore(recapBattle, recapBattleB);
// console.log(recapBattle);

//! A tester
// const nomAttaqueJ1=document.getElementById("nomAttaqueJ1");
// const nomAttaqueJ2=document.getElementById("nomAttaqueJ2");

// function nomBouleDeFeu(){
//     nomAttaqueJ1.innerText=`Boule de feu`;
// }

// function nomAttaque(){
//     attaqueJ1.innerText=
// }