var nomes = ['Ian', 'Sancho', 'Victor'];
var listaelementos = document.querySelector('ul');
var inputelementos = document.querySelector('input');

function addItem(text) {
  var liElement = document.createElement('li');
  var textElement = document.createTextNode(text);

  liElement.appendChild(textElement);
  listaelementos.appendChild(liElement);
}

function adicionar() {
  addItem(inputelementos.value);
  inputelementos.value = "";
}

for (nome of nomes) {
  addItem(nome);
}