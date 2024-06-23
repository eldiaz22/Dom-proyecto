
const  contenedor = document.getElementById("contenedor");
console.log( typeof contenedor.innerHTML) // no da acceso a la extructura html


//elemento
const titulo = document.getElementById("titulo");
console.log( titulo.innerText); //texto interno de ese elemento
console.log( titulo.tagName); //acceso a esa etiqueta

// getelementobyclaasname
const toppings = document.getElementsByClassName("topping")
console.log(toppings.length) // para saber cuanto elemento hay en esa colecion
console.log(toppings[0].id) 

//getElementTagname
const mistoppings = document.getElementsByTagName("li");
console.log(mistoppings)
//quaryselecto el primer elemento
const aceituna = document.querySelector("#aceitunas");

const topping2 = document.querySelector(".topping.fondo-naranja");
console.log(topping2)

const primero = document.querySelector("ul li.fondo-marron")
console.log(primero)
const primerElementoNoFondoMarron = document.querySelector("ul li:not(fondo-marron)");

// quaryslectoALL
 const toppingsNaranja = document.querySelectorAll(".topping.fondo-naranja")
 console.log(toppingsNaranja);



                     //? CAMBIAR O MODIFICAR ELEMENTO con estilo

  const primerElemento = document.querySelector(".topping")
primerElemento.style.backgroundColor = "blue";  // estilo en linea
primerElemento.style.color = "#6dff00"
primerElemento.style.textTransform = "uppercase"


                    //* ACCEDER EN EL TEXTO
const ListaDetoppings = document.getElementById("lista-toppings")
console.log(">innerText");
console.log(ListaDetoppings.innerText); //solo el texto 
console.log(">Text content");
console.log(ListaDetoppings.textContent); // con espacio ,consevar  como el codigo
console.log(">Text innerHtml");
console.log(ListaDetoppings.innerHTML); // va mostar el archivo html




//!MODIFICAR ELEMENTO TEXTO
const titulo2 = document.getElementById("titulo");
titulo2.innerText = "JUNIOR TOPPING";


                     //*AGREGAR ATRIBUTOS
const enlace = document.getElementsByTagName("a");
// console.log(enlace[0].getAttribute("href")); //obtenemos atributos
// console.log(enlace[0].removeAttribute("href"));//eliminamos atributos
console.log(enlace[0].setAttribute("href","youtube.com"));  // primer argumento atributo que quiero modificar  2 argumento el valor 



                       //modiciar clase y agregar clase
const primerElement = document.querySelector(".topping")
primerElement.classList.add("mi-clase")
console.log(primerElement.classList) ; // lentg numero de caracteres  value lista de caracteres

                        //verificar si posee una clase
console.log(primerElement.classList.contains("fondo-azul"))  // para verificar si el elemenrto posee una clase o no  mas utilizado en los condicionales

                                    //eleminar clase
primerElement.classList.remove("topping") 


                             //!❤️ CREAR ELEMENTO DESDE CERO  
const listaDEtopping2 = document.getElementById("lista-toppings")
const toppingNuevo = document.createElement("li");  // crear un elemento

toppingNuevo.classList.add("topping" , "fondo-marron"); // agrega una clase a la lista de clase
toppingNuevo.innerText = "queso extra"; //agregar texto

listaDEtopping2.append(toppingNuevo) ;// nos permite agregar un nodo dentro de otro nodo
listaDEtopping2.appendChild(toppingNuevo) ;// funciana como elemento como html

toppingNuevo.remove();

              
                                        //*🅰️ RECORRER EL DOM
const listaDEtopping3 = document.getElementById("lista-toppings");
console.log(listaDEtopping3.parentElement)
console.log(listaDEtopping3.parentElement.parentElement)
console.log(listaDEtopping3.parentNode)
console.log(listaDEtopping3.children)
console.log(listaDEtopping3.firstChild) // Trabaja con nodo
console.log(listaDEtopping3.firstElementChild) //* obtener elemento html
console.log(listaDEtopping3.lastChild)
console.log(listaDEtopping3.lastElementChild)
console.log(listaDEtopping3.previousElementSibling)





//*           🪨🪨🪨🪨🪨🪨EVENTOS🪨🪨🪨🪨🪨🪨

const toppings0= document.getElementsByClassName("topping");


// function mostrarClic (e) {
//   console.log(e.target) 
//   console.log(e.target.innerText) 
//   alert(e.target.innerText)

// };

for (topping of toppings0){
  topping.addEventListener("click", (e)=> {
    console.log(e.target) 
    console.log(e.target.innerText) 
    alert(e.target.innerText)

  } )


};












