const d = document;

const burger = d.getElementById("icon-burger-mobile");
const nav = d.getElementById("cont-nav-mobile");


burger.addEventListener("click", () => {
    nav.classList.toggle("MostrarMenuJs")       
})  


const $closePrecio = d.getElementById("close-precios");
const $SectionPrecios = d.querySelector(".section-precios")
const $IconPrecios = d.querySelector(".icon-precios");

d.addEventListener("click", (e) => {
    if (e.target.matches("#close-precios")) {
        d.querySelector(".section-precios").classList.add("ClosePreciosJs")
    }
    if (e.target.matches(".icon-precios")) {
        d.querySelector(".section-precios").classList.remove("ClosePreciosJs")
    }
})