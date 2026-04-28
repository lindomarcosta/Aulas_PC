# Aula 04 – GitHub Copilot: Seu Assistente de IA para Programação

## O que é o GitHub Copilot?

O **GitHub Copilot** é uma ferramenta de inteligência artificial desenvolvida pelo GitHub em parceria com a OpenAI. Ele funciona como um **assistente de programação dentro do seu editor de código**, sugerindo linhas, funções e blocos de código enquanto você digita.

> Imagine ter um programador experiente ao seu lado, pronto para ajudar a qualquer momento — isso é o GitHub Copilot.

---

## Como o Copilot funciona?

O Copilot analisa:
- O código que você já escreveu
- Os comentários que você adiciona
- O nome dos arquivos e funções

Com base nisso, ele **sugere o que você provavelmente vai escrever a seguir**.

---

## Pré-requisitos

1. Ter uma conta no [GitHub](https://github.com)
2. Ter o [Visual Studio Code](https://code.visualstudio.com/) instalado
3. Assinar o GitHub Copilot (plano individual, para estudantes ou empresarial)
   - **Estudantes:** o GitHub Copilot é **gratuito** pelo [GitHub Student Developer Pack](https://education.github.com/pack)

---

## Instalando o GitHub Copilot no VS Code

### Passo a passo:

1. Abra o **Visual Studio Code**
2. Clique no ícone de **Extensões** na barra lateral (ou pressione `Ctrl+Shift+X`)
3. Pesquise por `GitHub Copilot`
4. Clique em **Instalar**
5. Após instalar, faça login com sua conta GitHub quando solicitado

> Após a instalação, você verá o ícone do Copilot na barra de status do VS Code (parte inferior).

---

## Usando o GitHub Copilot

### 1. Sugestões automáticas

Apenas comece a digitar e o Copilot vai sugerir código em cinza. Para **aceitar** a sugestão, pressione `Tab`. Para **recusar**, continue digitando ou pressione `Esc`.

**Exemplo:** Digite o início de uma função e veja a sugestão:

```javascript
// Função que calcula a média de um array de números
function calcularMedia(
```

O Copilot vai sugerir o resto da função automaticamente!

### 2. Usando comentários como instruções

Você pode descrever o que quer em um comentário e o Copilot vai gerar o código:

```javascript
// Crie uma função que verifica se um número é primo
```

Após digitar o comentário e pressionar Enter, o Copilot sugerirá a implementação.

### 3. Múltiplas sugestões

Pressione `Ctrl+Enter` (ou `Ctrl+Shift+Space`) para ver várias sugestões diferentes para o mesmo código.

### 4. GitHub Copilot Chat

A extensão **GitHub Copilot Chat** permite conversar com o Copilot como um chat:

- Clique no ícone de chat na barra lateral
- Faça perguntas como:
  - "Como faço um loop em JavaScript?"
  - "Explique este código para mim"
  - "Como posso melhorar esta função?"

---

## Atalhos Úteis

| Atalho | Ação |
|--------|------|
| `Tab` | Aceita a sugestão atual |
| `Esc` | Recusa a sugestão |
| `Alt+]` | Próxima sugestão |
| `Alt+[` | Sugestão anterior |
| `Ctrl+Enter` | Abre painel com múltiplas sugestões |

---

## Exemplos de Uso

### Exemplo 1: Criar uma página HTML

Crie um arquivo `index.html` e comece a digitar:

```html
<!-- Página de portfólio pessoal com seção sobre mim, projetos e contato -->
<!DOCTYPE html>
```

O Copilot vai sugerir toda a estrutura!

### Exemplo 2: Estilizar com CSS

No arquivo `.css`, escreva:

```css
/* Estilo para um cartão de produto com sombra e borda arredondada */
.card {
```

### Exemplo 3: Lógica em JavaScript

```javascript
// Função que recebe uma lista de nomes e retorna apenas os que começam com a letra 'A'
function filtrarNomes(
```

### Exemplo 4: Comentários em inglês geram melhores resultados

O Copilot foi treinado com muito código em inglês. Para obter melhores resultados, tente usar comentários em inglês:

```javascript
// Function to validate a Brazilian CPF number
function validateCPF(
```

---

## Boas Práticas com o Copilot

### ✅ Faça isso:

- **Revise sempre o código sugerido** antes de aceitar — o Copilot pode errar
- Use comentários claros e descritivos para guiar as sugestões
- Teste o código gerado para verificar se funciona corretamente
- Use o Copilot como um assistente, não como um substituto para aprender

### ❌ Evite isso:

- Aceitar código sem entender o que ele faz
- Usar código sugerido com informações sensíveis (senhas, tokens)
- Depender completamente do Copilot sem desenvolver seu próprio raciocínio

---

## Exercício Prático

Abra o arquivo [`exercicio.html`](./exercicio.html) e use o GitHub Copilot para:

1. Completar a estrutura HTML com base nos comentários
2. Adicionar estilos CSS usando sugestões do Copilot
3. Criar funções JavaScript com a ajuda do Copilot
4. Experimentar o GitHub Copilot Chat para tirar dúvidas

---

## Recursos Adicionais

- 📖 [Documentação oficial do GitHub Copilot](https://docs.github.com/copilot)
- 🎓 [GitHub Student Developer Pack](https://education.github.com/pack) – Copilot gratuito para estudantes
- 🎥 [GitHub Copilot no YouTube](https://www.youtube.com/@GitHub)
- 💬 [Comunidade GitHub](https://github.community)

---

## Parabéns! 🎉

Você concluiu o curso introdutório de programação web! Agora você conhece:

- ✅ **HTML** – A estrutura das páginas web
- ✅ **CSS** – A aparência e estilo das páginas
- ✅ **JavaScript** – A interatividade das páginas
- ✅ **GitHub Copilot** – Seu assistente de IA para programar mais rápido

### Próximos passos sugeridos:

1. Crie seu primeiro projeto pessoal combinando HTML, CSS e JavaScript
2. Publique seu projeto no GitHub Pages (hospedagem gratuita do GitHub)
3. Explore frameworks como React, Vue ou Angular
4. Aprenda sobre back-end com Node.js, Python ou outras linguagens

**Continue praticando — a melhor forma de aprender programação é programando!** 💻
