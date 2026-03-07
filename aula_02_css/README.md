# Aula 02 – CSS: Estilizando sua Página

## O que é CSS?

CSS significa **Cascading Style Sheets** (Folhas de Estilo em Cascata). É a linguagem usada para definir a **aparência** de uma página web — cores, tamanhos, fontes, espaçamentos e layouts.

Se o HTML é o esqueleto, o CSS é a roupa e o visual do seu site.

---

## Como usar CSS

Existem três formas de aplicar CSS em HTML:

### 1. CSS Externo (recomendado)
Crie um arquivo `.css` separado e vincule ao HTML:

```html
<!-- No <head> do HTML -->
<link rel="stylesheet" href="estilos.css" />
```

### 2. CSS Interno
Escreva estilos dentro de uma tag `<style>` no `<head>`:

```html
<head>
  <style>
    h1 {
      color: blue;
    }
  </style>
</head>
```

### 3. CSS Inline
Aplique estilos diretamente no elemento (evite quando possível):

```html
<p style="color: red; font-size: 18px;">Texto vermelho</p>
```

---

## Sintaxe do CSS

```css
seletor {
  propriedade: valor;
}
```

**Exemplo:**

```css
h1 {
  color: blue;
  font-size: 32px;
  text-align: center;
}
```

---

## Seletores CSS

| Seletor | Exemplo | Descrição |
|---------|---------|-----------|
| Elemento | `p { }` | Seleciona todos os `<p>` |
| Classe | `.destaque { }` | Seleciona elementos com `class="destaque"` |
| ID | `#titulo { }` | Seleciona o elemento com `id="titulo"` |
| Descendente | `div p { }` | Seleciona `<p>` dentro de `<div>` |
| Universal | `* { }` | Seleciona todos os elementos |

```html
<!-- HTML -->
<h1 id="titulo">Título</h1>
<p class="destaque">Parágrafo destacado</p>
```

```css
/* CSS */
#titulo {
  color: navy;
}

.destaque {
  background-color: yellow;
  font-weight: bold;
}
```

---

## Propriedades mais usadas

### Texto e Fontes

```css
p {
  color: #333333;           /* Cor do texto */
  font-size: 16px;          /* Tamanho da fonte */
  font-family: Arial, sans-serif; /* Tipo de fonte */
  font-weight: bold;        /* Negrito */
  text-align: center;       /* Alinhamento: left, center, right */
  line-height: 1.6;         /* Altura da linha */
  text-decoration: underline; /* Sublinhado */
}
```

### Cores e Fundo

```css
div {
  color: white;             /* Cor do texto */
  background-color: #007bff; /* Cor de fundo */
  background-image: url("imagem.jpg"); /* Imagem de fundo */
}
```

> **Dica:** Você pode usar nomes de cores (`red`, `blue`), valores hexadecimais (`#ff0000`) ou RGB (`rgb(255, 0, 0)`).

### Tamanho e Espaçamento (Box Model)

```css
div {
  width: 300px;            /* Largura */
  height: 200px;           /* Altura */
  padding: 20px;           /* Espaço interno */
  margin: 10px;            /* Espaço externo */
  border: 2px solid black; /* Borda */
  border-radius: 8px;      /* Borda arredondada */
}
```

### O Box Model

```
+---------------------------+
|         MARGIN            |
|  +---------------------+  |
|  |      BORDER         |  |
|  |  +---------------+  |  |
|  |  |    PADDING    |  |  |
|  |  |  +---------+  |  |  |
|  |  |  | CONTEÚDO|  |  |  |
|  |  |  +---------+  |  |  |
|  |  +---------------+  |  |
|  +---------------------+  |
+---------------------------+
```

---

## Flexbox – Layout Moderno

```css
.container {
  display: flex;
  justify-content: center;  /* Alinha no eixo horizontal */
  align-items: center;      /* Alinha no eixo vertical */
  gap: 16px;                /* Espaço entre os filhos */
  flex-wrap: wrap;          /* Quebra linha se necessário */
}
```

---

## Exercício Prático

Abra os arquivos [`index.html`](./index.html) e [`estilos.css`](./estilos.css) nesta pasta. Tente:

1. Mudar as cores do cabeçalho
2. Alterar o tamanho das fontes
3. Adicionar uma borda colorida em um elemento
4. Centralizar um elemento com Flexbox

---

## Resumo

- CSS estiliza as páginas HTML
- A sintaxe é: `seletor { propriedade: valor; }`
- Use classes (`.nome`) para estilizar grupos de elementos
- O Box Model controla tamanho, padding, border e margin
- Flexbox ajuda a criar layouts modernos e responsivos

---

## Próxima Aula

➡️ [Aula 03 – JavaScript: Adicionando Interatividade](../aula_03_javascript/)
