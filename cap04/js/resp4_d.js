const frm = document.querySelector("form"); //obtem elementos da pagina
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

frm.addEventListener("submit", (e) => {
  //"escuta" evento submit do form
  e.preventDefault(); //evita envio do form

  const ladoA = Number(frm.inLadoA.value);
  const ladoB = Number(frm.inLadoB.value);
  const ladoC = Number(frm.inLadoC.value);

  //calculo triangulo
  const teste1 = ladoC > ladoA + ladoB;
  const teste2 = ladoB > ladoA + ladoC;
  const teste3 = ladoA > ladoB + ladoC;

  if (teste1 || teste2 || teste3) {
    alert("Lados não podem formar um triângulo...");
  } else {
    //tipo de triangulo
    resp1.innerText = "Lados podem formar um triângulo";

    //Equilatero 3 lados iguais
    //Isoscele 2 lados iguais
    //Escaleno 3 lados diferentes
    if ((ladoA == ladoB) == ladoC) {
      resp2.innerText = "Tipo: Equilatero";
    } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
      resp2.innerText = "Tipo: Isósceles";
    } else {
      resp2.innerText = "Tipo: Escaleno";
    }
  }
});
