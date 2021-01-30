var glossario = [
  {
    id: 1,
    termo: "W3C",
    definicao:
      "World Wide Web Consortium – escritório responsável por desenvolver normas técnicas para a Internet",
    autor: "José Borges",
    dataCriacao: "2015-04-01",
  },
  {
    id: 2,
    termo: "HTML",
    definicao:
      "HyperText Markup Language – linguagem de marcação utilizada para estruturar páginas web",
    autor: "Pedro Silva",
    dataCriacao: "2017-05-12",
  },
  {
    id: 3,
    termo: "CSS",
    definicao:
      "Cascade Style Sheet – Folhas de estilo utilizadas para configurar a visualização de  páginas web",
    autor: "Maria Machado",
    dataCriacao: "2018-10-11",
  },
];
setdef(1);
function setmenu() {
  const menu = document.getElementById("menu");
  glossario.forEach((item) => {
    const li = document.createElement("button");
    const namemenu = document.createTextNode(item.termo);
    li.setAttribute("onclick", `setdef(${item.id})`);
    li.setAttribute("class", "button");
    li.appendChild(namemenu);
    menu.appendChild(li);
  });
}

setmenu();

function setdef(idx) {
  const id = idx - 1;
  const titu = document.getElementById("titul");
  const def = document.getElementById("defi");
  const data = document.getElementById("datac");
  titu.innerHTML = glossario[id].termo;
  def.innerHTML = glossario[id].definicao;
  data.innerHTML = `Data de Criação : ${glossario[id].dataCriacao} pelo autor : ${glossario[id].autor}`;
}
