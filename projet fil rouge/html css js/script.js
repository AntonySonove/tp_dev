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
        pv:9999,
        pm:10,
        atk:10,
        atkm:10,
        def:5,
        defm:5,
        vit:2,
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
        pv:9999,
        pm:10,
        atk:10,
        atkm:10,
        def:5,
        defm:5,
        vit:3,
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

//! création des fonctions
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

//* fonction qui contrôle les pv et les priorités grâce à la stat de vit et qui permet de un choix d'attaque
let choixJ1;
let choixJ2;
function priorite(j1,choixJ1,j2,choixJ2){
    if (j1[0].pv>0 && j2[0].pv>0){ //? vérif des pv 
        if (j1[0].vit>j2[0].vit){ //? vérif des vit (dans ce if j1 agira en premier)
            choixJ1(j1,j2); //? attaque de j1
            if(j2[0].pv<=0){ //? vérif si j2 est mort
                j2[0].pv=0;
            console.log(j1[0].nom,"a vaincu",j2[0].nom,"!");
            } 
            else {
                choixJ2(j2,j1); //? attaque de j2
                if(j1[0].pv<=0){ //? vérif si j1 est mort
                    j1[0].pv=0;
                    console.log(j2[0].nom,"a vaincu",j1[0].nom,"!");
                }
            }    
        } 
        else { //? dans le cas ou j2 est plus rapide que j1
            choixJ2(j2,j1); //? attaque de j2
            if(j1[0].pv<=0){ //? vérif si j1 est mort
                j1[0].pv=0;
                console.log(j2[0].nom,"a vaincu",j1[0].nom,"!");
            } 
            else {
                choixJ1(j1,j2); //? attaque de j1
                if(j2[0].pv<=0){ //? vérif si j2 est mort
                    j2[0].pv=0;
                console.log(j1[0].nom,"a vaincu",j2[0].nom,"!");
                }
            }
        }    
        console.log(j1[0].nom,":",j1[0].pv,"pv",j1[0].pm,"pm");
        console.log(j2[0].nom,":",j2[0].pv,"pv",j2[0].pm,"pm");
        boutonBattle.disabled=true;
        boutonJ2.disabled=true;
    } 
    else {
        if (j1[0].pv<=0){
        console.log(j1[0].nom,"n'a plus de pv.");
        } 
        else{ 
            console.log(j2[0].nom,"n'a plus de pv.");
        }
    }
}  
// priorite(joueur,attaqueM,pnj,attaqueM);
// console.log(joueur);
// console.log(pnj);

// priorite(pnj,attaqueM,joueur,attaqueM);
// console.log(joueur);
// console.log(pnj);

//* fonctions pour le choix de l'attaque
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

function coupEpee(j1,j2){
    j1[1][0].degats+=5;
    console.log(j1[0].nom,"utilise Coup d'épée!")
    // console.log(j1[1][0].degats);
    attaqueP(j1,j2);
    j1[1][0].degats=0;
    // console.log(j1[1][0].degats);
}
function bouleDeFeu(j1,j2){
    j1[1][1].cout+=2;
    j1[1][1].degats+=10;
    console.log(j1[0].nom,"utilise Boule de feu!")
    // console.log(j1[1][1].degats);
    // console.log(j1[1][1].cout);
    attaqueM(j1,j2);
    j1[1][1].degats=0;
    j1[1][1].cout=0;
    // console.log(j1[1][1].degats);
    // console.log(j1[1][1].cout);
}

//! config boutons battle
const boutonBattle=document.getElementById("boutonBattle");
const selectJ1=document.getElementById("selectJ1");
const selectJ2=document.getElementById("selectJ2");

boutonBattle.disabled=true

function disabledBattle(){
    if(selectJ1.value=="Attaque" || selectJ2.value=="Attaque"){
        boutonBattle.disabled=true;
    }
    else if(selectJ1.value!="Attaque" && selectJ2.value!="Attaque"){
        boutonBattle.disabled=false;
    }  
}
function selectAttaque(){
    choixJ1=selectJ1.value;
    choixJ2=selectJ2.value;
    console.log(choixJ1);
    console.log(choixJ2);
}
// selectAttaque();