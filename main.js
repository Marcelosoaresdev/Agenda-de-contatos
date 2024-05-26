document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("form");
  const contatos = [];
  const telefones = [];
  const numInput = document.getElementById("num");

  let linhas = "";

  form.addEventListener("submit", function (e) {
    e.preventDefault(); 

    const addContact = document.getElementById("contact");
    const addNum = document.getElementById("num");

    if (telefones.includes(addNum.value)) {
      alert("Você tem um contato existente com esse número!");
      limparCampos(addContact, addNum);
    } else {
      adicionarContato(addContact.value, addNum.value);
      limparCampos(addContact, addNum);
      atualizaTabela();
    }
  });

  numInput.addEventListener("input", formatarNumero);

  function adicionarContato(nome, telefone) {
    contatos.push(nome);
    telefones.push(telefone);
    linhas += `<tr><td>${nome}</td><td>${telefone}</td></tr>`;
  }

  function formatarNumero() {
    let formattedNumber = this.value.replace(/\D/g, "");
    formattedNumber = formattedNumber.replace(/^0+/, '');
    const match = formattedNumber.match(/^(\d{0,2})(\d{0,5})(\d{0,4})$/);
    if (match) {
      formattedNumber = !match[2] ? match[1] : `(${match[1]}) ${match[2]}` + (match[3] ? `-${match[3]}` : '');
    }
    this.value = formattedNumber;
  }

  function atualizaTabela() {
    const corpoTabela = document.querySelector(".tbody");
    corpoTabela.innerHTML = linhas;
  }

  function limparCampos(input1, input2) {
    input1.value = "";
    input2.value = "";
  }
});
