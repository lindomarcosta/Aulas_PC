# Aula 01 – HTML: A Estrutura da Web

## O que é HTML?

HTML significa **HyperText Markup Language** (Linguagem de Marcação de Hipertexto). É a linguagem usada para criar a **estrutura** de uma página web. Pense no HTML como o esqueleto de uma página — ele define o que existe na página, mas ainda não diz como ela vai parecer.

---

## Estrutura básica de um arquivo HTML

Todo arquivo HTML começa com uma estrutura padrão:

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Título da Página</title>
  </head>
  <body>
    <!-- O conteúdo visível fica aqui -->
  </body>
</html>
```

### O que cada parte significa:

| Tag | Descrição |
|-----|-----------|
| `<!DOCTYPE html>` | Informa ao navegador que este é um arquivo HTML5 |
| `<html>` | Elemento raiz que envolve todo o conteúdo |
| `<head>` | Contém informações sobre a página (não visíveis ao usuário) |
| `<meta charset="UTF-8">` | Define a codificação de caracteres (permite acentos) |
| `<title>` | Texto que aparece na aba do navegador |
| `<body>` | Contém todo o conteúdo visível da página |

---

## Tags HTML mais usadas

### Títulos (Headings)

```html
<h1>Título Principal</h1>
<h2>Subtítulo</h2>
<h3>Seção</h3>
<h4>Subseção</h4>
<h5>Nível 5</h5>
<h6>Nível 6</h6>
```

> **Dica:** Use apenas um `<h1>` por página. Ele é o título principal.

### Parágrafo e texto

```html
<p>Isto é um parágrafo de texto.</p>
<strong>Texto em negrito</strong>
<em>Texto em itálico</em>
```

### Links

```html
<a href="https://www.google.com">Clique aqui para ir ao Google</a>
<a href="outra-pagina.html">Link para outra página local</a>
```

### Imagens

```html
<img src="imagem.jpg" alt="Descrição da imagem" />
```

> **Dica:** Sempre preencha o atributo `alt`. Ele descreve a imagem para leitores de tela e quando a imagem não carrega.

### Listas

```html
<!-- Lista não ordenada (com marcadores) -->
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

<!-- Lista ordenada (numerada) -->
<ol>
  <li>Primeiro</li>
  <li>Segundo</li>
  <li>Terceiro</li>
</ol>
```

### Divisões e seções

```html
<div>Bloco genérico de conteúdo</div>
<section>Seção temática da página</section>
<header>Cabeçalho da página</header>
<nav>Menu de navegação</nav>
<main>Conteúdo principal</main>
<footer>Rodapé da página</footer>
```

### Formulários

```html
<form>
  <label for="nome">Nome:</label>
  <input type="text" id="nome" name="nome" placeholder="Digite seu nome" />

  <label for="email">E-mail:</label>
  <input type="email" id="email" name="email" placeholder="Digite seu e-mail" />

  <button type="submit">Enviar</button>
</form>
```

---

## Exercício Prático

Abra o arquivo [`index.html`](./index.html) nesta pasta e explore o código. Tente:

1. Mudar o texto do título (`<h1>`)
2. Adicionar um novo parágrafo `<p>`
3. Criar uma lista com seus 3 hobbies
4. Adicionar um link para um site que você gosta

---

## Resumo

- HTML é a estrutura da página web
- Tags HTML são escritas entre `< >` e geralmente vêm em pares: `<abertura>` e `</fechamento>`
- O conteúdo visível fica dentro do `<body>`
- Há tags para títulos, parágrafos, links, imagens, listas e muito mais

---

## Próxima Aula

➡️ [Aula 02 – CSS: Estilizando sua página](../aula_02_css/)
