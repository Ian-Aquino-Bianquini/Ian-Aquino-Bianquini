var nomes = ["Ian", "Victor", "Sancho"];
var listElement = document.querySelector("ul");

for (nome of nomes) {
  var liElement = document.createElement("li");
  var textElement = document.createTextNode(nome);

  liElement.appendChild(textElement);
  listElement.appendChild(liElement);
}
