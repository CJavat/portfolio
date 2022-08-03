//#region ANIMACIÓN DEL MENÚ.
desplazarMenu();

function desplazarMenu() {
    let listaNavegacion = document.querySelector(".Container__listaNavegacionMobile");
    let menuMobile = document.querySelector(".menuMobile");
    let primeraBarra = document.querySelector(".bar:first-child");
    let ultimaBarra = document.querySelector(".bar:last-child");
    let bandera = false;
    menuMobile.addEventListener("click", ()=>{
        console.log(bandera)
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
        else {
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
        }
        
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


let quienSoy_Desktop = document.querySelector('.saludo');
let quienSoy_Mobile = document.querySelector('.saludo');

let experiencia_Desktop = document.querySelector('.experiencia');
let experiencia_Mobile = document.querySelector('.experiencia');

let aptitudes_Desktop = document.querySelector('.aptitudes');
let aptitudes_Mobile = document.querySelector('.aptitudes');

let skills_Desktop = document.querySelector('.skills');
let skills_Mobile = document.querySelector('.skills');

let contactame_Desktop = document.querySelector('.contactame');
let contactame_Mobile = document.querySelector('.contactame');

const observar_seleccionarSeccion = new IntersectionObserver(seleccionarSeccion, ()=>{
    root: null;
    rootMargin: "0";
    threshold: .25;
});

function seleccionarSeccion(entradas, observador) {
    entradas.forEach(function(entrada){
        if(entradas.isIntersecting ==true) {
            //entrada.target.classList.add('seccionSeleccionada');
            console.log("ENTRO: "+ entrada.target.id);
        }
        else {
            //entrada.target.classList.remove('seccionSeleccionada');
            console.log("SALIO:" + entrada.target.id);
        }
    });
}

observar_seleccionarSeccion.observe(quienSoy_Desktop);
observar_seleccionarSeccion.observe(experiencia_Desktop);
observar_seleccionarSeccion.observe(aptitudes_Desktop);
observar_seleccionarSeccion.observe(skills_Desktop);
observar_seleccionarSeccion.observe(contactame_Desktop);