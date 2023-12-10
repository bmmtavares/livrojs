const prompt = require("prompt-sync")(); //adiciona o pacote prompt-sync
const numero = Number(prompt("Número (centena):")); //le o numero

if (numero < 100 || numero >= 1000) {
  console.log("Erro ... dese ser uma centena");
  return;
}

const num1 = Math.floor(numero / 100); //obtem 1 numero
const sobra = numero % 100; //o que sobra (dezena)
const num2 = Math.floor(sobra / 10); //obtem 2 numero
const num3 = sobra % 10; //obtem 3 numero

console.log(`Invertido: ${num3}${num2}${num1}`); //exibe o numero invertido
