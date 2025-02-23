let pageWrap = document.querySelector(".page_wrap")
let current = new Date()

let month = current.getMonth() + 1
let day = current.getDate()
let year = current.getFullYear()

mql = window.matchMedia("(max-width: 960px)")

let page_container = document.createElement('div')
    page_container.className = 'page_container'
    pageWrap.appendChild(page_container)
    let inputDiv = document.createElement('div')
    inputDiv.className = 'inputDiv'
    page_container.appendChild(inputDiv)
    let ageCount = document.createElement('div')
    ageCount.className = 'age_count'
    inputDiv.appendChild(ageCount)
    let inputers = document.createElement('div')
    inputers.className = 'input_ins'
    inputDiv.appendChild(inputers)
    let liners = document.createElement('div')
    liners.className = 'linez'
    inputDiv.appendChild(liners)
    let taggs = document.createElement('div')
    taggs.className = 'taggys'
    inputDiv.appendChild(taggs)
    let yourAge = document.createElement('div')
    yourAge.className = 'yourage'
    inputDiv.appendChild(yourAge)


let dayInput = document.createElement('input')
    dayInput.type = 'text'
    dayInput.className = 'day_input'
    inputers.appendChild(dayInput)
    dayInput.classList.add('input_all')
    dayInput.placeholder = `DD`
    let dayError = document.createElement('p')
    dayError.className = 'day_error'
    dayError.classList.add('error_ps')
    inputers.appendChild(dayError)

let monthInput = document.createElement('input')
    monthInput.type = 'text'
    monthInput.className = 'month_input'
    inputers.appendChild(monthInput)
    monthInput.classList.add('input_all')
    monthInput.placeholder = `MM`
    let monthError = document.createElement('p')
    monthError.className = 'month_error'
    monthError.classList.add('error_ps')
    inputers.appendChild(monthError)

let yearInput = document.createElement('input')
    yearInput.type = 'text'
    yearInput.className = 'year_input'
    inputers.appendChild(yearInput)
    yearInput.classList.add('input_all')
    yearInput.placeholder = `YYYY`
    let yearError = document.createElement('p')
    yearError.className = 'year_error'
    yearError.classList.add('error_ps')
    inputers.appendChild(yearError)
    
let yearCount = document.createElement('p')
    yearCount.className = 'year_count'
    yearCount.classList.add('outputers')
    ageCount.appendChild(yearCount)
    yearCount.innerHTML = `years`

let monthCount = document.createElement('p')
    monthCount.className = 'month_count'
    monthCount.classList.add('outputers')
    ageCount.appendChild(monthCount)
    monthCount.innerHTML = `months`

let dayCount = document.createElement('p')
    dayCount.className = 'day_count'
    dayCount.classList.add('outputers')
    ageCount.appendChild(dayCount)
    dayCount.innerHTML = `days`


let calcuBtn = document.createElement('div')
calcuBtn.className = 'calcuBtn'
calcuBtn.classList.add('input_all')
inputDiv.appendChild(calcuBtn)
calcuBtn.classList.add('input_all')

let dayP = document.createElement('p')
dayP.className = 'day_p'
dayP.innerHTML = `DAY`
dayP.classList.add('tags')
taggs.appendChild(dayP)

let monthP = document.createElement('p')
monthP.className = 'month_p'
monthP.classList.add('tags')
taggs.appendChild(monthP)
monthP.innerHTML = `MONTH`

let yearP = document.createElement('p')
yearP.className = 'year_p'
yearP.classList.add('tags')
taggs.appendChild(yearP)
yearP.innerHTML = `YEAR`


    let yearOut = document.createElement('p')
    yearOut.className = 'yearout'
    yearOut.classList.add('outputers')
    yourAge.appendChild(yearOut)
    yearOut.innerHTML = `- -`

    let monthOut = document.createElement('p')
    monthOut.className = 'monthout'
    monthOut.classList.add('outputers')
    yourAge.appendChild(monthOut)
    monthOut.innerHTML = `- -`

    let dayOut = document.createElement('p')
    dayOut.className = 'dayout'
    dayOut.classList.add('outputers')
    yourAge.appendChild(dayOut)
    dayOut.innerHTML = `- -`



// ************** Stressful Styling Style **********

