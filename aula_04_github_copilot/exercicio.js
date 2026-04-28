// ========================================
// AULA 04 – Exercícios com GitHub Copilot
//
// Instruções:
// Use o GitHub Copilot para completar cada
// função abaixo. Leia os comentários e deixe
// o Copilot sugerir a implementação!
// ========================================

// ----------------------------------------
// EXERCÍCIO 1: Conversor de Temperatura
// Converte entre Celsius e Fahrenheit
// Fórmula C→F: (C × 9/5) + 32
// Fórmula F→C: (F − 32) × 5/9
// ----------------------------------------
function converterTemperatura() {
  const valor = parseFloat(document.getElementById("temperatura").value);
  const unidade = document.getElementById("unidade").value;
  const resultado = document.getElementById("resultado-temperatura");

  if (isNaN(valor)) {
    resultado.textContent = "⚠️ Por favor, insira um número válido.";
    return;
  }

  // Use o GitHub Copilot para completar a lógica de conversão aqui:
  let convertido;
  let texto;

  if (unidade === "celsius") {
    convertido = (valor * 9) / 5 + 32;
    texto = `${valor}°C = ${convertido.toFixed(2)}°F`;
  } else {
    convertido = ((valor - 32) * 5) / 9;
    texto = `${valor}°F = ${convertido.toFixed(2)}°C`;
  }

  resultado.textContent = `🌡️ ${texto}`;
}

// ----------------------------------------
// EXERCÍCIO 2: Verificador de Palíndromo
// Verifica se uma palavra é um palíndromo
// ----------------------------------------
function verificarPalindromo() {
  const palavra = document.getElementById("palavra").value.trim().toLowerCase();
  const resultado = document.getElementById("resultado-palindromo");

  if (palavra === "") {
    resultado.textContent = "⚠️ Por favor, digite uma palavra.";
    return;
  }

  // Use o GitHub Copilot para completar a verificação de palíndromo:
  const invertida = palavra.split("").reverse().join("");
  const ehPalindromo = palavra === invertida;

  if (ehPalindromo) {
    resultado.textContent = `✅ "${palavra}" É um palíndromo! (leitura inversa: "${invertida}")`;
  } else {
    resultado.textContent = `❌ "${palavra}" NÃO é um palíndromo. (leitura inversa: "${invertida}")`;
  }
}

// ----------------------------------------
// EXERCÍCIO 3: Gerador de Cores Aleatórias
// Gera uma cor hexadecimal aleatória
// ----------------------------------------
function gerarCorAleatoria() {
  const resultado = document.getElementById("resultado-cor");

  // Use o GitHub Copilot para gerar uma cor hex aleatória:
  const hex = Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
  const cor = `#${hex}`;

  document.body.style.backgroundColor = cor;
  resultado.style.backgroundColor = cor;
  resultado.style.color = "white";
  resultado.style.textShadow = "1px 1px 2px rgba(0,0,0,0.5)";
  resultado.textContent = `🎨 Cor gerada: ${cor}`;
}

// ----------------------------------------
// EXERCÍCIO 4: Contador de Palavras
// Conta quantas palavras há em um texto
// ----------------------------------------
function contarPalavras() {
  const texto = document.getElementById("texto-palavras").value.trim();
  const resultado = document.getElementById("resultado-palavras");

  if (texto === "") {
    resultado.textContent = "⚠️ Por favor, escreva um texto para contar.";
    return;
  }

  // Use o GitHub Copilot para contar palavras, caracteres e frases:
  const palavras = texto.split(/\s+/).filter((p) => p.length > 0);
  const numeroPalavras = palavras.length;
  const numeroCaracteres = texto.length;
  const numeroCaracteresSemEspacos = texto.replace(/\s/g, "").length;
  const numeroFrases = texto.split(/[.!?]+/).filter((f) => f.trim().length > 0).length;

  resultado.innerHTML =
    `📊 <strong>${numeroPalavras}</strong> palavras | ` +
    `<strong>${numeroCaracteres}</strong> caracteres | ` +
    `<strong>${numeroCaracteresSemEspacos}</strong> caracteres (sem espaços) | ` +
    `<strong>${numeroFrases}</strong> frase(s)`;
}
