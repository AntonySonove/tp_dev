// addEventListener("click", function(){
//     console.log("1 click");
// });

// addEventListener("click", function(event){
//     console.log(event);
// });

// addEventListener("click", function(event){
//     console.log(event.x, event.y);
// });

// addEventListener("click", function(event){

//     const monImg= this.document.createElement("img");
//     monImg.setAttribute("src","https://loremflickr.com/58/58")
//     console.log(event.x, event.y);
    

    

//     monImg.style.position="absolute";
//     monImg.style.left= event.x +"px";
//     monImg.style.top= event.y +"px";

//     document.body.appendChild(monImg);
// });

console.log(" ");

const bar= document.querySelector(".bar");

addEventListener("scroll",function(){

    const scrollMax= document.body.scrollHeight - innerHeight;
    const onEstOu= scrollY / scrollMax*100;
    bar.style.width= onEstOu + "%";

    console.log(`
        hauteur page: ${document.body.scrollHeight}
        hauteur affichage: ${innerHeight}
        scroll position : ${scrollY}`
    );
});