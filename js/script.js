const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.7,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

let openHamburger = document.querySelector(".open-menu")
openHamburger.addEventListener("click", () => {
    document.querySelector(".burger").style.display = "block"
    document.querySelector(".close-menu").style.display = "block"
    document.querySelector(".open-menu").style.display = "none"
})

let closeHamburger = document.querySelector(".close-menu")
closeHamburger.addEventListener("click", () => {
    document.querySelector(".burger").style.display = "none"
    document.querySelector(".close-menu").style.display = "none"
    document.querySelector(".open-menu").style.display = "block"
})

let aCloseHamburger = document.querySelector(".close-a")
aCloseHamburger.addEventListener("click", () => {
    document.querySelector(".burger").style.display = "none"
    document.querySelector(".close-menu").style.display = "none"
    document.querySelector(".open-menu").style.display = "block"
})

let a1CloseHamburger = document.querySelector(".close-a1")
a1CloseHamburger.addEventListener("click", () => {
    document.querySelector(".burger").style.display = "none"
    document.querySelector(".close-menu").style.display = "none"
    document.querySelector(".open-menu").style.display = "block"
})

let a2CloseHamburger = document.querySelector(".close-a2")
a2CloseHamburger.addEventListener("click", () => {
    document.querySelector(".burger").style.display = "none"
    document.querySelector(".close-menu").style.display = "none"
    document.querySelector(".open-menu").style.display = "block"
})

let a3CloseHamburger = document.querySelector(".close-a3")
a3CloseHamburger.addEventListener("click", () => {
    document.querySelector(".burger").style.display = "none"
    document.querySelector(".close-menu").style.display = "none"
    document.querySelector(".open-menu").style.display = "block"
})

let burgerMenu = document.querySelector(".burger--menu")
burgerMenu.addEventListener("click", () => {
    document.querySelector(".burger").style.display = "none"
    document.querySelector(".close-menu").style.display = "none"
    document.querySelector(".open-menu").style.display = "block"
})