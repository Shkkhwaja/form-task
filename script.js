let btn = document.getElementById("sub-btn")

btn.addEventListener("click", (e)=> {
    e.preventDefault()
    let uname = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    let myData = {
        addName : uname,
        addPass : pass
    }

    let storedData = JSON.parse(localStorage.getItem("myInfo"));


    if(uname == uname && pass == pass){
        console.log(myData);
        localStorage.setItem("myInfo", JSON.stringify(myData))
        window.location.href = "/dashboard.html"
        
        if(uname === storedData?.addName && pass === storedData?.addPass){
            
            alert("already register");
            window.location.href = "/dashboard.html"

        }else{
            alert("sucessfully")

        }  
    }
    else{
        alert("sonthing went wrong")
    }


    
})