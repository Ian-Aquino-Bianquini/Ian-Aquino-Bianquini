function chama() {
  const number1 = document.getElementById("val1").value;
  const number2 = document.getElementById("val2").value;
  const number3 = document.getElementById("val3").value;

  verifica(number1, number2, number3);
  console.log(verifica);
}

function verifica(num1, num2, num3) {
  const mdfinal = (num1 * 2 + num2 * 3 + num3 * 5) / 10;

  alert("A média final é " + mdfinal);
}
