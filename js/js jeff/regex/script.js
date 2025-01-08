const form= document.getElementsByTagName("form");
console.log(form);

const email= document.getElementById("email");
const password= document.getElementById("password");
console.log(email);
console.log(password);

const regexMail = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;

email.addEventListener("keyup",()=>{
    if(regexMail.test(email.value)){
        email.style.backgroundColor="green";
    }
    else{
        email.style.backgroundColor="red";
    }
});

const charDecimal = /\d/;
const charSpecial = /[$&@!]/;

// password.addEventListener("keyup",()=>{
//     if(charDecimal)
// })