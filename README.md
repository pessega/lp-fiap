# Landing Page - FIAP

> Este projeto foi desenvolvido combase em um protótipo do Figma, com foco em responsividade, performance e experiência do usuário.

---

## 🎯 Objetivo

Criar uma **landing page moderna, responsiva e interativa**, que funcione perfeitamente em diferentes resoluções e navegadores, seguindo fielmente o protótipo fornecido. respeito ao Pixel Perfect!

O projeto também incluiu **animações** em todas as seções e um **efeito de água como bônus**, adicionando dinamismo e sofisticação à interface.

---

## 💡 Observações

- Este projeto foi desenvolvido com atenção a **boas práticas de desenvolvimento front-end**, incluindo modularização de código, tipagem TypeScript e performance.
- O **efeito de água** foi implementado como um bônus, reforçando a capacidade de criar elementos interativos e visuais.
- Animações do header feita direto no SCSS para comprovar conhecimento sem necessidade de bibliotecas de animação;
- Animação do hero feita direto no SCSS para garantir velocidade no carregamento, já que é um dos primeiros conteúdos da página;

---

## 🛠 Tecnologias utilizadas

- ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white) **Next.js** - Framework React para SSR/SSG e otimização de performance.
- ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) **TypeScript** - Garantia de tipagem segura e escalabilidade.
- ![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white) **SCSS** - Organização modular de estilos, uso de variáveis e mixins.
- ![Autoprefixer](https://img.shields.io/badge/Autoprefixer-FF69B4?style=for-the-badge&logo=autoprefixer&logoColor=white) **Autoprefixer** - Adiciona prefixos CSS automaticamente para compatibilidade entre navegadores.
- ![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white) **Framer Motion** - Animações fluidas e interativas para seções e elementos.
- ![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white) **Yarn** - Gerenciador de pacotes.

---

## 📱 Responsividade

A landing page foi testada e otimizada para as seguintes resoluções:

| Desktop   | Tablets              | Mobile                  |
| --------- | -------------------- | ----------------------- |
| 3840x2160 | 1024x1366 (iPad Pro) | 414x736 (iPhone 8 Plus) |
| 2560x1440 | 820x1180 (iPad Air)  | 360x640 (Galaxy S5)     |
| 2560x1080 | 768x1024 (iPad)      | 320x568 (iPhone 5/SE)   |
| 1920x1080 | -                    | -                       |
| 1600x900  | -                    | -                       |
| 1440x900  | -                    | -                       |
| 1366x768  | -                    | -                       |
| 1280x720  | -                    | -                       |
| 1024x640  | -                    | -                       |

> Utilizamos **medidas relativas (rem, %) sempre que possível**, garantindo fluidez e consistência em diferentes tamanhos de tela.

---

## 🌐 Compatibilidade com navegadores

A página foi testada e funciona corretamente nos principais navegadores:

- Google Chrome
- Safari
- Firefox
- Edge
- Opera

---

## ✨ Funcionalidades

- Layout fiel ao protótipo do Figma
- Responsividade completa para múltiplos dispositivos
- Animações fluidas em todas as seções usando **Framer Motion**
- **Efeito de água** animado como bônus, aplicando técnicas de canvas/JS
- Componentização e reutilização de SCSS com variáveis e mixins
- SEO básico e otimização para carregamento rápido

---

## 🚀 Como rodar o projeto

1. Clone o repositório:

```bash
git clone <https://github.com/pessega/lp-fiap.git>
cd lp-fiap
```

2. Instale as dependências:

```bash
yarn install
```

3. Rode o servidor de desenvolvimento:

```bash
yarn dev
```

4. Abra o navegador em:

```
http://localhost:3000
```

---

## 📂 Estrutura do projeto

```
├── public/               # Arquivos públicos (imagens, fontes)
├── src/
│   ├── app/              # Páginas Next.js
│   ├── components/       # Componentes React
│   ├── data/             # Dados para Cursos e FAQ
│   └── styles/           # SCSS, variáveis e mixins
├── .gitignore
├── eslint.config.mjs
├── package.json
├── postcss.config.js
├── README.md
├── tsconfig.json
└── yarn.lock
```

---

_Feito com 💜 por Andressa Duarte_
