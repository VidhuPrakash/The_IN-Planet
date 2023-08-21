
function ShowError(id,error){
    element = document.getElementById(id);
    element.getElementsByClassName('return-error')[0].innerHTML=error;
}

function ValidateForm(){
    var return_value = true; 

 var name = document.forms['MyForm']["name"].value;
 var phonenumber = document.forms['MyForm']["number"].value;
 var email = document.forms['MyForm']["email"].value;
 var password = document.forms['MyForm']["pass"].value;
 var cpassword = document.forms['MyForm']["cpass"].value;
 if(name.length>10){
    ShowError("name","*Username is too long");
    return_value = false;
 }
 return return_value;
}