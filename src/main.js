let burguerButton = document.querySelector(".navPhone__burguer");
let xButton = document.querySelector(".navPhone__burguerImg");
let menuPhone = document.querySelector(".navPhone__menu");
let optConnectPhone = document.querySelector(".navPhone__sections--connect");
let submenuPhone = document.querySelector(".navPhone__submenu");
let optConnectDesktop = document.querySelector(".navDesktop__sections--connect");
let submenuDesktop = document.querySelector(".navDesktop__subcont");

burguerButton.addEventListener("click", () => {

    menuPhone.classList.toggle(".navPhone__menu--none");
    
    if(menuPhone.classList.contains(".navPhone__menu--none")) {

        menuPhone.classList.remove("navPhone__menu--none");
        xButton.src = "images/icon-close.svg";

    } else {

        menuPhone.classList.add("navPhone__menu--none");
        xButton.src = "images/icon-hamburger.svg";
    }
    
    

});

optConnectPhone.addEventListener("click", () => {

    submenuPhone.classList.toggle("navPhone__submenu--none");
});

optConnectDesktop.addEventListener("click", () => {

    submenuDesktop.classList.toggle("navDesktop__subcont--none");
});