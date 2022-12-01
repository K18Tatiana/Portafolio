const arrowRight = document.getElementById("button__right");
const arrowLeft = document.getElementById("button__left");
let imgUiDesigns = document.getElementById("work__section__ui__designs");
let imgDesigns = document.getElementById("work__section__designs");
let imgMockups = document.getElementById("work__section__mockups");
const navToggle = document.querySelector(".nav__toggle");
const navClose = document.querySelector(".nav__close");
const navMenu = document.querySelector(".menu__nav");
const mainImg = document.querySelector(".main__work__section");
const leftImg = document.querySelector(".left__work__section");
const rightImg = document.querySelector(".right__work__section");
const buttonSend = document.querySelector(".btn");
let width;

function getPageWidth() {
    const pageWidth = document.documentElement.clientWidth;
    console.log(pageWidth);
    if(pageWidth <= 767) {
        imgUiDesigns.style.visibility = "initial";
        imgDesigns.style.visibility = "hidden";
        imgMockups.style.visibility = "hidden";
    } else {
        imgUiDesigns.style.visibility = "initial";
        imgDesigns.style.visibility = "initial";
        imgMockups.style.visibility = "initial";
    }
    width = pageWidth;
}

arrowRight.addEventListener('click', function(){
    if(width <= 767){
        const styleImgUiDesigns = imgUiDesigns.style.visibility;
        const styleImgDesigns = imgDesigns.style.visibility;
        const styleImgMockups = imgMockups.style.visibility;
        const images = [styleImgDesigns, styleImgUiDesigns, styleImgMockups];
        const indexCurrentImage = images.findIndex(img => img !== "hidden");
        if(indexCurrentImage === 0) {
            imgUiDesigns.style.visibility = "initial";
            imgDesigns.style.visibility = "hidden";
        } else if(indexCurrentImage === 1) {
            imgMockups.style.visibility = "initial";
            imgUiDesigns.style.visibility = "hidden";
        } else {
            imgDesigns.style.visibility = "initial";
            imgMockups.style.visibility = "hidden";
        }
    } else {
        if(imgUiDesigns.classList.contains("main__work__section")) {
            imgUiDesigns.classList.add("right__work__section");
            imgUiDesigns.classList.remove("main__work__section");
        } else if(imgUiDesigns.classList.contains("right__work__section")) {
            imgUiDesigns.classList.add("left__work__section");
            imgUiDesigns.classList.remove("right__work__section");
        } else {
            imgUiDesigns.classList.add("main__work__section");
            imgUiDesigns.classList.remove("left__work__section");
        }
        if(imgDesigns.classList.contains("main__work__section")) {
            imgDesigns.classList.add("right__work__section");
            imgDesigns.classList.remove("main__work__section");
        } else if(imgDesigns.classList.contains("right__work__section")) {
            imgDesigns.classList.add("left__work__section");
            imgDesigns.classList.remove("right__work__section");
        } else {
            imgDesigns.classList.add("main__work__section");
            imgDesigns.classList.remove("left__work__section");
        }
        if(imgMockups.classList.contains("main__work__section")) {
            imgMockups.classList.add("right__work__section");
            imgMockups.classList.remove("main__work__section");
        } else if(imgMockups.classList.contains("right__work__section")) {
            imgMockups.classList.add("left__work__section");
            imgMockups.classList.remove("right__work__section");
        } else {
            imgMockups.classList.add("main__work__section");
            imgMockups.classList.remove("left__work__section");
        }
    }
});

arrowLeft.addEventListener('click', function(){
    if(width <= 767) {
        const styleImgUiDesigns = imgUiDesigns.style.visibility;
        const styleImgDesigns = imgDesigns.style.visibility;
        const styleImgMockups = imgMockups.style.visibility;
        const images = [styleImgDesigns, styleImgUiDesigns, styleImgMockups];
        const indexCurrentImage = images.findIndex(img => img !== "hidden");
        if(indexCurrentImage === 0) {
            imgMockups.style.visibility = "initial";
            imgDesigns.style.visibility = "hidden";
        } else if(indexCurrentImage === 1) {
            imgDesigns.style.visibility = "initial";
            imgUiDesigns.style.visibility = "hidden";
        } else {
            imgUiDesigns.style.visibility = "initial";
            imgMockups.style.visibility = "hidden";
        }
    } else {
        if(imgUiDesigns.classList.contains("main__work__section")) {
            imgUiDesigns.classList.add("left__work__section");
            imgUiDesigns.classList.remove("main__work__section");
        } else if(imgUiDesigns.classList.contains("right__work__section")) {
            imgUiDesigns.classList.add("main__work__section");
            imgUiDesigns.classList.remove("right__work__section");
        } else {
            imgUiDesigns.classList.add("right__work__section");
            imgUiDesigns.classList.remove("left__work__section");
        }
        if(imgDesigns.classList.contains("main__work__section")) {
            imgDesigns.classList.add("left__work__section");
            imgDesigns.classList.remove("main__work__section");
        } else if(imgDesigns.classList.contains("right__work__section")) {
            imgDesigns.classList.add("main__work__section");
            imgDesigns.classList.remove("right__work__section");
        } else {
            imgDesigns.classList.add("right__work__section");
            imgDesigns.classList.remove("left__work__section");
        }
        if(imgMockups.classList.contains("main__work__section")) {
            imgMockups.classList.add("left__work__section");
            imgMockups.classList.remove("main__work__section");
        } else if(imgMockups.classList.contains("right__work__section")) {
            imgMockups.classList.add("main__work__section");
            imgMockups.classList.remove("right__work__section");
        } else {
            imgMockups.classList.add("right__work__section");
            imgMockups.classList.remove("left__work__section");
        }
    }
});

/*
document.querySelector(".work__section").addEventListener("click", (event) => {
    if(event.target.classList.contains("img__left") || event.target.classList.contains("second__work__section__subtext") || event.target.classList.contains("h3__designs")){
        leftImg.classList.remove("left__work__section", "second__work__section__subtext");
        document.querySelector(".designs").style.height = "142px";
        document.querySelector(".img__left").style.height = "142px";
        mainImg.classList.remove("main__work__section", "main__work__section__subtext");
        mainImg.classList.add("right__work__section", "second__work__section__subtext");
        document.querySelector(".ui__designs").style.height = "125px";
        rightImg.classList.remove("right__work__section", "second__work__section__subtext");
        rightImg.classList.add("left__work__section");
    } else if(event.target.classList.contains("img__left")){

    }
});
*/

navToggle.addEventListener("click", () => navMenu.classList.toggle("menu__nav__visible"));
navClose.addEventListener("click", () => navMenu.classList.remove("menu__nav__visible"));
buttonSend.addEventListener("click", () => swal('Gracias por contactarme', 'Su mensaje fue enviado correctamente', 'success'));