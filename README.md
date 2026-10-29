# neosenti.com

Site institucional da Neosenti, em português e inglês. Estático (Astro 5), publicado no GitHub Pages (domínio `neosenti.com`).

## Comandos
Requer Node 22 e pnpm 9 (`corepack enable` ou `npm i -g pnpm@9`).

```bash
pnpm install     # instala as dependências
pnpm dev         # servidor local em http://localhost:4321
pnpm build       # gera o site em dist/
pnpm preview     # serve o dist/ localmente
pnpm deploy      # gera o build e publica no branch gh-pages (neosenti.com)
```

O `pnpm deploy` usa o pacote [gh-pages](https://www.npmjs.com/package/gh-pages): faz o build e envia `dist/` para o branch `gh-pages`, com `.nojekyll` e o `CNAME` de neosenti.com. O workflow `.github/workflows/deploy.yml` faz o mesmo automaticamente a cada push na `main`; use um ou outro.

## Onde mexer
| O quê | Arquivo |
|---|---|
| **Todo o texto** (pt e en) | `src/i18n/pt.ts`, `src/i18n/en.ts`. A estrutura está em `src/i18n/types.ts`; se faltar um texto num idioma, o build acusa. |
| Endereços de cada página nos dois idiomas | `src/i18n/index.ts` (`routes`) |
| Seções da home | `src/components/Home.astro` |
| Imprensa e acessibilidade | `src/components/Press.astro`, `src/components/Accessibility.astro` |
| Cores, tipografia, layout | `src/styles/global.css` (tokens no topo; modo escuro segue o sistema) |
| Escolha de idioma | script em `src/layouts/Base.astro` e `src/components/LangPrompt.astro` |
| Imagens | `public/img/` (site) e `public/press/` (downloads da imprensa) |

## Páginas
| pt | en |
|---|---|
| `/` | `/en/` |
| `/imprensa/` | `/en/press/` |
| `/acessibilidade/` | `/en/accessibility/` |
| `404.html` (bilíngue) | |

## Idioma
1. Se a pessoa já escolheu um idioma (seletor no topo ou janela), a escolha vale sempre (`localStorage`, chave `ns-lang`).
2. Senão, o primeiro idioma do navegador decide: `pt*` → português, `en*` → inglês, levando para a mesma página no outro idioma (o `#âncora` é traduzido).
3. Se o navegador não estiver em nenhum dos dois, aparece uma janela não modal (não rouba o foco) para escolher.
Robôs de busca nunca são redirecionados; cada página tem `hreflang` e `canonical`. Sem JavaScript, tudo funciona e o seletor continua sendo um link comum.

## Acessibilidade (regras do projeto)
- Um `h1` por página; títulos de seção são frases que afirmam algo e fazem sentido lidos sozinhos.
- Landmarks: `header`, `nav` rotulada, `main` (destino do "Pular para o conteúdo"), `footer`.
- Contraste AA nos dois esquemas de cor; foco visível; nada depende de animação (`prefers-reduced-motion`); funciona em alto contraste (`forced-colors`).
- Links dizem o destino e avisam quando levam a outro site. Nada abre nova aba.
- Trechos em outro idioma levam `lang`.
- Auditoria de 2026-10-29: axe-core 4.10 sem violações nas 7 páginas (claro/escuro, 1440 e 390 px).

## Regras de conteúdo
- Este é o site da **empresa**: visão, tese, como fazemos, princípios, trajetória e contato. Tudo sobre a BIA Radar (funcionamento, versões, especificações, lista de espera) fica em **biaradar.com**.
- **Nenhum valor monetário**: nada de preço, prêmio em dinheiro, tamanho de mercado ou margem.
- Números externos só com fonte (hoje: OMS e UNICEF, 2022). Sem travessão.
- Página curta: pensar primeiro no celular.
