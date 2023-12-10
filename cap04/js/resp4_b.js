const frm = document.querySelector("form"); //obtem elementos da pagina
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  //"escuta" evento submit do form
  e.preventDefault(); //evita envio do form

  const velocidadePermitida = Number(frm.inVelocidadePermitida.value); //obtem valor do campo numero
  const velocidadeCondutor = Number(frm.inVelocidadeCondutor.value); //obtem valor do campo

  if (velocidadeCondutor <= velocidadePermitida) {
    resp.innerText = "Sem multa";
  } else {
    const percentualVelocidadePermitida = (1 + 20 / 100) * velocidadePermitida;
    console.log("perc " + percentualVelocidadePermitida);
    if (velocidadeCondutor <= percentualVelocidadePermitida) {
      resp.innerText = "Multa Leve";
    } else {
      resp.innerText = "Multa Grave";
    }
  }
});
