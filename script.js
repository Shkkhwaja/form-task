let btn = document.getElementById("sub-btn")
let storedData = JSON.parse(localStorage.getItem("myInfo"));


if (storedData) {
    // User data is present, redirect to dashboard.html
    window.location.href = "/dashboard.html";
}




btn.addEventListener("click", (e)=> {
    e.preventDefault()
    let uname = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    let myData = {
        addName : uname,
        addPass : pass
    }



    if(uname == uname && pass == pass){
        console.log(myData);
        localStorage.setItem("myInfo", JSON.stringify(myData))
        window.location.href = "/dashboard.html"

    }
    else{
        alert("sonthing went wrong")
    }


    
})