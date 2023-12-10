const prompt = require("prompt-sync")(); //adiciona o pacote ao programa
const veiculo = prompt("Veículo: "); //le os dados de entrada
const preco = Number(prompt("Preço R$:"));
const entrada = preco * 0.5; //calcular valor da entrada
const parcela = (preco * 0.5) / 12; //...e das parcelas
console.log(`Promoção: ${veiculo}`); //exibe as respostas
console.log(`Entrada de R$: ${entrada.toFixed(2)}`);
console.log(`+12x de R$ ${parcela.toFixed(2)}`);
