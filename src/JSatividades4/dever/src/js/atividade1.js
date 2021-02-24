//Faça um programa que leia um texto e indique a palavra de maior ocorrência e quantas vezes ela apareceu no texto.

function inverte1() {
  var frase1 = document.getElementById("1").value;
  alert(frase1.split("").reverse().join(""));
}
function vogaisnegrito() {
  var frase2 = document.getElementById("2").value;
  alert(frase2.replace(/[AEIOU]/gi, frase2.charAt().bold()));
}
function palavrastexto() {
  var frase3 = document.getElementById("3").value;
  var array = [];
  var table = document.getElementById("tabela");
  array = frase3.split(" ");
  var arrayfoi = "";
  for (let index = 0; index < array.length; index++) {
    if (arrayfoi.search(new RegExp(array[index], "gi")) == -1) {
      var linha = document.createElement("tr");
      var textlinha = document.createTextNode(
        `${array[index]} : ${
          frase3.match(new RegExp(array[index], "gi")).length
        }`
      );
      linha.appendChild(textlinha);
      linha.setAttribute("id", array[index]);
      table.appendChild(linha);
      arrayfoi = arrayfoi + ` ${array[index]}`;
    }
  }
}

function contagemdemaispalavras() {
  var frase4 = document.getElementById("4").value;
  var array = [];
  var table = document.getElementById("tabela2");
  array = frase4.split(" ");
  var maiorstr = "nada";
  var maiorcont = 0;

  for (let index = 0; index < array.length; index++) {
    var numatual = frase4.match(new RegExp(`${array[index]}`, "gi"));
    console.log(numatual);
    console.log(numatual[1] + numatual.length);
    var linha = document.createElement("tr");
    var textlinha = document.createTextNode(
      `${numatual[1]} : ${numatual.length}`
    );
    linha.appendChild(textlinha);
    linha.setAttribute("id", array[index]);
    table.appendChild(linha);
    arrayfoi = arrayfoi + ` ${array[index]}`;
  }
}

function substituir() {
  var frase5 = document.getElementById("5").value;
  var text = document.getElementById("text5");
  console.log(text.innerHTML);
  var sub = document.getElementById("sub").value;
  var newtext = text.innerHTML.toString().replace(frase5, sub);
  text.innerHTML = newtext;
}

function diaspessoa() {
  var frase6 = document.getElementById("6").value;
  var array = frase6.split("-");
  var dia = array[2];
  var mes = array[1];
  var ano = array[0];

  var data = new Date();

  data = new Date();
  var dia_atual = data.getDate();
  var mes_atual = data.getMonth() + 1;
  var ano_atual = data.getFullYear();

  var vividos = parseInt(
    (ano_atual - ano - 1) * 365 + mes_atual - mes + mes_atual + dia_atual + +dia
  );
  document.getElementById("res").innerHTML = vividos;
}

function dataextens() {
  var frase7 = document.getElementById("7").value;
  var array = frase7.split("-");
  var dia = array[2];
  var mes = array[1];
  var ano = array[0];

  var newmes = "";

  switch (mes) {
    case "01":
      newmes = "janeiro";
      break;
    case "02":
      newmes = "fevereiro";
      break;
    case "03":
      newmes = "março";
      break;
    case "04":
      newmes = "abril";
      break;
    case "05":
      newmes = "maio";
      break;
    case "06":
      newmes = "junho";
      break;
    case "07":
      newmes = "julho";
      break;
    case "08":
      newmes = "agosto";
      break;
    case "09":
      newmes = "setembro";
      break;
    case "10":
      newmes = "outubro";
      break;
    case "11":
      newmes = "novembro";
      break;
    case "12":
      newmes = "dezembro";
      console.log("oi");
      break;
  }

  document.getElementById("res7").innerHTML = `${dia} de ${newmes} de ${ano}`;
}

function diferenca() {
  var frase8 = document.getElementById("8").value;
  var frase82 = document.getElementById("82").value;

  var dataInicio = new Date(document.getElementById("8").value);
  var dataFim = new Date(document.getElementById("82").value);
  var diffMilissegundos = dataFim - dataInicio;
  var diffSegundos = diffMilissegundos / 1000;
  var diffMinutos = diffSegundos / 60;
  var diffHoras = diffMinutos / 60;
  var diffDias = diffHoras / 24;
  document.getElementById("res8").innerHTML = diffDias / 7;
}

function validation() {
  var senha = document.getElementById("9").value;
  var senhabox = document.getElementById("9");

  let regexfr = /([a-z])/gi;
  let regexm = /[a-zA-Z](?=.*[0-9])/;
  let regexf = /[a-zA-Z](?=.*[0-9])(?=.*[!@#$%*()_+^&}{:;?.])(?:([0-9a-zA-Z!@#$%;*(){}_+^&])(?!\1)){6,}$/;

  console.log(senha);
  if (regexfr.test(senha)) {
    console.log(senha, "= fraca");
    senhabox.style.transition = "1s";
    senhabox.style.border = "2.5px solid red";
    if (regexm.test(senha)) {
      console.log(senha, "= media");
      senhabox.style.transition = "1s";
      senhabox.style.border = "2.5px solid yellow";
      if (regexf.test(senha)) {
        console.log(senha, "= forte");
        senhabox.style.transition = "1s";
        senhabox.style.border = "2.5px solid green";
      }
    }
  }
}
