// TODO : L'EVAL API METEO
// import { library, dom } from '@fortawesome/fontawesome-svg-core'
// import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons'

// We are only using the user-astronaut icon
// library.add(faUserAstronaut)

// Replace any existing <i> tags with <svg> and set up a MutationObserver to
// continue doing this as the DOM changes.
// dom.watch()

let button=document.getElementById("bouton");
let cardMeteo=document.getElementsByClassName("cardMeteo");
console.log(cardMeteo);
let info=document.createElement("div");
// cardMeteo.insertBefore(info, button);
// document.body.appendChild(info);



info.style.height="300px";
info.style.width="200px";
info.style.marginTop="16px";
info.style.marginBottom="16px";
info.style.border="3px";
info.style.border="solid";
info.style.border="grey";
info.style.paddingTop="16px";
info.style.paddingBottom="24px";
info.style.paddingTop="12px";
info.style.paddingTop="12px";
// info.style.backgroundColor="blue";

console.log (info);

function addInfo(){
    const text= document.createElement("p");
    info.append("text",text);
}
addInfo();
function bouton(){
    button.classList.add("button__cardMeteo");
}