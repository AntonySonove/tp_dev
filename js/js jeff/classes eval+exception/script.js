class CompteBancaire {
    constructor(nom, solde) {
        this.nom=nom;
        this.solde=solde;
        // this.virement=0;

    }
    // Ajoute un montant au solde
    crediter(somme) {
        this.solde+=somme;
    }
    // Retirer un montant au solde
    retirer(retrait) {
        this.solde-=retrait;
    }
    virer(somme1,name) {
       this.solde-=somme1;
      
    }
    // Renvoie la description du compte
    decrire() {
        console.log(`${this.nom}, ${this.solde}`);
    }
}

// Main, gère 3 comptes bancaires dans un tableau associatif
const lesComptes = {
    Alex: new CompteBancaire("Alex",0),
    Clovis: new CompteBancaire("Clovis",0),
    Marco: new CompteBancaire("Marco",0),
};

// lecture tableau associatif ou Objet["truc"]
// Crédite et décrit chaque compte
for (let key in lesComptes) {
    lesComptes[key].crediter(1000);
}

// un retrait de 100 par Alex
lesComptes["Alex"].retirer(100);
// un petit virement: Marco Vire 300 à Clovis
lesComptes["Marco"].virer(300, lesComptes["Clovis"]);
// un petit retrait incorrect (doit déclencher erreur custom) : 
// Alex fait un retrait de 1200
lesComptes["Alex"].retirer(1200);
// bilan : faire une déscription de tous les comptes en console (ou DOM ?)
for (let key in lesComptes) {
    console.log(lesComptes[key].decrire());
}
console.log (lesComptes);
console.log (lesComptes.Alex);

//! correction
// class CompteBancaire {
//     constructor(titulaire) {
//         this.titulaire = titulaire;//IN MODE
//         this.solde = 0;//OUT MODE
//     }
//     // Ajoute un montant au solde
//     crediter(montant) {
//         this.solde += montant;
//         console.log("Ajout de: " + montant + " pour: " + this.titulaire);
//     }
//     // Retirer un montant au solde
//     retirer(montant) {
//         try {
//             if (this.solde < montant)
//                 throw (
//                     this.titulaire +
//                     ", retrait de: " +
//                     montant +
//                     " refusé avec solde: " +
//                     this.solde
//                 );
//             this.solde -= montant;
//             console.log("Retrait de: " + montant + " pour: " + this.titulaire);
//         } catch (err) {
//             console.log("Erreur Custom---------->" + err);
//         }
//     }
//     virer(montant, membre) {
//         console.log(
//             "Virement de: " +
//             montant +
//             " de: " +
//             this.titulaire +
//             " vers: " +
//             membre.titulaire
//         );
//         membre.crediter(montant);
//         this.retirer(montant);
//     }

//     // Renvoie la description du compte
//     decrire() {
//         return "titulaire: " + this.titulaire + ", solde: " + this.solde;
//     }
// }
// // Main, gère 3 comptes bancaires dans un tableau associatif
// const lesComptes = {
//     Alex: new CompteBancaire("Alex"),
//     Clovis: new CompteBancaire("Clovis"),
//     Marco: new CompteBancaire("Marco"),
// };

// // lecture tableau associatif ou Objet["truc"]
// // Crédite et décrit chaque compte
// for (let key in lesComptes) {
//     lesComptes[key].crediter(1000);
// }

// // un retrait de 100 par Alex
// lesComptes["Alex"].retirer(100);
// // un petit virement: Marco Vire 300 à Clovis
// lesComptes["Marco"].virer(300, lesComptes["Clovis"]);
// // un petit retrait incorrect (doit déclencher erreur custom) : 
// // Alex fait un retrait de 1200
// lesComptes["Alex"].retirer(1200);
// // bilan : faire une déscription de tous les comptes en console (ou DOM ?)
// for (let key in lesComptes) {
//     console.log(lesComptes[key].decrire());
// }