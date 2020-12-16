function chama() {
  const number1 = document.getElementById("val1").value;

  verifica(number1);
  console.log(verifica);
}

function verifica(num1) {
  const novocusto = +num1 + (+num1 * 0.28 + +num1 * 0.45);

  alert("o novo custo do carro é " + novocusto);
}
