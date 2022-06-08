var numeros = document.getElementById("numeroAtual");

var numeroAtual = 0;

function decrement() {
  numeroAtual = numeroAtual - 1;
  numeros.innerHTML = numeroAtual;
}

function increment() {
  numeroAtual = numeroAtual + 1;
  numeros.innerHTML = numeroAtual;
}