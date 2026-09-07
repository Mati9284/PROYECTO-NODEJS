
// LAS 3 IMÁGENES DEL CARRUSEL

const imagen_carrusel_1 = document.querySelector("#imagen_carrusel_1");
const imagen_carrusel_2 = document.querySelector("#imagen_carrusel_2");
const imagen_carrusel_3 = document.querySelector("#imagen_carrusel_3");

// LOS BOTONES PARA CORRER LAS IMÁGENES

const boton_imagen_izquierda = document.querySelector("#boton_imagen_izquierda");
const boton_imagen_derecha = document.querySelector("#boton_imagen_derecha");

// VARIABLE SOBRE EL CAMBIO DE IMÁGENES

let numeroImagen = 0;//| 0=img1 | 1=img2 | 2=img3

// INICIALIZAR PARA QUE SE MUESTRE LA PRIMERA IMG

imagen_carrusel_1.style.display = "flex";

// BOTÓN IZQUIERDA

boton_imagen_izquierda.addEventListener("click", () => {
    if (numeroImagen == 0) {
        imagen_carrusel_1.style.display = "none";
        imagen_carrusel_3.style.display = "none";
        imagen_carrusel_3.style.display = "flex";
        numeroImagen = 2;
    }
    else if (numeroImagen == 1) {
        imagen_carrusel_1.style.display = "flex";
        imagen_carrusel_2.style.display = "none";
        imagen_carrusel_3.style.display = "none";
        numeroImagen = 0;
    }
    else if (numeroImagen == 2) {
        imagen_carrusel_1.style.display = "none";
        imagen_carrusel_2.style.display = "flex";
        imagen_carrusel_3.style.display = "none";
        numeroImagen = 1;
    }
});

boton_imagen_derecha.addEventListener("click", () => {
    if (numeroImagen == 0) {
        imagen_carrusel_1.style.display = "none";
        imagen_carrusel_2.style.display = "flex";
        imagen_carrusel_3.style.display = "none";
        numeroImagen = 1;
    }
    else if (numeroImagen == 1) {
        imagen_carrusel_1.style.display = "none";
        imagen_carrusel_2.style.display = "none";
        imagen_carrusel_3.style.display = "flex";
        numeroImagen = 2;
    }
    else if (numeroImagen == 2) {
        imagen_carrusel_1.style.display = "flex";
        imagen_carrusel_2.style.display = "none";
        imagen_carrusel_3.style.display = "none";
        numeroImagen = 0;
    }
});

// PARA QUE ESTÉ PASANDO IMÁGENES

setInterval(() => {
    numeroImagen++;
    if (numeroImagen == 0) {
        imagen_carrusel_1.style.display = "none";
        imagen_carrusel_2.style.display = "flex";
        imagen_carrusel_3.style.display = "none";
        numeroImagen = 1;
    }
    if (numeroImagen == 1) {
        imagen_carrusel_1.style.display = "none";
        imagen_carrusel_2.style.display = "none";
        imagen_carrusel_3.style.display = "flex";
        numeroImagen = 2;
    }
    if (numeroImagen == 2) {
        imagen_carrusel_1.style.display = "flex";
        imagen_carrusel_2.style.display = "none";
        imagen_carrusel_3.style.display = "none";
        numeroImagen = 0;
    }
}, 3000);