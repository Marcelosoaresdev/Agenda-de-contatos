const form = document.getElementById("form");
const contatos = [];
const telefones = [];

let linhas = "";

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Remove o comportamento de atualizar a página ao clicar em submit

  const addContact = document.getElementById("contact");
  const addNum = document.getElementById("num");

  if (contatos.includes(addContact.value) && telefones.includes(addNum.value)) {
    // Se contatos já incluir o que foi inserido em addContact.value...
    alert("Você já adicionou esse contato!");
  } else if (telefones.includes(addNum.value)) {
    // Se telefones já incluir o que foi inserido pelo usuário em addNum.value...
    alert("Você tem um contato existente com esse número!");
    addContact.value = "";
    addNum.value = "";
  } else {
    contatos.push(addContact.value);
    telefones.push(addNum.value);

    let linha = "<tr>";
    linha += `<td>${addContact.value}</td>`;
    linha += `<td>${addNum.value}</td>`;
    linha += "</tr>";
    linhas += linha;

    // Limpa os campos de input após adicionar
    addContact.value = "";
    addNum.value = "";

    atualizaTabela();
  }
});

function atualizaTabela() {
  const corpoTabela = document.querySelector(".tbody");
  corpoTabela.innerHTML = linhas; // Atualiza a tabela com as novas linhas
}
