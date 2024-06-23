const inputRojo = document.getElementById("rojo");
const inputVerde = document.getElementById("verde");
const inputAzul = document.getElementById("azul");

const textoRojo = document.getElementById("texto-rojo");
const textoVerde = document.getElementById("texto-verde");
const textoAzul = document.getElementById("texto-azul");






//VALOR DEL IMPUT 
let rojo = inputRojo.value;
let verde =  inputVerde.value;
let azul = inputAzul.value;
// REFLEJA EL IMPUT EN EL TEXT

textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

// textoRojo.style.color ="rgb(23, 41, 55)";


function actualizar(rojo, verde, azul) {
    const  colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
 document.body.style.backgroundColor = colorRGB;
 
 textoRojo.style.color = colorRGB;
    


}



inputRojo.addEventListener("change", (e) => {
    rojo = e.target.value;
    textoRojo.innerText = rojo;
    actualizar(rojo, verde, azul);
    

} )


inputVerde.addEventListener("change", () => {
    verde = inputVerde.value;
    textoVerde.innerText = verde;
    actualizar(rojo, verde, azul);

} )


inputAzul.addEventListener("change", (e) => {
    azul = e.target.value;
    textoAzul.innerText = azul;
    actualizar(rojo, verde, azul);

} )






