function experiencia(anos) {
  switch (anos) {
    case 1 | 0:
      document.write("Iniciante");
      break;
    case 2 | 3:
      document.write("Intermediário");
      break;
    case 4 | 6:
      document.write("Avançado");
      break;
  }
  if (anos >= 7) {
    document.write("Jedi Master");
  }
}
const anosEstudo = 8;
experiencia(anosEstudo);
