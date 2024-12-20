// const images= document.querySelectorAll("img");
// const tabImg= Array.from(images);

// tabImg.map((image,i) => image.addEventListener("load",function(){
//     console.log(`img Num : ${i} - OK`)
// }))


// const titre= document.querySelector("h1");
// const txt= setTimeout(function(){

//     titre.textContent= "SALUT C'EST COOL";
//     titre.style.opacity= 1;
//     document.body.style.background = "royalblue";

// }, 2000);




// let timer=0;

// const countDown= setInterval(function(){
//     console.log(timer);
//     timer++
// }, 2000);




// const titre= document.querySelector("h1");
// let timer= 3;

// titre.addEventListener("click",function(){

//     const countDown= setInterval(function(){ //lance un décompte

//         if(timer>0){
//             titre.textContent= timer;
//         }
//         else{
//             titre.textContent= "GO GO GO";
//             clearInterval(countDown); // annule un décompte
//         }
//         console.log(timer);
//         timer--; // décrémentation pour le décompte
        
//     },2000);   
// });

// console.log(titre);




//Arranger le chargement des images


let timer= 6;
const images= document.querySelector("#img1");
const image1= document.createElement("#img");


    
    const countDown= setInterval(function(){

        if(timer<=0){
            console.log("stop");
            clearInterval(countDown);
        }
        else{
        image1;
        console.log(timer);
        timer--
        }

    },1000);
