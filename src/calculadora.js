function somarDoisNumeros(valor1, valor2) {
  const resultadoSomaDeDoisValores = valor1 + valor2;
  return resultadoSomaDeDoisValores;
}

function subtracaoDeDoisNumeros(valor1, valor2) {
  const resultadoSubtracaoDoisNumeros = valor1 - valor2;
  return resultadoSubtracaoDoisNumeros;
}

function multiplicacaoDeDoisNumeros(valor1, valor2) {
  const resultadoMultiplicacaoDeDoisNumeros = valor1 * valor2;
  return resultadoMultiplicacaoDeDoisNumeros;
}

function divisaoDeDoisNumeros(valor1, valor2) {
  const resultadoDivisaoDeDoisNumeros = valor1 / valor2;
  return resultadoDivisaoDeDoisNumeros;
}

function calcularMediaDeDoisNumeros(valor1, valor2) {
  // 1. Soma todos os valores
  const resultadoSomaDeDoisValores = somarDoisNumeros(valor1, valor2);

  // 2. Divide pela quantidade de números passados
  const resultadoMediaDeDoisValores = resultadoSomaDeDoisValores / 2;

  // 3. Retornar o resultado
  return resultadoMediaDeDoisValores;
}

// Exportando a função para o arquivo calculadora.test.js
module.exports = {
  somarDoisNumeros,
  subtracaoDeDoisNumeros,
  multiplicacaoDeDoisNumeros,
  divisaoDeDoisNumeros,
  calcularMediaDeDoisNumeros
};
