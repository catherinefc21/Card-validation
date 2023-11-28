import validator from "./validator.js";

const cardNumber = document.getElementById("cardnumber");
const customerName = document.getElementById("customername");
const userName = document.getElementById("name");
const cvvField = document.getElementById("cvv");
const formulario = document.getElementById("formulario");

// Definir la función que permite solo números
function formatCreditCardNumber(e) {
  // Eliminar cualquier caracter que no sea un dígito
  let cleanedValue = e.target.value.replace(/\D/g, "");
  // Agregar espacios después de cada grupo de cuatro dígitos
  cleanedValue = cleanedValue.replace(/(\d{4})(?=\d)/g, "$1 ");
  // Asignar el valor formateado de nuevo al campo
  e.target.value = cleanedValue;
}

// Función de validación y actualización del contenido
function validarTarjeta(e) {
  e.preventDefault(); // Evitar que el formulario se envíe automáticamente

  const inputValue = cardNumber.value;
  const isValid = validator.isValid(inputValue);
  const mensaje = isValid
    ? "ha sido validada con éxito."
    : "es Inválida. Intenta nuevamente.";

  const formattedName =
    userName.value.charAt(0).toUpperCase() +
    userName.value.slice(1).toLowerCase();

  customerName.textContent = formattedName + ", tu tarjeta " + mensaje;

  // Enmascarar los números
  cardNumber.value = validator.maskify(inputValue);
}

// Función para el CVV que permite solo números y tiene una longitud máxima de 3 dígitos
function soloNumerosCVV(e) {
  e.target.value = e.target.value.replace(/\D/g, "").slice(0, 3);
}

// Asociar la función al evento "input" en el input de tarjeta
cardNumber.addEventListener("input", formatCreditCardNumber);

// Asociar la función al evento "input" en el input de CVV
cvvField.addEventListener("input", soloNumerosCVV);

// Asociar la función al evento "submit" en el formulario
formulario.addEventListener("submit", validarTarjeta);
