const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function somatorioDivisiveisPor3ou5(numero) {
  let somatorio = 0;

  for (let i = 1; i < numero; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      somatorio += i;
    }
  }

  return somatorio;
}

rl.question('Digite um número inteiro positivo: ', (numero) => {
  const resultado = somatorioDivisiveisPor3ou5(parseInt(numero, 10));
  console.log(`O somatório dos números divisíveis por 3 ou 5 até ${numero} é: ${resultado}`);
  rl.close();
});