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


/* PROBANDOLA API PARA LA ANIMACION.*/

// Crear el observador (Intersection Observer API)
// En la función anónima se recibe una lista de entradas, no importa que solo se observe un elemento
let observer = new IntersectionObserver(entries => {
    // Recorrer las entradas recibidas
    entries.forEach(entry => {
        // Está visible en el viewport
            if (entry.intersectionRatio > 0) {
                // entry.target es el elemento que se está observando
                // Agregar la clase para animar
                entry.target.classList.add('animacion-de-prueba1');
                // Dejar de observar
                observer.unobserve(entry.target);
            }
        });
    });
// Observar elemento a animar
observer.observe(document.querySelector('.pieDePagina__bordes'));
/***************************************************************/

































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
