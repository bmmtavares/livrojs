//cria referencia ao forme elemento onde sera exibida a resposta
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

//"ouvinte" de evento, acionado qdo o botao submit for clicado
frm.addEventListener("submit", (e) => {
  e.preventDefault(); //evita o envio do form

  const nome = frm.inNome.value; //obtem valores do form
  const masculino = frm.inMasculino.checked;
  const altura = Number(frm.inAltura.value);

  let peso; //declara a variavel peso
  if (masculino) {
    // se masculino (ou, if masculino==true)
    //se masculino (ou, if masculino == true)
    peso = 22 * Math.pow(altura, 2); //Math.pow elva ao quadrado
  } else {
    peso = 21 * Math.pow(altura, 2);
  }

  //operador ternario
  //const peso2 = masculino ? 22 * Math.pow(altura, 2) : 21 * Math.pow(altura, 2);

  //apresenta a resposta (altera o conteudo do elemento h3 da pagina)
  resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)} kg`;
});

//ouvinte para o evento reset
frm.addEventListener("reset", () => {
  resp.innerText = ""; //limpa o conteudo do elemtno h3 que exibe a resposta
});