yearInput.style.width = '9rem'
yearInput.style.height = '4rem'
yearInput.style.marginTop = '6rem'
yearInput.style.borderRadius = '8px'
yearInput.style.border = '0.2px solid'
yearInput.style.borderColor = 'rgb(198, 198, 198)'
yearInput.style.position = 'absolute'
yearInput.style.left = '26rem'
yearInput.style.fontSize = '2rem'
yearInput.style.fontWeight = 'bolder'
yearInput.style.textIndent = '1rem'

if (mql.matches){
    yearInput.style.width = '5rem'
    yearInput.style.fontSize = '1.5rem'
    yearInput.style.height = '3.5rem'
    yearInput.style.textIndent = '.1rem'
    yearInput.style.marginTop = '4rem'
    yearInput.style.position = 'absolute'
    yearInput.style.left = '15.9rem'
    yearInput.style.fontSize = '1.3rem'
}

monthInput.style.width = '9rem'
monthInput.style.height = '4rem'
monthInput.style.marginTop = '6rem'
monthInput.style.borderRadius = '8px'
monthInput.style.border = '.1px solid'
monthInput.style.borderColor = 'rgb(198, 198, 198)'
monthInput.style.position = 'absolute'
monthInput.style.left = '15rem'
monthInput.style.fontSize = '2rem'
monthInput.style.fontWeight = 'bolder'
monthInput.style.textIndent = '1rem'

if (mql.matches){
    monthInput.style.width = '5rem'
    monthInput.fontSize = '1.5rem'
    monthInput.style.height = '3.5rem'
    monthInput.style.textIndent = '.3rem'
    monthInput.style.position = 'absolute'
    monthInput.style.marginTop = '4rem'
    monthInput.style.left = '8.7rem'
    monthInput.style.fontSize = '1.5rem'
}

dayInput.style.width = '9rem'
dayInput.style.height = '4rem'
dayInput.style.marginTop = '6rem'
dayInput.style.borderRadius = '8px'
dayInput.style.border = '.1px solid'
dayInput.style.borderColor = 'rgb(198, 198, 198)'
dayInput.style.position = 'absolute'
dayInput.style.left = '4rem'
dayInput.style.fontSize = '2rem'
dayInput.style.fontWeight = 'bolder'
dayInput.style.textIndent = '1rem'

if (mql.matches){
    dayInput.style.width = '5rem'
    dayInput.fontSize = '1.5rem'
    dayInput.style.height = '3.5rem'
    dayInput.style.textIndent = '.3rem'
    dayInput.style.marginTop = '4rem'
    dayInput.style.left = '1.5rem'
    dayInput.style.fontSize = '1.5rem'
}

liners.style.width = '38rem'
liners.style.height = '0.1rem'
liners.style.backgroundColor = 'rgb(234, 234, 234)'
liners.style.position = 'absolute'
liners.style.left = '4rem'
liners.style.top = '13rem'

if (mql.matches){
    liners.style.width = '20.8rem'
    liners.style.left = '1.5rem'
    liners.style.top = '12rem'
}

dayError.style.position = 'absolute'
dayError.style.left = '4rem'
dayError.style.top = '10rem'
dayError.style.color = 'red'
dayError.style.fontSize = '14px'
dayError.style.display = 'none'

if (mql.matches){
    dayError.style.fontSize = '12px'
    dayError.style.left = '1.5rem'
    dayError.style.top = '7.9rem'
    dayError.style.fontSize = '9px'
    
}

monthError.style.position = 'absolute'
monthError.style.left = '15rem'
monthError.style.top = '10rem'
monthError.style.color = 'red'
monthError.style.fontSize = '14px'
monthError.style.display = 'none'

if (mql.matches){
    monthError.style.fontSize = '12px'
    monthError.style.left = '8.7rem'
    monthError.style.top = '7.9rem'
    monthError.style.fontSize = '9px'
}

yearError.style.position = 'absolute'
yearError.style.left = '26rem'
yearError.style.top = '10rem'
yearError.style.color = 'red'
yearError.style.fontSize = '14px'
yearError.style.display = 'none'

if (mql.matches){
    yearError.style.fontSize = '12px'
    yearError.style.left = '15.9rem'
    yearError.style.top = '7.9rem'
    yearError.style.fontSize = '9px'
}

ageCount.style.position = 'absolute'
ageCount.style.top = '17rem'
ageCount.style.gridTemplateColumns = '1fr'

dayP.style.fontSize = '1.1rem'
dayP.style.color = 'rgb(106, 106, 106)'
dayP.style.position = 'absolute'
dayP.style.left = '4rem'
dayP.style.top = '3rem'
dayP.style.fontFamily = ''

