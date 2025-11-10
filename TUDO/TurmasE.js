// TurmasE.js

// Espera o HTML carregar antes de executar
document.addEventListener("DOMContentLoaded", () => {
    const tabela = document.querySelector("#view-tabela tbody");
  
    // ---- 1️⃣ Lê os dados da tabela ----
    function lerTabela() {
      const linhas = tabela.querySelectorAll("tr");
      const turmas = [];
  
      linhas.forEach((linha) => {
        const colunas = linha.querySelectorAll("td");
        const nome = colunas[0].textContent.trim();
        const ouro = parseInt(colunas[1].textContent.trim());
        const prata = parseInt(colunas[2].textContent.trim());
        const bronze = parseInt(colunas[3].textContent.trim());
        const total = parseInt(colunas[4].textContent.trim());
  
        turmas.push({ nome, ouro, prata, bronze, total });
      });
  
      return turmas;
    }
  
    // ---- 2️⃣ Função de classificação olímpica ----
    function ordenarTurmas(turmas) {
      return turmas.sort((a, b) => {
        if (b.ouro !== a.ouro) return b.ouro - a.ouro;
        if (b.prata !== a.prata) return b.prata - a.prata;
        if (b.bronze !== a.bronze) return b.bronze - a.bronze;
        return b.total - a.total;
      });
    }
  
    // ---- 3️⃣ Atualiza a tabela na tela ----
    function atualizarTabela(turmas) {
      tabela.innerHTML = ""; // limpa antes de reescrever
      turmas.forEach((t) => {
        const linha = `
          <tr>
            <td>${t.nome}</td>
            <td>${t.ouro}</td>
            <td>${t.prata}</td>
            <td>${t.bronze}</td>
            <td>${t.total}</td>
          </tr>`;
        tabela.innerHTML += linha;
      });
    }
  
    // ---- 4️⃣ Função principal ----
    function classificarMedalhas() {
      const turmas = lerTabela();
      const ordenadas = ordenarTurmas(turmas);
      atualizarTabela(ordenadas);
    }
  
    // ---- 5️⃣ Classifica ao carregar a página ----
    classificarMedalhas();
  
    // ---- 6️⃣ (Opcional) Reclassificar automaticamente se os valores mudarem ----
    const observer = new MutationObserver(classificarMedalhas);
    observer.observe(tabela, { childList: true, subtree: true, characterData: true });
  });
  