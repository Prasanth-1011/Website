// Animation
const headerBox = document.querySelector(".header__box");
const headerMessage = document.querySelector(".header__message");

const glitch = () => {
    setInterval(() => {
        headerMessage.classList.toggle("glitch");
    }, 1000);
};

glitch();

// Mobile Menu
const smallMenu = document.querySelector(".header__mobile__links");
const iconsMenu = () => {

    if (window.innerWidth <= 576) {
        smallMenu.innerHTML = `
            <span class="material-icons menu">menu</span>
            <a href="#home" class="header__links__home"><i class="material-icons">home</i></a>
            <a href="#trending" class="header__links__trending"><i class="material-icons">trending_up</i></a>
            <a href="./Collections.html"><i class="material-icons">local_mall</i></a>
            <a href="./Contact.html"><i class="material-icons">chat</i></a>
        `
    }
};

iconsMenu();
