// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  }
  return num2;
}

// Iteration #2: Find longest word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findLongestWord(words) {
  if (words.length === 0) {
    return null;
  }

  let LongestWord = "";

  /*
como yo tenia el codigo: 
 for (let i = 0; i < words.length; i++) {
    if (words[i].length > LongestWord.length) {
      LongestWord = words[i];
    }
  } 
*/

  for (const element of words) {
    if (element.length > LongestWord.length) {
      LongestWord = element;
    }
  }

  return LongestWord;
}

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  if (numbers == 0) {
    return 0;
  }

  // const sum = numbers.reduce(
  //   (valorAcumulado, valorAtual) => valorAcumulado + valorAtual
  // );
  // return sum;

  let soma = 0;
  let maximo = -Infinity; //O valor numérico de -Infinity é um número negativo extremamente grande que representa o menor valor possível em JavaScript.
  console.log(maximo);

  for (let i = 0; i < numbers.length; i++) {
    soma += numbers[i];
    if (soma > maximo) {
      maximo = soma;
    }
  }
  return soma;
}

// Iteration #3.1 Bonus:
function sum(mixedArr) {
  let total = 0;
  let unsupportedTypes = ["object", "array"];

  // verifica si el array esta vacio y devuelve cero
  if (mixedArr.length === 0) {
    return 0;
  }

  // itera sobre cada elemento del array para verificar si:
  for (let i = 0; i < mixedArr.length; i++) {
    const value = mixedArr[i];

    // si es un array o objecto, devuelve un error
    if (unsupportedTypes.includes(typeof value)) {
      throw new Error("Unsupported data type found in the array");
    }

    // si es un numero o boolean suma directamente
    if (typeof value === "number" || typeof value === "boolean") {
      total += value;
    }

    // si es una string suma su .length
    if (typeof value === "string") {
      total += value.length;
    }
  }

  return total;
}

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
  if (numbers == 0) {
    return null;
  }

  let totalNumbers = 0;
  let promedio = 0;

  for (let i = 0; i < numbers.length; i++) {
    totalNumbers += numbers[i];
  }
  promedio = totalNumbers / numbers.length;
  console.log(promedio);

  return promedio;
}

// Level 2: Array of strings
const wordsArr = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace",
];

function averageWordLength(wordsArr) {
  let totalWord = 0;
  let promedioWord = 0;

  if (wordsArr == 0) {
    return null;
  }

  for (let i = 0; i < wordsArr.length; i++) {
    if (typeof wordsArr[i] === "string") {
      totalWord += wordsArr[i].length;
    }
  }

  promedioWord = totalWord / wordsArr.length;
  return promedioWord;
}

// Bonus - Iteration #4.1
function avg(mixedArr) {
  if (mixedArr == 0) {
    return null;
  }

  let valorTotal = sum(mixedArr);
  let promedio = valorTotal / mixedArr.length;

  return promedio;
}

// Iteration #5: Unique arrays
const wordsUnique = [
  "crab",
  "poison",
  "contagious",
  "simple",
  "bring",
  "sharp",
  "playground",
  "poison",
  "communion",
  "simple",
  "bring",
];

function uniquifyArray() {}

// Iteration #6: Find elements
const wordsFind = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist() {}

// Iteration #7: Count repetition
const wordsCount = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience",
  "matter",
];

function howManyTimes(wordsArr) {
  const mapaPalabras = new Map(); // cria un nuevo map() ---- que es el mapa

  for (let i = 0; i < wordsArr.length; i++) {
    let contadorPalabra = mapaPalabras.get(wordsArr[i]); //  El método "get" (obtener) se utiliza para recuperar o acceder al valor de una variable privada en un objeto.

    if (contadorPalabra == undefined) {
      mapaPalabras.set(wordsArr[i], 1); // set ??
    } else {
      mapaPalabras.set(wordsArr[i], contadorPalabra + 1);
    }
  }

  let resp = 0;
  mapaPalabras.forEach((number) => {
    if (number > 1) {
      resp = number;
    }
  });
  console.log(resp);
  console.log(JSON.stringify(Object.fromEntries(mapaPalabras))); // una manera de imprimir el  map en form
  return resp;
}

