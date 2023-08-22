
function ShowError(error){
    document.getElementsByClassName('return-error')[0].innerHTML=error;
}

function ValidateForm(){
    var return_value = true; 

 var name = document.forms['MyForm']["name"].value;
 var phonenumber = document.forms['MyForm']["number"].value;
 var email = document.forms['MyForm']["email"].value;
 var password = document.forms['MyForm']["pass"].value;
 var cpassword = document.forms['MyForm']["cpass"].value;
 if(name.length>10){
    ShowError("*Username is too long");
    return false;
 }
 if(name==""){
    ShowError("*Please enter username without fail");
    return false;
 }
 else{
    return true;
 }
}