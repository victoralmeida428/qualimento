const btnMenu = document.querySelector('.btnMenu');
const menu = document.querySelector('.menu-inicial');

function handleButtonClick (event) {
    event.preventDefault();
    menu.classList.toggle('active');

}

btnMenu.addEventListener("click", handleButtonClick);
