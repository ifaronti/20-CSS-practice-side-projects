let buton = document.querySelector(".submit")
let email =document.querySelector(".address")
let error = document.querySelector(".error_prompt")


buton.addEventListener('click', function(){
    if(email.value === ""){
        email.style.borderColor ="red";
        error.innerText = "Valid email required";
    }
    else{ 

        if(email.value.includes('@') && email.value.indexOf('@') > 0 ){
            localStorage.setItem("email", email.value);
            window.location.href= "success.html";

        }
        else{
            email.style.borderColor = "red";
            error.innerText = "Valid email required";
        }

    }
    email.value = "";

})
