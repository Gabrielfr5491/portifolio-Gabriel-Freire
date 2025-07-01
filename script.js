/* funcao para scrollar ate a seçao */
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
}
/* funcao para digitar sozinho na apresentaçao  */
const text = "Olá, eu sou Gabriel Freire .";
let i = 0;
function type() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 60);
  }
}
window.onload = type;






