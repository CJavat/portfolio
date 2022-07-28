let menuMobile = document.querySelector(".menuMobile");
let barra = document.querySelector(".bar");

menuMobile.addEventListener("dblclick", ()=>{
    barra.style.transform = "rotate(90deg)";
    barra.style.transition = "transform 5s";
});

/* TERMINAR DE HACER LA ANIMACION DE MOVER LAS BARRAS. */