function chama() {
  const number1 = document.getElementById("val1").value;

  verifica(number1);
  console.log(verifica);
}

function verifica(num1) {
  const custo = num1 * 1.3;
  if (num1 >= 12) {
    const custo = num1 * 1.0;
  }

  alert("O custo das maçãs vai sair por " + custo);
}
