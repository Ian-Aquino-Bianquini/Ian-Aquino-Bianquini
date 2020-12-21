function chama9() {
  const number1 = document.getElementById("val1_9").value;
  const number2 = document.getElementById("val2_9").value;
  const number3 = document.getElementById("val3_9").value;

  verifica9(number1, number2, number3);
  console.log(verifica9);
}

function verifica9(num1, num2, num3) {
  const mdfinal = (num1 * 2 + num2 * 3 + num3 * 5) / 10;

  alert("A média final é " + mdfinal);
}
