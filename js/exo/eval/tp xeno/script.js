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


// 1) constante tabData
const tabData=[];

//2) Ajouter les const du script à tabData
tabData.push(usersHuman,usersPet,usersXeno);
// console.log(tabData);


console.log(" "); //3) Fonction afficherHummain() qui affiche name email age
console.log("3)")

// fonction pour tous les humains
function afficherHummain(t){

    for(let i=0; i<t.length; i++){    
        console.log(`nom :`,t[i].name);
        console.log(`email :`,t[i].email);
        console.log(`age :`,t[i].age);
        console.log(" ");
    }
}

// fonction pour un seul humain

// function afficherHummain(param){
//     console.log(`nom :`,t[0].name);
//     console.log(`email :`,t[0].email);
//     console.log(`age :`,t[0].age);
//     
// }
afficherHummain(usersHuman);


console.log(" "); //4) Fonction afficherAnimal()
console.log("4)")

// fonction pour tous
function afficherAnimal(t){

    for(let i=0; i<t.length; i++){    
        console.log(`nom :`,t[i].name);
        console.log(`espece :`,t[i].espece);
        console.log(`age :`,t[i].age);
        console.log(`propriétaire :`,t[i].propriétaire);
        console.log(" ");
    }
}

// fonction pour un seul

// function afficherHummain(param){
//     console.log(`nom :`,t[0].name);
//     console.log(`espece :`,t[0].espece);
//     console.log(`age :`,t[0].age);
//     console.log(`propriétaire :`,t[0].propriétaire);  
// }
afficherAnimal(usersPet);


console.log(" "); //5) Fonction afficherXeno()
console.log("5)")

// fonction pour tous
function afficherXeno(t){

    for(let i=0; i<t.length; i++){    
        console.log(`nom :`,t[i].name);
        console.log(`espece :`,t[i].espece);
        console.log(`age :`,t[i].age);
        console.log(`niveau de menace :`,t[i].menace);
        console.log(" ");
    }
}

// fonction pour un seul

// function afficherXeno(t){

//     console.log(`nom :`,t[0].name);
//     console.log(`espece :`,t[0].espece);
//     console.log(`age :`,t[0].age);
//     console.log(`niveau de menace :`,t[0].menace);
// }
// afficherXeno(usersXeno);







// 6) fonction profil()
// 7) Fonction qui parcour le tableau
// 8) 
function profil(t){
    let objet=0;
    for(let i=0; i<t.length; i++){

        
            console.log(t[i]);
        
    
        objet=t[i]
    }
}
profil(usersHuman);

console.log(usersHuman[0].hasOwnProperty("type"));
