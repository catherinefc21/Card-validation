import validator from './validator.js';

const boton=document.getElementById("boton");
const input= document.getElementById("cardnumber")

// Definir la función que permite solo números
function soloNumeros(e) {
  e.target.value = e.target.value.replace(/\D/g, ''); //cualquier caracter que no sea dígito, g busca y reemplaza
}

// Asociar la función al evento "input" en el input
input.addEventListener("input", soloNumeros);


boton.addEventListener("click", () => {
  //eviar alertar cuando se envie el formulario con campos vacios
  const form = document.querySelector('form');
  if (!form.checkValidity()) {
    alert("Por favor completar los campos requeridos.");
    return;
  }
  const saveInput = input.value
  let numero = validator.isValid(saveInput)
  if (numero === true){
    numero = "ha sido validada con éxito."
  }else{
    numero = "es Inválida. Intenta nuevamente."
  }
  //Mensaje de validación de la tarjeta

  document.getElementById("customername").innerHTML= document.getElementById("name").value + ", tu tarjeta  " + numero;
    
  //lograr que al escribir se enmascaren los números
  const enmascarar= validator.maskify(saveInput)
  input.value=enmascarar;

})