const endereco = {
  rua: "Rua dos pinheiros",
  numero: 1293,
  bairro: "Centro",
  cidade: "São Paulo",
  uf: "SP",
};

console.log(
  "usuário mora em ",
  endereco.cidade,
  " / ",
  endereco.uf,
  "na rua ",
  `"${endereco.rua}"`,
  "com nº ",
  endereco.numero
);
