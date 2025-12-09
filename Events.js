// Header Message
const messages = [
    "Enjoy Free Delivery, Returns, And Exchanges.",
    "Signup And Get Welcome Bonus 20% On Your First Purchase.",
    "Refer Friend And Earn Discount Voucher 10%."
];

let index = 0;

setInterval(() => {
    headerMessage.textContent = messages[index];
    index = (index + 1) % messages.length;
}, 2000);

// Animation
const headerBox = document.querySelector(".header__box");
const headerMessage = document.querySelector(".header__message");

const glitch = () => {
    setInterval(() => {
        headerMessage.classList.toggle("glitch");
    }, 1000);
};

glitch();

// Close Message
const closeMessage = document.querySelector(".align-center .disturb");
const headerMobileLinks = document.querySelector(".header__mobile__links");
const body = document.querySelector("body");

closeMessage.addEventListener("click", () => {
    headerBox.setAttribute("style", "display: none;");
    headerMobileLinks.setAttribute("style", "top: 0;");
    body.setAttribute("style", "scroll-padding-top: 3rem;");
});

// Menu
const smallMenu = document.querySelector(".header__mobile__links");
const iconsMenu = () => {

    if (window.innerWidth <= 576) {
        smallMenu.innerHTML = `
            <span class="material-icons menu">menu</span>
            <a href="#home" class="header__links__home"><i class="material-icons">home</i></a>
            <a href="#classics"><i class="material-symbols-outlined">stack_star</i></a>
            <a href="#trending" class="header__links__trending"><i class="material-icons">trending_up</i></a>
            <a href="./Collections.html"><i class="material-icons">local_mall</i></a>
            <a href="./Contact.html"><i class="material-icons">chat</i></a>
        `
    }
};

iconsMenu();

// Mobile Menu
const menus = document.querySelectorAll(".material-icons.menu");
menus.forEach(item => {
    item.addEventListener("click", () => {
        if (headerMobileLinks.style.left === "0px") {
            headerMobileLinks.style.left = "-100%";
        } else {
            headerMobileLinks.style.left = "0";
        }
    });
});


const home = document.querySelectorAll(".header__links__home");
home.forEach(item => {
    item.addEventListener("click", () => {
        let scrollPaddingTop = body.style.scrollPaddingTop;
        body.setAttribute("style", "scroll-padding-top: 10rem;");
        setTimeout(() => {
            body.setAttribute("style", `scroll-padding-top: ${scrollPaddingTop};`)
        }, 300);
    });
});