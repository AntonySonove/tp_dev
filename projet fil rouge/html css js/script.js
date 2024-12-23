// Dropdown menu créer et gérer

    //Dropdown créer

const dropdownMenuCreer= document.getElementById("dropdownMenuCreer");
const showMenuCreer= document.getElementById("showMenuCreer");

dropdownMenuCreer.addEventListener("click",function(){
    showMenuCreer.classList.toggle("menuCache");
});

    //Dropdown gérer

const dropdownMenuGerer= document.getElementById("dropdownMenuGerer");
const showMenuGerer= document.getElementById("showMenuGerer");

dropdownMenuGerer.addEventListener("click",function(){
    showMenuGerer.classList.toggle("menuCache");
});

// document.addEventListener("click",function(){
//     console.log("click");
//     showMenuCreer.classList.add("menuCache");
// })