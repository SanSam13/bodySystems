import { tns } from "../../../node_modules/tiny-slider/src/tiny-slider.js";
var slider = tns({
    container: '.my-slider',
    gutter: 20,
    items: 1,
    responsive: {
        768: {
          items: 2
        },
        1024: {
            items: 3
        },
        1280: {
            items: 4
        },
    },
    slideBy: 'page',
    autoplay: true,
    controls: false,
    nav: false,
    autoplayButtonOutput: false
});


const mobileBtn = document.getElementById('mobile-btn');
const menu = document.getElementById('navbar');


mobileBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

const contactForm = document.getElementById('contactForm'),
name = document.querySelector(".name"),
company = document.querySelector(".company"),
email = document.querySelector(".email");
var isValidate = false;
const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


contactForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    checkError();
    if (isValidate){
        sendContact();
    }
    //const demo = checkError() === true ? sendContact : null;

})


//Función para validar los campos del formulario de Contacto
function checkError() {
    if (name.value === "") {
        errorMsg("El nombre es obligatorio", name)
    } else  if (company.value === ""){
        errorMsg("La compañía es obligatorio", company)
    } else  if (email.value === ""){
        errorMsg("El email es obligatorio", email)
        /* if (email.value.match(mailFormat)) {
            errorMsg("El email es invalido", email)
        } */
    } else{
        isValidate = true;
    }
}

function errorMsg(msg, input) {
    const parentElement = input.parentElement;
    const message = parentElement.querySelector(".error");
    message.innerText = msg;
    message.classList.remove("hidden");
    message.classList.add("block");
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};

function sendContact() {
    console.log('Se envian los datos');
}