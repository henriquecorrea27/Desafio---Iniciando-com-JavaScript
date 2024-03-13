function HelloWorld() {
  alert(`Hello World`);
}

function Soma() {
  var numero1 = 5;
  var numero2 = 10;

  var resultado = numero1 + numero2;

  alert(resultado);
}

function numberOrNot() {
  var meuValor = "42";

  if (typeof meuValor === "number") {
    alert("É um número!");
  } else {
    alert("Não é um número.");
  }
}

function stringOrNot() {
  var meuValor = 42;

  if (typeof meuValor === "string") {
    alert("É uma string!");
  } else {
    alert("Não é uma string.");
  }
}

function booleanOrNot() {
  var meuValor = true;

  if (typeof meuValor === "boolean") {
    alert("É um boolean!");
  } else {
    alert("Não é um boolean.");
  }
}

function subtracao() {
  var numero1 = 50;
  var numero2 = 25;

  var resultado = numero1 - numero2;

  alert(resultado);
}

function multi() {
  var numero1 = 10;
  var numero2 = 2;

  var resultado = numero1 * numero2;

  alert(resultado);
}

function dividir() {
  var numero1 = 10;
  var numero2 = 2;

  var resultado = numero1 / numero2;

  alert(resultado);
}

function par() {
  var numero1 = 5;

  if (numero1 % 2 == 0) {
    alert("É par!");
  } else {
    alert("Não é par.");
  }
}

function impar() {
  var numero1 = 50;

  if (numero1 % 2 != 0) {
    alert("É ímpar!");
  } else {
    alert("Não é ímpar.");
  }
}
