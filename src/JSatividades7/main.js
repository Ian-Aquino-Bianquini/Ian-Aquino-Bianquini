function calcular() {
  let val1 = document.getElementById("val1").value;
  let val2 = document.getElementById("val2").value;
  const resultdiv = document.getElementById("result");
  let operador = document.getElementById("operador").value;
  console.log(val1);

  if (val1 === "" || val2 === "") {
    resultdiv.innerHTML = "Por favor insira um número!";
    return;
  }
  if ((operador != "+") | "-" | "/" | "*") {
    resultdiv.innerHTML = "Por favor insira um operador valido!";
    return;
  }

  val1 = parseFloat(val1);
  val2 = parseFloat(val2);

  switch (operador) {
    case "+":
      resultdiv.innerHTML = val1 + val2;
      break;
    case "/":
      resultdiv.innerHTML = val1 / val2;
      break;
    case "-":
      resultdiv.innerHTML = val1 - val2;
      break;
    case "*":
      resultdiv.innerHTML = val1 * val2;
      break;
  }
}

function imposto() {
  const salario = document.getElementById("salario").value;
  const output = document.getElementById("taxa");
  let aliquota = 0;
  let deduzir = 0;

  if (salario <= 1903.8) {
    output.innerHTML = 0;
    // console.log(1);
    return;
  }
  if (salario <= 2826.65) {
    aliquota = 7.5;
    deduzir = 142.8;
    aliquota = aliquota / 100;
    output.innerHTML = salario * aliquota - deduzir;
    // console.log(2);
    return;
  }
  if (salario <= 3751.06) {
    aliquota = 15.0;
    deduzir = 354.8;
    aliquota = aliquota / 100;
    output.innerHTML = salario * aliquota - deduzir;
    // console.log(3);
    return;
  }
  if (salario <= 4664.68) {
    aliquota = 22.5;
    deduzir = 636.13;
    aliquota = aliquota / 100;
    output.innerHTML = salario * aliquota - deduzir;
    // console.log(4);
    return;
  }
  if (salario >= 4664.69) {
    aliquota = 27.5;
    deduzir = 869.36;
    aliquota = aliquota / 100;
    output.innerHTML = salario * aliquota - deduzir;
  }
}

function triangulos() {
  let t1 = document.getElementById("t1").value;
  let t2 = document.getElementById("t2").value;
  let t3 = document.getElementById("t3").value;
  const output = document.getElementById("toutput");

  console.log(t1, t2, t3);
  if ((t1 || t2 || t3) == "") {
    return;
  }

  if (t1 == t2 && t2 == t3) {
    output.innerHTML = "Equilátero";
  } else if (t1 != t2 && t2 != t3 && t3 != t1) {
    output.innerHTML = "Escaleno";
  } else {
    output.innerHTML = "Isósceles";
  }
}

function cripto() {
  let content = document.getElementById("content").value;
  let criptoval = document.getElementById("criptoval").value;
  const outputdiv = document.getElementById("coutput");

  criptoval = parseInt(criptoval, 10);

  outputdiv.innerHTML = content
    .toUpperCase()
    .replace(/[A-Z]/gi, (c) =>
      String.fromCharCode(((c.charCodeAt(0) - 65 + criptoval) % 26) + 65)
    );
}
