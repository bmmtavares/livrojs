const frm = document.querySelector("form"); //obtem elementos da pagina
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  //"escuta" evento submit do form
  e.preventDefault(); //evita envio do form

  const nro = Number(frm.inNumero.value); //obtem valor do campo numero

  /*   if (nro % 2 == 0) {
    resp.innerText = `${nro} é par`;
  } else {
    resp.innerText = `${nro} é ímpar`;
  }
 */
  // usando operador ternario
  resp.innerText =
    nro % 2 == 0
      ? (resp.innerText = `${nro} é par`)
      : (resp.innerText = `${nro} é ímpar`);
});
