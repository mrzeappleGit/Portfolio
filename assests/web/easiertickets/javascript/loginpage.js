function registerform(){
    document.getElementById("register-form").style.display = "grid";
    document.getElementById("login-form").style.display = "none";
}
function loginformswitch(){
    document.getElementById("login-form").style.display = "grid";
    document.getElementById("register-form").style.display = "none";
}
function validateLogin(){
    var uname = document.forms["loginform"]["Lemail"].value;
    if(uname == "mtstevens@dbq.edu"){
        alert("Welcome Matthew Stevens");
        return true;
    }else{
        alert("Sorry not a known user");
        return false;
    }
}
function validatesignup(){
    var psw = document.forms["signupform"]["psw"].value;
    var repsw = document.forms["signupform"]["repsw"].value;

    if(psw !== repsw){
        alert("Password does not match");
        var psw2 = document.getElementById("psw").value="";
        var repsw2 = document.getElementById("repsw").value="";
        return false;
    }else{
        alert("Signed up");
        return true;
    }
}