//Variable et Recup des éléments html
let meteo;
let infoMet;
let button = document.getElementsByTagName("button")[0];
let cardMeteo = document.getElementsByClassName("cardMeteo")[0];


//crée une div, avant le bouton, qui affichera les infos météos
let info = document.createElement("div");
info.style.height = "300px";
info.style.width = "200px";
info.style.margin = "16px 0";
info.style.border = "3px solid grey";
info.style.padding = "16px 12px 24px";
cardMeteo.insertBefore(info, button);


//FONCTIONS
//ajoute une class au bouton qui va changer sa couleur en vert
function bouton() {
    button.classList.add("button__cardMeteo");
}

//affiche les infos météos
function addInfo() {
    cardMeteo.getElementsByTagName("div")[0].innerText = infoMet;
}

//récupère les infos météos dans une variable (affiché dans la div précédente de addInfo())
function infoMeteo() {
    let tmax = meteo.fcst_day_0.tmax;
    let tmin = meteo.fcst_day_0.tmin;
    let tcurrent = meteo.current_condition.tmp;
    let condition = meteo.current_condition.condition;

    infoMet = `Aujourd'hui le temps est : ${condition}, et la température est de ${tcurrent}°C
    T° Max = ${tmax} - T° Min = ${tmin}`;

    console.log(infoMet);
}


//INTERACTION ET API
//change la couleur du bouton en restant appuyé dessus
button.addEventListener("mousedown", (event) => {
    button.style.backgroundColor = "orange";
})

//annule l'interaction précédente
document.addEventListener("mouseup", (event) => {
    button.style.backgroundColor = "";
})

//demande les infos météos au service web, et exécute les fonctions permettant leur affichage
button.addEventListener("click", (event) => {
    fetch("https://prevision-meteo.ch/services/json/toulouse")
    .then((response) => {
            return response.json();
        })
        .then((value) => {
            meteo = value;
            console.log(value);
            infoMeteo();
            bouton();
            addInfo();
        })
        .catch((error) => {
            console.log(error);
        });
})