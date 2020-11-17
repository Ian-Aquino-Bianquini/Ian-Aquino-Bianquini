const usuarios = [
  { nome: "Diego", habilidades: [" Javascript", " ReactJS", " Redux"] },
  { nome: "Gabriel", habilidades: [" VueJS", " Ruby on Rails", " Elixir"] },
];
function percorrer(usuarios) {
  console.log(
    "O " +
      usuarios[0].nome +
      " possui as seguintes habilidades:" +
      usuarios[0].habilidades
  );
  console.log(
    "O " +
      usuarios[1].nome +
      " possui as seguintes habilidades:" +
      usuarios[1].habilidades
  );
}
percorrer(usuarios);
