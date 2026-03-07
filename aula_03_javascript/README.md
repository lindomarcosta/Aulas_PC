# Aula 03 – JavaScript: Adicionando Interatividade

## O que é JavaScript?

JavaScript (JS) é a linguagem de programação da web. Enquanto o HTML cria a estrutura e o CSS define a aparência, o **JavaScript torna a página interativa**.

Com JavaScript você pode:
- Responder a cliques e ações do usuário
- Mostrar ou esconder elementos
- Validar formulários
- Buscar dados de servidores
- Criar animações e jogos

---

## Como adicionar JavaScript ao HTML

### 1. Arquivo Externo (recomendado)

```html
<!-- No final do <body> -->
<script src="script.js"></script>
```

### 2. JavaScript Interno

```html
<script>
  console.log("Olá, mundo!");
</script>
```

### 3. JavaScript Inline (evite)

```html
<button onclick="alert('Clicou!')">Clique aqui</button>
```

---

## Conceitos Fundamentais

### Variáveis

```javascript
// let: variável que pode mudar
let nome = "Maria";
let idade = 25;

// const: valor constante, não muda
const PI = 3.14159;
const SITE = "https://github.com";

// var: forma antiga, evite usar
var cidade = "São Paulo";
```

### Tipos de dados

```javascript
let texto = "Olá, mundo!";      // String (texto)
let numero = 42;                 // Number (número)
let preco = 19.99;              // Number (decimal)
let ativo = true;               // Boolean (verdadeiro/falso)
let lista = [1, 2, 3, "quatro"]; // Array (lista)
let pessoa = {                  // Object (objeto)
  nome: "João",
  idade: 30
};
let vazio = null;               // Null (ausência de valor)
let indefinido = undefined;     // Undefined (não definido)
```

### Operadores

```javascript
// Aritméticos
let soma = 5 + 3;       // 8
let subtracao = 10 - 4; // 6
let multiplicacao = 3 * 4; // 12
let divisao = 15 / 3;   // 5
let resto = 10 % 3;     // 1 (resto da divisão)

// Comparação
5 === 5   // true  (igual em valor e tipo)
5 !== 3   // true  (diferente)
10 > 5    // true  (maior que)
3 < 7     // true  (menor que)
5 >= 5    // true  (maior ou igual)
4 <= 4    // true  (menor ou igual)

// Lógicos
true && false  // false (E - ambos precisam ser true)
true || false  // true  (OU - pelo menos um precisa ser true)
!true          // false (NÃO - inverte)
```

---

## Estruturas de Controle

### if / else (condição)

```javascript
let hora = 14;

if (hora < 12) {
  console.log("Bom dia!");
} else if (hora < 18) {
  console.log("Boa tarde!");
} else {
  console.log("Boa noite!");
}
```

### for (repetição com contador)

```javascript
for (let i = 1; i <= 5; i++) {
  console.log("Número: " + i);
}
// Saída: Número: 1, Número: 2, ..., Número: 5
```

### while (repetição com condição)

```javascript
let contador = 0;

while (contador < 3) {
  console.log("Contagem: " + contador);
  contador++;
}
```

---

## Funções

```javascript
// Declaração de função
function saudar(nome) {
  return "Olá, " + nome + "!";
}

// Chamando a função
let mensagem = saudar("Ana");
console.log(mensagem); // "Olá, Ana!"

// Arrow function (forma moderna)
const somar = (a, b) => a + b;
console.log(somar(3, 4)); // 7
```

---

## Manipulação do DOM

O **DOM (Document Object Model)** é a representação do HTML em JavaScript. Com ele, você pode alterar a página dinamicamente.

### Selecionando elementos

```javascript
// Por ID
const titulo = document.getElementById("meu-titulo");

// Por classe
const paragrafos = document.querySelectorAll(".paragrafo");

// Por tag
const links = document.querySelectorAll("a");

// Forma moderna (recomendada)
const botao = document.querySelector("#meu-botao");
```

### Alterando conteúdo

```javascript
const titulo = document.getElementById("titulo");

titulo.textContent = "Novo título!";      // Muda o texto
titulo.innerHTML = "<em>Título</em>";     // Muda o HTML interno
titulo.style.color = "red";              // Muda o estilo
titulo.classList.add("destaque");        // Adiciona classe CSS
titulo.classList.remove("destaque");     // Remove classe CSS
titulo.classList.toggle("ativo");        // Alterna classe CSS
```

### Respondendo a eventos

```javascript
const botao = document.querySelector("#meu-botao");

botao.addEventListener("click", function () {
  alert("Você clicou no botão!");
});

// Eventos comuns:
// "click"       - clique do mouse
// "mouseover"   - mouse passou por cima
// "keydown"     - tecla pressionada
// "submit"      - formulário enviado
// "input"       - valor de campo alterado
```

---

## Exemplo Prático: Calculadora Simples

```javascript
function calcular() {
  const num1 = parseFloat(document.getElementById("numero1").value);
  const num2 = parseFloat(document.getElementById("numero2").value);
  const operacao = document.getElementById("operacao").value;
  let resultado;

  if (operacao === "soma") {
    resultado = num1 + num2;
  } else if (operacao === "subtracao") {
    resultado = num1 - num2;
  } else if (operacao === "multiplicacao") {
    resultado = num1 * num2;
  } else if (operacao === "divisao") {
    resultado = num2 !== 0 ? num1 / num2 : "Erro: divisão por zero";
  }

  document.getElementById("resultado").textContent = "Resultado: " + resultado;
}
```

---

## Exercício Prático

Abra os arquivos [`index.html`](./index.html) e [`script.js`](./script.js) nesta pasta. Tente:

1. Adicionar um botão que muda a cor de fundo da página
2. Criar um contador de cliques
3. Fazer uma mensagem aparecer e desaparecer
4. Criar uma mini calculadora

---

## Resumo

- JavaScript é a linguagem de programação da web
- Variáveis guardam dados (`let`, `const`)
- Estruturas de controle: `if/else`, `for`, `while`
- Funções encapsulam e reutilizam código
- O DOM permite interagir com o HTML usando JS
- Eventos respondem a ações do usuário

---

## Próxima Aula

➡️ [Aula 04 – GitHub Copilot: Seu Assistente de IA](../aula_04_github_copilot/)
