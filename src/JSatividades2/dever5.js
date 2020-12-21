function chama5() {
  const number1 = document.getElementById("val1_5").value;
  const number2 = document.getElementById("val2_5").value;

  verifica5(number1, number2);
  console.log(verifica5);
}

function verifica5(num1, num2) {
  const nvsalario = +num1 + +num1 * (+num2 / 100);

  alert("o novo salário é" + nvsalario);
}
