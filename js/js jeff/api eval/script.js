//! récup de la div
const apiDiv=document.getElementById("app")
//! lien api
const contactApi=async()=>{
    //* récup données api
    const response= await fetch('https://randomuser.me/api/');
    // console.log(response);
    // console.log(response.ok);
    // console.log(response.status);
    //* transformation en .json
    const dataTransformed = await response.json();
    console.log(dataTransformed);
    //! récup des éléments
    const user= dataTransformed.results;
    console.log(user);

    const userImg=document.body.appendChild(document.createElement("img"));
    userImg.setAttribute("src","https://randomuser.me/api/portraits/men/98.jpg");
    userImg.setAttribute("width","150");

    const userName=document.body.appendChild(document.createElement("h3"));
    userName.innerText=user[0].name.title+" "+user[0].name.first+" "+user[0].name.last;

    const userMail=document.body.appendChild(document.createElement("h3"));
    userMail.innerText=user[0].email;

    const userLocation=document.body.appendChild(document.createElement("h3"));
    userLocation.innerText="Adress : "+user[0].location.postcode+"-"+" "+user[0].location.street.name+" ("+user[0].location.country+")";

    const userPhone=document.body.appendChild(document.createElement("h3"));
    userPhone.innerText="Phone : "+user[0].phone;

    const randomUser=document.body.appendChild(document.createElement("button"));
    randomUser.innerText="Random User";
    randomUser.setAttribute("href","https://www.google.fr")
    randomUser.onclick=(()=>href="https://www.google.fr");
    randomUser.href='#';
    // randomUser.onclick=()=>randomUser.open("https://www.google.fr");
    // randomUser.href="https://www.google.fr";
}
contactApi();
