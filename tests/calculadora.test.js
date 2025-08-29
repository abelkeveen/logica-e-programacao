const {
  somarDoisNumeros,
  subtracaoDeDoisNumeros,
} = require("../src/calculadora");

const resultadoSomaDeDoisValores = somarDoisNumeros(5, 3);

console.log(resultadoSomaDeDoisValores);

const resultadoSubtracaoDoisNumeros = subtracaoDeDoisNumeros(10, 9);

console.log(resultadoSubtracaoDoisNumeros);
