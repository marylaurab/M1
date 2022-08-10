/*SCOPE AND HOISTING
 EJERCICIO #1 */
 x = 1;
var a = 5;
var b = 10;
 var c = function(a, b, c) {
  var x = 10;
  console.log(x); //10
  console.log(a); //8
  var f = function(a, b, c) {
    b = a; // 8
    console.log(b); //8
    b = c; //10
    var x = 5;
  }
  f(a,b,c);
  console.log(b); // 9
}
c(8,9,10);
console.log(b); //10
console.log(x); //1

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
console.log(instructor); //'Franco'

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
console.log(instructor); //Tony
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor); //Franco
   }
})();
console.log(instructor); //Tony
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
6 / "3" // 2 convierte el string en number
"2" * "3" // 6 convierte a ambos en number
4 + 5 + "px" // Tienen la misma precedencia, asi que analizo la asociatividad (a la izq) concatena
//y termina en 9px. 4 y 5 los hace primero y al ser number ambos, se suman como suelo hacer, luego se 
//concatenan conel string px
"$" + 4 + 5 // concatena y queda $45. El primer digito es string, x lo tanto el rsto lo pasa a tal, ya que
//va hacia la izq la asociatividad
"4" - 2 // convierte el string en number y realiza la resta, queda 2
"4px" - 2 // Lo primero es un string pero no puede convertirlo en un number ya que viene concatenado con
//px.. por lo tanto da NaN
7 / 0 // infinito (y es un number)
{}[0] // [0]
parseInt("09") // Convierte el string en number y devuelve la parte entera que se encuentra "escrita", por
//lo tanto da 9
5 && 2 // 2
2 && 5 // 5
5 || 0 // 5
0 || 5 // 5
[3]+[3]-[10] // 23. Convierte los dos primeros en string "33"-10 y ya lo vimos, forza al string a number y hace la resta
3>2>1 // false. Porque 3>2 da true, y true es >=1, no mayor
//[] == ![] // true

/*HOISTING Y SCOPE
EJERCICIO#1 */
function test() {
  console.log(a);
  console.log(foo());

  var a = 1;
  function foo() {
     return 2;
  }
}

test();
/*
CONTEXTO FUNCIONAL:
-Creacion: 
-Ejecucion: le retorna 2 a su outer contex antes de ser cerrado
luego, *se elimina*
--------------------------------------------------------------
CONTEXTO FUNCIONAL:
-Creacion:a; function foo
-Ejecucion: console.log(a)===undefined; console.log(foo())===*se crea otro contexto
funcional ya que la funcion foo() fue invocada, y luego es que se imprime el resultado*
...
.
.
... luego del contexto global, prosigue, asi que console.log(foo())===2;
a =1;   ya se finalizo, *se elimina el contexto*
----------------------------------------------------------------
CONTEXTO GLOBAL:
-Creacion: function test
-Ejecucion: test() *se invoca la funcion y se genera el contexto funcional, para despues seguir con este*
-------------------------------------------------------
LO QUE SE IMPRIME: undefined; 2
------------------------------------------------------
EJERCICIO #2:
*/
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);
/*
CF:
-Creacion:
var food;
let snack;
-Ejecucion:
var food = false;
return snack;
*se cierra este contexto*
------------------
contexto global:
-creacion:
var snack;
var function getFood(){};
-ejecucion:
var snack= 'meow mix'
var function getFood(food) {
   if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}
getFood(false) *se crea el contexto funcional*
(return snack;)
undefined
*/

/*
-------------------------------------------------------------------------
CONTEXTO FUNCIONAL: OJO no se si con el parametro false llega a crearse un contexto funcional.
-Creacion: No hay porque el parametro es false, ni entra al bloque de codigo
-Ejecucion: tampooc llega a ejecutarse.
-se destruye este contexto, seguimos con el global*
------------------------------------------------------------------------
CONTEXTO GLOBAL:
-Creacion: snack, function
-Ejecucion: snack='Meow Mix; getfood(false) *se crea contexto global por ser invocada la funcion.
despues seguimos aca*
...
.
.
... *seguimos aca luego de que terminara el contexto funcional*
---------------------------------------------------------------------------------
LO QUE IMPRIME: Undefined. Porque sabe que la funcion existe pero por el false no le pudo dar
un valor.
-------------------------------------------------------------------
THIS: EJERCICIO #1
*/
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); //Aurelio De Rosa

var test = obj.prop.getFullname; // test = function() {
 //  return this.fullname;}

console.log(test()); // Juan Perez
/*
----------------------------------------------------
 */

function x() {  
   y = 1; 
   var z = 2; }  
   x();  
   console.log(y);
   console.log(z);
   /*
   CONTEXTO FUNCIONAL:
   -Creacion: z
   -Ejecucion: var y=1; z=2
   *se cierra*
   ------------------------------------------------------------------------------
   CONTEXTO GLOBAL:
   -Creacion: function x
   -Ejecucion: x() *se frena hasta que el contexto funcional siguiente se cierre*
   ...
   .
   .... *seguimos*
   console.log(y)===1: console.log(z)=== reference error
   -------------------------------------------------------------------
   EVENT LOOP:

   */
   function printing() {
      console.log(1); //1ero
      setTimeout(function() { console.log(2); }, 1000);//4
      setTimeout(function() { console.log(3); }, 0); //3
      console.log(4);//2
   }
   
   printing();


