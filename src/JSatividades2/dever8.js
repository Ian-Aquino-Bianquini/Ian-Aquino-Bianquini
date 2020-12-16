function chama() {
  const number1 = document.getElementById("val1").value;

  verifica(number1);
  console.log(verifica);
}

function verifica(num1) {
  const nvsal = ((+num1 - 32) * 5) / 9;

  alert("o valor de C é " + nvsal);
}
