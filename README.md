# Inglês em Prática

Um guia simples para quem está começando a aprender inglês. O conteúdo apresenta pronomes pessoais e o verbo **to be**, com regras e exemplos traduzidos. As lições são organizadas em JSON e renderizadas por componentes React tipados.

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
src/
├── components/        Componentes de interface reutilizáveis, incluindo LessonSection
├── data/              Conteúdo estático das lições e frases do dia em JSON
├── types/             Contratos TypeScript dos dados
├── App.tsx            Composição da página e carregamento das lições
├── main.tsx           Inicialização React
├── styles.css         Estilos principais
└── responsive.css     Ajustes responsivos
.github/workflows/     Build e publicação no GitHub Pages
index.html             Documento HTML principal
vite.config.ts         Configuração do Vite para o Pages
```

### Adicionar lições

As lições ficam em `src/data/lessons.json`. Cada lição tem um `id` numérico, uma `order` para definir sua posição, um `slug` usado nos links e uma lista de blocos. Os tipos de bloco disponíveis são grupos de tabelas, grupos de cards e callouts. Os contratos estão em `src/types/lesson.ts`, e `LessonSection` renderiza os blocos conforme o campo `type`.

## Limitações atuais

- O conteúdo é estático e não requer banco de dados ou credenciais.
- A fonte DM Sans/Manrope é carregada do Google Fonts; sem conexão, o navegador usa fontes alternativas.

## Diretriz de layout

Em telas de celular, evitar rolagem horizontal. Tabelas devem se ajustar à largura disponível, empilhar conteúdo ou usar cabeçalhos compactos.
