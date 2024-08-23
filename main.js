const loopDePares = (numero) => {
  for (let i = 0; i <= 100; i++) {
    let suma = i + numero;
    if (suma % 2 === 0) {
      console.log(
        `el numero ${suma} resultado de sumar ${numero} con ${i} es par`
      );
    }
  }
};

// loopDePares(1);

const loopDeImpares = (numero, palabra) => {
  for (let i = 0; i <= 100; i++) {
    let suma = i + numero;
    if (suma % 2 !== 0) {
      console.log(palabra);
    }
  }
};

// loopDeImpares(3, "numero impar");

const sumatoria = (numero) => {
  let sumatoria = 0;
  for (let i = 0; i <= numero; i++) {
    sumatoria += i;
  }
  console.log(sumatoria);
};

// sumatoria(8);

const nuevoArreglo = (numero) => {
  let arrayResultante = [];
  for (let i = 1; i <= numero; i++) {
    arrayResultante.push(i);
  }
  return arrayResultante;
};

// console.log(nuevoArreglo(5));

const splitPalabra = (palabra) => {
  let arrayPalabra = [];
  for (let letra of palabra) {
    arrayPalabra.push(letra);
  }
  return arrayPalabra;
};

// console.log(splitPalabra("murcielago"));

const arrayHandler = (array1, array2) => {
  if (array1.length === array2.length) {
    for (let i = 0; i <= array1.length; i++) {
      console.log(`soy ${array1[i]} y yo soy ${array2[i]}`);
    }
  } else {
    console.log(
      `${array1} y ${array2} no tienen la misma longitud, no podemos hacer la operación`
    );
  }
};

array1 = [2, 4, 7, 8, 9];
array2 = [7, 8, 6, 1, 2];

// arrayHandler(array1, array2);

const esPalindromo = (string) => {
  const stringNormalizado = string.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  console.log(stringNormalizado);

  stringAlReves = stringNormalizado.split("").reverse().join("");
  if (stringNormalizado === stringAlReves) {
    return true;
  } else {
    return false;
  }
};

console.log(esPalindromo("anilina"));
