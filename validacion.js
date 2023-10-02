//Haz tú validación en javascript acá

const form = document.querySelector(".formcontato__form");
const inNombre = document.querySelector(".inNombre");
const inEmail = document.querySelector(".inEmail");
const inAsunto = document.querySelector(".inAsunto");
const inMensaje = document.querySelector(".inMensaje");

const mensajeError = document.querySelectorAll(".mensaje-error");

form.addEventListener("submit", function(e) {
    
    e.preventDefault();
    // Validar nombre
    let message = "";
    if (inNombre.value.trim() === "") {
        message += "El campo nombre no puede estar vacío.\n";
    }
    if (inNombre.value.length > 50) {
        message += "El campo nombre no puede tener más de 50 caracteres.\n";
    }
    
    if (message !== "") {
        inNombre.classList.add("is-invalid");
        mensajeError[0].textContent = message;
    } else {
        inNombre.classList.remove("is-invalid");
        mensajeError[0].textContent = "";
    }
});

form.addEventListener("submit", function(e) {
    
    e.preventDefault();
    // Validar email
    let message = "";
    const regexEmail = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    
    if (inEmail.value.trim() === "") {
        message += "El campo de correo electrónico no puede estar vacío. \n";
    }
    if (!regexEmail.test(inEmail.value)) {
        message += "El correo electrónico debe estar en formato texto@texto.com.\n";
    }
    
    if (message !== "") {
        inEmail.classList.add("is-invalid");
        mensajeError[1].textContent = message;
    } else {
        inEmail.classList.remove("is-invalid");
        mensajeError[1].textContent = "";
    }
});

form.addEventListener("submit", function(e) {
    
    e.preventDefault();
    // Validar asunto
    let message = "";
    
    if (inAsunto.value.trim() === "") {
        message += "El campo de asunto no puede estar vacío. \n";
    }
    if (inAsunto.value.length > 50) {
        message += "El asunto no puede tener más de 50 caracteres.\n";
    }
    
    if (message !== "") {
        inAsunto.classList.add("is-invalid");
        mensajeError[2].textContent = message;
    } else {
        inAsunto.classList.remove("is-invalid");
        mensajeError[2].textContent = "";
    }
});

form.addEventListener("submit", function(e) {
    
    e.preventDefault();
    // Validar email
    let message = "";
    
    if (inMensaje.value.trim() === "") {
        message += "El campo de mensaje no puede estar vacío. \n";
    }
    if (inMensaje.value.length > 300) {
        message += "El mensaje debe tener menos de 300 caracteres.\n";
    }
    
    if (message !== "") {
        inMensaje.classList.add("is-invalid");
        mensajeError[3].textContent = message;
    } else {
        inMensaje.classList.remove("is-invalid");
        mensajeError[3].textContent = "";
    }
});

// Validar boton 
const btnSub = document.querySelector(".formcontato__botao")
const inputs = [inNombre,
    inEmail,
    inAsunto,
    inMensaje];

    inputs.forEach(input => {
        input.addEventListener("input", function() {
            let allFilled = true;
            inputs.forEach(input => {
              if (input.value.trim() === "") {
                allFilled = false;
              }
            });
            btnSub.disabled = !allFilled; 
        })
    })