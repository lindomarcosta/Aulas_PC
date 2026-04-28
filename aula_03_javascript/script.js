// ========================================
// AULA 03 – JavaScript: Exemplos Interativos
// ========================================

// ----------------------------------------
// EXEMPLO 1: CALCULADORA
// ----------------------------------------
function calcular() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operacao = document.getElementById("operacao").value;
  const resultado = document.getElementById("resultado-calc");

  if (isNaN(num1) || isNaN(num2)) {
    resultado.textContent = "⚠️ Por favor, insira números válidos.";
    return;
  }

  let resposta;

  if (operacao === "soma") {
    resposta = num1 + num2;
    resultado.textContent = `${num1} + ${num2} = ${resposta}`;
  } else if (operacao === "subtracao") {
    resposta = num1 - num2;
    resultado.textContent = `${num1} − ${num2} = ${resposta}`;
  } else if (operacao === "multiplicacao") {
    resposta = num1 * num2;
    resultado.textContent = `${num1} × ${num2} = ${resposta}`;
  } else if (operacao === "divisao") {
    if (num2 === 0) {
      resultado.textContent = "⚠️ Erro: divisão por zero não é permitida.";
    } else {
      resposta = num1 / num2;
      resultado.textContent = `${num1} ÷ ${num2} = ${resposta}`;
    }
  }
}

// ----------------------------------------
// EXEMPLO 2: CONTADOR
// ----------------------------------------
let contadorValor = 0;

function atualizarContador() {
  document.getElementById("numero-contador").textContent = contadorValor;
}

function incrementar() {
  contadorValor++;
  atualizarContador();
}

function decrementar() {
  contadorValor--;
  atualizarContador();
}

function zerar() {
  contadorValor = 0;
  atualizarContador();
}

// ----------------------------------------
// EXEMPLO 3: LISTA DE TAREFAS
// ----------------------------------------
function adicionarTarefa() {
  const campo = document.getElementById("campo-tarefa");
  const texto = campo.value.trim();

  if (texto === "") {
    alert("Por favor, digite uma tarefa antes de adicionar.");
    return;
  }

  const lista = document.getElementById("lista-tarefas");

  const item = document.createElement("li");
  item.innerHTML = `
    <span>${texto}</span>
    <button class="remover" onclick="removerTarefa(this)">✕</button>
  `;

  lista.appendChild(item);
  campo.value = "";
  campo.focus();

  atualizarTotalTarefas();
}

function removerTarefa(botao) {
  const item = botao.parentElement;
  item.remove();
  atualizarTotalTarefas();
}

function atualizarTotalTarefas() {
  const lista = document.getElementById("lista-tarefas");
  const total = lista.children.length;
  document.getElementById("total-tarefas").textContent =
    `Total de tarefas: ${total}`;
}

// Permitir adicionar tarefa com a tecla Enter
document.addEventListener("DOMContentLoaded", function () {
  const campo = document.getElementById("campo-tarefa");
  if (campo) {
    campo.addEventListener("keydown", function (evento) {
      if (evento.key === "Enter") {
        adicionarTarefa();
      }
    });
  }
});

// ----------------------------------------
// EXEMPLO 4: MUDANÇA DE COR DE FUNDO
// ----------------------------------------
function mudarCor(cor) {
  document.body.style.backgroundColor = cor;
}

// ----------------------------------------
// EXEMPLO 5: SAUDAÇÃO PERSONALIZADA
// ----------------------------------------
function saudar() {
  const nome = document.getElementById("campo-nome").value.trim();
  const resultado = document.getElementById("resultado-saudacao");

  if (nome === "") {
    resultado.textContent = "⚠️ Por favor, digite seu nome!";
    return;
  }

  const hora = new Date().getHours();
  let periodo;

  if (hora < 12) {
    periodo = "Bom dia";
  } else if (hora < 18) {
    periodo = "Boa tarde";
  } else {
    periodo = "Boa noite";
  }

  resultado.textContent = `${periodo}, ${nome}! 👋 Bem-vindo ao mundo da programação!`;
}
