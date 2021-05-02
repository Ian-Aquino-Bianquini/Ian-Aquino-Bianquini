let meuArray = new Array(1, 4, 2, 4, 6, 10, 3);

Array.prototype.min = function () {
  return Math.min.apply(null, this);
};
Array.prototype.max = function () {
  return Math.max.apply(null, this);
};
Array.prototype.uniq = function () {
  let set = new Set(this);
  return Array.from(set.values());
};
Array.prototype.sortNum = function () {
  let arr = this;
  arr.sort((a, b) => a - b);
  return arr;
};
const mindiv = document
  .getElementById("min")
  .appendChild(document.createTextNode(meuArray.min()));
const maxdiv = document
  .getElementById("max")
  .appendChild(document.createTextNode(meuArray.max()));
const uniqdiv = document
  .getElementById("uniq")
  .appendChild(document.createTextNode(meuArray.uniq()));
const sortdiv = document
  .getElementById("sort")
  .appendChild(document.createTextNode(meuArray.sortNum()));

console.log(meuArray.min()); // deve retornar 1
console.log(meuArray.max()); // deve retornar 10
console.log(meuArray.uniq()); // deve retornar (1, 2, 3, 4, 6, 10)
console.log(meuArray.sortNum()); // deve retornar (1, 2, 3, 4, 4, 6, 10)

function fibonacci() {
  const valmax = document.getElementById("valmax").value;

  for (
    var fiboArray = [0, 1], i = 0, j = 1, k = 0, x = 0;
    k < valmax - 2;
    i = j, j = x, k++
  ) {
    x = i + j;
    fiboArray.push(x);
  }
  alert(fiboArray);
}

function double() {
  var lista = [1, 2, 3, 4, 5, 6];
  lista.map((val) => {
    lista.push(val);
  });
  lista.sort((a, b) => a - b);
  alert(lista);
}
function evenElement() {
  var lista = [1, 2, 3, 4, 5, 6];
  alert(
    lista.filter((val) => {
      if (val % 2 == 0) {
        return val;
      }
    })
  );
}
function Sum() {
  var lista = [1, 2, 3, 4, 5, 6];
  function reducefunc(total, numb) {
    return total + numb;
  }
  alert(lista.reduce(reducefunc));
}

// function DayNight() {
//   const sun = document.getElementsByClassName("sun");
//   const sunEffect = document.getElementsByClassName("sun-effect");
//   const backgroundColor = document.getElementsByTagName("body");
//   sun[0].style.animation = "sun-anim 50s linear";
//   // sun[0].setAttribute("class", "sunOFF");
//   sunEffect[0].style.animation = "sun-effect-anim 3s linear";
//   sunEffect[0].setAttribute("class", "sun-effectOFF");
//   backgroundColor[0].style.animation = "sky-anim 5s linear";
//   backgroundColor[0].setAttribute("class", "bodyNight");
// }
