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
            listaNavegacion.style.transition = "transform 1S ease-in-out, visibility 1s ease-in-out"
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
            listaNavegacion.style.transition = "transform 1S ease-in-out, visibility 1s ease-in-out"
            
            menuMobile.style.transform = "rotate(0)";
            menuMobile.style.transition = "transform 2s";
        
            primeraBarra.style.transform =  "rotate(0) translateY(0)";
            primeraBarra.style.transition = "transform 2s";
        
            ultimaBarra.style.transform = "rotate(0) translateY(-0)";
            ultimaBarra.style.transition = "transform 2s";
        }
    });
}

/* CARGA FORZADA.*/
let btnCarga = document.querySelector('.reloadforce');

btnCarga.addEventListener('click', ()=>{
    location.reload();
});

/***************/


/* PROBANDOLA API PARA LA ANIMACION.*/
let elementosALaDerecha = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('moverDer-Izq');
            elementosALaDerecha.unobserve(entry.target);
        }
    });
});
elementosALaDerecha.observe(document.querySelector('.hortomallas'));
elementosALaDerecha.observe(document.querySelector('.uteg'));
elementosALaDerecha.observe(document.querySelector('.contactame__email'));
elementosALaDerecha.observe(document.querySelector('.pieDePagina__bordes'));

let elementosALaIzquierda = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('moverIzq-Der');
            elementosALaIzquierda.unobserve(entry.target);
        }
    });
});
elementosALaIzquierda.observe(document.querySelector('.gdl-circuits'));
elementosALaIzquierda.observe(document.querySelector('.cetis'));
elementosALaIzquierda.observe(document.querySelector('.contactame__ubicacion'));
elementosALaIzquierda.observe(document.querySelector('.contactame__celular'));



































/* AGREGAR ANIMACION CSS (PRUEBA) 
CREAR NUEVA CLASE Y AGREGARSELA CADA QUE SE VEA EN EL VIEWPORT {
    .experiencia__contenedor:nth-child(odd) {
        left: -20rem;
    }

    .experiencia__contenedor:nth-child(odd) {
        transform-origin: 0 0;
        transform: translateX(20rem);
        transition: transform 6s;
    }
}

CREAR NUEVA CLASE Y AGREGARSELA CADA QUE SE VEA EN EL VIEWPORT {
    .experiencia__contenedor:nth-child(even) {
    }

    .experiencia__contenedor:nth-child(even) {
        transform-origin: 0 0;
        transform: translateX(-20rem);
        transition: transform 6s;
    }
}
*/
