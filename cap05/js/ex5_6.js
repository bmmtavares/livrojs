const frm = document.querySelector("form"); // obtem elementos da pagina
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  // escuta evento submit do form
  e.preventDefault(); // evita envio do form para el

  const num = Number(frm.inNumero.value); // obtem nro informado

  let temDivisor = 0; // declara e inicializa a variavel tipo flag

  for (let i = 2; i <= num / 2; i++) {
    // percorre os possiveis divisores do num
    if (num % i == 0) {
      // se tem um divisor
      temDivisor = 1; // muda o flag
      break; // sai da repeticao
    }
  }

  if (num > 1 && !temDivisor) {
    // se num > 1 e nao possui divisor
    resp.innerText = `${num} É primo`;
  } else {
    resp.innerText = `${num} Não é primo`;
  }

  /*
  let numDivisores = 0; // declara e inicializa contador
  for (let i = 1; i <= num; i++) {
    // percorre todos possiveis divisores de num
    if (num % i == 0) {
      // verifia se i (1,2,3...) e divisor do num
      numDivisores++; // se for incrementa contador
    }
  }
  if (numDivisores == 2) {
    // se possui apenas 2 divisores e primo
    resp.innerText = `${num} é Primo`;
  } else {
    resp.innerText = `${num} não é Primo`;
  }
  */
});
