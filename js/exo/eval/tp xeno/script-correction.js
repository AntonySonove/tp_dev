const usersHuman = [{
        type: "humain",
        name: "John Doe",
        email: "j.smith@gmail.com",
        age: 25
    },
    {
        type: "humain",
        name: "Jane Smith",
        email: "ja.doe@sfr.fr",
        age: 5
    },
    {
        type: "humain",
        name: "Le Vénérable",
        email: "levy@gmail.com",
        age: 500
    }
];

const usersPet = [{
        type: "animal de compagnie",
        espece: "chien",
        name: "Rox",
        age: 7,
        propriétaire: "John Doe"
    },
    {
        type: "animal de compagnie",
        espece: "renard",
        name: "Roukie",
        age: 300,
        propriétaire: "Le Vénérable"
    }
];

const usersXeno = [{
        type: "Xeno",
        espece: "Krogan",
        name: "Wrex",
        menace: "Rouge",
        age: 45
    },
    {
        type: "Xeno",
        espece: "Turien",
        name: "Garrus",
        menace: "Vert",
        age: 35
    },
    {
        type: "Xeno",
        espece: "Asari",
        name: "Liara",
        menace: "ULTRA Rouge",
        age: 25
    }
];

//1) Créer une constante tabData et lui assigner un tableau vide.
const tabData = [];


//2) Ajouter à tabData les const usersHuman, usersPet et usersXeno dans l'ordre de votre choix, grâce à une méthode de tableau.
tabData.push(usersHuman, usersPet, usersXeno);
console.log(tabData);


/*3) Créer la fonction afficherHummain() qui prendra un objet en paramètre.
Faire en sorte qu'elle affiche dans la console le profil d'un humain sous la forme :
----------------------------------------
nom : nom_de_l'objet
email : mail_de_l'objet
age : age_de_l'objet ans
----------------------------------------*/

function afficherHumain(object){
    let string = `
----------------------------------------
    nom : ${object.name}
    email : ${object.email}
    age : ${object.age} ans
----------------------------------------
    `;
    console.log(string);

    /*console.log("nom : "+object.name);
    console.log("email : "+object.email);
    console.log("age : "+object.age+" ans");*/
}
//afficherHumain(usersHuman[0]);

/*4) Créer la fonction afficherAnimal() qui prendra un objet en paramètre.
Faire en sorte qu'elle affiche dans la console le profil d'un animal sous la forme :
----------------------------------------
nom : nom_de_l'objet
espece : espece_de_l'objet
age : age_de_l'objet ans
propriétaire : propriétaire_de_l'objet
----------------------------------------*/
function afficherAnimal(object){
    let string = `
----------------------------------------
    nom : ${object.name}
    espece : ${object.espece}
    age : ${object.age} ans
    propriétaire : ${object.propriétaire}
----------------------------------------
    `;
    console.log(string);

    /*console.log("nom : "+object.name);
    console.log("espece : "+object.espece);
    console.log("age : "+object.age+" ans");
    console.log("propriétaire : "+object.propriétaire);*/
}
//afficherAnimal(usersPet[0]);

/*5) Créer la fonction afficherXeno() qui prendra un objet en paramètre.
Faire en sorte qu'elle affiche dans la console le profil d'un Xéno sous la forme :
----------------------------------------
nom : nom_de_l'objet
espece : espece_de_l'objet
age : age_de_l'objet ans
niveau de menace: menace_de_l'objet
----------------------------------------*/

function afficherXeno(object){
    let string = `
----------------------------------------
    nom : ${object.name}
    espece : ${object.espece}
    age : ${object.age} ans
    niveau de menace: ${object.menace}
----------------------------------------
    `;
    console.log(string);

    /*console.log("nom : "+object.name);
    console.log("espece : "+object.espece);
    console.log("age : "+object.age+" ans");
    console.log("niveau de menace : "+object.menace);*/
}
//afficherXeno(usersXeno[0]);


//6) Créer une fonction profil() qui prend un tableau d'objet en paramètre.

function profil(tabObject){
    //7) Faire en sorte que la fonction profil() parcourt chaque objet du tableau.
    /*for(let i = 0; i<tabObject.length; i++){
        /*8) Dans la fonction profil(), pour chaque objet, SI l'objet est de type "humain", appeler la fonction afficherHumain(). SINON SI l'objet est de type "animal de compagnie", appeler la fonction afficherAnimal(). SINON SI l'obet est de type "Xeno", appeler la fonction afficherXeno(). SINON afficher dans la console, le message d'erreur "Type de Profil non Existant".

        if(tabObject[i].type == "humain"){
            afficherHumain(tabObject[i]);
        } else if(tabObject[i].type == "animal de compagnie"){
            afficherAnimal(tabObject[i]);
        }else if(tabObject[i].type == "Xeno"){
            afficherXeno(tabObject[i]);
        }else {
            console.error("Type de Profil non Existant");
        }
    }*/

    /*tabObject.forEach((object)=>{
        if(object.type == "humain"){
            afficherHumain(object);
        } else if(object.type == "animal de compagnie"){
            afficherAnimal(object);
        }else if(object.type == "Xeno"){
            afficherXeno(object);
        }else {
            console.error("Type de Profil non Existant");
        }

    });*/

    for(let object of tabObject){
        if(object.type == "humain"){
            afficherHumain(object);
        } else if(object.type == "animal de compagnie"){
            afficherAnimal(object);
        }else if(object.type == "Xeno"){
            afficherXeno(object);
        }else {
            console.error("Type de Profil non Existant");
        }
    }
}

/*9) Appeler la fonction profil() sur chacun des tableaux usersHuman, usersPet, usersXeno*/
profil(usersHuman);
profil(usersPet);
profil(usersXeno);

/*10) Créer la fonction profilAll() que prend en paramètre un grand tableaux constitué de petit tableaux qui sont constitué d'objet (voir la structure de tabData)*/

function profilAll(bigTab){

    /*11) Faire en sorte que la fonction profilAll() appelle la fonction profil() sur chaque petit tableau.*/

    bigTab.map((tinyTab)=>{
        profil(tinyTab);
    })
}


/*12) Appeler la fonction profilAll() sur le tableau tabData.*/
profilAll(tabData);