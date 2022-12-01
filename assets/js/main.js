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
const buttonSend = document.getElementById("btn__send");
const imgIllusWoman = document.querySelector(".illustration__woman");
const imgIllus2 = document.querySelector(".illustration2");
const imgIllus5 = document.querySelector(".illustration5");
const imgIllus6 = document.querySelector(".illustration6");
let width;

function getPageSize() {
    const pageWidth = document.documentElement.clientWidth;
    const pageHeight = document.documentElement.clientHeight;
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
    const leftImgIllusWoman = imgIllusWoman.offsetLeft;
    const leftImgIllus2 = imgIllus2.offsetLeft;
    const leftImgIllus5 = imgIllus5.offsetLeft;
    const leftImgIllus6 = imgIllus6.offsetLeft;
    
    imgIllusWoman.style.width = `${pageWidth - leftImgIllusWoman}px`;
    imgIllus2.style.width = `${pageWidth - leftImgIllus2}px`;
    imgIllus5.style.width = `${pageWidth - leftImgIllus5}px`;
    imgIllus6.style.width = `${pageWidth - leftImgIllus6}px`;
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

navToggle.addEventListener("click", () => navMenu.classList.toggle("menu__nav__visible"));
navClose.addEventListener("click", () => navMenu.classList.remove("menu__nav__visible"));
buttonSend.addEventListener("click", () => swal('Gracias por contactarme', 'Su mensaje fue enviado correctamente', 'success'));