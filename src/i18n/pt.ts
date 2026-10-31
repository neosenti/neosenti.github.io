import type { Content } from './types';

const EMAIL = 'contato@neosenti.com';

const pt: Content = {
  meta: {
    title: 'Neosenti · Tecnologia para problemas pequenos demais para os outros',
    description:
      'A Neosenti cria tecnologia para problemas reais que o mercado considera pequenos demais. Desenvolvemos com as pessoas que vão usar, no Brasil.',
  },

  ui: {
    skipToContent: 'Pular para o conteúdo',
    navLabel: 'Navegação principal',
    homeLabel: 'Neosenti, página inicial',
    switchLang: 'English',
    externalHint: '(abre outro site)',
    menu: 'Menu',
    footerNav: 'Rodapé',
  },

  sectionIds: {
    impact: 'impacto',
    how: 'como-fazemos',
    beliefs: 'no-que-acreditamos',
    products: 'produtos',
    about: 'quem-somos',
    contact: 'contato',
  },

  nav: [
    { section: 'impact', label: 'Impacto' },
    { section: 'how', label: 'Como fazemos' },
    { section: 'products', label: 'Produtos' },
    { section: 'about', label: 'Quem somos' },
    { section: 'contact', label: 'Contato' },
  ],

  hero: {
    h1: 'Tecnologia para problemas pequenos demais para os outros.',
    lead:
      'Muitos problemas reais ficam sem solução porque, para uma empresa grande, o custo de desenvolver não se paga. É para eles que a Neosenti existe.',
    ctaPrimary: { label: 'Por que isso importa', href: '#impacto' },
    ctaSecondary: { label: 'Fale com a gente', href: '#contato' },
    graphicTitle: 'O mercado olha para a média. Nós olhamos para as pontas.',
    graphicDesc:
      'Gráfico ilustrativo de uma curva em forma de sino. O meio da curva, onde está a maioria, é onde o mercado olha. As duas pontas, destacadas, são as pessoas e os problemas que ficam sem solução: é onde a Neosenti trabalha.',
    graphicHead: 'Onde o mercado olha',
    graphicTail: 'Onde a Neosenti trabalha',
  },

  impact: {
    kicker: 'Impacto',
    h2: 'Bilhões de pessoas dependem de tecnologia que o mercado não prioriza.',
    stats: [
      { value: '2,5 bilhões', text: 'de pessoas precisam de ao menos um produto assistivo, como óculos, bengala ou aparelho auditivo.' },
      { value: '3,5 bilhões', text: 'devem precisar até 2050, com o envelhecimento da população.' },
      { value: '3% a 90%', text: 'é quanto o acesso a esses produtos varia entre países pobres e ricos.' },
    ],
    source: 'Fonte: OMS e UNICEF, Relatório Global sobre Tecnologia Assistiva, 2022.',
    whoTitle: 'Quem precisa da gente',
    who: [
      'Pessoas com deficiência, que dependem de um produto para ter autonomia.',
      'Pessoas idosas, um grupo que cresce em todo o mundo.',
      'Quem vive em países onde o que existe chega importado, caro, ou não chega.',
    ],
    closing:
      'Quando o mercado é pequeno demais para os outros, essas pessoas ficam sem nada. No Brasil, o poder público precisou criar um desafio nacional para que existisse uma solução para quem anda de bengala. É esse espaço que ocupamos.',
  },

  how: {
    kicker: 'Como fazemos',
    h2: 'Fazemos o desenvolvimento caber num mercado pequeno.',
    items: [
      {
        title: 'Começamos pela pessoa',
        text: 'Antes de qualquer placa, vamos até quem vai usar. Desenvolvemos com as pessoas, não para elas.',
      },
      {
        title: 'Reaproveitamos a nossa base',
        text: 'Radar, inteligência artificial que roda no próprio aparelho e eletrônica modular, desenvolvidos em casa e usados de novo a cada produto. Um problema novo não começa do zero.',
      },
      {
        title: 'Produzimos em baixo volume',
        text: 'Fabricação com qualidade industrial em lotes pequenos, para que um produto não precise vender milhões de unidades para existir.',
      },
    ],
  },

  beliefs: {
    kicker: 'No que acreditamos',
    h2: 'Cinco princípios guiam cada decisão de projeto.',
    items: [
      { title: 'O usuário médio não existe.', text: 'Projetamos para quem está nas pontas, não para a média.' },
      { title: 'Projetar para o pior dia.', text: 'Sem internet, sem o cabo certo, longe de assistência: tem que funcionar.' },
      { title: 'Tecnologia ética.', text: 'Sem barreiras artificiais. Só cobramos de forma recorrente quando oferecer o serviço também tem um custo recorrente.' },
      { title: 'Preço é acesso.', text: 'Quem mais precisa costuma ter menos. O preço decide quem fica de fora.' },
      { title: 'O Brasil é o alvo, não o teste.', text: 'O que funciona aqui funciona em quase qualquer lugar.' },
    ],
  },

  products: {
    kicker: 'Produtos',
    h2: 'A BIA Radar é a primeira prova de que a tese funciona.',
    bia: {
      name: 'BIA Radar',
      text: 'Um radar que se prende à bengala e avisa a pessoa cega sobre obstáculos acima da cintura, a parte do caminho que a bengala não alcança. Foi desenvolvida com pessoas cegas.',
      link: { label: 'Conheça a BIA Radar em biaradar.com', href: 'https://biaradar.com/', external: true },
      imageAlt: 'Desenho em linhas da BIA Radar, um pequeno módulo com botões na parte de cima.',
    },
    nextTitle: 'A seguir',
    next: 'A mesma base, aplicada a outros problemas de autonomia e de cuidado.',
  },

  about: {
    kicker: 'Quem somos',
    h2: 'Uma empresa que começou ouvindo, antes de qualquer placa.',
    text: 'Rafael Farias Meneses, estudante de Engenharia de Computação na UTFPR, fundou a Neosenti em 2025, em Toledo, no Paraná. A primeira parada foi uma associação de pessoas cegas, para entender o problema com quem vive com ele.',
    quote:
      'Quando ouço que é melhor vender pra metade das pessoas pelo dobro do preço, penso nas pessoas que estão sendo ignoradas ao invés de abraçadas.',
    quoteBy: 'Rafael Farias Meneses, fundador e CEO',
    milestonesTitle: 'Trajetória',
    milestones: [
      { year: '2025', text: 'Neosenti fundada em Toledo, Paraná.' },
      { year: '2026', text: '1º lugar no Desafio Bengalas Inteligentes, da ABDI e do Governo do Paraná, com a BIA Radar.' },
      { year: '2026', text: 'Prêmio Na Prática, região Sul, para o fundador.' },
    ],
    photoAlt: 'Retrato de Rafael Farias Meneses.',
  },

  contact: {
    kicker: 'Contato',
    h2: 'Vamos construir isso juntos.',
    lead: 'Um e-mail para todos os assuntos. Conte quem você é e o que tem em mente.',
    audiences: [
      { who: 'Parceiros e indústria', why: 'para desenvolver ou fabricar junto.' },
      { who: 'Instituições', why: 'para levar nossas soluções a quem vocês atendem.' },
      { who: 'Investidores', why: 'para conhecer a empresa e o plano.' },
      { who: 'Imprensa', why: 'para entrevistas, dados e imagens.' },
    ],
    email: EMAIL,
    emailLabel: `Enviar e-mail para ${EMAIL}`,
    location: 'Toledo, Paraná, Brasil',
  },

  footer: {
    tagline: 'Tecnologia para problemas pequenos demais para os outros.',
    legal: '© 2026 Neosenti · Toledo, Paraná, Brasil',
    links: [
      { label: 'Imprensa', href: '/imprensa/' },
      { label: 'Kit de mídia', href: '/midia/' },
      { label: 'Acessibilidade', href: '/acessibilidade/' },
      { label: 'BIA Radar', href: 'https://biaradar.com/', external: true },
    ],
  },

  langPrompt: { title: 'Idioma', text: 'Em que idioma você quer ler o site?', close: 'Fechar' },

  press: {
    metaTitle: 'Imprensa · Neosenti',
    metaDescription: 'Fatos, texto padrão, imagens e contato de imprensa da Neosenti.',
    h1: 'Fatos, imagens e contato para quem escreve sobre a Neosenti.',
    lead: 'Os textos e imagens desta página podem ser usados em matérias sobre a Neosenti.',
    factsTitle: 'Fatos',
    facts: [
      { term: 'Empresa', desc: 'Neosenti, fundada em 2025 em Toledo, Paraná, Brasil.' },
      { term: 'Fundador e CEO', desc: 'Rafael Farias Meneses.' },
      { term: 'O que faz', desc: 'Tecnologia para problemas reais que o mercado considera pequenos demais, começando pela tecnologia assistiva.' },
      { term: 'Primeiro produto', desc: 'BIA Radar, que avisa pessoas cegas sobre obstáculos acima da cintura. Informações do produto em biaradar.com.' },
      { term: 'Reconhecimentos', desc: '1º lugar no Desafio Bengalas Inteligentes, da ABDI e do Governo do Paraná (2026). Prêmio Na Prática 2026, região Sul, para o fundador.' },
    ],
    boilerplateTitle: 'Sobre a Neosenti',
    boilerplate:
      'A Neosenti é uma empresa de tecnologia de Toledo, Paraná, fundada em 2025 por Rafael Farias Meneses. Ela cria produtos para problemas reais que o mercado considera pequenos demais, desenvolvidos com as pessoas que vão usá-los. Para isso, reaproveita uma mesma base de radar, inteligência artificial embarcada e eletrônica modular, e produz em baixo volume. O primeiro produto é a BIA Radar, para pessoas cegas, 1º lugar no Desafio Bengalas Inteligentes, da ABDI e do Governo do Paraná.',
    downloadsTitle: 'Logo e imagens',
    downloads: [
      { label: 'Logo da Neosenti (SVG)', desc: 'Arquivo em vetor' },
      { label: 'Foto de Rafael Farias Meneses (JPG)', desc: 'Retrato do fundador e CEO' },
      { label: 'Desenho da BIA Radar (PNG)', desc: 'Desenho em linhas do produto' },
    ],
    contactTitle: 'Contato de imprensa',
    contactText: 'Pedidos de entrevista, dados ou imagens: escreva com o assunto “Imprensa”.',
  },

  accessibility: {
    metaTitle: 'Acessibilidade · Neosenti',
    metaDescription: 'Como este site funciona com leitor de tela e teclado, o que ainda falta e como relatar um problema.',
    h1: 'Este site foi feito para funcionar com leitor de tela e só com teclado.',
    sections: [
      {
        h2: 'Buscamos o nível AA das WCAG 2.2.',
        paragraphs: [
          'Fazemos tecnologia com pessoas com deficiência, e parte de quem visita este site usa leitor de tela. Por isso seguimos as Diretrizes de Acessibilidade para Conteúdo Web (WCAG 2.2), nível AA. O site não passou por auditoria externa.',
        ],
      },
      {
        h2: 'O que fizemos.',
        paragraphs: [
          'Cada página tem um título principal e títulos de seção que fazem sentido lidos sozinhos. Cabeçalho, navegação, conteúdo e rodapé estão marcados como regiões, e o primeiro link pula direto para o conteúdo.',
          'Texto e fundo seguem o contraste do nível AA. Tudo funciona pelo teclado, com foco visível. O site respeita a preferência por movimento reduzido, o modo escuro e o alto contraste do sistema.',
          'O idioma de cada página e de cada trecho em outra língua está marcado. Imagens têm descrição, e os links dizem para onde levam.',
        ],
      },
      {
        h2: 'Encontrou um problema? Conte para a gente.',
        paragraphs: [
          'Diga a página, o que tentou fazer e, se puder, o navegador e o leitor de tela que usa. Esta declaração foi revisada em outubro de 2026.',
        ],
      },
    ],
    reportCta: 'Relatar um problema de acessibilidade por e-mail',
  },

  media: {
    metaTitle: 'Kit de mídia · Neosenti',
    metaDescription: 'Fotos, imagens 3D e desenhos da BIA Radar para uso editorial, com créditos e termos de uso.',
    h1: 'Fotos, imagens e desenhos da BIA Radar para quem escreve sobre ela.',
    lead: 'Uso gratuito em conteúdo editorial, jornalístico, educacional e acadêmico, com crédito. Antes do primeiro download, pedimos que você leia e aceite os termos.',
    howTitle: 'Como funciona',
    how: [
      'Escolha um arquivo ou baixe o kit completo.',
      'Informe nome completo e e-mail e aceite os termos de uso.',
      'O arquivo é preparado no seu navegador, com seus dados gravados nele. Nada é enviado para a Neosenti.',
    ],
    groups: {
      photos: { title: 'Fotos', credit: 'Crédito obrigatório: Foto: Michelly Domiciano' },
      renders: { title: 'Imagens 3D', credit: 'Crédito obrigatório: Imagem: Neosenti' },
      drawings: { title: 'Desenhos técnicos (PNG e SVG)', credit: 'Crédito obrigatório: Imagem: Neosenti' },
    },
    items: {
      'foto-demonstracao': { title: 'Demonstração na Câmara de Toledo', alt: 'Rafael Farias Meneses, de pé num plenário, prende a BIA Radar ao cabo de uma bengala branca e vermelha.' },
      'foto-encaixe-na-bengala': { title: 'Encaixe na bengala', alt: 'Mãos prendendo a BIA Radar logo abaixo da empunhadura de uma bengala branca.' },
      'foto-ajuste-da-alca': { title: 'Ajuste da alça', alt: 'Mãos ajustando a alça de borracha que prende a BIA Radar à bengala.' },
      'foto-prototipos': { title: 'Dois protótipos', alt: 'Uma BIA Radar preta presa à bengala e, ao lado, um protótipo transparente com a eletrônica à mostra, sobre a palma de uma mão.' },
      'foto-braille': { title: 'Nome em relevo e em braille', alt: 'Lateral da BIA Radar preta com o nome BIA RADAR em relevo e em braille, ao lado do protótipo transparente.' },
      'render-lado-direito': { title: 'Lado direito', alt: 'Imagem 3D da BIA Radar vista exatamente de lado, pelo lado direito, sobre fundo transparente.' },
      'render-lado-direito-inclinado': { title: 'Lado direito, inclinada', alt: 'Imagem 3D da BIA Radar vista de lado, pelo lado direito, inclinada cerca de 30 graus, sobre fundo transparente.' },
      'render-lado-esquerdo': { title: 'Lado esquerdo', alt: 'Imagem 3D da BIA Radar vista exatamente de lado, pelo lado esquerdo, com o encaixe da bengala, sobre fundo transparente.' },
      'render-lado-esquerdo-inclinado': { title: 'Lado esquerdo, inclinada', alt: 'Imagem 3D da BIA Radar vista de lado, pelo lado esquerdo, inclinada cerca de 30 graus, sobre fundo transparente.' },
      'render-tras-cima-direita': { title: 'De trás e de cima, pela direita', alt: 'Imagem 3D da BIA Radar vista de trás e de cima, com os botões e o encaixe da bengala, sobre fundo transparente.' },
      'render-tras-cima-esquerda': { title: 'De trás e de cima, pela esquerda', alt: 'Imagem 3D da BIA Radar vista de trás e de cima, pelo outro lado, com os botões e o encaixe da bengala, sobre fundo transparente.' },
      'render-ponta-cima': { title: 'De cima, pela outra ponta', alt: 'Imagem 3D da BIA Radar vista de cima pela outra ponta, com os botões e o domo do radar, sobre fundo transparente.' },
      'desenho-lado-direito': { title: 'Lado direito', alt: 'Desenho em linhas da BIA Radar vista exatamente de lado, pelo lado direito.' },
      'desenho-lado-direito-inclinado': { title: 'Lado direito, inclinada', alt: 'Desenho em linhas da BIA Radar vista de lado, pelo lado direito, inclinada cerca de 30 graus.' },
      'desenho-lado-esquerdo': { title: 'Lado esquerdo', alt: 'Desenho em linhas da BIA Radar vista exatamente de lado, pelo lado esquerdo, com o encaixe da bengala.' },
      'desenho-lado-esquerdo-inclinado': { title: 'Lado esquerdo, inclinada', alt: 'Desenho em linhas da BIA Radar vista de lado, pelo lado esquerdo, inclinada cerca de 30 graus.' },
      'desenho-tras-cima-direita': { title: 'De trás e de cima, pela direita', alt: 'Desenho em linhas da BIA Radar vista de trás e de cima, com os botões e o encaixe da bengala.' },
      'desenho-tras-cima-esquerda': { title: 'De trás e de cima, pela esquerda', alt: 'Desenho em linhas da BIA Radar vista de trás e de cima, pelo outro lado, com os botões e o encaixe da bengala.' },
      'desenho-ponta-cima': { title: 'De cima, pela outra ponta', alt: 'Desenho em linhas da BIA Radar vista de cima pela outra ponta, com os botões e o domo do radar.' },
    },
    download: 'Baixar',
    downloadAll: 'Baixar o kit completo (.zip)',
    downloadAllNote: 'Todos os arquivos, os créditos e os termos de uso, cerca de 4 MB.',
    dialog: {
      title: 'Antes de baixar',
      intro: 'Leia os termos de uso e informe seus dados. Eles ficam gravados nos arquivos que você baixar.',
      termsTitle: 'Termos de uso do kit de mídia da Neosenti',
      terms: [
        { h: '1. O que você pode fazer', p: 'Usar as imagens deste kit, sem custo, em conteúdo editorial, jornalístico, educacional ou acadêmico sobre a Neosenti e a BIA Radar, como matérias, artigos, livros, e-books, aulas e apresentações. Você pode redimensionar e recortar as imagens, desde que não mude o sentido delas.' },
        { h: '2. Créditos', p: 'O crédito é obrigatório, junto à imagem ou na página de créditos da publicação. Fotos: “Foto: Michelly Domiciano”. Imagens 3D e desenhos: “Imagem: Neosenti”.' },
        { h: '3. O que não é permitido', p: 'Usar as imagens em publicidade ou para promover outros produtos, serviços ou marcas; sugerir parceria, patrocínio ou endosso da Neosenti sem autorização por escrito; editar o produto ou as pessoas retratadas de forma enganosa; usar as pessoas retratadas fora do contexto da BIA Radar; vender, sublicenciar ou redistribuir os arquivos; usar as imagens para treinar modelos de inteligência artificial; registrar marcas, desenhos industriais ou patentes a partir delas.' },
        { h: '4. Propriedade', p: 'As fotos pertencem a Michelly Domiciano. As imagens 3D e os desenhos pertencem à Neosenti. BIA Radar e Neosenti são marcas da Neosenti. Esta autorização é gratuita, pessoal, não exclusiva e intransferível, e não transfere nenhum direito de propriedade.' },
        { h: '5. Revogação', p: 'A Neosenti pode revogar esta autorização a qualquer momento, por exemplo em caso de uso fora destes termos. Publicações feitas de acordo com os termos antes da revogação podem continuar no ar.' },
        { h: '6. Identificação dos arquivos', p: 'Para proteger os autores, cada arquivo baixado leva seu nome e e-mail nos metadados. Fotos e imagens 3D também recebem uma marca invisível ligada ao seu e-mail. Tudo isso é feito no seu navegador: seus dados não são enviados nem guardados pela Neosenti.' },
        { h: '7. Outros usos e dúvidas', p: 'Para usos comerciais, peças publicitárias ou qualquer caso não previsto aqui, escreva para contato@neosenti.com antes de publicar.' },
      ],
      version: 'Versão 1.0, outubro de 2026.',
      name: 'Nome completo',
      email: 'E-mail',
      accept: 'Li e aceito os termos de uso',
      submit: 'Aceitar e baixar',
      cancel: 'Cancelar',
      preparing: 'Preparando o arquivo…',
      done: 'Download iniciado.',
      error: 'Não foi possível preparar o arquivo. Tente de novo ou escreva para contato@neosenti.com.',
      invalid: 'Preencha nome completo e um e-mail válido e aceite os termos.',
      readmeTitle: 'LEIA-ME',
    },
  },

  notFound: {
    title: 'Esta página não existe.',
    text: 'O endereço pode ter mudado. A página inicial tem tudo sobre a Neosenti.',
    home: 'Ir para a página inicial',
  },
};

export default pt;
