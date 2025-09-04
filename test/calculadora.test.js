// Importação de função
const { somarDoisNumeros } = require("../src/calculadora"); // Função de somar dois nummeros e o Caminho de onde está a função exportada

const { expect } = require("chai"); // Função para comparação

// describe da biblioteca mocha
describe("Testes da função de Soma", function () { // describe é um grupo de testes
  it("A função deve ser capaz de somar dois números positivos", function () { // it é teste
    // Coleta o resultado da função
    const resultadoDaSoma = somarDoisNumeros(10, 5);

    // Compara o resultado com o valor que você espera
    expect(resultadoDaSoma).to.equal(15);
  });

  it("A função deve ser capaz de somar um número positivo e um número negativo", function () {
    const resultadoDaSoma = somarDoisNumeros(50, -15);

    expect(resultadoDaSoma).to.equal(35);
  });

  it("A função deve ser capaz de somar dois números negativos", function () {
    const resultadoDaSoma = somarDoisNumeros(-10, -20);

    expect(resultadoDaSoma).to.equal(-30);
  });
});
