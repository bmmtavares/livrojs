const frm = document.querySelector("form"); // obtem elementos da pagina
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  // escuta evento submit do form
  e.preventDefault(); // evita envio do form para el

  const num = Number(frm.inNumero.value); // obtem nro informado

  let estrelas = ""; // variavel que ira concatenar as estrelas/tracos
  for (let i = 1; i <= num; i++) {
    // cria laco de repeticaode 1 ate num
    if (i % 2 == 1) {
      estrelas = estrelas + "*"; //na posicao impar do i: *
    } else {
      estrelas = estrelas + "-"; //na posicao par: -
    }
  }
  resp.innerText = estrelas; // exibe as estrelas
});
