var programacao = angular.module('programacao', []);

/*
* 
*Caso o palestrante não tenha alguma das redes sociais, colocar alguma outra no lugar.
*Foto: colocar o nome da foto. A foto precisa estar no diretório: img/palestrantes
*/

programacao.controller('programacaoController', function programacaoController($scope) {
  $scope.segunda = [
    {
      name: 'Departamento de Ciência da Computação',
      place: 'UFLA',
      tituloPalestra: 'Credenciamento',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      foto: 'seti',
      hora: '8AM',
      resumo: '',
      alinhamento:''
    },

    {
      name: 'Comissão Organizadora',
      place: 'AvenueCode',
      tituloPalestra: 'Abertura',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      foto: 'seti',
      hora: '10AM',
      resumo: '',
      alinhamento:'timeline-inverted'
    },

    {
      name: 'Serena Fernandes',
      place: 'AvenueCode',
      tituloPalestra: 'Mulheres na Tecnologia',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      foto: 'serenafernandes',
      hora: '11AM',
      resumo: 'O principal objetivo desta palestra é a desconstrução. Vamos entender o quão importante é ter um ambiente diverso e como podemos tê-lo. Cada um de nós tem um papel importante nas escolhas e no desenvolvimento pessoal e profissional de todos aqueles que conhecemos. Vamos aprender a incentivar, apoiar e principalmente a respeitar as diferenças para usufruir de um ambiente cada vez mais colaborativo.'
    },

    {
      name: 'Lucas Ricoy',
      place: 'Foxus',
      tituloPalestra: 'Desenvolvimento de Aplicativos Híbridos (Mobile/Desktop/Web)',
      facebook: 'facebook.com/lricoy',
      twitter: '@lricoy',
      linkedin: 'https://www.linkedin.com/#lricoy',
      website: 'medium.com/@lricoy',
      foto: 'lucasricoy',
      hora: '1PM',
      resumo: 'Essa palestra tem por objetivo apresentar a abordagem de desenvolvimento de aplicativos híbridos, suas vantagens e desvantagens e mostrar um protótipo funcional que utilizando do mesmo código fonte,   será capaz de ser distribuído para sistemas Desktop tradicionais (Linux, Windows, Mac),  dispositivos móveis (iOS, Android, Windows Phone) ou como um site na web sem alterações em suas camadas internas,   mudando apenas a forma de apresentação em cada plataforma, quando necessário.',
      alinhamento:'timeline-inverted'
    }, 

    {
      name: 'Camila Bastos',
      place: 'UFLA',
      tituloPalestra: 'Compreensão de Software utilizando técnicas de visualização',
      facebook: 'https://www.facebook.com/camilabastoss',
      twitter: 'https://www.facebook.com/camilabastoss',
      linkedin: 'https://www.facebook.com/camilabastoss',
      website: 'https://www.facebook.com/camilabastoss',
      foto: 'camilabastos',
      hora:'1PM'
    }, 

    {
      name: 'Guilherme Razgriz',
      place: '',
      tituloPalestra: 'Minicurso',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      foto: 'razgriz',
      hora:'1PM',
      alinhamento:'timeline-inverted'
    }, 

    {
      name: 'Serena Fernandes',
      place: 'AvenueCode',
      tituloPalestra: 'Metodologias Ágeis (Workshop)',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      foto: 'serenafernandes',
      hora: '2PMM',
      resumo: 'Vamos falar um pouco sobre Metodologias Ágeis, numa abordagem prática vamos entender onde vivem, o que comem e como se reproduzem os times ágeis. Vamos ser conhecedores das manhas e dos paranauês das metodologias ágeis e saber como atuar em um time ágil. E se você acha que ser ágil significa ser rápido, vou te provar que você está mais que errado(a)!'
    },

    {
      name: 'Lays Rodrigues Silva',
      place: 'Atelier',
      tituloPalestra: 'Qt - O seu toolkit para C++ ou Python com o verdadeiro: Write once, deploys everywhere!',
      facebook: ' laysrodrigues147',
      twitter: '@lays147',
      linkedin: '',
      website: 'laysrodriguesdev.wordpress.com',
      foto: 'laysrodrigues',
      hora: '3PM',
      alinhamento:'timeline-inverted',
      resumo:'Qt é um dos melhores frameworks que eu já usei para desenvolvimento de software. Com toda a tecnologia e poder colocados nessa ferramenta, você realmente consegue facilitar o desenvolvimento de qualquer software, seja usando a abstração de sistema que o Qt proporciona ou em desenvolvimento ágil de iterfaces: simples, leves e flexíveis. Nesta palestra eu apresentarei para você um pouquinho do poder que o Qt pode te dar no desenvolvimento do seu software. Você pode não conhecer Qt, mas é bem provavel que você já usou algum software que foi construído com ele.'
    }, 

    {
      name: 'Paula Martucci',
      place: 'PerSolutio',
      tituloPalestra: 'Os pilares de carreira e assertividade',
      facebook: 'http://facebook.com/persolutio',
      twitter: 'http://facebook.com/persolutio',
      linkedin: 'https://www.linkedin.com/in/paula-martucci-512a0522?trk=nav_responsive_tab_profile',
      website: 'http://facebook.com/persolutio',
      foto: 'paulamartucci',
      hora: '17PM',
      resumo: 'Currículo, cursos, certificações, idiomas, todos estes fatores são muito importantes, claro. Mas a base desta palestra está fundamentada no desenvolvimento humano e de como colocar todos estes requisitos em prática. As bases do trabalho estão ligadas aos 4 pilares do desenvolvimento: análise e crítica, interação, contribuição e transformação. Ou seja, "o que" se tem como requisito é o motor da máquina, mas "o como" se usa essa máquina, é o combustível e o passaporte para novas oportunidades. A assertividade como quinto elemento será o termômetro de como usamos nossa maturidade emocional para alavancar a carreira e os relacionamentos. O autoconhecimento é o primeiro passo pra se desenvolver nestes pilares. Trabalhar com missão, propósito e felicidade trará direção e apoio na tomada de decisão. Então, se quer ir para a guerra do mercado e da concorrência, precisa saber as armas que tem e o que fazer com elas.',
    }, 

    {
      name: 'Guilherme Razgriz',
      place: '',
      tituloPalestra: '',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      foto: 'razgriz',
      hora:'7h30PM',
      alinhamento:'timeline-inverted'
    }, 

    {
      name: 'Venícios Gustavo Santos',
      place: 'Lemaf',
      tituloPalestra: 'Quero ser analista de requisitos ou negócios. Por onde eu começo?',
      facebook: 'https://www.facebook.com/veniciosgustavo ',
      twitter: '',
      linkedin: 'https://br.linkedin.com/in/venicios',
      website: '',
      foto: 'venicios',
      hora:'9PM',
      resumo:'Para aqueles acadêmicos que estão na expectativa de ir em busca de uma oportunidade no mercado de trabalho. A palestra "Quero ser analista de requisitos ou negócios. Por onde eu começo?" tem o intuito de nortear aqueles que vislumbram essas competências, assim venho compartilhar minhas experiências em todo território nacional e inclusive internacionais.',
    }
  ];

$scope.terca = [
    {
      name: 'Guilherme Seabra',
      place: 'PrimeCode',
      tituloPalestra: 'Mundo SAP - Carreira, Mercado, Oportunidades e Tecnologias',
      facebook: 'https://www.facebook.com/guilherme.maia.39',
      twitter: 'https://twitter.com/guilhermemaias1',
      linkedin: 'https://www.linkedin.com/in/guilherme-henrique-maia-seabra-6b9b4364?trk=nav_responsive_tab_profile',
      website: '',
      foto: 'guilhermeseabra'
    },

    {
      name: 'Sérgio Cruz Passos',
      place: 'Take.net',
      tituloPalestra: 'Bots são os novos apps',
      facebook: 'facebook.com/spassos',
      twitter: '@scpassos',
      linkedin: 'linkedin.com/in/scpassos ',
      website: 'www.take.net',
      foto: 'sergiopassos'
    }, 

    {
      name: 'Ricardo Roquim',
      place: 'SYDLE',
      tituloPalestra: 'Boas práticas de usabilidade na web',
      twitter: 'http://twitter.com/',
      linkedin: 'https://www.linkedin.com/in/ricardoroquim',
      website: ' http://www.ricardoroquim.com.br/',
      foto: 'ricardoroquim',
      data: 'segunda'
    },

    {
      name: 'Guilherme Timóteo',
      place: 'Innervision',
      tituloPalestra: 'Quanto custaria limpar todas as janelas das residências de Lavras?',
      facebook: 'https://www.facebook.com/Innervision-Ltda-835402979878430/',
      twitter: 'https://www.linkedin.com/company/innervision-ltda?trk=biz-companies-cym',
      linkedin: 'https://br.linkedin.com/in/guilherme-timoteo-819037a',
      website: 'https://www.linkedin.com/company/innervision-ltda?trk=biz-companies-cym',
      foto: 'guilhermetimoteo'
    },

    {
      name: 'André Curvello',
      place: 'PadTec S/A',
      tituloPalestra: 'Internet das Coisas com Linux Embarcado em Sistemas Híbridos - Dividir para conquistar, conectar e controlar',
      facebook: 'http://www.facebook.com/profandrecurvello',
      twitter: 'https://twitter.com/andremlcurvello',
      linkedin: 'https://br.linkedin.com/pub/andr-curvello/24/339/b03',
      website: 'http://andrecurvello.com.br/',
      foto: 'andrecurvelo'
    }
];

$scope.quarta = [
    {
      name: '',
      place: '',
      tituloPalestra: '',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      foto: 'breve'
    },

    {
      name: '',
      place: '',
      tituloPalestra: '',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      foto: 'breve'
    },

    {
      name: '',
      place: '',
      tituloPalestra: '',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      foto: 'breve'
    },

    {
      name: '',
      place: '',
      tituloPalestra: '',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      foto: 'breve'
    },

    {
      name: '',
      place: '',
      tituloPalestra: '',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      foto: 'breve'
    },
];

$scope.quinta = [
    {
      name: '',
      place: '',
      tituloPalestra: '',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      foto: 'breve'
    },

    {
      name: '',
      place: '',
      tituloPalestra: '',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      foto: 'breve'
    },

    {
      name: '',
      place: '',
      tituloPalestra: '',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      foto: 'breve'
    },

    {
      name: '',
      place: '',
      tituloPalestra: '',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      foto: 'breve'
    },

    {
      name: '',
      place: '',
      tituloPalestra: '',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      foto: 'breve'
    },
];

$scope.sexta = [
    {
      name: '',
      place: '',
      tituloPalestra: '',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      foto: 'breve'
    },

    {
      name: '',
      place: '',
      tituloPalestra: '',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      foto: 'breve'
    },

    {
      name: '',
      place: '',
      tituloPalestra: '',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      foto: 'breve'
    },

    {
      name: '',
      place: '',
      tituloPalestra: '',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      foto: 'breve'
    },

    {
      name: '',
      place: '',
      tituloPalestra: '',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      foto: 'breve'
    },
];

});