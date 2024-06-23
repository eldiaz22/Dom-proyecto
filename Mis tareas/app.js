const input = document.getElementById("ingresar-tarea");
const boton = document.querySelector(".boton")
const listaDetarea = document.getElementById("lista-de-tareas");




boton.addEventListener("click" , AgregarTarea)

input.addEventListener("keydown",(e) => {
      if (e.key === "Enter")
      AgregarTarea();
    
} );



function AgregarTarea () {
    if(input.value){
     let tareaNueva = document.createElement("div");
     tareaNueva.classList.add("tarea");
// text ingresado por el usuario
    let texto = document.createElement("p");
    texto.innerText= input.value;
    tareaNueva.append(texto);
// crear y agregar iconos
let iconos = document.createElement("div");
iconos.classList.add("iconos");
tareaNueva.appendChild(iconos)

//iconos
let completar = document.createElement("i");
completar.classList.add("bi", "bi-check-circle-fill", "icono-completar");
completar.addEventListener("click", completarTarea)

let eleminar = document.createElement("i");
eleminar.classList.add("bi", "bi-trash3-fill", "icono-eleminar");
eleminar.addEventListener("click",eleminarTarea)
   
iconos.append(completar, eleminar);
    //*lista de tarea 
listaDetarea.appendChild(tareaNueva)

    } else { 
        alert("Porfavor coloca una tarea");
    };

}

function completarTarea(e) {
    let tarea = e.target.parentNode.parentNode;
    tarea.classList.toggle('completada');



}


function eleminarTarea (e) {
    let tarea = e.target.parentNode.parentNode; 
    tarea.remove();

}
