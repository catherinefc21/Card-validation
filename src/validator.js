const validator = {
  isValid(creditCardValidator) {
    const newArrayReverse= creditCardValidator.toString().split("").reverse().map(number=>parseInt(number));
    
    for (let i= 1; i < newArrayReverse.length; i+=2){
      newArrayReverse[i]*=2;
    }
    for (let i=0; i < newArrayReverse.length; i ++){
      if (newArrayReverse[i]>9){
        newArrayReverse[i]-=9
      }else{
        newArrayReverse[i];
      }
    }    
    const sumatotal= function(n1,n2){
      return n1 + n2
    }
    newArrayReverse.reduce(sumatotal)

    if((newArrayReverse.reduce(sumatotal)) % 10 === 0){
      return true;
    } else{
      return false;
    }             
  },
  maskify(creditCardNumber){
    const numbermask= creditCardNumber.toString();
    if(numbermask.length<=4){ //si es menor o igual a 4  retorne los mismos números
      return numbermask;
    }else{
      const lastfour= numbermask.slice(-4)//obtiene los últimos 4 caracteres  
      const mask= "#".repeat(numbermask.length -4 ) + lastfour;//        
      return mask
    }
  }
};
export default validator;
