function chama4() {
  const number1 = document.getElementById("val1_4").value;
  const number2 = document.getElementById("val2_4").value;

  verifica4(number1, number2);
  console.log(verifica4);
}

function verifica4(num1, num2) {
  const hip = +num1 * +num1 + +num2 * +num2;
  alert("a hipotenusa é " + Math.sqrt(hip));
}
