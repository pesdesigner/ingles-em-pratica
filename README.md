# Inglês em Prática

Um guia simples para quem está começando a aprender inglês. A primeira versão apresenta pronomes pessoais e o verbo **to be**, com regras e exemplos traduzidos.

## Tecnologias

- React 19 e TypeScript
- Vite 6
- GitHub Actions e GitHub Pages

## Executar localmente

Requisitos: Node.js 22 ou superior e npm.

```bash
npm ci
npm run dev
```

Abra o endereço local indicado pelo Vite no terminal. Para validar e pré-visualizar a versão de produção:

```bash
npm run build
npm run preview
```

## Publicar no GitHub Pages

1. Envie o projeto para um repositório GitHub usando a branch `main`.
2. No repositório, abra **Settings → Pages**.
3. Em **Build and deployment**, selecione **GitHub Actions** como origem.
4. Envie um commit para `main` ou execute manualmente o workflow **Deploy to GitHub Pages** na aba **Actions**.

O workflow compila o site e publica o diretório `dist`. O Vite está configurado com caminhos relativos para funcionar em um repositório de projeto no GitHub Pages.

## Estrutura

```text
src/                   Aplicação React e estilos
.github/workflows/     Build e publicação no GitHub Pages
index.html             Documento HTML principal
vite.config.ts         Configuração do Vite para o Pages
```

## Limitações atuais

- O conteúdo é estático e não requer banco de dados ou credenciais.
- A fonte DM Sans/Manrope é carregada do Google Fonts; sem conexão, o navegador usa fontes alternativas.
