// Inicialize o Firebase aqui, se necessário

function consultarCRUD(filtros = {}) {
    const lista = document.getElementById('listaCRUD');
    lista.innerHTML = '';
    db.ref('usuarios_teste').once('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const key = childSnapshot.key;
        const data = childSnapshot.val();
        // Filtros
        if (
          (filtros.nome && !data.nome.toLowerCase().includes(filtros.nome.toLowerCase())) ||
          (filtros.email && !data.email.toLowerCase().includes(filtros.email.toLowerCase()))
        ) return;
  
        const div = document.createElement('div');
        div.className = 'registro';
        div.innerHTML = `
          <input type="text" value="${data.nome}" id="nome-${key}">
          <input type="text" value="${data.email}" id="email-${key}">
          <input type="text" value="${data.senha}" id="senha-${key}">
          <button onclick="atualizarRegistro('${key}')">Atualizar</button>
          <button onclick="excluirRegistro('${key}')">Excluir</button>
        `;
        lista.appendChild(div);
      });
    });
  }
  
  function atualizarRegistro(key) {
    const nome = document.getElementById(`nome-${key}`).value.trim();
    const email = document.getElementById(`email-${key}`).value.trim();
    const senha = document.getElementById(`senha-${key}`).value.trim();
    if (!nome || !email || !senha) {
      alert("Preencha todos os campos!");
      return;
    }
    db.ref('usuarios_teste/' + key).update({ nome, email, senha })
      .then(() => {
        alert("Atualizado com sucesso!");
        consultarCRUD();
      });
  }
  
  function excluirRegistro(key) {
    if (confirm("Tem certeza que deseja excluir este registro?")) {
      db.ref('usuarios_teste/' + key).remove()
        .then(() => {
          alert("Excluído com sucesso!");
          consultarCRUD();
        });
    }
  }
  
  document.getElementById('filtroForm').onsubmit = function(e) {
    e.preventDefault();
    const nome = document.getElementById('filtroNome').value.trim();
    const email = document.getElementById('filtroEmail').value; // ID continua sendo 'filtroEmail'
    consultarCRUD({ nome, email });
  };
  
  window.onload = consultarCRUD;
  