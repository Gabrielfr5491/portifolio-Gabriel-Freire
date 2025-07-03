/* funcao para scrollar ate a seçao */
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
}
/* funcao para digitar sozinho na apresentaçao  */
const text1 = "Olá, eu sou Gabriel Freire.";
const text2 = "Seja bem-vindo ao meu portfólio!";
let i = 0;
let j = 0;

function type() {
  if (i < text1.length) {
    document.getElementById("typing").innerHTML += text1.charAt(i);
    i++;
    setTimeout(type, 60);
  } else {
    setTimeout(type2, 500); // aguarda um pouco antes de iniciar o segundo
  }
}

function type2() {
  if (j < text2.length) {
    document.getElementById("typing1").innerHTML += text2.charAt(j);
    j++;
    setTimeout(type2, 60);
  }
}

window.onload = type;







