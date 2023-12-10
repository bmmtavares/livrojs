const frm = document.querySelector("form"); //obtem elementos da pagina
const resp = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
  //"escuta" evento submit do form
  e.preventDefault(); //evita envio do form
  const numero = Number(frm.inNumero.value); //obtem numero informado
  let resposta = ""; //variavel do tipo String , para concatenar a resposta
  //cria um laco de repeticao (i comeca em 1 e incrementado ate 10)]
  for (let i = 1; i <= 10; i++) {
    // a variavel resposta vai acumulando os novos conteudos (nos 2 formatos)
    // resposta = resposta + numero + " X " + i + " = " + numero * i + "\n";
    resposta = `${resposta}${numero} x ${i} =${numero * i}\n`;
  }
  // o conteudo da tag pre alterado para exibir a tabuada do numero
  resp.innerText = resposta;
});
