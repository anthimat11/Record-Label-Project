
createBtn = document.getElementById("createBtn");
createBtn.addEventListener("click",passwordMatch);


function passwordMatch(){
const psw = document.getElementById("password");
const pswCon = document.getElementById("passwordconf")

if (psw==pswCon){
    document.getElementById("message").innerHTML = "**Passwords Match";   
  }

else {  
    document.getElementById("message").innerHTML = "**Passwords Don't Match";
  } 
}

