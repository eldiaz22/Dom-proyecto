 /*let citas = [
  {
    'autor': 'Albert Einstein',
    'texto': 'No poseo talentos especiales. Solo soy apasionadamente curioso.'
  },
  {
    'autor': 'Anónimo',
    'texto': 'Semanas de programación te pueden ahorrar horas de planeación.'
  },
  {
    'autor': 'Alan Kay',
    'texto': 'La mejor forma de predecir el futuro es inventarlo.'
  },
  {
    'autor': 'Amelia Earhart',
    'texto': 'Lo más dificil es tomar la decisión de actuar. El resto es simplemente tenacidad.'
  },
  {
    'autor': 'Aristotle',
    'texto': 'La calidad no es un acto, es un hábito.'
  },
  {
    'autor': 'Benjamin Franklin',
    'texto': 'Dímelo y lo olvidaré. Enséñamelo y lo recordaré. Involúcrame y lo aprenderé.'
  },
  {
    'autor': 'Charles R. Swindoll',
    'texto': 'La vida es 10% lo que te ocurre y 90% cómo reaccionas.'
  },
  {
    'autor': 'Jane Goodall',
    'texto': 'Lo que haces hace una diferencia. Y debes decidir si qué tipo de diferencia quieres hacer.'
  },
  {
    'autor': 'John Muir',
    'texto': 'El poder de la imaginación nos hace infinitos.'
  },
  {
    'autor': 'Mark Twain',
    'texto': 'Los dos días más importantes de tu vida son el día que naciste y el día que descubres por qué.'
  }
]; */

// Seleccionar los elementos HTML.
let botonElem = document.getElementById('cambiar-cita');
let citaElem = document.getElementById('cita');
let autorElem = document.getElementById('autor');

// import citas from "./citas.js";

// Para generar indices aleatorios.
function generarEnteroAleatorio(min, max) {
//   minimo = Math.ceil(minimo);
//   maximo = Math.floor(maximo);
  // Incluye el minimo pero no el maximo.
  return Math.floor(Math.random() * (max - min) + min);
}

// Seleccionar una cita aleatoria.
function cambiarCita() {
  let indiceAleatorio = generarEnteroAleatorio(0, citas.length);
  citaElem.textContent = `"${citas[indiceAleatorio].texto}"`;
  autorElem.textContent = citas[indiceAleatorio].autor;
}

// Para seleccionar una cita de forma aleatoria
// cuando se inicia la aplicacion.
// let indiceAleatorio = generarEnteroAleatorio(0, citas.length);
cambiarCita();

// Para cambiar la cita al hacer click en el boton.
botonElem.addEventListener('click', cambiarCita);