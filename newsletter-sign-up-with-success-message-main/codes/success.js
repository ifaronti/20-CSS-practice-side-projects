let suka = document.querySelector(".success_p")
dismiss_Btn = document.querySelector(".dismiss")
let email = localStorage.getItem("email")


suka.innerHTML = `A confirmation email has been sent to ${email}. 
Please open it and click the button inside to confirm your subscription.`

dismiss_Btn.addEventListener('click', function(){
    window.location.href = "index.html"
})
