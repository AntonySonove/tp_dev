const titre=document.getElementById("titre");
console.log(titre);
titre.style.cursor="pointer";

const truc=document.createElement("h1");
truc.style.cursor="pointer";
console.log(truc);

titre.addEventListener("click",()=>{
    /*console.log("ca marche?")*/
    titre.style.display="none";
    truc.innerText="ca marche?";
    truc.style.display="block";
    document.body.appendChild(truc);
});
truc.addEventListener("click",()=>{
    truc.style.display="none";
    titre.style.display="block";
})

const input=document.getElementById("input");
// console.log(input);
// const inputBlur= input.blur(input.style.backgroundColor="blue");

input.addEventListener("focus",()=>input.style.backgroundColor="blue");
input.addEventListener("blur",()=>input.style.backgroundColor="white");


// * Mini test pour capter event du Clavier
// document.addEventListener('keyup', function(eventClavier){
//     console.log('Yes Moi ECRIRE');
//     console.log(eventClavier);
//     console.log(eventClavier.key);
// });


// const input=document.getElementById("input");
const recupTexte=document.getElementById("recupTexte");

input.addEventListener("keyup",()=>recupTexte.innerText=input.value);


//local storage

// const test=localStorage.setItem("monSuperTexte","pré rempli");
const newSuperTexte=localStorage.getItem("monSuperTexte");
input.value=newSuperTexte;

input.addEventListener("keyup",()=>test=localStorage.setItem("monSuperTexte",input.value));


//vanta
// VANTA.BIRDS({
//     el: "#vanta",
//     mouseControls: true,
//     touchControls: true,
//     gyroControls: false,
//     minHeight: 200.00,
//     minWidth: 200.00,
//     scale: 1.00,
//     scaleMobile: 1.00
//   })

