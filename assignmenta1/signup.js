let fname= document.getElementById("fname");
let lname= document.getElementById("lname");
let email= document.getElementById("email");
let pwd= document.getElementById("pwd");
let pwd2= document.getElementById("pwd2");
let add1= document.getElementById("add1")
let add2= document.getElementById("add2");
let mob= document.getElementById("mob");
let dob= document.getElementById("dob");

function validation(){
    if (fname.value.trim()==""){
        alert("First name cannot be empty");
        return false;
    }
    else if (lname.value.trim() ==""){
        alert("Last name cannot be empty");
        return false;
    }
    else if(add1.value.trim()==""){
        alert("Please fill address");
        return false;
    }
    else if(add2.value.trim()==""){
        alert("Please fill address line 2");
        return false;
    }
    else if(mob.value.trim()==""){
        alert("Mobile No cannot be blank");
        return false;
    }
    else if(mob.value.length!=10){
        alert("Mobile No contain 10 digits");
        return false;
    }
    else if (email.value.trim() ==""){
        alert("Email cannot be empty");
        return false;
    }
    else if (pwd.value.trim() ==""){
        alert("password cannot be empty");
        return false;
    }
    else if (pwd.value.length <8){
        alert("Password is too short");
        return false;
    }
    else if (pwd2.value.trim()==""){
        alert("You must confirm Password");
        return false;
    }
    else if (pwd.value != pwd2.value){
        alert("Passwords must be same");
        return false;
    }
    else{
        return true;
    }
}