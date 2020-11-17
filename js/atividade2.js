function pares(x, y) {
  const par = [];
  while (x <= y) {
    if (x % 2 == 0) {
      par[x] = x;
      x++;
    }
    x++;
  }
  console.log(par);
}

pares(32, 321);
