/*SCOPE AND HOISTING
 EJERCICIO #1 */
 x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x);
  console.log(a);
  var f = function(a, b, c) {
    b = a;
    console.log(b);
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b);
}
c(8,9,10);
console.log(b);
console.log(x);
/*
FUNCTION CONTEXT:
-Creacion: b;x
-Ejecucion: b=a; console.log(b)===8; b=c; x=5
*se termina de ejecutar y desaparece, para continuar ejecutando su outer context que es
el contexto funcional de f*
-----------------------------------------------------------------------------------------------
FUNCTION CONTEXT:
-Creacion: x; f
-Ejecucion: x=10; console.log(x)===10;
console.log(a)===8 f=function(a,b,c); f(a,b,c) *se crea un contexto funcional antes de seguir con este*
...
.
... *se termino de ejecutar el contexto de f y seguimos ejecutando este*
console.log(b)===9. 
 *se termino de ejecutar este contexto funcional, ahora prosigue a seguir ejecutando el outer context
 que en este caso ya es el global. ESTE se desaparece*
------------------------------------------------------------------------------------------------
GLOBAL CONTEXT:
-Creacion: x; a; c()
-Ejecucion: x=1; b=10; c=funcion(a,b,c); c(8,9,10) *se crea un contexto funcional
antes de seguir ejecutandose*
...
.
.
... *se termino de ejecutar la invocacion a c, proseguimos*
console.log(b)===10; console.log(x)===1

se termina de ejecutar todo.
--------------------------------------------------------------------------------------------------------
LO QUE SE IMPRIME:
10;8;8;9;10;1
*/