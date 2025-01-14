// //! Le nom de la classe commence tjrs par majuscule
// class UserProfile {
//     //! Pas besoin de déclarer function devant le constructor et méthodes
//     constructor(paramNameUser, paramMailUser, paramPhoneUser) {
//     // Attribut en IN MODE indispensable pour créer des new UserProfile
//     this.nameUser = paramNameUser;
//     this.mailUser = paramMailUser;
//     this.phoneUser = paramPhoneUser;
//     // Attribut en outMode
//     this.contact = paramPhoneUser + paramMailUser;
//     this.resume = this.getProfileInfo();
//     this.count = 0
//     // this._nom = nom;  
//     }
//     getPhone(){
//         if(user==="connected")
//         return this.phoneUser;
//     }
//     getProfileInfo() {
//     console.log('this ',this);
//     return `infos de l'utilisateur : 
//             son nom : ${this.nameUser}
//             son mail : ${this.mailUser}
//             son Tél : ${this.phoneUser}`;
//     }
// }

// const exampleUser1 = new UserProfile("José", "jose@gmail.com", "09876543");
// console.log(exampleUser1);
// const exampleUser2 = new UserProfile("Sarah", "sarah@gmail.com", "063736252");


// console.log(exampleUser2.nameUser);
// exampleUser2.getProfileInfo();
// const exampleUser3 = new UserProfile("yann", "yann@gmail.com", "098765432");
// exampleUser3.getProfileInfo();


//! exo
// class Imc {
//     //* Constructor -> initialise les données
//     constructor(nom, poids, taille) {
//     // TODO 
//     this.userNom=nom;
//     this.userPoids=poids;
//     this.userTaille=taille;
//     }
//     //* Le calcul
//     calculImc() {
//         // TODO
//         this.userPoids/this.userTaille**2;
//     }
//     //* Affichage
//     display() {
//         // TODO
//         console.log(`this`,this);
//         return `Bonjour,
//                 ${this.userNom=nom}
//                 ${this.userPoids=poids}
//                 ${this.userTaille=taille};`
//     }
// }
// //* progr principal -> on fait l'injection des données
// let list = [
//     new Imc("Sébastien Chabal", 135, 1.7),
//     new Imc("Escaladeuse", 45, 1.68),
//     new Imc("JOJO ", 300, 2),
//     new Imc("Gontrand ", 90, 1.75),
//     new Imc("Colonel Clock ", 200, 1.75),
//     new Imc("JOsiane de la Vega", 99, 1.55)
// ];
// list.forEach((uneInstanceImc) => uneInstanceImc.display(list));

//* correction
class Imc {
    //* Constructor -> initialise les données
    constructor(nom, poids, taille) {
        this._nom = nom; //! 3 attributes en In mode
        this._poids = poids;
        this._taille = taille;
        this._imc = this.calculImc(); //! attribute en OUT mode (à calculer) c'est + easy pour affichage
    }
    //* Le calcul
    calculImc() {
        //* Format simple (2 nombres après le . ou la ,)
        // return this._poids/(this._taille*this._taille);
        //  return (this._poids/Math.pow(this._taille, 2)).toFixed(2);
        return (this._poids / this._taille ** 2).toFixed(2);
    }
    //* Affichage
    display() {
        console.log(`Bonjour,${this._nom} (${this._poids} kg, ${this._taille} M) a un IMC de: ${this._imc}`);
    }
}
//* progr principal -> on fait l'injection des données
let list = [
    new Imc("Sébastien Chabal", 135, 1.7),
    new Imc("Escaladeuse", 45, 1.68),
    new Imc("JOJO ", 300, 2),
    new Imc("Gontrand ", 90, 1.75),
    new Imc("Colonel Clock ", 200, 1.75),
    new Imc("JOsiane de la Vega", 99, 1.55),
    new Imc("LOLO de la Vega", 400, 1.55)
];
// //*Boucle forEach qui parcourt le tableau avec une variable temporaire uneCase
list.forEach((uneInstanceImc) => uneInstanceImc.display());