if (mql.matches){
    dayP.style.fontSize =  '.9rem'
    dayP.style.left = '1.5rem'
    dayP.style.top = '1.3rem'
}

monthP.style.fontSize = '1.1rem'
monthP.style.color = 'rgb(106, 106, 106)'
monthP.style.position = 'absolute'
monthP.style.left = '15rem'
monthP.style.top = '3rem'

if (mql.matches){
    monthP.style.fontSize =  '.9rem'
    monthP.style.left = '8.7rem'
    monthP.style.top = '1.3rem'
}

yearP.style.fontSize = '1.1rem'
yearP.style.color = 'rgb(106, 106, 106)'
yearP.style.position = 'absolute'
yearP.style.right = '23.4rem'
yearP.style.top = '3rem'

if (mql.matches){
    yearP.style.fontSize = '.9rem'
    yearP.style.right = '5.4rem'
    yearP.style.top = '1.3rem'
}

yearCount.style.position = 'absolute'
yearCount.style.left = '-12rem'
yearCount.style.top = '-8rem'

if (mql.matches){
    yearCount.style.position = 'absolute'
    yearCount.style.top = '-5rem'
    yearCount.style.left = '-3.8rem'
}

monthCount.style.position = 'absolute'
monthCount.style.left = '-13rem'
monthCount.style.top = '-2rem'

if (mql.matches){
    monthCount.style.position = 'absolute'
    monthCount.style.top = '-1rem'
    monthCount.style.left = '-5rem'
}

dayCount.style.position = 'absolute'
dayCount.style.left = '-13rem'
dayCount.style.top = '4rem'

if (mql.matches){
    dayCount.style.position = 'absolute'
    dayCount.style.top = '3.2rem'
    dayCount.style.left = '-5rem'
}


