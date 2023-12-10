const frm = document.querySelector("form"); // obtem elementos da pagina
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  // escuta evento submit do form
  e.preventDefault(); // evita envio do form para el

  const nroChinchilas = Number(frm.inNroChinchilas.value); // obtem nro de chincilas informado
  const nroAnos = Number(frm.inNroAnos.value); // obtem nro de anos informado

  let previsao = "";
  let totalChinchilas = 0;
  for (let i = 0; i < nroAnos; i++) {
    if (i > 0) {
      totalChinchilas *= 3;
    } else {
      totalChinchilas = nroChinchilas;
    }

    previsao += i + 1 + "º Ano: " + totalChinchilas + " Chinchilas" + "</br>";
  }
  resp.innerHTML = previsao; // exibe previsao de chincilas
});
