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
'manual', podria revertir el array y ahi si puedo elevar a 2 por i como viene recorriendo en el for*/

function DecimalABinario(num) {
  // tu codigo aca

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}