'use strict'

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {
  /* Recibo un numero n, el cual debe de ser mayor o igual a 0 para poder considerarlo como
  un numero al que le podamos calcular su factorial. Si n es igual a 0 o igual a 1, devolver su factorial
  como 1. Si n es mayor o igual a 1, entonces devolver n *((n-1)*(n-2)*(n-3)...(n-(n-1)).
  COMO VEO QUE LO QUE NECESITO REPETIR ES ESTA SITUACION: """((n-1)*(n-2)*(n-3)...((n-(n-1)))""" analizo que para ellos necesito la recursividad, que una y otra vez se itere esa situacion. Con lo cual, invocare a la funcion
  pasandole como parametro (n-1), Por que? notese lo siguiente: (n-1)*(n-1-1)*(n-1-1-1).. etc. Y lo multiplico por la n recibida para retornar ese valor.
   */
 if (n === 0 || n === 1) {
  return 1;
 } else {
  return n * nFactorial(n-1); 
 }
}
/*
CONTEXTO FUNCIONAL:
-Creacion:
-Ejecucuion: (n=1)
if(true) *entra* {return 1} *al contexto funcional anterior le lanza n=1 y SE VA*
-----------------------------------
CONTEXTO FUNCIONAL:
-Creacion:
-Ejecucuion: (n=2)
if(false) {no entra};
entonces return  n * nFactorial(2-1===1) *se invoca la funcion*
...
.
.
...
nFcatorial(1)= 1 por el retorno anterior entonces:
retorna: 2*1 *Y SE VA*
---------------------------------
CONTEXTO FUNCIONAL:
-Creacion:
-Ejecucion: (n=3)
if(false) {no entra};
entonces return n * nFactorial(3-1===2) *se invoca la fucnion*
...
.
.
...
retorna 3*2*1 *SE VA*
----------------------------------------------------------
CONTEXTO FUNCIONAL:
-Creacion:
-Ejecucion: (n=4)
if(false) {no entra}
entonces return  n* nFactorial(4-1===3) *se invoca la funcion*
...
.
.
...
retorna 4*3*2*1 *Y SE VA*
-------------------------------------------
CONTEXTO FUNCIONAL: 
-Creacion:
-Ejecucion: if(false) {no entra}
entonces return n * nFactorial(5-1===4) *se invoca la funcion*
..
.
.
..
retorna n*4*3*2*1 *Y SE VA*
--------------------------------------------
CONTEXTO GLOBAL:
-Creacion:
.var function nFactorial (){};
.var n;
-Ejecucion: 
.function nFactorial(n) {
  if (n === 0 || n === 1) {
  return 1;
 } else {
  return n * nFactorial(n-1); 
 }
}
.n=5
*se crea un contexto funcional al invocar la funcion*
...
.
.
...
5*4*3*2*1 
   */
 

function nFibonacci(n) {
  /*
  
  */
 if (n < 2 && n >= 0) {
  return n;
 } else {
  return nFibonacci(n-1) + nFibonacci(n-2);
 }
}

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

function Queue() {

}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};
