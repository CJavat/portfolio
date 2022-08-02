//#region ANIMACIÓN DEL MENÚ.
desplazarMenu();

function desplazarMenu() {
    let listaNavegacion = document.querySelector(".Container__listaNavegacionMobile");
    let menuMobile = document.querySelector(".menuMobile");
    let primeraBarra = document.querySelector(".bar:first-child");
    let ultimaBarra = document.querySelector(".bar:last-child");
    let bandera = false;
    
    menuMobile.addEventListener("click", ()=>{
        if(bandera === false) {
            bandera = true;
            listaNavegacion.style.transition = "transform .5S ease-in-out, visibility .5s ease-in-out"
            listaNavegacion.className = "Container__listaNavegacionMobileActived";
            
            menuMobile.style.transform = "rotate(-45deg)";
            menuMobile.style.transition = "transform 2s";
            
            primeraBarra.style.transform =  "rotate(-90deg) translateY(-7px)";
            primeraBarra.style.transition = "transform 2s";
            
            ultimaBarra.style.transform = "rotate(-90deg) translateY(7px)";
            ultimaBarra.style.transition = "transform 2s";
        }
        else {s
            bandera = false;
            
            listaNavegacion.className = "Container__listaNavegacionMobile";
            listaNavegacion.style.transition = "transform .5S ease-in-out, visibility .5s ease-in-out"
            
            menuMobile.style.transform = "rotate(0)";
            menuMobile.style.transition = "transform 2s";
        
            primeraBarra.style.transform =  "rotate(0) translateY(0)";
            primeraBarra.style.transition = "transform 2s";
        
            ultimaBarra.style.transform = "rotate(0) translateY(-0)";
            ultimaBarra.style.transition = "transform 2s";
        }
    });
}
//#endregion ANIMACIÓN DEL MENÚ.

//#region BOTÓN CARGA FORZADA.
let btnCarga = document.querySelector('.reloadforce');

btnCarga.addEventListener('click', ()=>{
    location.reload();
});
//#endregion

//#region API INTERSECTION OBSERVE.
//#region OBTENER POSICIÓN DE LOS ELEMENTOS.
let moverHortomallas = document.querySelector('.moverHORTOMALLAS');
let moverGdlCircuits = document.querySelector('.moverGDLCIRCUITS');
let moverUteg = document.querySelector('.moverUTEG');
let moverCetis = document.querySelector('.moverCETIS');
let moverUbicacion = document.querySelector('.contenedor-ubicacion');
let moverEmail = document.querySelector('.contenedor-email');
let moverCelular = document.querySelector('.contenedor-celular');
let moverPieDePagina = document.querySelector('.pieDePagina__bordes');

let moverHortomallasFecha = document.querySelector('.moverHORTOMALLASFecha');
let moverGdlCircuitsFecha = document.querySelector('.moverGDLCIRCUITSFecha');
let moverUtegFecha = document.querySelector('.moverUTEGFecha');
let moverCetisFecha = document.querySelector('.moverCETISFecha');

//#endregion region OBTENER POSICIÓN DE LOS ELEMENTOS.

const observador = new IntersectionObserver(moverImagen, () =>{
    root: null;
    rootMargin: "0px";
    threshold: 0.25;
});

function moverImagen(entradas, observador) {
    entradas.forEach(function(entrada) {
        
        if (entrada.isIntersecting) {
            entrada.target.classList.add('moverAlCentro');
            console.log('La imagen esta en pantalla');
        } 
        /* else {
            entrada.target.classList.remove('moverAlCentro');
            console.log('La imagen NO esta en pantalla');
        } */
        
    });
} 
observador.observe(moverHortomallas);
observador.observe(moverGdlCircuits);
observador.observe(moverUteg);
observador.observe(moverCetis);
observador.observe(moverUbicacion);
observador.observe(moverEmail);
observador.observe(moverCelular);
observador.observe(moverPieDePagina);

observador.observe(moverHortomallasFecha);
observador.observe(moverGdlCircuitsFecha);
observador.observe(moverUtegFecha);
observador.observe(moverCetisFecha);
//#endregion API INTERSECTION OBSERVE.