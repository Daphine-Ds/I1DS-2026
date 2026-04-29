let userCount = 0; // Contador

const cadastrar = (event) => {
  event.preventDefault();

  // Capturar os valores do elemento por Id

  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;

  let lista = document.getElementById("lista"); 

  userCount++; // Acrecser o contador em +1
  let id = userCount; // Criar um novo elemento  <li>Nome - Email</li>

  let novoItem = document.createElement("li");
  novoItem.setAttribute("data-id", id);

  novoItem.innerHTML = id + " - " + nome + " - " + email + 
  ` <button onclick="editar(${id})">Editar</button>
    <button onclick="excluir(${id})">Excluir</button>`;

    // Adicionar um novo elemento na lista ja existente

  lista.appendChild(novoItem);

  document.getElementById("nome").value = "";
  document.getElementById("email").value = "";
}

const editar = (id) => {
  console.log("Editar:", id);

  itens.forEach((item) => {
    if (item.getAttribute("data-id") == id) {
      item.editar();
    }
  });
}


// Função excluir

const excluir = (id) => {
  const itens = document.querySelectorAll("li");

  itens.forEach((item) => {
    if (item.getAttribute("data-id") == id) {
      item.remove();
    }
  });
}