// Iteration #8: Bonus
const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [
    49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62,
    0,
  ],
  [
    81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36,
    65,
  ],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [
    22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13,
    80,
  ],
  [
    24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12,
    50,
  ],
  [
    32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64,
    70,
  ],
  [
    67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94,
    21,
  ],
  [
    24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63,
    72,
  ],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [
    16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85,
    57,
  ],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [
    19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55,
    40,
  ],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [
    88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53,
    69,
  ],
  [
    4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76,
    36,
  ],
  [
    20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36,
    16,
  ],
  [
    20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5,
    54,
  ],
  [
    1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67,
    48,
  ],
];

function greatestProduct(matrix) {
  let maxProduct = 0;
  const rows = matrix.length; //obtendo o numero total de linhas
  const cols = matrix[0].length; // obtendo o numero total de colunas
  console.log(`aqui rows vale: ${rows}, 
                cols vale ${cols} 
                y maxProduct vale: ${maxProduct}.`);

  for (let i = 0; i < rows; i++) {
    //  iterará pelas linhas da matriz.

    for (let j = 0; j < cols; j++) {
      //  iterará pelas colunas da matriz.

      if (j + 3 < cols) {
        const product =
          matrix[i][j] * matrix[i][j + 1] * matrix[i][j + 2] * matrix[i][j + 3];
        console.log(
          `aqui i vale: ${i}, j vale ${j} y producto vale: ${product}.`
        );

        maxProduct = Math.max(maxProduct, product);
        /*
        Este bloco if verifica se há elementos suficientes na matriz para calcular o produto de 4 elementos.
        começando na coluna atual (j) e indo até a coluna j + 3.
        Se houver, o produto desses 4 elementos é calculado e armazenado na variável "product".
        */

        /*
        Math.max() é usada para atualizar o valor da variável.
        Ela compara o valor atual da variável maxProduct com o produto atual e o resultado é atribuído novamente à variável maxProduct, garantindo que ela sempre contenha o maior produto encontrado durante a execução do loop.
        É equivalente a escrever:

        if (product > maxProduct) {
          maxProduct = product;
        }
        */
      }

      // Verificar el producto hacia abajo
      if (i + 3 < rows) {
        const product =
          matrix[i][j] * matrix[i + 1][j] * matrix[i + 2][j] * matrix[i + 3][j];
        console.log(
          `aqui i vale: ${i}, j vale ${j} y producto vale: ${product}.`
        );

        maxProduct = Math.max(maxProduct, product);
        /*
        Este trecho de código verifica se é possível obter um produto ao se mover 3 linhas abaixo a partir da posição atual (i, j) da matriz.
        Se for possível, o produto é calculado multiplicando o valor atual (matrix[i][j]) pelo valor de mais 3 elementos abaixo dele ( [i+1], [i+2], [i+3] ).
        */
      }

      // Verificar el producto hacia la derecha y abajo
      if (i + 3 < rows && j + 3 < cols) {
        const product =
          matrix[i][j] *
          matrix[i + 1][j + 1] *
          matrix[i + 2][j + 2] *
          matrix[i + 3][j + 3];

        console.log(
          `aqui i vale: ${i}, j vale ${j} y producto vale: ${product}.`
        );
        maxProduct = Math.max(maxProduct, product);
        /*
        aqui se faz una escalera a la derecha y abajo
        */
      }

      // Verificar el producto hacia la izquierda y abajo
      if (i + 3 < rows && j - 3 >= 0) {
        const product =
          matrix[i][j] *
          matrix[i + 1][j - 1] *
          matrix[i + 2][j - 2] *
          matrix[i + 3][j - 3];

        console.log(
          `aqui i vale: ${i}, j vale ${j} y producto vale: ${product}.`
        );

        maxProduct = Math.max(maxProduct, product);

        /*
        aqui se faz una escalera a la izquierda y abajo
        */
      }
    }
  }

  console.log(`maxProduct antes del return vale ${maxProduct}`);
  return maxProduct;
}

greatestProduct(matrix);

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== "undefined") {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct,
  };
}

/*    subir a git hub

1 - git init
2 - git status
3 - git add .
4 - git status
5 - git commit -m "new commit 01"
6 - git push origin master

*/
