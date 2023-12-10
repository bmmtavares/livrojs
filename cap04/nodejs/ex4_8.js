const prompt = require("prompt-sync")(); //adiciona pacote prompt-sync
const valor = Number(prompt("Valor da Compra R$: ")); //le valor da compra r$
const aux = Math.floor(valor / 20); //aux=nro de parcelas sem condicao
const parcelas = aux == 0 ? 1 : aux > 6 ? 6 : aux; //operador ternario
const valorParcela = valor / parcelas; //calculo do valor da parcelas sem
console.log(`Pode pagar em ${parcelas}x de R$: ${valorParcela.toFixed(2)}`);

/*
operador ternario equivale a:
let parcelas
if(aux==0){
    parcelas=1
}else if(aux>6){
    parcelas=6
}else{
    parcelas=aux
}
*/
