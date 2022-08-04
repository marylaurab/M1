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
-Creacion: a; c()
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
--------------------------------------------------------------------------------------------------------
EJERCICIO#2
*/
console.log(bar);
console.log(baz);
foo();
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;

/*
GLOBAL CONTEXT:
-Creacion: bar;
-Ejecucion: console.log(bar)= undefined; 
------------------------------------------------------------------------
LO QUE SE IMPRIME:
undefined; error, baz no esta declarada.
-----------------------------------------------------------------------
EJERCICIO #3:
*/
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor);
/*
GLOBAL CONTEXT:
-Creacion: instructor;
-Ejecucion: instructor="Tony"; instructor="Franco"; console.log(instructor)=== "Franco"
-----------------------------------------------------------------------------------------
LO QUE SE IMPRIME:
"Franco"
---------------------------------------------------------------------------------------
EJERCICIO #4:
*/
var instructor = "Tony";
console.log(instructor);
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor);
   }
})();
console.log(instructor);
/*
CONTEXTO FUNCIONAL:
-Creacion: instructor
-Ejecucion: instructor="Franco"; console.log(instructor)==="Franco"
*se borra este contexto y sigue el global*
----------------------------------------------
GLOBAL CONTEXT:
-Creacion: instructor;
-Ejecucion: instructor ="Tony"; console.log(instructor)==="Tony"; se invoca la funcion() *al terminar
el contexto funcional de esta, recien sigo aca*
...
.
.
... *luego de contexto funcional, sigue este*
console.log(instructor)==="Tony"
---------------------------------------------------------
LO QUE SE IMPRIME:
Tony; Franco, Tony.
-----------------------------------------------
EJERCICIO #5:
*/
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor);
    console.log(pm);
}
console.log(instructor);
console.log(pm);
/*
CONTEXTO GLOBAL:
-Creacion: instructor
-Ejecucion: instructor = "Tony"; pm = "Franco"; var instructor="The Flash";
let pm="Reverse Flash"; console.log(instructor)==="The Flash"; console.log("pm")==="Reverse Flash";
console.log(instructor)==="The Flash"; console.log(pm)==="Reverse Flash"
--------------------------------------------------------------------------------
LO QUE SE IMPRIME:
the flash; reverse flash; the flash; Franco. por que? Porque var si deja modificar el valor
de una variable, pero let no. Seria como p1 y pm 2
----------------------------------------------------------------------------------
COERCION DE DATOS:
*/
