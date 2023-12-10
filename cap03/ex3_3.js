const prompt = require("prompt-sync")(); //adiciona o pacote ao programa
const salario = Number(prompt("Salário R$:")); //le os dados de entrada
const tempo = Number(prompt("Tempo (anos):"));
const quadrienios = Math.floor(tempo / 4); //calcular qtd de quadrienios
//a cada 4 anos trabalhado aumenta +1% o salario
const salarioFinal = (1 + quadrienios / 100) * salario;
console.log(`Quadriênios: ${quadrienios}`);
console.log(`Salário final R$: ${salarioFinal.toFixed(2)}`);
