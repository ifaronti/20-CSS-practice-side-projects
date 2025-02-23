let idNumber = document.querySelector('.advice_id')
let adTxt = document.querySelector('.advice_text')
let advice = document.querySelector('.get_advice')


advice.addEventListener('click', function(){
    fetch('https://api.adviceslip.com/advice', {cache: "no-cache"})
        .then(res => {
            return res.json()
        })
        .then(data => {
            idNumber.innerHTML = `ADVICE #${data.slip.id}`
           adTxt.innerHTML = `"${data.slip.advice}"`
        })
})

window.addEventListener('DOMContentLoaded', function(){
    fetch('https://api.adviceslip.com/advice', {cache: "no-cache"})
        .then(res => {
            return res.json()
        })
        .then(data => {
            idNumber.innerHTML = `ADVICE #${data.slip.id}`
           adTxt.innerHTML = `"${data.slip.advice}"`
        })
})

