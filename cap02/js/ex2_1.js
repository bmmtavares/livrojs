//cria referencai ao form e ao elemento h3 (onde sera exibida a reposta)
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

//cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
  const nome = frm.inNome.value; //obtem o nome digitado no form
  resp.innerText = `Olá ${nome}`; //exibe a resposta do programa
  e.preventDefault(); //evita envio do form
});
