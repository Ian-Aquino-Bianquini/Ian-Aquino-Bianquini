function chama() {
  const number1 = document.getElementById("val1").value;
  const number2 = document.getElementById("val2").value;

  const resultado = soma(number1, number2);
  alert("A soma " + " é " + resultado);
  console.log(resultado);

  document.write(" <br /> <h2>O valor deu</h2>" + resultado);
}

function soma(num1, num2) {
  return +num1 + +num2;
}
