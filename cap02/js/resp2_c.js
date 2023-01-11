//cria referencia ao form e aos elementos de resposta (pelo seu id)
const frm = document.querySelector("form");
const resp1 = document.querySelector("#resp1");
const resp2 = document.querySelector("#resp2");

//cria um "ouvinte" de evento, acionado quando o botao submit for clicado
frm.addEventListener("submit", (e) => {
  const produto = (frm.inProduto.value); //obtem o conteudo dos campos
  const preco = Number(frm.inPreco.value);
  
  const percentualDesconto=50;
  const valorDesconto = (percentualDesconto/100)*preco;
  const valorTotal = preco * 2 + valorDesconto;

  resp1.innerText = `${produto} - Promoção: Leve 3 por R$: ${valorTotal.toFixed(2)}`; //exibe as respostas
  resp2.innerText = `O 3º produto custa apenas R$: ${valorDesconto.toFixed(2)}`; //exibe as respostas

  e.preventDefault(); //evita envio do form
});
