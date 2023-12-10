const frm = document.querySelector("form"); //obtem elementos da pagina
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

frm.addEventListener("submit", (e) => {
  //"escuta" evento submit do form
  e.preventDefault(); //evita envio do form

  const valorInformado = Number(frm.inValor.value);
  const valor1 = 1.0;
  const valor2 = 1.75;
  const valor3 = 3.0;

  const tempo1 = 30;
  const tempo2 = 60;
  const tempo3 = 120;

  if (valorInformado < valor1) {
    alert("Valor insuficiente.");
    return;
  }

  if (valorInformado >= valor1 && valorInformado < valor2) {
    //30min
    resp1.innerText = `Tempo: ${tempo1} min`;
    const troco = valorInformado - valor1;
    if (troco > 0) {
      resp2.innerText = `Troco R$: ${troco.toFixed(2)}`;
    }
  } else if (valorInformado >= valor2 && valorInformado < valor3) {
    //60min
    resp1.innerText = `Tempo: ${tempo2} min`;
    const troco = valorInformado - valor2;
    if (troco > 0) {
      resp2.innerText = `Troco R$: ${troco.toFixed(2)}`;
    }
  } else {
    //120min
    resp1.innerText = `Tempo: ${tempo3} min`;
    const troco = valorInformado - valor3;
    if (troco > 0) {
      resp2.innerText = `Troco R$: ${troco.toFixed(2)}`;
    }
  }

  //resp1.innerText = "Tempo: ";
  //resp2.innerText = "Troco: ";
});

//ouvinte para o evento reset
frm.addEventListener("reset", () => {
  resp1.innerText = "";
  resp2.innerText = "";
  frm.inValor.focus();
});
