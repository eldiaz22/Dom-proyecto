//*selecionar el dom*/

const boton = document.querySelector("#boton");
const color = document.getElementById("color");

function generarColor() {
    let digitos = "0123456789abcdef";
    let colorHex = "#";

    for(let i = 0; i < 6; i++){
        let indice = Math.floor(Math.random() * 16);
        colorHex += digitos[indice];
    };

    return colorHex;

}
junior = generarColor()
console.log(junior)

boton.addEventListener("click", function () {
    let colorAleatorio = generarColor();
    // actualizar el texto
  color.innerText = colorAleatorio;
      // actualizar el fondo
  document.body.style.backgroundColor = colorAleatorio;
});