calcuBtn.addEventListener('click', function(){
    let yearOld = ''
    let monthOld = ''
    let dayOld = ''
    if ((yearInput.value == '')){
        yearError.style.display = 'block'
        yearError.innerHTML = `This field is required`
        dayP.style.color = 'red'
        monthP.style.color = 'red'
        yearP.style.color = 'red'
        dayInput.style.borderColor = 'red'
        monthInput.style.borderColor = 'red'
        yearInput.style.borderColor = 'red'
    }
    else {
        if (yearInput.value > year){
            yearError.style.display = 'block'
            yearError.innerHTML = `Must be in the past`
            dayP.style.color = 'red'
            monthP.style.color = 'red'
            yearP.style.color = 'red'
            dayInput.style.borderColor = 'red'
            monthInput.style.borderColor = 'red'
            yearInput.style.borderColor = 'red'
        }
        else{
            if ((year == yearInput.value) && (monthInput.value > month)){
                yearError.style.display = 'block'
                yearError.innerHTML = `Must be in the past`
                dayP.style.color = 'red'
                monthP.style.color = 'red'
                yearP.style.color = 'red'
                dayInput.style.borderColor = 'red'
                monthInput.style.borderColor = 'red'
                yearInput.style.borderColor = 'red'
                monthError.style.display = 'block'
                monthError.innerHTML = `Must be in the past`
            }
            else{
                if ((year == yearInput.value) && (monthInput.value >= month) && (dayInput.value > day)){
                    yearError.style.display = 'block'
                    yearError.innerHTML = `Must be in the past`
                    dayP.style.color = 'red'
                    monthP.style.color = 'red'
                    yearP.style.color = 'red'
                    dayInput.style.borderColor = 'red'
                    monthInput.style.borderColor = 'red'
                    yearInput.style.borderColor = 'red'
                    monthError.style.display = 'block'
                    monthError.innerHTML = `Must be in the past`
                    dayError.style.display = 'block'
                    dayError.innerHTML = `Must be in the past`
                }
                else{
                    if ((isFinite(yearInput.value) == false) || (yearInput.value.includes('.'))){
                        yearError.style.display = 'block'
                        yearError.innerHTML = `Must be a valid year`
                        dayP.style.color = 'red'
                        monthP.style.color = 'red'
                        yearP.style.color = 'red'
                        dayInput.style.borderColor = 'red'
                        monthInput.style.borderColor = 'red'
                        yearInput.style.borderColor = 'red'
                    }
                    else{
                        yearOld =  Number(year) - Number(yearInput.value)
                        yearError.style.display = 'none'
                    }
                }
            }
        }
    }
    if ((monthInput.value > 12)){
        monthError.innerHTML = `Must be a valid month`
        monthError.style.display = 'block'
        dayP.style.color = 'red'
        monthP.style.color = 'red'
        yearP.style.color = 'red'
        dayInput.style.borderColor = 'red'
        monthInput.style.borderColor = 'red'
        yearInput.style.borderColor = 'red'
    }
    else{
        if ((isFinite(monthInput.value) == false) || (monthInput.value.includes('.'))){
            monthError.innerHTML = `Must be a valid month`
            monthError.style.display = 'block'
            dayP.style.color = 'red'
            monthP.style.color = 'red'
            yearP.style.color = 'red'
            dayInput.style.borderColor = 'red'
            monthInput.style.borderColor = 'red'
            yearInput.style.borderColor = 'red'
        }
        else{
            if (monthInput.value.length == ''){
                monthError.innerText = `This field is required`
                monthError.style.display = 'block'
                dayP.style.color = 'red'
                monthP.style.color = 'red'
                yearP.style.color = 'red'
                dayInput.style.borderColor = 'red'
                monthInput.style.borderColor = 'red'
                yearInput.style.borderColor = 'red'
            }
            else{
                if (monthInput.value  >  month){
                    yearOld = yearOld  -  1
                    month = month + 12 
                    monthOld = Number(month) - Number(monthInput.value)
                    monthError.style.display  = 'none'
                }
                else{
                    monthOld = Number(month) - Number(monthInput.value)
                    monthError.style.display  = 'none'
                }
            }
        }
    }
    if(((dayInput.value > 31) || (dayInput.value == 0))){
       dayError.innerHTML = `Must be a valid day`
       dayError.style.display = 'block'
       dayP.style.color = 'red'
       monthP.style.color = 'red'
       yearP.style.color = 'red'
       dayInput.style.borderColor = 'red'
       monthInput.style.borderColor = 'red'
       yearInput.style.borderColor = 'red'
    }
    else{
        if ((isFinite(dayInput.value) == false) || (dayInput.value.includes('.'))){
            dayError.innerHTML = `Must be a valid day`
            dayError.style.display = 'block'
            dayP.style.color = 'red'
            monthP.style.color = 'red'
            yearP.style.color = 'red'
            dayInput.style.borderColor = 'red'
            monthInput.style.borderColor = 'red'
            yearInput.style.borderColor = 'red'
        }
        else{
            if((dayInput.value > 30) && ((monthInput.value == 2) || (monthInput.value == 4))){
                dayError.innerHTML = `Must be a valid day`
                dayError.style.display = 'block'
                dayP.style.color = 'red'
                monthP.style.color = 'red'
                yearP.style.color = 'red'
                dayInput.style.borderColor = 'red'
                monthInput.style.borderColor = 'red'
                yearInput.style.borderColor = 'red'
            }
            else{
                if((dayInput.value > 30) && (monthInput.value == 6) || (monthInput.value == 9)){
                    dayError.innerHTML = `Must be a valid day`
                    dayError.style.display = 'block'
                    dayP.style.color = 'red'
                    monthP.style.color = 'red'
                    yearP.style.color = 'red'
                    dayInput.style.borderColor = 'red'
                    monthInput.style.borderColor = 'red'
                    yearInput.style.borderColor = 'red'
                }
                else{
                    if ((dayInput.value > 30) && (monthInput.value == 11)){
                        dayError.innerHTML = `Must be a valid day`
                        dayError.style.display = 'block'
                        dayP.style.color = 'red'
                        monthP.style.color = 'red'
                        yearP.style.color = 'red'
                        dayInput.style.borderColor = 'red'
                        monthInput.style.borderColor = 'red'
                        yearInput.style.borderColor = 'red'
                    }
                    else{
                        if ((dayInput.value > 29) && (monthInput.value == 2)){
                            dayError.innerHTML = `Must be a valid day`
                            dayError.style.display = 'block'
                            dayP.style.color = 'red'
                            monthP.style.color = 'red'
                            yearP.style.color = 'red'
                            dayInput.style.borderColor = 'red'
                            monthInput.style.borderColor = 'red'
                            yearInput.style.borderColor = 'red'
                        }
                        else{
                            if((dayInput.value > day) && ((monthInput.value == 4) || (monthInput.value == 6))){
                                day = day + 30
                                monthOld = monthOld - 1
                                dayOld = Number(day) - Number(dayInput.value)
                                dayError.style.display = 'none'
                            }
                            else{
                                if ((dayInput.value > day) && ((monthInput.value == 9) ||  (monthInput.value == 11))){
                                    day = day + 30
                                    monthOld = monthOld - 1
                                    dayOld = Number(day) - Number(dayInput.value)
                                    dayError.style.display = 'none'
                                }
                                else{
                                    if ((dayInput.value > day) && (monthInput.value == 2)){
                                        day = day +  28
                                        monthOld = monthOld - 1
                                        dayOld = Number(day) - Number(dayInput.value)
                                        dayError.style.display = 'none'
                                    }
                                    else{
                                        if((dayInput.value > day) && ((monthInput.value == 1) || (monthInput.value == 3) || (monthInput.value == 5))){
                                            day = day + 31
                                            monthOld = monthOld - 1
                                            dayOld = Number(day) - Number(dayInput.value)
                                            dayError.style.display = 'none'
                                        }
                                        else {
                                            if((dayInput.value > day) && ((monthInput.value == 7) || (monthInput.value == 8) || (monthInput.value == 10))){
                                                day = day + 31
                                                monthOld = monthOld - 1
                                                dayOld = Number(day) - Number(dayInput.value)
                                                dayError.style.display = 'none'
                                            }
                                            else{
                                                if ((dayInput.value > day) && ((monthInput.value == 12))){
                                                    day = day + 31
                                                    monthOld = monthOld - 1
                                                    dayOld = Number(day) - Number(dayInput.value)
                                                    dayError.style.display = 'none'
                                                }
                                                else{
                                                    dayOld = Number(day) - Number(dayInput.value) 
                                                    dayError.style.display = 'none'
                                                    
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    if ((dayError.style.display == 'none' && monthError.style.display == 'none') && (yearError.style.display == 'none')){
            localStorage.setItem('monthyi', monthOld)
            localStorage.setItem('dayyi',  dayOld)
            localStorage.setItem('yearyi', yearOld)
            localStorage.setItem('yearnor', yearInput.value )
            localStorage.setItem('monthnor', monthInput.value )
            localStorage.setItem('daynor', dayInput.value )
            location.reload()
    }
})

window.addEventListener('DOMContentLoaded', function(){
    if ((localStorage.getItem('monthyi') == null) || (localStorage.getItem('dayyi') == null ) || (localStorage.getItem('yearyi') == null)){
        monthOut.innerHTML = `- - ` 
        dayOut.innerHTML = `- - ` 
        yearOut.innerHTML = `- - ` 
    }
    else{
    }
    if ((localStorage.getItem('monthyi').length < 2)){
        monthOut.innerHTML = `0${localStorage.getItem('monthyi')} ` 
    }
    else{
        monthOut.innerHTML = `${localStorage.getItem('monthyi')} ` 
    }
    if ((localStorage.getItem('yearyi').length < 2)){
        yearOut.innerHTML = `0${localStorage.getItem('yearyi')} ` 
    }
    else{
        yearOut.innerHTML = `${localStorage.getItem('yearyi')} ` 
    }
    if ((localStorage.getItem('dayyi').length < 2)){
        dayOut.innerHTML = `0${localStorage.getItem('dayyi')} `
    }
    else{
        dayOut.innerHTML = `${localStorage.getItem('dayyi')} `
    }

    if ((localStorage.getItem('monthnor') == null) || (localStorage.getItem('yearnor') == null) || (localStorage.getItem('daynor') == null)){
        dayInput.value = ''
        monthInput.value = ''
        yearInput.value = ''
    }
    else{
        monthInput.value = localStorage.getItem('monthnor')
        dayInput.value = localStorage.getItem('daynor')
        yearInput.value = localStorage.getItem('yearnor')
    }
})


yearInput.addEventListener('mouseover', function(){
    yearInput.style.borderColor = 'purple'
    yearInput.style.cursor = 'pointer'
})

yearInput.addEventListener('mouseout', function(){
    yearInput.style.borderColor = 'rgb(198, 198, 198)'
})

dayInput.addEventListener('mouseout', function(){
    dayInput.style.borderColor = 'rgb(198, 198, 198)'
})

dayInput.addEventListener('mouseover', function(){
    dayInput.style.borderColor = 'purple'
    dayInput.style.cursor = 'pointer'
})

monthInput.addEventListener('mouseover', function(){
    monthInput.style.borderColor = 'purple'
    monthInput.style.cursor = 'pointer'
})

monthInput.addEventListener('mouseout', function(){
    monthInput.style.borderColor = 'rgb(198, 198, 198)'
})