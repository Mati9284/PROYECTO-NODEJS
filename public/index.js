const seccionProductos = document.querySelector("#productos");

fetch("/productos")
    .then(respuesta => respuesta.json())
    .then(datos => {

        datos.forEach(producto => {
            if (producto.precioDescuento.toLocaleString('es-AR') !== "") {
                seccionProductos.innerHTML += `
                <a href="" class="cajaProducto">
                    <img class="imagenProducto" src="${producto.urlImagen}" alt="${producto.nombre}">
                    <h3 class="nombreProducto">${producto.nombre}</h3>
                    <p class="precioProductoOferta">$${producto.precioDescuento.toLocaleString('es-AR')}</p>
                    <p class="precioProductoTachado">$${producto.precio.toLocaleString('es-AR')}</p>
                </a>
            `;
            }
            else {
                seccionProductos.innerHTML += `
                <a href="" class="cajaProducto">
                    <img class="imagenProducto" src="${producto.urlImagen}" alt="${producto.nombre}">
                    <h3 class="nombreProducto">${producto.nombre}</h3>
                    <p class="precioProducto">$${producto.precio.toLocaleString('es-AR')}</p>
                </a>
            `;
            }
        });

    });

fetch("/productos/oferta")
    .then(respuesta => respuesta.json())
    .then(datos => {

        datos.forEach(producto => {
            seccionProductos.innerHTML += `
                
            `;
        });

    });