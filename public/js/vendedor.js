const productos = [
    { titulo: "Producto", precio: "$20.000", img: "/images/placeholder.png" },
    { titulo: "Producto", precio: "$30.000", img: "/images/placeholder.png" },
    { titulo: "Producto", precio: "$15.000", img: "/images/placeholder.png" },
    { titulo: "Producto", precio: "$50.000", img: "/images/placeholder.png" },
    { titulo: "Producto", precio: "$25.000", img: "/images/placeholder.png" },
    { titulo: "Producto", precio: "$18.000", img: "/images/placeholder.png" }
];

const contenedor = document.getElementById("misProductos");

function render() {
    contenedor.innerHTML = "";

    productos.forEach(p => {
        contenedor.innerHTML += `
            <div class="vendor-card">
                <img src="${p.img}">
                
                <div class="vendor-info">
                    <p><strong>${p.titulo}</strong></p>
                    <p>${p.precio}</p>
                </div>

                <div class="vendor-edit">
                    <button>Editar ✏️</button>
                </div>
            </div>
        `;
    });
}

render();