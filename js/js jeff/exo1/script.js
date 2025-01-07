const parag= document.getElementsByTagName("p");
const tabParag=Array.from(parag);

tabParag.map((lol)=>{
    lol.innerText = "ceci est un simple exemple de texte";
    lol.addEventListener("click",()=>console.log("ca click"));
    lol.style.cursor="pointer";
});


//TODO : Pourquoi ca beug ?
function buggyFunction() {
    let wtf = 9;
    console.log(wtf);
}; 
buggyFunction();
// console.log(wtf);

//TODO : Pourquoi ca beug / Pourquoi ca marche pas ?

// let something = 44;
function functionBugParent() {
    let something = 9;
    let minutes = 44
    // console.log(something);
    let lesNews = `il est ${something}h${minutes}`;
    console.log(lesNews);
    
    // function functionBugEnfant() {
    //     let lesNews = `il est 99h67`;
    // }
};
functionBugParent();
// console.log(something);