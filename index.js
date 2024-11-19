let submitBtn=document.getElementById("btn");
let name=document.getElementById("userName");
let email=document.getElementById("userEmail");
let pswd=document.getElementById("userPswd");
submitBtn.addEventListener("click",(e)=>{
    e.preventDefault()
      const nameValue=name.value
      const emailValue=email.value
      const pswdValue=pswd.value
      console.log(nameValue);
      localStorage.setItem("name",nameValue)
      localStorage.setItem("email",emailValue)
      localStorage.setItem("pswd",pswdValue)
      alert("signup done successfully!!!!!!!")
      setTimeout(()=>{
        window.location.href="login.html"

      },3000)
      
})





const loginBtn = document.getElementById("btn")
        
loginBtn.addEventListener("click", () => {

    let nameStorage = localStorage.getItem("name");
    let pswdStorage = localStorage.getItem("pswd");
    let inputUserName = document.getElementById("userName").value
    let inputUserPswd = document.getElementById("userPswd").value
    if (nameStorage == inputUserName && pswdStorage == inputUserPswd) {
        alert("login done successfully !!!!!!!!!")
       setTimeout(()=>{
        window.open("home.html")
       },5000)
    }else{
        alert("oops invalid crdentials")
    }
})
