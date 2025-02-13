function Login(){
    let username_Login=document.getElementById("username_Log-in").value;
    let password_Login=document.getElementById("password_Log-in").value;

    let savedUser = localStorage.getItem(username_Login);

    if (!savedUser) {
        alert("User not found!");
        return;
    }

    let userData = JSON.parse(savedUser);

    if(username_Login===userData.username && password_Login===userData.password){
        alert("Welcome "+userData.username+" !");   
        window.location.replace("To_Do_App.html");
   }else{
    alert("Wrong Username Or Password");
   }
   
}
function Sign_in_Load(){
    document.getElementById("Login-Pane").style.visibility="hidden";
    document.getElementById("Signin-Pane").style.visibility="visible";
} 
function Log_in_Load(){
    document.getElementById("Signin-Pane").style.visibility="hidden";
    document.getElementById("Login-Pane").style.visibility="visible";
}
function Signin() {
    let Sign_in_email = document.getElementById("Sign-in_email").value;
    let Sign_in_username = document.getElementById("Sign-in_username").value; 
    let Sign_in_password=document.getElementById("Sign-in_password").value;
    
    if(localStorage.getItem(Sign_in_username)){
        if(localStorage.getItem(Sign_in_password)){
         alert("User already exists");
        return;
        }
    }
    
    let SaveUserData = {
        email: Sign_in_email,
        username: Sign_in_username,
        password: Sign_in_password
    };

    localStorage.setItem(Sign_in_username, JSON.stringify(SaveUserData));
    alert("Sign-in Successful!");
}  

