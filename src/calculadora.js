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
  const resultadoSomaDeDoisValores = somarDoisNumeros(valor1, valor2);
  const resultadoMediaDeDoisValores = resultadoSomaDeDoisValores / 2;
  return resultadoMediaDeDoisValores;
}

module.exports = {
  somarDoisNumeros,
  subtracaoDeDoisNumeros,
};
