# Manual da Marca - OdontoSolution

Este documento descreve como aplicar corretamente a identidade visual da OdontoSolution.

## 📋 Especificações da Marca

### Tipografia

#### Fonte Primária: **Ibrand**
- **Uso**: Títulos principais, logotipo, elementos de destaque
- **Variações**: Regular, Bold, Black
- **Aplicação**: Headers (h1, h2, h3), logo, CTAs principais

#### Fonte Secundária: **Arial**
- **Uso**: Textos corridos, parágrafos, elementos secundários
- **Variações**: Regular, Bold
- **Aplicação**: Corpo do texto, descrições, formulários

### Paleta de Cores

#### Cor Primária
- **Cinza**: `#5f5f5c`
- **Uso**: Elementos principais, títulos, navegação

#### Cor Secundária
- **Turquesa**: `#3faeb3`
- **Uso**: Destaques, CTAs, elementos interativos

#### Cores de Apoio
- **Accent**: `#2d8a8f` (turquesa escuro)
- **Branco**: `#ffffff`
- **Cinza Claro**: `#f8f9fa`

## 🎨 Aplicação Visual

### Logo
- Localização: `assets/logo.png`
- Altura no header: 40px
- Altura no footer: 35px (com filtro branco)

### Gradientes
- **Principal**: Cinza → Turquesa (`#5f5f5c` → `#3faeb3`)
- **Secundário**: Turquesa → Turquesa escuro (`#3faeb3` → `#2d8a8f`)

## 📁 Estrutura de Arquivos

```
assets/
├── logo.png                 # Logo principal
└── fonts/                   # Fontes customizadas
    ├── Ibrand-Regular.woff2
    ├── Ibrand-Regular.woff
    ├── Ibrand-Bold.woff2
    ├── Ibrand-Bold.woff
    ├── Ibrand-Black.woff2
    └── Ibrand-Black.woff
```

## 🔧 Implementação Técnica

### CSS Classes
```css
.brand-title     /* Ibrand Black - Títulos principais */
.brand-subtitle  /* Ibrand Bold - Subtítulos */
.brand-text      /* Ibrand Regular - Textos de marca */
```

### Variáveis CSS
```css
--primary-color: #5f5f5c;    /* Cinza */
--secondary-color: #3faeb3;   /* Turquesa */
--accent-color: #2d8a8f;      /* Turquesa escuro */
--primary-font: 'Ibrand', Arial, sans-serif;
--body-font: Arial, sans-serif;
```

## 📝 Diretrizes de Uso

### Do's ✅
- Use Ibrand para títulos e elementos de destaque
- Use Arial para textos corridos
- Mantenha a proporção da logo
- Use as cores da paleta oficial
- Aplique gradientes nos CTAs principais

### Don'ts ❌
- Não distorça a logo
- Não use outras fontes além das especificadas
- Não altere as cores da paleta
- Não use a logo muito pequena (mín. 30px altura)

## 🚀 Como Usar

1. **Instalar Fontes**: Coloque os arquivos da fonte Ibrand na pasta `assets/fonts/`
2. **Aplicar Classes**: Use as classes `.brand-title`, `.brand-subtitle`, `.brand-text`
3. **Cores**: Use as variáveis CSS definidas
4. **Logo**: Substitua por sua logo em `assets/logo.png`

## 🔄 Fallbacks

Caso as fontes Ibrand não carreguem:
- **Títulos**: Arial Black
- **Textos**: Arial Regular

Isso garante que a identidade visual seja mantida mesmo sem as fontes customizadas.