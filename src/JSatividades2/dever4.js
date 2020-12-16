function chama() {
  const number1 = document.getElementById("val1").value;
  const number2 = document.getElementById("val2").value;

  verifica(number1, number2);
  console.log(verifica);
}

function verifica(num1, num2) {
  const hip = +num1 * +num1 + +num2 * +num2;
  alert("a hipotenusa é " + Math.sqrt(hip));
}
