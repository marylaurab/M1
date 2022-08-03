'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  /* .Recibo un string
  .Lo convierto en array y separo sus digitos dentro de el (Declarar
    un nuevo array)
  .Declaro una suma, donde estaran almacenadas las operaciones que
  luego seran retornadas
  .Recorro el array y opero
  .Retorno la suma
   */
  var array = num.split('');
  var suma = 0;
  for(var i = 0; i < array.length; i++) {
    suma += (array[i] * (2**(array.length - i - 1)));
  } return suma;
} /* Si quisiera ahorrar el paso de pensar como expresar el num al cual se va a elevar, ya que en esta
ocasion fue facil hallarla pero no me funciona en caso de que se complique, ya que no puedo hacerlo
'manual', podria revertir el array y ahi si puedo elevar a 2 por i como viene recorriendo en el for. O hacerlo
directo con el metodo .ToString()*/

function DecimalABinario(num) {
  // tu codigo aca
  /*
  .Recibo un dato de tipo Number
  .Lo divido entre 2 y me quedo con su parte entera para seguir dividiendola hasta que valga 1
  .A cada parte entera, le sacare el resto entre 2 y lo guardare
  .Cada resto lo guardo en un array
  .Le doy vuelta al array, y lo retorno como string 
   */
  var ArrBinario = [];
  var division;
  while (num >= 1) {
    division = Math.floor(num/2);
    ArrBinario.push(num%2);
    num = division;
  } return ArrBinario.reverse().join('')
} /*Cada itearacion va modificando el valor de num, el cual debo de guardar para la proxima iteracion. Por eso al final de todo,
antes de seguir la otra iteracion, le asigno a num el valor ultimo que tuvo la division, y asi se puede evaluar en la condicion
del while en la proxima*/


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}