function chama2() {
  const number1 = document.getElementById("val1_2").value;
  const number2 = document.getElementById("val2_2").value;

  alert(verifica2(number1, number2));
}

function verifica2(num1, num2) {
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
