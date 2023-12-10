const prompt = require("prompt-sync")(); //adiciona o pacote ao programa
const peso = Number(prompt("Peso da Ração (Kg):")); //le os dados de entrada
const consumo = Number(prompt("Consumo diário (gr):"));
const pesoEmGramas = peso * 1000;
const duracao = Math.floor(pesoEmGramas / consumo); //calcular duracao (dias) da racao
const sobra = pesoEmGramas - consumo * duracao; //calcular sobra da racao
const sobra2 = pesoEmGramas % consumo;
console.log(`Duração: ${duracao} dias`);
console.log(`Sobra: ${sobra}gr`);
console.log(`Sobra: ${sobra2}gr`);
