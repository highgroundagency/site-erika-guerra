# Site Dra. Érika Guerra

Landing page premium para a **Dra. Érika Guerra (CRM-PE 14461)** — Médica especialista em Medicina Preventiva, Nutrologia e Medicina do Sono. Atendimento no Medical Center do Shopping Recife, Boa Viagem.

**Stack:** Vite + React + TypeScript + Tailwind CSS + Framer Motion

---

## Como rodar localmente

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build de produção

```bash
npm run build      # gera dist/
npm run preview    # previsualiza o build em http://localhost:4173
```

---

## Assets que precisam ser adicionados

Coloque os arquivos abaixo em `public/`:

```
public/
├── brand/
│   ├── logo-horizontal-completo.jpg   ← Logo completo (símbolo + nome + tagline)
│   ├── logo-simbolo-fundo-verde.jpg   ← Símbolo dourado sobre verde escuro
│   └── logo-simbolo-dourado.jpg       ← Símbolo dourado sobre fundo claro
└── photos/
    ├── dra-erika-hero.jpg             ← NECESSÁRIO: foto principal do hero
    ├── dra-erika-clinica.jpg          ← Foto do consultório (seção de autoridade)
    └── vsl-poster.jpg                 ← Poster do VSL (placeholder até ter o vídeo)
```

> **⚠️ A foto `dra-erika-hero.jpg` é necessária para o hero funcionar.**
> O site está configurado para exibir um fallback SVG se a imagem não for encontrada.

---

## Como configurar o VSL (vídeo de vendas)

Edite `src/components/Identificacao.tsx` e passe o ID do vídeo para o componente `<VslPlayer>`:

```tsx
// YouTube:
<VslPlayer youtubeId="SEU_ID_AQUI" />

// Vimeo:
<VslPlayer vimeoId="SEU_ID_AQUI" />

// Arquivo MP4 direto:
<VslPlayer videoSrc="/videos/vsl-dra-erika.mp4" />
```

---

## Onde editar

| O que editar | Onde |
|---|---|
| WhatsApp / mensagem | `src/config/contact.ts` |
| Paleta de cores | `tailwind.config.js` + `src/styles/tokens.css` |
| Endereço / CRM | `src/config/contact.ts` |
| Tipografia | `index.html` (Google Fonts link) + `tailwind.config.js` |
| Conteúdo das seções | `src/components/[NomeDaSeção].tsx` |

---

## Estrutura de componentes

```
src/
├── components/
│   ├── Navbar.tsx          — Navegação fixa com smooth scroll
│   ├── Hero.tsx            — Dobra principal (hero section)
│   ├── Identificacao.tsx   — Dores + VSL + engrenagens
│   ├── ProvaSocial.tsx     — Autoridade + depoimentos
│   ├── SuperPromessa.tsx   — Seção de impacto máximo
│   ├── Metodo.tsx          — Os 5 pilares do protocolo
│   ├── Localizacao.tsx     — Mapa + endereço + CTA final
│   ├── Footer.tsx          — Rodapé completo
│   ├── WhatsAppFab.tsx     — Botão flutuante de WhatsApp
│   ├── VslPlayer.tsx       — Player de vídeo de vendas
│   ├── PulsingHeart.tsx    — Coração pulsante + ECG
│   ├── ScrollGears.tsx     — Engrenagens animadas por scroll
│   └── BrandSymbol.tsx     — Símbolo SVG da marca (animado)
├── config/
│   └── contact.ts          — URL WhatsApp, endereço, CRM
├── hooks/
│   └── useScrollProgress.ts — Hook de progresso de scroll
└── styles/
    └── tokens.css          — CSS variables da paleta oficial
```

---

## Compliance médico (CFM/CREMEPE)

Este site foi construído respeitando as normas de publicidade médica:
- ✅ Sem promessas de resultado ou cura
- ✅ Sem fotos antes/depois
- ✅ Sem valores de consulta
- ✅ Sem sensacionalismo
- ✅ CRM-PE 14461 visível no header e footer
- ✅ Aviso "caráter educativo" no footer
