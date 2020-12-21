function chama10() {
  const number1 = document.getElementById("val1_10").value;

  verifica10(number1);
  console.log(verifica2);
}

function verifica10(num1) {
  const custo = num1 * 1.3;
  if (num1 >= 12) {
    const custo = num1 * 1.0;
  }

  alert("O custo das maçãs vai sair por " + custo);
}
