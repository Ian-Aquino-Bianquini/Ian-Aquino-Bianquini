function chama3() {
  const number1 = document.getElementById("val1_3").value;

  verifica3(number1);
  console.log(verifica3);
}

function verifica3(num1) {
  if (num1 % 2 == 0) {
    if (num1 != 2) {
      alert("o " + num1 + " não é primo");
    } else {
      alert("o " + num1 + " é primo");
    }
  } else {
    alert("o " + num1 + " é primo");
  }
}
