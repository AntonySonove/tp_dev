//! EXO 20.1 
//TODO: via JS afficher le profil  utilisateur dans la page web
const userData = {
    name: 'John delavega',
    email: 'john.doe@example.com',
    age: 25,
    dob: '08/02/1989',
    active: true,
    img:'https://www.boredpanda.com/blog/wp-content/uploads/2022/06/funny-low-cost-cosplay-pics-62a744d39c80a__700.jpg'
  };
console.log(userData);

const user=document.getElementById("user");
user.style.height="auto"
user.style.width="700px"
user.style.backgroundColor="red";


// inserer l'image
const image=document.createElement("img");
image.src=userData.img;
document.body.appendChild(image);

//inserer du texte en utilisant l'objet
const nom=document.createElement("h1");
nom.innerText=userData.name;
document.body.appendChild(nom);

const email=document.createElement("h2");
email.innerText=userData.email;
document.body.appendChild(email);

const age=document.createElement("h3");
age.innerText=userData.age;
document.body.appendChild(age);

const dob=document.createElement("h4");
dob.innerText=userData.dob;
document.body.appendChild(dob);

const active=document.createElement("h5");
active.innerText=userData.active;
document.body.appendChild(active);

const adresse=document.createElement("h5");
adresse.innerText="44 rue du truc";
document.body.appendChild(adresse);


const tabUserData=Array.from(userData);
console.log(tabUserData);

user.append(image, nom,email, age, dob, active,
  adresse);
