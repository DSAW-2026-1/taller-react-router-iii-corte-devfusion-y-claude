// ===============================
// 🧠 PRODUCTOS MOCK
// ===============================
const productos = [
    { id: 1, nombre: "Producto 1", precio: "$20.000", imagen: "/images/placeholder.png" },
    { id: 2, nombre: "Producto 2", precio: "$35.000", imagen: "/images/placeholder.png" },
    { id: 3, nombre: "Producto 3", precio: "$15.000", imagen: "/images/placeholder.png" },
    { id: 4, nombre: "Producto 4", precio: "$50.000", imagen: "/images/placeholder.png" },
    { id: 5, nombre: "Producto 5", precio: "$18.000", imagen: "/images/placeholder.png" },
    { id: 6, nombre: "Producto 6", precio: "$27.000", imagen: "/images/placeholder.png" }
];

// ===============================
// 🧱 RENDER PRODUCTOS
// ===============================
function renderProductos(idContenedor) {
    const contenedor = document.getElementById(idContenedor);
    if (!contenedor) return;

    contenedor.innerHTML = "";

    productos.forEach(p => {
        contenedor.innerHTML += `
            <div class="card" onclick="irProducto(${p.id})">
                <img src="${p.imagen}" alt="${p.nombre}">
                <h3>${p.nombre}</h3>
                <p>${p.precio}</p>
            </div>
        `;
    });
}

// ===============================
// 🔗 IR A PRODUCTO (RUTA DINÁMICA)
// ===============================
function irProducto(id) {
    window.location.href = "/producto/" + id;
}

// ===============================
// 🚀 INICIAR RENDER
// ===============================
renderProductos("productos");
renderProductos("productos2");

// ===============================
// 🎞️ SLIDER
// ===============================
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dotsContainer = document.getElementById("dots");

// 🔥 crear dots dinámicos solo si existe el contenedor
if (dotsContainer && slides.length > 0) {

    slides.forEach((_, i) => {
        const dot = document.createElement("span");
        dot.addEventListener("click", () => goToSlide(i));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll(".dots span");

    function updateSlider() {
        slides.forEach(s => s.classList.remove("active"));
        dots.forEach(d => d.classList.remove("active"));

        slides[currentSlide].classList.add("active");
        dots[currentSlide].classList.add("active");
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlider();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlider();
    }

    function goToSlide(index) {
        currentSlide = index;
        updateSlider();
    }

    // autoplay cada 10 segundos
    setInterval(nextSlide, 10000);

    // iniciar
    updateSlider();
}