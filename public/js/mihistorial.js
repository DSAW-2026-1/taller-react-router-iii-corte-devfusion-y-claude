// 🔥 DATA MOCK (luego se conecta a backend)
const mock = [
    { titulo: "Producto 1", precio: "$20.000", img: "/images/placeholder.png" },
    { titulo: "Producto 2", precio: "$30.000", img: "/images/placeholder.png" },
    { titulo: "Producto 3", precio: "$15.000", img: "/images/placeholder.png" },
    { titulo: "Producto 4", precio: "$50.000", img: "/images/placeholder.png" }
];

// 🔥 RENDER CARDS
function render(id) {
    const cont = document.getElementById(id);
    if (!cont) return;

    cont.innerHTML = "";

    mock.forEach(p => {
        const card = document.createElement("div");
        card.className = "hist-card";

        card.innerHTML = `
            <img src="${p.img}" alt="${p.titulo}">
            <p><strong>${p.titulo}</strong></p>
            <p>${p.precio}</p>
        `;

        cont.appendChild(card);
    });
}

// 🔥 SCROLL CONTROL SEGURO
function initCarousel() {
    const carousels = document.querySelectorAll(".hist-carousel");

    carousels.forEach(carousel => {
        const track = carousel.querySelector(".hist-track");
        const btnLeft = carousel.querySelector(".hist-arrow.left");
        const btnRight = carousel.querySelector(".hist-arrow.right");

        if (!track) return;

        if (btnLeft) {
            btnLeft.addEventListener("click", () => {
                track.scrollBy({
                    left: -250,
                    behavior: "smooth"
                });
            });
        }

        if (btnRight) {
            btnRight.addEventListener("click", () => {
                track.scrollBy({
                    left: 250,
                    behavior: "smooth"
                });
            });
        }
    });
}

// 🔥 INIT CUANDO CARGA TODO
document.addEventListener("DOMContentLoaded", () => {
    render("comprados");
    render("interesados");
    initCarousel();
});