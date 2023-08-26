
function ValidateForm(){
   //declaring val variable locally to use as boolean variable 
 var val=true;
 //get values from form=MyForm
 //get name(input=name) from form to name variable
 var name = document.forms['MyForm']["name"].value;
 //get mobilenumber(input=number) from form to phonenumber variable
 var phonenumber = document.forms['MyForm']["number"].value;
 //get email address(input=email) from form to email variable
 var email = document.forms['MyForm']["email"].value;
 //get password(input=pass) from form to password variable
 var password = document.forms['MyForm']["pass"].value;
 //get re-enter(input=cpass) password from form to cpassword variable
 var cpassword = document.forms['MyForm']["cpass"].value;
 //accessing divisons with Id to show errors
 //access Username errors showing div as variable nameERROR 
 var nameERROR= document.getElementById("name-error");
 //access Phonenumber errors showing div as variable numERROR
 var numERROR= document.getElementById("num-error");
 //access Email Address errors showing div as variable emailERROR
 //access Email Address errors showing div as variable emailERROR
 var emailERROR= document.getElementById("email-error");
 //access Password errors showing div as variable nameERROR 
 var passERROR=document.getElementById("pass-error");
 //access Re-Entered Password errors showing div as variable nameERROR 
 var cpassERROR=document.getElementById("cpass-error");
 
 //Give lines are used to set the div Empty if the conditions are true
 nameERROR.innerHTML="";
 numERROR.innerHTML="";
 emailERROR.innerHTML="";
 passERROR.innerHTML="";
 cpassERROR.innerHTML="";

 //Conditions for the Login form

 //Name length is greater than 10 return false and display "Username is greater than 10"
 if(name.length>=10){
    nameERROR.innerHTML="Username is greater than 10";
    val=false;
 }
  //Name length is equal to 0 return false and dispaly "Please enter username"
 if(name.length==0){
    nameERROR.innerHTML="Please enter username"
    val=false;
 }
 //Name length is smaller than or equal to 5 and greater than or equal to 1 return false and dispaly "Username is smaller than 5"
 if(name.length<=5&&name.length>=1){
    nameERROR.innerHTML="Username is smaller than 5";
    val=false;
 }
 //Phonenumber length is not equal to 10 or it not contains number value return false and dispaly "Invalid number"
 if(phonenumber.length!=10||isNaN(phonenumber)){
    numERROR.innerHTML="Invalid number";
    val=false;
 }
//email length is smaller or equal to 2 return false and dispaly 'Invalid email address'
 if(email.length<=2) {
    emailERROR.innerHTML = 'Invalid email address';
    val = false;
}
//password length is smaller than or equal to 8 return false and dispaly "Must contain more than 8 values"
if(password<=8){
    passERROR.innerHTML = "Must contain more than 8 values";
    val = false;
}
//Re-enterd password is empty or Re-entered password doesn't match return false and dispaly "Password does not match"
if(cpassword==""||password!=cpassword){
    cpassERROR.innerHTML="Password does not match";
    val=false;
}

//Returns val variable if false occures val=false else val=true

    return val;
}