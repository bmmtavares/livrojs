//cria referencia ao form e aos elementos de resposta (pelo seu id)
const frm = document.querySelector("form");
const resp1 = document.querySelector("#resp1");

//cria um "ouvinte" de evento, acionado quando o botao submit for clicado
frm.addEventListener("submit", (e) => {
  const fracaoTempo=15;
  const valorUso = Number(frm.inValorUso.value); //obtem o conteudo dos campos
  const tempoUso = Number(frm.inTempoUso.value);
  
  //3 por 15min
  //25=6,00
  //se divisao exata, pegar resultado e multiplicar por 3
  //senao pegar parte inteira + 1 e multiplicar por 3

  const resultadoDivFracao=tempoUso / fracaoTempo;
  let valorAPagar=0;
  if(tempoUso % fracaoTempo==0){
    valorAPagar= resultadoDivFracao * valorUso;

  }else{
    valorAPagar = (Math.floor(resultadoDivFracao)+1)*valorUso;

  }

  resp1.innerText = `Valor a Pagar R$: ${valorAPagar.toFixed(2)}`; //exibe as respostas

  e.preventDefault(); //evita envio do form
});
