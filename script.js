//register button
function register()
{
    console.log('ok')
    document.getElementById("container").style.display="none";
document.getElementById("registration").style.display="block";
   
 
}
//function call for login form
/*function loginDetail()
{
   let name= document.getElementById("login-name").value;
   let password= document.getElementById("login-password").value;

   if(name === null || name === "")
   {
    alert("enter the username");
    return false;
   }else if(password < 6)
   {
    alert("password must be atleast 6 character along");
    return false;
   }
}
*/
//function call for registration form
function registerDetails()
{
    
    document.getElementById("container").style.display="block";
    document.getElementById("registration").style.display="none";

    let username=document.getElementById("firstname").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("pass").value;

    let user_input=new Array();
    user_input=JSON.parse(localStorage.getItem("users"))  ? JSON.parse(localStorage.getItem("users")):[];

    user_input.push({
        "username":username,
        "email":email,
        "password":password
    })
    localStorage.setItem("users",JSON.stringify(user_input))
}
    /*localStorage.setItem("firstName",firstName);
    localStorage.setItem("email",email);
    localStorage.setItem("password",password)
   */
    
    


function check()
{

    /*let storeNames=localStorage.getItem("users")
    let storepsw=localStorage.getItem("users")*/
    const userStore=JSON.parse(localStorage.getItem("users"))
    var users_name=document.getElementById("login-name").value;
    var userpsw=document.getElementById("login-password").value;

    const userData=userStore.find(item=>item.username===users_name && item.password && userpsw)
    if(userData){
        window.location.href="./result/content.html";
    }else{
        alert("please enter thecorrect username and password")
    }

 }
 

