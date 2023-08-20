function Validate(){
    var name=document.login.name.value;
    var password=document.login.pswd.value;
    if(name==""||password==""||name==null||password==null){
        alert("Please Enter Valid Information");
        return false;
    }
    else{
        return true;
    }
}