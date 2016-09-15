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
    }, {
      name: 'Serena Fernandes',
      place: 'AvenueCode',
      tituloPalestra: 'Mulheres na Tecnologia',
      facebook: '',
      twitter: '',
      linkedin: '',
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
      name: 'Sérgio Rodrigues',
      place: 'Locaweb',
      tituloPalestra: 'Internet of Things: More software less hardware.',
      facebook: 'https://www.facebook.com/sergioaugrod',
      twitter: '',
      linkedin: 'https://www.linkedin.com/in/sergioaugrod',
      website: ' www.sergioaugrod.com.br',
      foto: 'sergioaugusto'
    },{
      name: 'Rodolfo Dias',
      place: 'Inatel',
      tituloPalestra: 'The Front-End Power',
      facebook: '',
      twitter: 'twitter.com/r_mdias',
      linkedin: '',
      website: '',
      foto: 'rodolfodias'
    },{
      name: 'Camila Bastos',
      place: 'UFLA',
      tituloPalestra: 'Compreensão de Software utilizando técnicas de visualização',
      facebook: 'https://www.facebook.com/camilabastoss',
      twitter: 'https://www.facebook.com/camilabastoss',
      linkedin: 'https://www.facebook.com/camilabastoss',
      website: 'https://www.facebook.com/camilabastoss',
      foto: 'camilabastos'
    }, {
      name: 'Paula Martucci',
      place: 'PerSolutio',
      tituloPalestra: 'Os pilares de carreira e assertividade',
      facebook: 'http://facebook.com/persolutio',
      twitter: 'http://facebook.com/persolutio',
      linkedin: 'https://www.linkedin.com/in/paula-martucci-512a0522?trk=nav_responsive_tab_profile',
      website: 'http://facebook.com/persolutio',
      foto: 'paulamartucci'
    }, {
      name: 'Guilherme Timóteo',
      place: 'Innervision',
      tituloPalestra: 'Quanto custaria limpar todas as janelas das residências de Lavras?',
      facebook: 'https://www.facebook.com/Innervision-Ltda-835402979878430/',
      twitter: 'https://www.linkedin.com/company/innervision-ltda?trk=biz-companies-cym',
      linkedin: 'https://br.linkedin.com/in/guilherme-timoteo-819037a',
      website: 'https://www.linkedin.com/company/innervision-ltda?trk=biz-companies-cym',
      foto: 'guilhermetimoteo'
    }, {
      name: 'Bruno Castro',
      place: 'CI&T',
      tituloPalestra: 'Projetando interfaces imersivas',
      facebook: 'brunocastro.me',
      twitter: 'brunocastro.me',
      linkedin: 'brunocastro.me',
      website: 'brunocastro.me',
      foto: 'brunocastro'
    }, {
      name: 'Vanessa Me Tonini',
      place: 'Lambda3',
      tituloPalestra: 'Métodos ágeis, desenvolvendo software com foco no que importa',
      facebook: 'https://www.facebook.com/vanessametonini ',
      twitter: 'vanessametonini.com.br',
      linkedin: 'https://br.linkedin.com/in/vanessametonini',
      website: 'vanessametonini.com.br',
      foto: 'vanessametonini'
    }, {
      name: 'Yan Magalhães Leite',
      place: 'mLearn',
      tituloPalestra: 'Testes pra que te quero',
      facebook: 'https://www.facebook.com/yaanmagalhaes ',
      twitter: 'https://twitter.com/yaanmagale',
      linkedin: 'https://br.linkedin.com/in/yanmagalhaes',
      website: '',
      foto: 'yanmagalhaes'
    },{
      name: 'Bárbara Oliveira',
      place: 'LEMAF',
      tituloPalestra: 'O papel do PO em times Scrum',
      facebook: 'https://br.linkedin.com/in/b%C3%A1rbara-oliveira-753077a3',
      twitter: 'https://br.linkedin.com/in/b%C3%A1rbara-oliveira-753077a3',
      linkedin: 'https://br.linkedin.com/in/b%C3%A1rbara-oliveira-753077a3',
      website: 'https://br.linkedin.com/in/b%C3%A1rbara-oliveira-753077a3',
      foto: 'barbaraoliveira'
    }, {
      name: 'Aline Antunes Dias',
      place: 'Equals',
      tituloPalestra: 'O papel do PO em times Scrum',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      foto: 'alineantunesdias'
    },  {
      name: 'Cesar Augusto Nogueira',
      place: 'Instituto de Pesquisas Eldorado',
      tituloPalestra: 'OpenSource Java',
      facebook: 'fb.com/cesarnog',
      twitter: '@cesarnogcps',
      linkedin: 'https://www.linkedin.com/in/cesarnog',
      website: 'http://cesarnogueira.me',
      foto: 'cesar'
    }, {
      name: 'Lucas Ricoy',
      place: 'Foxus',
      tituloPalestra: 'Desenvolvimento de Aplicativos Híbridos (Mobile/Desktop/Web)',
      facebook: 'facebook.com/lricoy',
      twitter: '@lricoy',
      linkedin: 'https://www.linkedin.com/#lricoy',
      website: 'medium.com/@lricoy',
      foto: 'lucasricoy'
    },{
      name: 'Vinicius Borrielo',
      place: 'UFLA',
      tituloPalestra: 'JavaScript: de onde veio, para onde vai',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      foto: 'vinicius'
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
      name: 'Guilherme Razgriz',
      place: '',
      tituloPalestra: '',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
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
      place: 'Atelier',
      tituloPalestra: 'Qt - O seu toolkit para C++ ou Python com o verdadeiro: Write once, deploys everywhere!',
      facebook: ' laysrodrigues147',
      twitter: '@lays147',
      linkedin: '',
      website: 'laysrodriguesdev.wordpress.com',
      foto: 'laysrodrigues'
    },  {
      name: 'Sérgio Cruz Passos',
      place: 'Take.net',
      tituloPalestra: 'Bots são os novos apps',
      facebook: 'facebook.com/spassos',
      twitter: '@scpassos',
      linkedin: 'linkedin.com/in/scpassos ',
      website: 'www.take.net',
      foto: 'sergiopassos'
    }, {
      name: 'André Curvello',
      place: 'PadTec S/A',
      tituloPalestra: 'Internet das Coisas com Linux Embarcado em Sistemas Híbridos - Dividir para conquistar, conectar e controlar',
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
      website: 'https://br.linkedin.com/in/daniela-gibertoni-8362a1100',
      foto: 'danielagibertoni'
    }, {
      name: 'Carlos Lauff',
      place: 'Class365',
      tituloPalestra: 'Desvendando o Azure: a nuvem da Microsoft',
      facebook: 'facebook.com/tiolauff ',
      twitter: '@callauff',
      linkedin: 'https://br.linkedin.com/in/carloslauff ',
      website: 'class365.com.br',
      foto: 'carloslauff'
    },  {
      name: 'Bruno Donizeti da Silva',
      place: 'UFLA',
      tituloPalestra: 'NoSQL: Bancos de dados de grafo e Neo4j',
      facebook: '',
      twitter: '',
      linkedin: 'https://br.linkedin.com/in/bdonizetisilva',
      website: '',
      foto: 'brunodonizeti'
    }, {
      name: 'Marlon da Silva',
      place: 'UFLA',
      tituloPalestra: 'NoSQL: Bancos de dados de grafo e Neo4j',
      facebook: '',
      twitter: '@marlondasilva',
      linkedin: '',
      website: 'http://lattes.cnpq.br/9331509602982993',
      foto: 'marlondasilva'
    }, {
      name: 'Ramon Gomes Costa',
      place: 'UFLA',
      tituloPalestra: 'NoSQL: Bancos de dados de grafo e Neo4j',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: 'http://lattes.cnpq.br/0161357943312722',
      foto: 'ramongomes'
    }, {
      name: 'Giancarlo Lacerda',
      place: 'Best - Marketing de Performance',
      tituloPalestra: 'Inteligência e Performance em marketing digital',
      facebook: ' http://www.facebook.com/giancarlo.almeidalacerda',
      twitter: '',
      linkedin: 'http://br.linkedin.com/in/giancarlolacerda',
      website: '',
      foto: 'giancarlolacerda'
    }, {
      name: 'Guilherme Seabra',
      place: 'PrimeCode',
      tituloPalestra: 'Mundo SAP - Carreira, Mercado, Oportunidades e Tecnologias',
      facebook: 'https://www.facebook.com/guilherme.maia.39',
      twitter: 'https://twitter.com/guilhermemaias1',
      linkedin: 'https://www.linkedin.com/in/guilherme-henrique-maia-seabra-6b9b4364?trk=nav_responsive_tab_profile',
      website: '',
      foto: 'guilhermeseabra'
    }
    , {
      name: 'Dilson Lucas Pereira',
      place: 'UFLA',
      tituloPalestra: 'Uma introdução ao VIM',
      facebook: '',
      twitter: '',
      linkedin: 'http://lattes.cnpq.br/2883103010094485',
      website: '',
      foto: 'dilson'
    }
  ];
});
