var btnElement = document.getElementById("new");
var squaresElement = document.getElementById("squares");

btnElement.onclick = function () {
  var square = document.createElement("div");

  square.style.width = "100px";
  square.style.height = "100px";
  square.style.backgroundColor = "#200467";

  squaresElement.appendChild(square);
};
