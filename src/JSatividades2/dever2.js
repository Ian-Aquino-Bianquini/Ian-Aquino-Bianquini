function chama() {
  const number1 = document.getElementById("val1").value;
  const number2 = document.getElementById("val2").value;

  verifica(number1, number2);
  console.log(verifica);
}

function verifica(num1, num2) {
  if (num1 > num2) {
    alert("o " + num1 + " é maior");
  } else {
    if (num2 > num1) {
      alert("o " + num2 + " é maior");
    }
    if (num1 == num2) {
      alert("os 2 são iguais");
    }
  }
}
