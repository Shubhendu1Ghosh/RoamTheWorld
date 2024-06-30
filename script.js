'use strict';

/** navbar toggle **/

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const header = document.querySelector("[data-header]");

navToggleBtn.addEventListener("click", function(){
    this.classList.toggle("active");
    header.classList.toggle("active");
});


/** Show go top btn when scroll window to 1000px **/


const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
    window.scrollY >= 1000? goTopBtn.classList.add("active")
    : goTopBtn.classList.remove("active");
});