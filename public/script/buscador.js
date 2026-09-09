//BUSCADOR HTML

    const buscador_de_productos = document.getElementById("buscador_productos");
    const regex_buscador_de_productos_gorras = /gorras|gorra|/i;
    
// PARA GUARDAR EL VALOR DEL BUSCADOR

let valor_buscador_de_productos = "";

buscador_de_productos.addEventListener("input", function() {
    valor_buscador_de_productos = buscador_de_productos.value;
});

// PARA COMPROBAR QUÉ BUSCÓ

buscador_de_productos.addEventListener("keydown", function(event) {
    if (event.key === "Enter" && regex_buscador_de_productos_gorras.test(valor_buscador_de_productos) == true) {
        
    }
});