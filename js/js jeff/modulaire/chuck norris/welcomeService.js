
export const contactApi=async()=>{
    const apiDiv=document.getElementById("apiDiv");
    // console.log(apiDiv);
    const response=await fetch("https://api.chucknorris.io/jokes/random");
    console.log(response);
    console.log(response.ok);
    console.log(response.status);

    const dataTransformed=await response.json();
    // console.log(dataTransformed);

    const blague=document.getElementById("h1");
    blague.innerText=dataTransformed.value;
}
export const date=()=>{
    const footer=document.querySelector("footer");
    const footerDate=document.body.appendChild(document.createElement("p"));
    footerDate.innerText="Cours Javascript"
}