 // buscador de dicas
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("dicas-container");
  const inputBusca = document.getElementById("busca");

  fetch("dicas.json")
    .then(res => res.json())
    .then(dicas => {
      renderizarDicas(dicas);

      inputBusca.addEventListener("input", () => {
        const termo = inputBusca.value.toLowerCase();
        const filtradas = dicas.filter(dica =>
          dica.linguagem.toLowerCase().includes(termo) ||
          dica.titulo.toLowerCase().includes(termo) ||
          dica.tag.toLowerCase().includes(termo)
        );
        renderizarDicas(filtradas);
      });
    });
     //se nao encontrar a busca
  function renderizarDicas(lista) {
    container.innerHTML = "";
    if (lista.length === 0) {
      container.innerHTML = "<p>Nenhuma dica encontrada.</p>";
      return;
    }
     // forma com a  dica vai ser pesquisada
    lista.forEach(dica => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h3>${dica.titulo}</h3>
        <p><strong>Linguagem:</strong> ${dica.linguagem}</p>
        <pre><code>${dica.codigo}</code></pre>
        <p><em>#${dica.tag}</em></p>
      `;
      container.appendChild(card);
    });
  }
});