"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes,
  según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro,
  hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El árbol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio
  homework.
*/

function BinarySearchTree(value) {
  this.value=value;
  this.right=null;
  this.left=null;
}


BinarySearchTree.prototype.size=function() {
  // Es el tama*o (1) que aporta el arbol donde estemos parados analizando + el tama*o de sus hijos.
if(!this.left && !this.right) return 1; //Si existe un root pero sin hijos, es decir, es leaf.
if(!this.right) return 1 + this.left.size(); // Tiene solo un hijo por la rama izq
if(!this.left) return 1 + this.right.size(); // Tiene solo hijo por la rama der
return 1 + this.left.size() + this.right.size(); //Tiene ambos hijos
} //El punto de corte es cuando consigue un arbol hoja

BinarySearchTree.prototype.insert=function(value) {
  //Recibe un value porque sera el valor del arbol nuevo a insertar
  //Debe de conseguir que posicion hay disponible, y ademas, si el valor
  //ingresado es mayor o menor al del arbol donde estoy parada en en ese momento.
  //Al momento de ingresar un nuevo valor, RECORDAR que estoy insertando un arbol, so..
  //debo de llamar a la funcion constructora de arbol.
  //No se retorna nada porque estoy unicamente insertando.
 
  if(value < this.value) {
    if(!this.left) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  };
  if(value > this.value)
   {
   if(!this.right) {
      this.right = new BinarySearchTree(value)
    } else {
      this.right.insert(value);
    }
  }
};
BinarySearchTree.prototype.contains=function(value) {
  /*Consulto si el valor coincide con el arbol root. De lo contrario, pregunto si el valor pasado por parametro es
  mayor o menor que el arbol root y dependiendo de eso ya descarto ramificaciones del arbol donde no buscare el 
  valor, ya que para un lado estan los mayores y los menores que el arbol root. Luego, consulto si ademas de ser
  mayor o menor, si existe algo en su rama izq o der, ya que si no hay nada mas abajo, entonces ya directamente no
  existe en todo el arbol, sino, invoco de nuevo la funcion y le pregunto al arbol donde estoy parada lo mismo
  inicial, dependiendo de eso retornara true o false ya que sigue con el codigo inicial.
   */
  if(this.value ===value) {
    return true;
  };
   if(value < this.value){
    if(!this.left) {
    return false;
   } else {
    return this.left.contains(value);
  }};
   if (value > this.value) {
    if(!this.right) {
      return false;
    } else {
      return this.right.contains(value);
     }
  } 
};
BinarySearchTree.prototype.depthFirstForEach=function() {
}
BinarySearchTree.prototype.breadthFirstForEach=function() {
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
