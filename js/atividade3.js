function temHabilidade(skills) {
  const position = skills.indexOf("Javascript", 0);
  if (position != -1) {
    const torf = true;
    console.log(torf);
  } else {
    const torf = false;
    console.log(torf);
  }
}
const skills = ["ReactJS", "React Native", "Javascript"];
temHabilidade(skills);
