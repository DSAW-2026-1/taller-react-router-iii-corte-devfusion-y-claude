// 🔥 SACAR ID DE LA URL
const path = window.location.pathname;
const id = path.split("/").pop();

// 🔥 MOCK (luego backend real)
const productos = {
    1: {
        titulo: "Producto 1",
        precio: "$20.000",
        descripcion: "Descripción del producto 1...",
        img: "/images/placeholder.png"
    },
    2: {
        titulo: "Producto 2",
        precio: "$35.000",
        descripcion: "Descripción del producto 2...",
        img: "/images/placeholder.png"
    }
};

// 🔥 OBTENER PRODUCTO
const producto = productos[id];

// 🔥 SI EXISTE
if (producto) {
    document.getElementById("titulo").textContent = producto.titulo;
    document.getElementById("precio").textContent = producto.precio;
    document.getElementById("descripcion").textContent = producto.descripcion;
    document.getElementById("imgProducto").src = producto.img;
} else {
    document.querySelector(".product-container").innerHTML = "<h2>Producto no encontrado</h2>";
}