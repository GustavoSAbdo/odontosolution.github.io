# OdontoSolution - Landing Page

Uma landing page moderna e responsiva para agências de soluções digitais especializadas em clínicas odontológicas.

## 🦷 Sobre o Projeto

Esta landing page foi desenvolvida para apresentar os serviços de uma agência especializada em soluções digitais para clínicas odontológicas, incluindo:

- **Gestão de Tráfego Pago**: Campanhas estratégicas no Google Ads e redes sociais
- **Assistente de IA para WhatsApp**: Chatbot inteligente para atendimento 24/7 e agendamento automático

## ✨ Características

### Design Seguindo Manual da Marca
- **Tipografia**: Ibrand (primária) + Arial (secundária)
- **Paleta de cores**: Cinza (#5f5f5c) e Turquesa (#3faeb3)
- **Logo personalizada**: assets/logo.png
- **Gradientes de marca**: Cinza → Turquesa

### Funcionalidades
- **Responsivo**: Adaptável a todos os dispositivos
- **Animações Suaves**: Usando ScrollReveal para revelar elementos
- **Formulário de Contato**: Com validação e integração WhatsApp
- **Navegação Inteligente**: Menu com scroll ativo
- **Performance Otimizada**: Carregamento rápido e eficiente

### Seções da Página
1. **Hero Section**: Apresentação principal com estatísticas
2. **Serviços**: Detalhamento das soluções oferecidas
3. **Benefícios**: Por que escolher a OdontoSolution
4. **Como Funciona**: Processo em 3 etapas
5. **CTA**: Chamada para ação principal
6. **Contato**: Formulário e informações de contato

## 🚀 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilização avançada com:
  - CSS Grid e Flexbox
  - Variáveis CSS
  - Animações e transições
  - Design responsivo
- **JavaScript ES6+**: Interatividade com:
  - Manipulação do DOM
  - Animações
  - Validação de formulários
  - ScrollReveal para animações

## 📁 Estrutura do Projeto

```
landing_page_odonto_solution/
├── index.html              # Página principal
├── css/
│   ├── style.css           # Estilos CSS principais
│   └── fonts.css           # Definições das fontes
├── js/
│   └── script.js           # JavaScript
├── assets/
│   ├── logo.png            # Logo da marca
│   └── fonts/              # Fontes Ibrand (adicionar manualmente)
├── README.md               # Documentação
└── BRAND_GUIDE.md          # Manual da marca
```

## 🛠️ Como Usar

### 1. Abrir a Página
Simplesmente abra o arquivo `index.html` em qualquer navegador moderno.

### 2. Personalização

#### Cores e Branding
Edite as variáveis CSS no arquivo `css/style.css`:

```css
:root {
    --primary-color: #5f5f5c;     /* Cinza da marca */
    --secondary-color: #3faeb3;   /* Turquesa da marca */
    --accent-color: #2d8a8f;      /* Turquesa escuro */
    /* ... outras cores */
}
```

#### Tipografia
A página usa duas fontes conforme manual da marca:
- **Ibrand**: Títulos e elementos de destaque
- **Arial**: Textos corridos e parágrafos

Para usar as fontes Ibrand, adicione os arquivos na pasta `assets/fonts/`:

#### Conteúdo
Modifique o texto diretamente no arquivo `index.html`:
- Nome da empresa
- Serviços oferecidos
- Informações de contato
- Estatísticas e números

#### Contato
Atualize as informações de contato:
- Telefone no WhatsApp
- E-mail
- Links de redes sociais

### 3. Integração com WhatsApp

O formulário está configurado para enviar mensagens via WhatsApp. Para personalizar:

1. Substitua o número no arquivo `js/script.js`:
```javascript
const whatsappUrl = `https://wa.me/SEU_NUMERO?text=${encodeURIComponent(whatsappMessage)}`;
```

2. Atualize também os links de contato no HTML.

### 4. Hospedagem

A página pode ser hospedada em qualquer serviço:
- **GitHub Pages** (gratuito)
- **Netlify** (gratuito)
- **Vercel** (gratuito)
- Ou qualquer hosting tradicional

## 📱 Responsividade

A landing page é totalmente responsiva e otimizada para:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🎨 Personalização Avançada

### Adicionando Novas Seções
1. Crie a estrutura HTML
2. Adicione os estilos CSS correspondentes
3. Implemente a lógica JavaScript se necessário

### Modificando Animações
As animações usam a biblioteca ScrollReveal. Para personalizar:

```javascript
sr.reveal('.elemento', {
    origin: 'bottom',
    distance: '60px',
    duration: 2000,
    delay: 200
});
```

### Integrações Externas
- **Google Analytics**: Adicione o código de tracking
- **Facebook Pixel**: Para remarketing
- **Chatbots**: Integração com outras plataformas

## 🔧 Manutenção

### Atualizações de Conteúdo
- Estatísticas e números de resultados
- Novos serviços ou funcionalidades
- Depoimentos de clientes
- Cases de sucesso

### Melhorias de Performance
- Otimização de imagens
- Minificação de CSS/JS
- Lazy loading implementado

## 📊 Métricas e Analytics

Para acompanhar o desempenho da landing page:
1. Implemente Google Analytics
2. Configure metas de conversão
3. Monitore taxa de rejeição
4. Acompanhe formulários enviados

## 🤝 Suporte

Para dúvidas ou suporte:
- E-mail: contato@odontosolution.com.br
- WhatsApp: (11) 99999-9999

## 📄 Licença

Este projeto foi desenvolvido para uso comercial da OdontoSolution.

---

**Desenvolvido com ❤️ para transformar clínicas odontológicas através de soluções digitais inteligentes.**# odontosolution.github.io
