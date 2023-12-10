const frm = document.querySelector("form"); // obtem elementos da pagina
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  // escuta evento submit do form
  e.preventDefault(); // evita envio do form para el

  const num = Number(frm.inNumero.value); // obtem nro informado
  const fruta = frm.inFruta.value; // obtem nome da fruta

  let frutas = ""; // variavel que ira concatenar as frutas
  let i = 0;
  do {
    ++i;
    frutas += fruta + " * ";
  } while (i < num);

  let index = frutas.lastIndexOf("*");
  frutas = frutas.substring(0, index - 1);
  resp.innerText = frutas; // exibe as frutas
});
