//! try ... catch...

// prenom;
// alert('Ce message ne s\'affichera pas');

// try{
//     prenom
//     alert('Bonjour');  
// }catch(err){
//   console.log(err);
//     alert(`Erreur Détectée ALERTE STOPPEZ TOUT: 
//         -----------
//         Le Nom de l'erreur 
//         ${err.name}
//         -----------
//         Le Message de l'erreur  :
//         ${err.message}
//         ----------
//         L'emplacement de l'erreur:
//         ${err.stack}`);
// }
// alert(`Ce message s'affiche correctement`);

//! throw

function division(){
  let x = prompt('Entrez un premier nombre (numérateur)');
  let y = prompt('Entrez un deuxième nombre (dénominateur)');
  
  if(isNaN(x) || isNaN(y) || x == '' || y == ''){
      throw new Error('Merci de rentrer deux nombres');
  }else if(y == 0){
      throw new Error('Division par 0 impossible')
  }else{
      alert(x / y);
  }
}

//division();

//Comme notre fonction division est incertaine on va l'executer dans un try catch 
try{
  division();
}catch(err){
  alert(err.message);
}finally{
  alert(`Ce message s'affichera quoiqu'il arrive`);
}





