const validator = {
  isValid(creditCardValidator) {
    // Crear un array con los números de la tarjeta de forma inversa.
    const newArrayReverse = creditCardValidator
      .toString()
      .replace(/\s/g, "")
      .split("")
      .reverse()
      .map((number) => parseInt(number));
    // Multiplicar x2 las posiciones pares.
    for (let i = 1; i < newArrayReverse.length; i += 2) {
      newArrayReverse[i] *= 2;
    }

    // Si el resultado es de 2 dígitos se deben sumar (en este caso resto -9 para obtener resultado).
    for (let i = 0; i < newArrayReverse.length; i++) {
      if (newArrayReverse[i] > 9) {
        newArrayReverse[i] -= 9;
      }
    }

    // Sumando todos los dígitos, usando función para sumar un array.
    const sumaTotalDigits = newArrayReverse.reduce((n1, n2) => n1 + n2, 0);

    // Si es al dividirlo x 10 el residuo es 0 retorna verdadero, sino falso.
    return sumaTotalDigits % 10 === 0;
  },

  maskify(creditCardNumber) {
    // Convertir número de tarjeta a string
    const numbermask = creditCardNumber.toString();
    if (numbermask.length <= 4) {
      // Si es menor o igual a 4, retorna los mismos números
      return numbermask;
    } else {
      const lastfour = numbermask.slice(-4); // Si no, obtiene los últimos 4 caracteres mediante slice
      const mask = "#".repeat(numbermask.length - 4) + lastfour; // Los otros números quedan enmascarados y se suman a los últimos 4.
      return mask;
    }
  },
};

export default validator;
