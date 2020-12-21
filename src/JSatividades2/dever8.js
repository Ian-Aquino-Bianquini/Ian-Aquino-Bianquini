function chama8() {
  const number1 = document.getElementById("val1_8").value;

  verifica8(number1);
  console.log(verifica8);
}

function verifica8(num1) {
  const nvsal = ((+num1 - 32) * 5) / 9;

  alert("o valor de C é " + nvsal);
}
