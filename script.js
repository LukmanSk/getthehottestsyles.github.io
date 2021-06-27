// 1. Add All Elements
const hamburger = document.querySelector(".hamburger")
const menu = document.querySelector(".menu")
const overlay = document.querySelector(".overlay")
const closeMenu = document.querySelector(".close")

// 2. open/slide menu bar when hamburger is clicked

hamburger.addEventListener("click", () => {
    menu.classList.add("slide")
    overlay.classList.add("open")
})
overlay.addEventListener("click", () => {
    menu.classList.remove("slide")
    overlay.classList.remove("open")
})

closeMenu.addEventListener("click", () => {
    menu.classList.remove("slide")
    overlay.classList.remove("open")
})