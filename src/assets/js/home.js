const mobileBtn = document.getElementById('mobile-btn');
const menu = document.getElementById('navbar');


mobileBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});