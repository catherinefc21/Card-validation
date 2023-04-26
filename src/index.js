import validator from './validator.js';

const boton=document.getElementById("boton");
const input= document.getElementById("cardnumber")

// Definir la función que permite solo números
function soloNumeros(e) {
  e.target.value = e.target.value.replace(/\D/g, '');
}

// Asociar la función al evento "input" en el input
input.addEventListener("input", soloNumeros);


boton.addEventListener("click", () => {
  const form = document.querySelector('form');
  if (!form.checkValidity()) {
    alert("Por favor complete todos los campos requeridos.");
    return;
  }
  const saveInput = input.value
  let numero = validator.isValid(saveInput)
  if (numero === true){
    numero = "ha sido ingresada con éxito"
  }else{
    numero = "es Inválida. Verifica tus datos e intenta nuevamente"
  }
  //enviar texto que mencione si la tarjeta es válida o no

  document.getElementById("customername").innerHTML= document.getElementById("name").value + ", tu tarjeta  " + numero;
    
  //lograr que al escribir se enmascaren los números
  const enmascarar= validator.maskify(saveInput)
  input.value=enmascarar;

})//validar input solo números
 