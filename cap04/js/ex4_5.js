const frm = document.querySelector("form"); //obtem elementos da pagina
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault(); //evita envio do form
  const numero = Number(frm.inNumero.value); //obtem numero digitado no form
  const raiz = Math.sqrt(numero); //calcula raiz quadrada do numero
  if (Number.isInteger(raiz)) {
    //teste poderia ser: if(raiz % 1 ==0)
    //se valor da razi for um numero inteiro
    resp.innerText = `Raiz: ${raiz}`; //...mostra a raiz
  } else {
    resp.innerText = `Não há raiz exata para ${numero}`; //...mostra a mensagem
  }
});
