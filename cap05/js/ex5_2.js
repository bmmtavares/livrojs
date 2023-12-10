const frm = document.querySelector("form"); //obtem elementos da pagina
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault(); //evita envio do form

  const numero = Number(frm.inNumero.value); //obtem nro informado
  let resposta = `Entre  ${numero} e 1: `; //String p/ montar a resposta

  /*
  for (let i = numero; i > 0; i = i - 1) {
    //for descrescente
    //resposta = resposta + i + ", "; //resposta acumula numeros (e virgulas)
    if (i == 1) {
      resposta = resposta + i + ".";
    } else {
      resposta = resposta + i + ", ";
    }
  }
*/

  // for mais inteligente
  for (let i = numero; i > 1; i--) {
    resposta = resposta + i + ", ";
  }
  resposta = resposta + "1.";

  resp.innerText = resposta; //exibe a resposta
});
