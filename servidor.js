const express = require("express");

const app = express();

app.use(express.static("public"));

const productos = [
    {
        id: 1,
        nombre: "Malla Gris",
        categoria: "Mallas",
        urlImagen: "/assets/img/Carrito.png",
        tipoMoneda: "",
        precioDescuento: 60999,
        precio: 80999
    },
    {
        id: 2,
        nombre: "Antiparra Blanca",
        categoria: "Antiparras",
        urlImagen: "/assets/img/Carrito.png",
        tipoMoneda: "",
        precioDescuento: "",
        precio: 30000
    },
    {
        id: 3,
        nombre: "Ojotas Negras",
        categoria: "Ojotas",
        urlImagen: "/assets/img/Carrito.png",
        tipoMoneda: "",
        precioDescuento: 25500,
        precio: 30000
    },
    {
        id: 4,
        nombre: "Ojotas Blancas",
        categoria: "Ojotas",
        urlImagen: "/assets/img/Carrito.png",
        tipoMoneda: "",
        precioDescuento: 25500,
        precio: 30000
    },
    {
        id: 5,
        nombre: "Ojotas Amarillas",
        categoria: "Ojotas",
        urlImagen: "/assets/img/Carrito.png",
        tipoMoneda: "",
        precioDescuento: 25500,
        precio: 30000
    },
    {
        id: 6,
        nombre: "Ojotas Verdes",
        categoria: "Ojotas",
        urlImagen: "/assets/img/Carrito.png",
        tipoMoneda: "",
        precioDescuento: 25500,
        precio: 30000
    }
];

app.get("/productos", (solicitud, respuesta) => {
    respuesta.json(productos);
});

app.get("/productos/:id", (solicitud, respuesta) => {

    const id = Number(solicitud.params.id);

    const producto = productos.find(producto => producto.id === id);

    if (!producto) {
        return respuesta.status(404).json({
            mensaje: "Producto no encontrado"
        });
    }

    respuesta.json(producto);
});

app.use((solicitud, respuesta, next) => {
    respuesta.status(404).send('Recurso no encontrado');
});

app.listen(3000, () => {
    console.log("http://localhost:3000");
});