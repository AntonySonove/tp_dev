//! récupération de la div
const apiDiv=document.querySelector(".apiDiv");
console.log(apiDiv);

//! lien api
const contactApi= async()=>{
    //! recup données api
    const response=await fetch("https://tyradex.vercel.app/api/v1/gen/9");

    console.log(response);
    console.log(response.ok);
    console.log(response.status);
    //! transformation en objet js
    const dataTransformed=await response.json();
    console.log(dataTransformed);
    
    //! recuperation du premier élément du tableau
    const poussacha= dataTransformed[0];
    console.log(poussacha);

    //! affichage du premier élément sur la page
    // const poussachaImg=document.body.appendChild(document.createElement("img"));
    // poussachaImg.setAttribute("src","https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/906/regular.png")
    // poussachaImg.setAttribute("width","150")
    // const poussachaName=document.body.appendChild(document.createElement("h3"));
    // poussachaName.innerText+=poussacha.name.fr;
    // const poussachaWeight=document.body.appendChild(document.createElement("h4"));
    // poussachaWeight.innerText+=poussacha.weight;
    // const poussachaHeight=document.body.appendChild(document.createElement("h4"));
    // poussachaHeight.innerText+=poussacha.height;

    //! test boucle pour afficher plusieurs éléments
    for(let i=0;i<dataTransformed.length;i++){
        const poussachaImg=document.body.appendChild(document.createElement("img"));
    poussachaImg.setAttribute("src",dataTransformed[i].sprites.regular)
    poussachaImg.setAttribute("width","150")
    const poussachaName=document.body.appendChild(document.createElement("h3"));
    poussachaName.innerText+=dataTransformed[i].name.fr;
    poussachaImg.setAttribute("width","150")
    const poussachaType1=document.body.appendChild(document.createElement("h4"));
    poussachaType1.innerText+=dataTransformed[i].types[0].name;
    //! utiliser un if et la fonction qui permet de demander si le tableau contient un "type 2" pour le lister si il existe
    // const poussachaType2=document.body.appendChild(document.createElement("h4"));
    // poussachaType2.innerText+=dataTransformed[i].types[1].name;
    const poussachaWeight=document.body.appendChild(document.createElement("h4"));
    poussachaWeight.innerText+=dataTransformed[i].weight;
    const poussachaHeight=document.body.appendChild(document.createElement("h4"));
    poussachaHeight.innerText+=dataTransformed[i].height;
    }

    //! il fallait que j'utilise :
    console.log(dataTransformed[0].name.fr);
    //! dans la boucle, et incrémenter i (0 dans ce cas) pour lister tous les pokémon avec les bons parametres (name, weight, height)
};
contactApi();