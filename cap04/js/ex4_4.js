//cria referencia ao form e elemento onde sera exibida a resposta
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

//"ouvinte" de evento , acionado quando o botao submit for clicado
frm.addEventListener("submit", (e) => {
  e.preventDefault(); //evita envio do form
  //obtem e converte o conteudo do campo inHoraBrasil
  const horaBrasil = Number(frm.inHoraBrasil.value);
  let horaFranca = horaBrasil + 5; //calcula horario na Franca
  if (horaFranca > 24) {
    //se passar das 24 horas na Franca
    horaFranca = horaFranca - 24; //...subtrai 24
  }
  //exibe a resposta (altera o conteudo do elemento h3 na pagina)
  resp.innerText = `Hora na França ${horaFranca.toFixed(2)}`;
});
