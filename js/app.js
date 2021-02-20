let carrito = document.getElementById('shopping-cart');
// let cajaContainer = document.getElementById('caja-container');
let listaCursos = document.querySelector('.cursos-container');
let cajaContainer=document.createElement('div');
let salvadora = document.querySelector('.salvadora');


cajaContainer.classList.add('super-box')

launchApp();

document.addEventListener('load',launchApp)

function launchApp(){
    listaCursos.addEventListener('click',obtenerCurso);
}

function obtenerCurso(e){
    if(e.target.classList.contains('añadir')){
        alert(`Curso añadido`);
        let curso = e.target.parentElement;
        extraerCurso(curso);
    }
}

function extraerCurso(curso){
    let cursoElegido = {
        imagen: curso.querySelector('img').src,
        nombre: curso.querySelector('.nombre-curso').textContent,
        cantidad: 1,
        precio: curso.querySelector('.precio-curso').textContent,
    };

    display(cursoElegido);
}

function display(cursoElegido){
    cajaContainer.innerHTML=`
    
        <div class='lane'>
            <p>Item 1</p>
            <p>Item 2</p>
            <p>Item 3</p>
            <p>Item 4</p>
        </div>
        <div class='line'></div>
        <div class='lane'>
            <img src='${cursoElegido.imagen}' alt="" class='pequeño'>
            <p>${cursoElegido.nombre}</p>
            <p>${cursoElegido.cantidad}</p>
            <p>${cursoElegido.precio}</p>
        </div>
    `
    salvadora.appendChild(cajaContainer);
}

carrito.addEventListener('mouseover', () => {
    salvadora
    cajaContainer.classList.toggle('active');
});
