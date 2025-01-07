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
console.log(input);
// const inputBlur= input.blur(input.style.backgroundColor="blue");

input.addEventListener("focus",()=>input.style.backgroundColor="blue");
input.addEventListener("blur",()=>input.style.backgroundColor="white");
