// let webber = document.querySelector(".webber")
// let gray = document.querySelector(".gray")
// let thompson = document.querySelector(".thompson")
let webect = document.querySelector(".webect")
let grayfect = document.querySelector(".grayfect")
let tomect = document.querySelector(".tomect")
let markRead = document.querySelector(".mark_read")
let unreadCount = document.querySelector(".unread_count")

markRead.addEventListener('click', function(){
    grayfect.style.display = 'none'
    tomect.style.display = 'none'
    webect.style.display = 'none'
    unreadCount.innerHTML = `0`
})

grayfect.addEventListener('mouseover', function(){
    grayfect.style.display = 'none'
    unreadCount.innerHTML = `${Number(unreadCount.innerHTML) - Number(1)}`
})

webect.addEventListener('mouseover', function(){
    webect.style.display = 'none'
    unreadCount.innerHTML = `${Number(unreadCount.innerHTML) - Number(1)}`
})

tomect.addEventListener('mouseover', function(){
    tomect.style.display = 'none'
    unreadCount.innerHTML = `${Number(unreadCount.innerHTML) - Number(1)}`
})