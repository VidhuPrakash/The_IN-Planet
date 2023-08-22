
function ValidateForm(){
 var val=true;
 var name = document.forms['MyForm']["name"].value;
 var phonenumber = document.forms['MyForm']["number"].value;
 var email = document.forms['MyForm']["email"].value;
 var password = document.forms['MyForm']["pass"].value;
 var cpassword = document.forms['MyForm']["cpass"].value;
 var nameERROR= document.getElementById("name-error");
 var numERROR= document.getElementById("num-error");
 var emailERROR= document.getElementById("email-error");
 var passERROR=document.getElementById("pass-error");
 var cpassERROR=document.getElementById("cpass-error");
 var usr=document.getElementById("usr");
 nameERROR.innerHTML="";
 numERROR.innerHTML="";
 emailERROR.innerHTML="";
 passERROR.innerHTML="";
 cpassERROR.innerHTML="";
 if(name.length>10){
    nameERROR.innerHTML="Username is greater than 10";
    val=false;
 }
 if(name.length<5){
    nameERROR.innerHTML="Username is smaller than 5";
    val=false;
 }
 if(phonenumber.length!=10||isNaN(phonenumber)){
    console.log("invalid number");
    numERROR.innerHTML="Invalid number";
    val=false;
 }
 if(email.length<2) {
    emailERROR.innerHTML = 'Invalid email address';
    val = false;
}
if(password<8){
    passERROR.innerHTML = "Must contain more than 8 values";
    val = false;
}
if(cpassword==""||password!=cpassword){
    cpassERROR.innerHTML="Password does not match";
    val=false;
}


    return val;
}