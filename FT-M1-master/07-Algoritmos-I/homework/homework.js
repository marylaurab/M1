"use strict";
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let fac = [1];
  let factor = 2;
  while (num > 1) {
    if (num % factor === 0) {
      num = num / factor;
      fac.push(factor);
    } else {
      factor += 1;
    }
  }
  return fac;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let menoramayor = [];
  if (!array) return null;
  if (array.length === 1) return array;
  if (array.length === 2) {
    if (array[0] > array[1]) {
      return array;
    } else {
      menoramayor.push(array[1]);
      menoramayor.push(array[0]);
      return menoramayor;
    }
  }
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      } else {
        continue;
      }
    }
  }
  return array;
}
function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  let menoramayor = [];
  if (!array) return null;
  if (array.length === 1) return array;
  if (array.length === 2) {
    if (array[0] > array[1]) {
      return array;
    } else {
      menoramayor.push(array[1]);
      menoramayor.push(array[0]);
      return menoramayor;
    }
  }
  for (let i = 1; i < array.length; i++) {
    let aux = array[i];
    let j = i - 1;
    while (aux < array[j] && j >= 0) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = aux;
  }
  return array;
}

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    // Recorro todo el array
    let posicion = i;
    console.log("array: " + array + ", en posición: " + i);
    for (let j = i + 1; j < array.length; j++) {
      // Recorro desde el siguiente elemento de la pos. i para comparar
      console.log("Comparando " + array[j] + " > " + array[posicion]);
      if (array[j] > array[posicion] && posicion < array.length) {
        console.log("Continuar");
        continue;
      }
        posicion = j;
      
      console.log("posición ahora vale: " + posicion);
    }
    let posAnter = array[i];
    array[i] = array[posicion];
    array[posicion] = posAnter;
    console.log(
      "array[i]: " + array[i] + ", array[posicion]: " + array[posicion]
    );
  }
  return array;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
