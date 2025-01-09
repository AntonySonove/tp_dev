const apiDiv=document.querySelector(".apiDiv");
console.log(apiDiv);

//lien api
const contactApi= async()=>{
    //recup données api
    const response=await fetch("https://pokeapi.co/api/v2/pokemon");

    console.log(response);
    console.log(response.ok);
    console.log(response.status);
    //transformation en objet js
    const dataTransformed=await response.json();
    console.log(dataTransformed);
    //boucle qui créé une liste pour les 20 premiers pokemon
    for(let i=0;i<20;i++){
        const list=document.body.appendChild(document.createElement("li"));
        list.style.backgroundColor="yellow";
        list.style.listStyle="none";
        list.innerText += dataTransformed.results[i].name;
    }
};
contactApi();