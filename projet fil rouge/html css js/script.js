// Dropdown menu créer et gérer

    //Dropdown créer et gérer

        //créer

const dropdownMenuCreer= document.getElementById("dropdownMenuCreer");
const showMenuCreer= document.getElementById("showMenuCreer");

dropdownMenuCreer.onmouseenter=(function(){mouseEnterCreer()});
dropdownMenuCreer.onmouseleave=(function(){mouseLeaveCreer()});

function mouseEnterCreer(){
    showMenuCreer.classList.add("menuAffiche");
}
function mouseLeaveCreer(){
    showMenuCreer.classList.remove("menuAffiche")
    // showMenuCreer.classList.add("menuCache");
}
        //gérer

const dropdownMenuGerer= document.getElementById("dropdownMenuGerer");
const showMenuGerer= document.getElementById("showMenuGerer");

dropdownMenuGerer.onmouseenter=(function(){mouseEnterGerer()});
dropdownMenuGerer.onmouseleave=(function(){mouseLeaveGerer()});

function mouseEnterGerer(){
    showMenuGerer.classList.add("menuAffiche");
}
function mouseLeaveGerer(){
    showMenuGerer.classList.remove("menuAffiche")
    // showMenuGerer.classList.add("menuCache");
}
