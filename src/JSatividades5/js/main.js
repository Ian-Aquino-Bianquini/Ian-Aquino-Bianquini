function handle() {
  const card = document.querySelector(".card");

  container.addEventListener("mouseenter", (e) => {
    card.style.transition = `none`;
    card.style.transition = `all 0.1s ease`;
    card.style.transform = "translateZ(150px)";
  });

  container.addEventListener("mouseleave", (e) => {
    card.style.transition = `all 0.5s ease`;
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    card.style.transform = "translateZ(0px)";
  });
}

function handlewheel(e) {
  window.scroll(window.scrollX + e.deltaY * 9.2, 0);
}
document.addEventListener("wheel", handlewheel);

fetch("https://rafaelescalfoni.github.io/desenv_web/filmes.json").then(
  (response) =>
    response.json().then((data) => {
      data.forEach((element) => {
        const cont = document.createElement("div");
        const card = document.createElement("div");
        const sneaker = document.createElement("div");
        const circle = document.createElement("div");
        const infos = document.createElement("div");
        const img = document.createElement("img");
        const body = document.querySelector("body");
        const title = document.createElement("h1");
        const about = document.createElement("h3");
        const classindbox = document.createElement("div");
        const classind = document.createElement("h3");
        let comentsbox = document.createElement("div");
        comentsbox.setAttribute("class", "comentsbox");

        cont.setAttribute("id", element.id);

        element.opinioes.forEach((opiniao) => {
          let comentsdiv = document.createElement("div");
          let coments = document.createElement("h5");
          comentsdiv.setAttribute("class", "comentsdiv");
          coments.setAttribute("class", "coments");
          coments.innerHTML = `"${opiniao.descricao.replace(/[""]/g, `'`)}"`;
          comentsdiv.appendChild(coments);
          comentsbox.appendChild(comentsdiv);
        });

        let n = 0;
        let starrating = 0;
        element.opinioes.forEach((opiniao) => {
          n++;
          starrating += opiniao.rating;
        });
        starrating /= n;
        starrating + Math.round(starrating);

        let rating = document.createElement("div");
        rating.className = "starcontent";
        let star = document.createElement("img");
        star.src = "../img/star.png";

        for (let i = 0; i <= 5; i++) {
          let currstar = star.cloneNode();
          if (i <= starrating) currstar.className = "starfull";
          rating.append(currstar);
        }

        if (element.classificacao != 0) {
          switch (element.classificacao) {
            case 10:
              classindbox.style.backgroundColor = "limegreen";
              break;
            case 12:
              classindbox.style.backgroundColor = "yellowgreen";
              break;
            case 14:
              classindbox.style.backgroundColor = "yellow";
              break;
            case 16:
              classindbox.style.backgroundColor = "orange";
              break;
            case 18:
              classindbox.style.backgroundColor = "red";
              break;
            default:
              break;
          }
          classind.innerHTML = element.classificacao;
        } else {
          classind.innerHTML = "Livre";
          classindbox.style.backgroundColor = "green";
        }
        about.innerHTML = element.resumo;
        title.innerHTML = element.titulo;

        img.src = element.figura;

        cont.setAttribute("class", "container");
        card.setAttribute("class", "card");

        circle.setAttribute("class", "circle");
        infos.setAttribute("class", "info");
        img.setAttribute("class", "logo");
        title.setAttribute("class", "title");
        classindbox.setAttribute("class", "classind");

        circle.appendChild(img);
        classindbox.appendChild(classind);
        card.appendChild(rating);
        infos.appendChild(title);
        infos.appendChild(about);
        card.appendChild(classindbox);
        card.appendChild(circle);
        card.appendChild(title);

        element.generos.forEach((elm) => {
          const genbox = document.createElement("div");
          const gen = document.createElement("h5");
          gen.innerHTML = elm;
          genbox.appendChild(gen);
          genbox.setAttribute("class", "genbox");
          card.appendChild(genbox);
        });

        const elenctit = document.createElement("h4");
        elenctit.style.paddingTop = "1rem";
        elenctit.innerHTML = "Elenco :";
        card.appendChild(elenctit);
        element.elenco.forEach((elem) => {
          const elencbox = document.createElement("div");
          const elenc = document.createElement("h5");
          elencbox.appendChild(elenc);
          elencbox.setAttribute("class", "elenc");
          elenc.innerHTML = elem;
          card.appendChild(elencbox);
        });

        const titulosbox = document.createElement("div");
        const titulos = document.createElement("h3");
        titulos.innerHTML =
          element.titulosSemelhantes.length != 0 ? "Titulos Semelhantes:" : "";
        titulosbox.appendChild(titulos);
        card.appendChild(titulosbox);

        element.titulosSemelhantes.forEach((titul) => {
          let a = document.createElement("a");
          let miniimg = document.createElement("img");
          a.appendChild(miniimg);
          a.href = "#" + data[titul - 1].id;
          miniimg.src = data[titul - 1].figura;
          miniimg.setAttribute("class", "miniimg");
          titulosbox.appendChild(a);
        });

        // comentsbox.appendChild(coments);
        // card.appendChild(comentsbox);

        cont.appendChild(card);
        card.appendChild(sneaker);
        card.appendChild(infos);
        cont.appendChild(comentsbox);
        body.appendChild(cont);
        // body.appendChild(br);
      });
    })
);

function popupshow(element) {
  const popup = document.getElementsByClassName("mypopup")[element.id];
  const popupcoment = document.createElement("div");

  console.log(popup);
  popupcoment.setAttribute("class", "popuptext");
  popup.classList.toggle("show");
}
