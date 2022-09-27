function submit()
{

    let userData = {

        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        password : document.getElementById("password").value,

    }

    // console.log(userData);

    localStorage.setItem("user",JSON.stringify(userData));

    document.getElementById("name").value= "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    alert("SignUp Successfull!!")
    window.location.href="login.html"


}
