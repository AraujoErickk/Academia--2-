function registrarUsuario(event) {
  event.preventDefault(); 

  
  const firstname = document.getElementById("firstname").value;
  const lastname = document.getElementById("lastname").value;
  const email = document.getElementById("email").value;
  const number = document.getElementById("number").value;
  const password = document.getElementById("password").value;
  const confirmpassword = document.getElementById("confirmpassword").value;
  const gender = document.querySelector('input[name="gender"]:checked')?.value;

  
  if (password !== confirmpassword) {
      alert("As senhas não coincidem!");
      return;
  }

 
  const usuario = {
      firstname,
      lastname,
      email,
      number,
      gender,
      timestamp: new Date().toISOString() 
  };

  
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  
  usuarios.push(usuario);

  
  usuarios.sort((a, b) => a.firstname.localeCompare(b.firstname));

  
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  
  window.location.href = "registros.html";
}

function carregarRegistros() {
  
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  
  const registrosTabela = document.getElementById("registrosTabela");

  
  if (usuarios.length === 0) {
    registrosTabela.innerHTML = '<tr><td colspan="5">Nenhum registro encontrado.</td></tr>';
    return;
  }

  usuarios.forEach((usuario, index) => {
    const tr = document.createElement("tr");
    
    
    const date = new Date(usuario.timestamp);
    const formattedDate = `${date.toLocaleDateString('pt-BR')} às ${date.toLocaleTimeString('pt-BR')}`;

    tr.innerHTML = `
      <td>${index + 1}</td>
      <td>${usuario.firstname} ${usuario.lastname}</td>
      <td>${usuario.email}</td>
      <td>${usuario.number}</td>
      <td>${usuario.gender}</td>
      <td>${formattedDate}</td>
    `;
    registrosTabela.appendChild(tr);
  });
}

function voltarParaHome() {
  window.location.href = "index.html";
}