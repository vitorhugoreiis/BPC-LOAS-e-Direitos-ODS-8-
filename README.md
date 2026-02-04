# BPC/LOAS para Autistas — Assistente Virtual (ODS 8)

Projeto de extensão universitária que democratiza o acesso à informação sobre o Benefício de Prestação Continuada (BPC/LOAS) para pessoas com autismo e suas famílias. O site reúne conteúdo objetivo e um assistente virtual para tirar dúvidas rápidas, alinhado ao ODS 8 (Trabalho Decente e Crescimento Econômico).

## Funcionalidades
- Site informativo com seções “O que é”, “Quem tem direito”, “Documentos” e “Contato”
- Assistente virtual baseado em palavras‑chave, com respostas diretas e exemplo de Auxílio‑Inclusão
- Rodapé padrão em todas as respostas com formas de contato da advogada
- Comando de menu acessível por “continuar”, “menu”, “voltar”, “início/inicio” e “opções/opcoes”
- Layout responsivo e visual limpo

## Tecnologias
- HTML5 e CSS3 (estático)
- JavaScript Vanilla (chatbot)
- Google Fonts (Inter)

## Estrutura do Projeto
- `index.html` — página principal com navegação, conteúdo e área do chatbot
- `style.css` — estilos do site (layout, componentes e responsividade)
- `script.js` — base de conhecimento e lógica do chatbot (keywords, menu, rodapé)
- `COMO_HOSPEDAR.md` — guia de publicação em hospedagens gratuitas

## Como executar localmente
1. Baixe ou clone este repositório
2. Abra o arquivo `index.html` diretamente no navegador
3. Opcional: use “Live Server” no VS Code para auto‑reload
   - Instale a extensão Live Server
   - Clique em “Go Live” no rodapé do VS Code

Não há dependências, build ou servidor backend. É um site estático.

## Personalização rápida
- Base de conhecimento: edite `knowledgeBase` em `script.js` (palavras‑chave e respostas)
- Rodapé padrão: texto definido em `findAnswer()` via constante `footer`
- Menu de opções: função `menu()` em `script.js`
- Gatilhos do menu: “continuar”, “menu”, “voltar”, “início/inicio”, “opções/opcoes”
- Estilos visuais: ajuste `style.css` (cores, componentes, responsividade)
- Conteúdo do site: altere as seções em `index.html`

## Hospedagem
Para publicar gratuitamente (GitHub Pages, Netlify, etc.), siga o guia:
- Consulte `COMO_HOSPEDAR.md`

## Acessibilidade e ODS
- Conteúdo objetivo e linguagem acessível
- Alinhamento ao ODS 8: incentiva inclusão e informação para acesso a direitos
- Aviso legal: caráter informativo, não substitui consultoria jurídica oficial

## Contato (Advogada)
- WhatsApp: +55 34 99895‑2305
- Instagram: adv.romenialuiza
- E‑mail: romenia.luiza@gmail.com
- Site: rluzadvocacia.com

## Créditos
Desenvolvido por Vitor — Semestre 2026.1 (Projeto de Extensão em Sistemas de Informação)
