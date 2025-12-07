// Animation
const headerBox = document.querySelector(".header__box");
const headerMessage = document.querySelector(".header__message");

const glitch = () => {
    setInterval(() => {
        headerMessage.classList.toggle("glitch");
    }, 1000);
};

glitch();

