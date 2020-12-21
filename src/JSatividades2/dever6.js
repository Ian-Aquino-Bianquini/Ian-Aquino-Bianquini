function chama6() {
  const number1 = document.getElementById("val1_6").value;

  verifica6(number1);
  console.log(verifica6);
}

function verifica6(num1) {
  const novocusto = +num1 + (+num1 * 0.28 + +num1 * 0.45);

  alert("o novo custo do carro é " + novocusto);
}
