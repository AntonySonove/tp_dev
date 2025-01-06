// Le but est de trier un tableau nous-même (il faut mettre les éléments du plus petit au 
//plus grand). Pour cela, on va procéder en plusieurs étapes :

// Étape 1 : écrire une fonction qui reçoit un tableau et un numéro de case (i). Son but est 
//d'échanger les valeurs des cases i et i+1 si celles-ci ne sont pas dans le bon ordre.
console.log("Etape 1");
console.log("mettre les valeurs des cases dans le bon ordre");

let t=[10,9,59,7,99,5,4,28,2,1];

function change(t,i){
    if (t[i]>t[i+1]){
        let save=0;
        save=t[i];
        t[i]=t[i+1];
        t[i+1]=save;
    }
}
change(t,0);
console.log(t);


// Étape 2 : écrire une fonction qui reçoit un tableau et qui applique l'étape 1 sur toutes 
//les cases successives (cases 0/1, cases 1/2, cases 2/3, ..., cases avant-dernière/dernière).
console.log(" ");
console.log("Etape 2");
console.log("appliquer l'étape 1 sur toutes les cases du tableau");

function tri(t){
    let i=0;
    for(let j=0;j<t.length;j++){
        change(t,i);
        i+=1;
    }  
}
tri(t);
console.log(t);


// Étape 3 : écrire une fonction qui reçoit un tableau et qui le trie en appelant la fonction 
//2 autant de fois qu'il y a d'éléments dans le tableau.
console.log(" ");
console.log("Etape 3");
console.log("ecrire un fonction appelant la fonction 2 autant de fois qu'il y a d'éléments dans le tableau")

function order(t){
    for(let k=0;k<t.length;k++){
        tri(t);
    }
}
order(t);
console.log(t);

// Note : on peut visualiser cet algorithme sur cette image 
//<https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/211162/a9b17b54-b6dd-1602-be04-6fc125676b7a.gif>.


