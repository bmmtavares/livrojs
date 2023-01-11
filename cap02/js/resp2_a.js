//cria referencia ao form e aos elementos de resposta (pelo seu id)
const frm = document.querySelector("form");
const resp1 = document.querySelector("#resp1");
const resp2 = document.querySelector("#resp2");

//cria um "ouvinte" de evento, acionado quando o botao submit for clicado
frm.addEventListener("submit", (e) => {
  const medicamento = frm.inMedicamento.value; //obtem o conteudo dos campos
  const preco = Number(frm.inPreco.value);

  const desconto = Math.floor(preco) * 2; //calcula desconto
  resp1.innerText = `Promoção de ${medicamento}`; //exibe as respostas
  resp2.innerText = `Leve 2 por apenas R$: ${desconto.toFixed(2)}`;

  e.preventDefault(); //evita envio do form
});
