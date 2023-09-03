function dropdownDiv(hovered, toDrop){
    hovered.addEventListener("mouseenter", () => {

        toDrop.style.zIndex = "10";
        toDrop.style.top = "84px";
        toDrop.style.opacity = "1";
        bg.style.display = "block";
    });
    
    
    
    hovered.addEventListener("mouseleave", () => {
        // toDrop.style.display = "none";
        toDrop.style.top = "-130%";
        
        toDrop.style.opacity = "0";
        toDrop.style.zIndex = "0";
        
        bg.style.display = "none"
    });
    
    toDrop.addEventListener("mouseenter", () => {
    
        // toDrop.style.display = "block";
        toDrop.style.top = "84px";
        toDrop.style.zIndex = "10";
        
        toDrop.style.opacity = "1";
    });
    
    toDrop.addEventListener("mouseleave", () => {
        // toDrop.style.display = "none";   
        toDrop.style.top = "-130%";
        toDrop.style.opacity = "0";
        
        bg.style.display = "none"
        toDrop.style.zIndex = "0";
    });

}


function cartDisplay() {
    const cartBlock = document.getElementById("cart");
    cartBlock.style.right = "0"
    cartBlock.style.opacity = "1"
    bg.style.display = "block"
    bg.style.zIndex = "25"
}

function closeCart() {
    const cartBlock = document.getElementById("cart");  
    cartBlock.style.right = "-100%"
    
    cartBlock.style.opacity = "0"
    bg.style.display = "none"
    bg.style.zIndex = "5"
}

function displayProf(){
    const pf = document.getElementById("prof")
    pf.style.right = "0"
    bg.style.display = "block"
    bg.style.zIndex = "25"
}

function closeProf() {
    const pf = document.getElementById("prof");
    
    pf.style.right = "-100%"
    bg.style.display = "none"
    bg.style.zIndex = "5"
}


function displayHamburgerMenu(){
    const hbm = document.getElementById("hbmenu");
    hbm.style.left = "0"
}

function closeHamburgerMenu(){
    const hbm = document.getElementById("hbmenu");
    hbm.style.left = "-130%"
}



var bg = document.getElementById("bgBlur");

const navd1 = document.getElementById("nav-b-1");
const drp1 = document.getElementById("drop1");

dropdownDiv(navd1, drp1)


const navd2 = document.getElementById("nav-b-2");
const drp2 = document.getElementById("drop2");
dropdownDiv(navd2, drp2)

const navd3 = document.getElementById("nav-b-3");
const drp3 = document.getElementById("drop3");
dropdownDiv(navd3, drp3)

