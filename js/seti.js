var seti = angular.module('seti', []);

/*
* 
*Caso o palestrante não tenha alguma das redes sociais, colocar alguma outra no lugar.
*Foto: colocar o nome da foto. A foto precisa estar no diretório: img/palestrantes
*/

seti.controller('setiController', function setiController($scope) {
  $scope.palestrantes = [
    {
      name: 'Ricardo Roquim',
      place: 'SYDLE',
      tituloPalestra: 'Boas práticas de usabilidade na web',
      twitter: 'http://twitter.com/',
      linkedin: 'https://www.linkedin.com/in/ricardoroquim',
      website: ' http://www.ricardoroquim.com.br/',
      foto: 'ricardoroquim',
      data: 'segunda'
    },{
      name: 'Serena Fernandes',
      place: 'AvenueCode',
      tituloPalestra: 'Mulheres na Tecnologia',
      facebook: 'https://www.facebook.com/serenafribeiro',
      twitter: '',
      linkedin: 'https://br.linkedin.com/in/imserena',
      website: '',
      foto: 'serenafernandes',
      data: 'terca'
    }, {
      name: 'Vicente de Luca',
      place: 'Zendesk',
      tituloPalestra: 'Do DCC-UFLA ao Vale do Silício - trajetória de um ex-canelada',
      facebook: '',
      twitter: '',
      linkedin: 'https://www.linkedin.com/in/vicente-de-luca-21728355',
      website: '',
      foto: 'vicentedeluca'
    },{
      name: 'Rubem Saldanha',
      place: 'Intel',
      tituloPalestra: 'A Internet das Coisas que eu posso criar',
      twitter: '',
      linkedin: '',
      website: ' ',
      foto: 'RubemSaldanha'
    },{
      name: 'André Paulovich',
      place: 'CI&T',
      tituloPalestra: 'A nova era da plataforma windows: o darwinismo digital',
      twitter: '',
      linkedin: '',
      website: '',
      foto: 'andrepaulovich'
    },{
      name: 'Rodolfo Dias',
      place: 'Inatel',
      tituloPalestra: 'The Front-End Power',
      facebook: '',
      twitter: 'http://twitter.com/r_mdias',
      linkedin: '',
      website: '',
      foto: 'rodolfodias'
    }, {
      name: 'Paula Martucci',
      place: 'PerSolutio',
      tituloPalestra: 'Os pilares de carreira e assertividade',
      facebook: 'http://facebook.com/persolutio',
      twitter: '',
      linkedin: 'https://www.linkedin.com/in/paula-martucci-512a0522?trk=nav_responsive_tab_profile',
      website: '',
      foto: 'paulamartucci'
    }, {
      name: 'Guilherme Timóteo',
      place: 'Innervision',
      tituloPalestra: 'Quanto custaria limpar todas as janelas das residências de Lavras?',
      facebook: 'https://www.facebook.com/Innervision-Ltda-835402979878430/',
      twitter: '',
      linkedin: 'https://br.linkedin.com/in/guilherme-timoteo-819037a',
      website: '',
      foto: 'guilhermetimoteo'
    },

     {
      name: 'Sérgio Rodrigues',
      place: 'Locaweb',
      tituloPalestra: 'Internet of Things: More software less hardware.',
      facebook: 'https://www.facebook.com/sergioaugrod',
      twitter: '',
      linkedin: 'https://www.linkedin.com/in/sergioaugrod',
      website: 'http://www.sergioaugrod.com.br',
      foto: 'sergioaugusto'
    },
    {
      name: 'Vanessa Me Tonini',
      place: 'Lambda3',
      tituloPalestra: 'Métodos ágeis, desenvolvendo software com foco no que importa',
      facebook: 'https://www.facebook.com/vanessametonini ',
      twitter: '',
      linkedin: 'https://br.linkedin.com/in/vanessametonini',
      website: 'vanessametonini.com.br',
      foto: 'vanessametonini'
    }, 

  {
      name: 'Julio Farah',
      place: 'ThoughtWorks',
      tituloPalestra: 'Atacando code smells para melhorar a qualidade do seu código',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      foto: 'juliofarah',
      data: ''
    },  {
      name: 'Samir Salim',
      place: 'ThoughtWorks',
      tituloPalestra: 'Sua carreira não precisa ser desenhada com uma régua',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      foto: 'samirsalim',
      data: ''
    },
    {
      name: 'David Robert',
      place: 'Elo7',
      tituloPalestra: 'Times de Alta Performance',
      twitter: 'https://twitter.com/while42',
      linkedin: 'http://linkedin.com/in/davidrobert',
      resumo: 'Como a influência da cultura na constante evolução de cada integrante e na constante evolução da empresa pode refletir no desenvolvimento de times de alta performance. Os principais desafios que o Elo7 teve que lidar para crescer em mais de 10 vezes o tamanho dos times da engenharia mantendo a produtividade e um excelente ambiente de trabalho. Bibliografia:',
      website: 'http://www.slideshare.net/while42',
      foto: 'davidrobert'
    },
         {
      name: 'Gustavo Lopes',
      place: 'ProGolden / GDG Lavras',
      tituloPalestra: 'Introdução a ReactJS',
      facebook: 'www.facebook.com/gustavo.lopes.501',
      twitter: 'http://twitter.com/gudominguete',
      linkedin: 'https://www.linkedin.com/in/gudominguete',
      website: 'https://github.com/gudominguete',
      foto: 'gustavodominguete'
    },{
      name: 'Yan Magalhães Leite',
      place: 'mLearn',
      tituloPalestra: 'Testes pra que te quero',
      facebook: 'https://www.facebook.com/yaanmagalhaes ',
      twitter: 'https://twitter.com/yaanmagale',
      linkedin: 'https://br.linkedin.com/in/yanmagalhaes',
      website: '',
      foto: 'yanmagalhaes'
    },

{
      name: 'Thiago Almeida',
      place: 'Progolden / GDG Lavras',
      tituloPalestra: 'Comunidades GDG e as ferramentas Google para gerar o seu negócio',
      facebook: 'http://facebook.com/southiago ',
      twitter: 'http://twitter.com/althi',
      linkedin: 'https://br.linkedin.com/in/carloslauff ',
      website: 'http://thiagoam.com.br',
      foto: 'thiagoalmeidamarques'
    },  

    {
      name: 'Bárbara Oliveira',
      place: 'Lemaf',
      tituloPalestra: 'O papel do PO em times Scrum',
      facebook: '',
      twitter: '',
      linkedin: 'https://br.linkedin.com/in/b%C3%A1rbara-oliveira-753077a3',
      website: '',
      foto: 'barbaraoliveira'
    }, {
      name: 'Aline Antunes Dias',
      place: 'Equals',
      tituloPalestra: 'O papel do PO em times Scrum',
      facebook: '',
      twitter: '',
      linkedin: 'https://br.linkedin.com/in/alineantunesdias',
      website: '',
      foto: 'alineantunesdias'
    },  {
      name: 'Cesar Augusto Nogueira',
      place: 'Instituto de Pesquisas Eldorado',
      tituloPalestra: 'OpenSource Java (palestra) e Android Wear (workshop)',
      facebook: 'http://fb.com/cesarnog',
      twitter: 'http://twitter.com/cesarnogcps',
      linkedin: 'https://www.linkedin.com/in/cesarnog',
      website: 'http://cesarnogueira.me',
      foto: 'cesar'
    }, {
      name: 'Lucas Ricoy',
      place: 'Foxus',
      tituloPalestra: 'Desenvolvimento de Aplicativos Híbridos (Mobile/Desktop/Web)',
      facebook: 'facebook.com/lricoy',
      twitter: 'http://twitter.com/lricoy',
      linkedin: 'https://www.linkedin.com/#lricoy',
      website: 'medium.com/@lricoy',
      foto: 'lucasricoy'
    }, {
      name: 'Vinícius Borriello',
      place: 'UFLA',
      tituloPalestra: 'JavaScript: de onde veio, para onde vai',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: 'http://vinicius.borriello.com.br',
      foto: 'viniciusborrielo'
    }, {
      name: 'Camilla Santos',
      place: '7COMm',
      tituloPalestra: 'Tornando-se um DevOps sem perder a cabeça',
      facebook: '',
      twitter: '',
      linkedin: 'https://www.linkedin.com/in/camillagds',
      website: 'http://slideshare.net/lobinhaxd',
      foto: 'camillagomes'
    },

    {
      name: 'Camila Bastos',
      place: 'UFLA',
      tituloPalestra: 'Compreensão de Software utilizando técnicas de visualização',
      facebook: 'https://www.facebook.com/camilabastoss',
      twitter: '',
      linkedin: '',
      website: '',
      foto: 'camilabastos'
    },
    {
      name: 'Guilherme Razgriz',
      place: 'Cria Livre',
      tituloPalestra: '4 Técnicas para entregar uma protese em 4 dias! ',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: 'http://razgrizbox.tumblr.com',
      foto: 'razgriz'
    },  {
      name: 'Guilherme Vasconcelos',
      place: 'Inttelix Brasil',
      tituloPalestra: 'Metodologia ágil (SCRUM): Inovação e Satisfação do cliente.',
      facebook: 'https://www.facebook.com/gvasconcelos2',
      twitter: '',
      linkedin: 'https://br.linkedin.com/in/guilherme-vasconcelos-742a4238',
      website: 'www.hmƒbautomcao.com.br',
      foto: 'breve',
      website: 'www.hmbautomcao.com.br',
      foto: 'vasconcelos'
    }, {
      name: 'Venícios Gustavo Santos',
      place: 'Lemaf',
      tituloPalestra: 'Quero ser analista de requisitos ou negócios. Por onde eu começo?',
      facebook: 'https://www.facebook.com/veniciosgustavo ',
      twitter: '',
      linkedin: 'https://br.linkedin.com/in/venicios',
      website: '',
      foto: 'venicios'
    }, {
      name: 'Lays Rodrigues Silva',
      place: 'KDE',
      tituloPalestra: 'Qt - O seu toolkit para C++ ou Python com o verdadeiro: Write once, deploys everywhere!',
      facebook: ' laysrodrigues147',
      twitter: 'http://twitter.com/lays147',
      linkedin: '',
      website: 'laysrodriguesdev.wordpress.com',
      foto: 'laysrodrigues'
    },  {
      name: 'Sérgio Cruz Passos',
      place: 'Take.net',
      tituloPalestra: 'Bots são os novos apps',
      facebook: 'facebook.com/spassos',
      twitter: 'http://twitter.com/scpassos',
      linkedin: 'linkedin.com/in/scpassos ',
      website: 'www.take.net',
      foto: 'sergiopassos'
    }, {
      name: 'André Curvello',
      place: 'PadTec S/A',
      tituloPalestra: 'Sistemas Embarcados Híbridos - Processamento assimétrico como pilar da computação ubíqua',
      facebook: 'http://www.facebook.com/profandrecurvello',
      twitter: 'https://twitter.com/andremlcurvello',
      linkedin: 'https://br.linkedin.com/pub/andr-curvello/24/339/b03',
      website: 'http://andrecurvello.com.br/',
      foto: 'andrecurvelo'
    },  {
      name: 'Daniela Gibertoni',
      place: 'Fatec Taquaritinga',
      tituloPalestra: 'UX Design - A Experiência do Usuário ',
      facebook: '',
      twitter: '',
      linkedin: 'https://br.linkedin.com/in/daniela-gibertoni-8362a1100',
      website: '',
      foto: 'danielagibertoni'
    }, {
      name: 'Carlos Lauff',
      place: 'Class365',
      tituloPalestra: 'Desvendando o Azure: a nuvem da Microsoft',
      facebook: 'http://facebook.com/tiolauff ',
      twitter: 'http://twitter.com/callauff',
      linkedin: 'https://br.linkedin.com/in/carloslauff ',
      website: 'http://class365.com.br',
      foto: 'carloslauff'
    },  
    {
      name: 'Bruno Donizeti da Silva',
      place: 'UFLA',
      tituloPalestra: 'NoSQL: Bancos de dados de grafo e Neo4j',
      facebook: '',
      twitter: '',
      linkedin: 'https://br.linkedin.com/in/bdonizetisilva',
      website: '',
      foto: 'brunodonizeti'
    }, {
      name: 'Ramon Gomes Costa',
      place: 'UFLA',
      tituloPalestra: 'NoSQL: Bancos de dados de grafo e Neo4j',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      foto: 'ramongomes'
    },  {
      name: 'Giancarlo Lacerda',
      place: 'Best - Marketing de Performance',
      tituloPalestra: 'Inteligência e Performance em marketing digital',
      facebook: ' http://www.facebook.com/giancarlo.almeidalacerda',
      twitter: '',
      linkedin: 'http://br.linkedin.com/in/giancarlolacerda',
      website: '',
      foto: 'giancarlolacerda2'
    },  {
      name: 'Matheus Nogueira',
      place: 'Comp Júnior / Lemaf',
      tituloPalestra: 'Desenvolvimento de software usando Git',
      facebook: ' https://www.facebook.com/mathnogueir',
      twitter: '',
      linkedin: 'https://br.linkedin.com/in/matheusnogueira',
      website: 'https://github.com/mathnogueira/',
      foto: 'matheusnogueira'
    }, 
     {
      name: 'Dilson Lucas Pereira',
      place: 'UFLA',
      tituloPalestra: 'Uma introdução ao VIM',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      foto: 'dilson'
    }, 
      
     {
      name: 'Vinicius Borges',
      place: 'UFLA',
      tituloPalestra: 'Preparando documentos utilizando LaTeX',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: 'http://viniciusrpb.byethost6.com',
      foto: 'viniciusborges'
    }, 
     {
      name: 'André Grützmann',
      place: 'UFLA',
      tituloPalestra: 'Mesa-redonda: Participação Social Eletrônica',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      foto: 'andreg'
    }, 
    {
      name: 'Gabriela Santiago',
      place: 'UFLA',
      tituloPalestra: 'Tópicos em bancos de dados NoSQL – In-memory databases e Redis',
      facebook: '',
      twitter: '',
      linkedin: 'https://br.linkedin.com/in/gabriela-aparecida-santiago',
      website: '',
      foto: 'gabrielasantiago'
    }, 

    {
      name: 'Gustago Freitas',
      place: 'UFLA',
      tituloPalestra: 'Tópicos em bancos de dados NoSQL – In-memory databases e Redis',
      facebook: 'https://www.facebook.com/gustavodifrafre',
      twitter: '',
      linkedin: '',
      website: '',
      foto: 'gustavofreitas'
    }, {
      name: 'Inbatec / Empreende UFLA',
      place: 'UFLA',
      tituloPalestra: 'Parque Tecnonógico, e pitchs de 5 startups de sucesso de Lavras.',
      facebook: 'https://www.facebook.com/inbatecufla/?fref=ts',
      twitter: '',
      linkedin: '',
      website: 'www.inbatec.ufla.br',
      foto: 'empreende'
    },
     {
      name: 'JavaGroup',
      place: 'UFLA',
      tituloPalestra: 'Uma aplicação web rápida utilizando JSP e Hibernate',
      facebook: 'http://professores.dcc.ufla.br/~terra/javagroup/',
      twitter: 'http://professores.dcc.ufla.br/~terra/javagroup/',
      linkedin: 'http://professores.dcc.ufla.br/~terra/javagroup/',
      website: 'http://professores.dcc.ufla.br/~terra/javagroup/',
      foto: 'javagroup'
    },

         {
      name: 'Luiz Augusto G. Costa',
      place: 'Lemaf',
      tituloPalestra: 'Onde você está? Transformando a posição das pessoas em dinheiro.',
      facebook: '',
      twitter: '',
      resumo: 'Como o Google, Foursquare e o Facebook utilizam o seu celular para fornecer melhores propagandas. Uma introdução ao tratamento de informação espacial e geomarketing.',
      linkedin: '',
      website: '',
      hora:'19h30PM',
      alinhamento:'timeline-inverted',
      foto: 'luiz',
      tipo:'Palestra'
    },

        {
      name: 'Matheus Haddad',
      place: 'Instituto Haddad',
      tituloPalestra: 'Startup: criando novos negócios inovadores',
      facebook: '',
      twitter: '',
      linkedin: 'https://www.linkedin.com/in/matheushaddad',
      website: '',
      resumo: 'O Product Owner (PO) é o ponto central do projeto ágil e é quem exerce a liderança sobre o produto que está sendo desenvolvido. Durante a palestra serão apresentadas quais as suas responsabilidades, os artefatos que o mesmo deve gerir, as características necessárias para ser um bom Product Owner e os desafios encontrados ao exercer este papel.',
      hora:'9PM',
      alinhamento:'timeline-inverted',
      foto: 'matheushaddad',
      tipo:'Palestra'
    },


      {
      name: 'Luiz Gonzada',
      place: 'Inovacafé',
      tituloPalestra: 'Para empreender é só começar: da ideia até os primeiros clientes',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      resumo: 'Apresentação do Parque Tecnológico de Lavras e da Incubadora de Base Tecnológica da UFLA - Inbatec pelo seu coordenador, o Professor Luiz Gonzaga de Castro Junior. Apresentação, em formato de um pitch, das startups convidadas (Mitah, TBIT,Bece Gourmet, DeepNautilus, Even3). ',
      hora:'7PM',
      alinhamento:'timeline-inverted',
      foto: 'luizgonzaga',
      tipo:'Palestra'
    },

        {
      name: 'Marcelo Pimenta',
      place: 'Laboratorium',
      tituloPalestra: ' Inovação e o Ecossistema de Startups',
      facebook: '',
      twitter: '',
      linkedin: '',
      resumo: 'Marcelo Pimenta abordará em sua palestra o tema: Inovação e o Ecossistema de Startups. Em seguida, um painel sobre o Ecossistema Inovador e seus Atores, com a participação de: Carla Leite  (SEED), Benício José de Oliveira Filho  - Investidor Anjo (São Bernardo do Campo) , João Drumond (San Pedro Valley), Tiago de Almeida Pinto (MDIC)/ DIC fecha parceria com o Porto Digital para levar empresas ao Vale do Silício, Alain Marques (Varginha) abordará o tema: Universidade x Empresa.',
      website: '',
      hora:'3PM',
      alinhamento:'timeline-inverted',
      foto: 'marcelopimenta',
      tipo:'Palestra'
    },

            {
      name: 'Guilherme Borges',
      place: 'Progolden',
      tituloPalestra: ' Mesa-redonda: Participação Social Eletrônica',
      facebook: ' www.facebook.com/guilhermeborges91',
      twitter: ' www.facebook.com/guilhermeborges91',
      linkedin: 'https://br.linkedin.com/in/guilherme-borges-73322281',
      website: 'http://lattes.cnpq.br/7246743939514758',
      foto: 'guilhermeborges',
      tipo:'Palestra'
    },

            {
      name: 'Rodrigo Couto',
      place: 'Arbitrare',
      tituloPalestra: ' Mesa-redonda: Participação Social Eletrônica',
      facebook: '',
      twitter: '',
      linkedin: '',
       website: '',
      alinhamento:'timeline-inverted',
      foto: 'rodrigocouto',
      tipo:'Palestra'
    },

  ];
});
