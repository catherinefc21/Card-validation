const validator = {
  isValid(creditCardValidator) {
    //crear un array con los números de la tarjeta de forma inversa.
    const newArrayReverse= creditCardValidator.toString().split("").reverse().map(number=>parseInt(number));
    //multiplicar x2 las posiciones pares
    for (let i= 1; i < newArrayReverse.length; i+=2){
      newArrayReverse[i]*=2;
    }
    //Si el resultado era de 2 digitos se deben sumar(en este caso resto -9 para obtener resultado)
    for (let i=0; i < newArrayReverse.length; i ++){
      if (newArrayReverse[i]>9){
        newArrayReverse[i]-=9
      }else{
        newArrayReverse[i];
      }
    }    
    //Sumando todos los dígitos, usando función para sumar un array.
    const sumatotal= function(n1,n2){
      return n1 + n2
    }
    newArrayReverse.reduce(sumatotal)
    //Si es al dividirlo x10 el residuo es 0 retorna verdadero, sino falso.
    if((newArrayReverse.reduce(sumatotal)) % 10 === 0){
      return true;
    } else{
      return false;
    }             
  },
  maskify(creditCardNumber){
    //convertir numero de tarjeta a string
    const numbermask= creditCardNumber.toString();
    if(numbermask.length<=4){ //si es menor o igual a 4  retorne los mismos números
      return numbermask;
    }else{
      const lastfour= numbermask.slice(-4)//sino, obtiene los últimos 4 caracteres mediante slice 
      const mask= "#".repeat(numbermask.length -4 ) + lastfour;//los otros números quedan enmascarados y se suman a los últimos 4.   
      return mask
    }
  }
};
export default validator;
