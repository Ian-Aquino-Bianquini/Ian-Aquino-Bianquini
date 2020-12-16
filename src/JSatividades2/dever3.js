function chama() {
  const number1 = document.getElementById("val1").value;

  verifica(number1);
  console.log(verifica);
}

function verifica(num1) {
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
