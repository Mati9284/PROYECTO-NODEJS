const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/productos", (solicitud, respuesta) => {
    respuesta.json();
});

app.use((solicitud, respuesta, next) => {
    respuesta.status(404).send('Recurso no encontrado');
    setInterval(() => {
        respuesta.json();
    }, 3000);
});


app.listen(3000, () => {
    console.log("http://localhost:3000");
});