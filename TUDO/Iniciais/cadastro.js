function cadastrar() {
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  const novoRegistro = {
    nome,
    email,
    senha
  };

  db.ref('x').push(novoRegistro)
    .then(() => {
      alert("Registrado com sucesso!");
      document.getElementById('nome').value = '';
      document.getElementById('email').value = '';
      document.getElementById('senha').value = '';
    });
}