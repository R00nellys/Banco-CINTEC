function login(event) {
  event.preventDefault();

  const email = document.getElementById('email').value.trim();
  const senha = document.getElementById('password').value; // ajustado conforme seu HTML

  if (!email || !senha) return alert('Preencha todos os campos.');

  db.ref('usuarios_teste').once('value')
    .then(snapshot => {
      const usuarios = snapshot.val() || {};
      const usuario = Object.values(usuarios).find(u => u.email === email && u.senha === senha);

      if (usuario) {
        localStorage.setItem('usuarioLogado', JSON.stringify({
          nome: usuario.nome,
          email: usuario.email
        }));
        alert(`Bem-vindo, ${usuario.nome}!`);
        window.location.href = 'menuE.html';
      } else {
        alert('E-mail ou senha incorretos.');
      }
    })
    .catch(() => alert('Erro ao conectar ao servidor. Tente novamente mais tarde.'));
}
