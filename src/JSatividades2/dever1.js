function chama1() {
  const number1 = document.getElementById("val1_1").value;
  const number2 = document.getElementById("val2_1").value;

  const resultado = soma(number1, number2);
  alert("A soma " + " é " + resultado);
  console.log(resultado);
}

function soma(num1, num2) {
  return +num1 + +num2;
}
