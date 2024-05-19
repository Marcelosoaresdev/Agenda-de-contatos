const form = document.getElementById("form");
const contatos = [];
const telefones = [];

let linhas = "";

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Remove o comportamento de atualizar a página ao clicar em submit

  const addContact = document.getElementById("contact");
  const addNum = document.getElementById("num");

  if (contatos.includes(addContact.value) && telefones.includes(addNum.value)) {
    /* Se contatos já incluir o que foi inserido em addContatos.value... */
    alert("Você já adicinou esse contato!");
  } else if (telefones.includes(addNum.value)) {
    /* Se telefones já incluir o que foi inserido pelo usuario em addNum.value... */
    alert("Você tem um contato existente com esse número!");
  } else if (addNum.value.length !== 11) {
    alert("O telefone deve conter exatamente 11 dígitos");
    addContact.value = ""; // Reseta os campos após ação
    addNum.value = ""; // Reseta os campos após ação
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
