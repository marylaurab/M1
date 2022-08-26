"use strict";
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) {
    return array;
  }
  let menor = [];
  let mayor = [];
  let pivot = array[array.length - 1];
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      menor.push(array[i]);
    } else {
      mayor.push(array[i]);
    }
  }
  return quickSort(menor).concat(pivot).concat(quickSort(mayor));
}

function aux(part1, part2) {
  let order = [];
  let index1=0;
  let index2=0;
  while(index1<part1.length && index2<part2.length) {
    if(part1[index1] > part2[index2]) {
      order.push(part2[index2]);
      index2++;
    } else {
      order.push(part1[index1]);
      index1++;
    }
  }
  
  return order.concat(part1.slice(index1)).concat(part2.slice(index2));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if (array.length === 1) return array;
  let middle = Math.floor(array.length / 2);
  let part1 = array.slice(0, middle);
  let part2 = array.slice(middle);

  return aux(mergeSort(part1), mergeSort(part2));
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
