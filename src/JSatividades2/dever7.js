function chama7() {
  const number1 = document.getElementById("val1_7").value;
  const number2 = document.getElementById("val2_7").value;
  const number3 = document.getElementById("val3_7").value;

  verifica7(number1, number2, number3);
  console.log(verifica7);
}

function verifica7(num1, num2, num3) {
  const nvsal = +num1 + (+num2 + +num3 * 0.05);

  alert("o salário dele é " + nvsal);
}
