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
      resumo: 'O credenciamento será realizado no pátio do Departamento de Ciência da Computação (DCC) e é obrigatório para todos os participantes a realização do credenciamento, retirando a credencial de acesso e o material do evento.',
      alinhamento:'',
      tipo:'Palestra'
    },

    {
      name: 'Comissão Organizadora',
      place: 'SETI',
      tituloPalestra: 'Abertura: A Semana de Tecnologia da Informação 2016',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      foto: 'seti',
      hora: '10AM',
      resumo: 'A Semana de Tecnologia da Informação (SETI) é um evento que ocorre anualmente no Departamento de Ciência da Computação (DCC) da Universidade Federal de Lavras (UFLA) e já pode ser considerado um dos maiores eventos de tecnologia do Sul de Minas.',
      alinhamento:'timeline-inverted',
      tipo:'Palestra'
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
      tipo:'Palestra',
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
      tipo:'Palestra',
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
      tipo:'Workshop',
      resumo: 'A compreensão consiste na obtenção do conhecimento de diferentes características de sistemas de software e é considerada um dos requisitos para execução de atividades relacionadas ao desenvolvimento e manutenção. No entanto, compreender essas características não é uma tarefa trivial devido a quantidade significativa de informações geradas ao longo do ciclo de vida e evolução do software. Técnicas de visualização de software têm sido amplamente utilizadas para apresentar essas informações e facilitar o processo de compreensão. Dessa forma, o objetivo deste minicurso é oferecer uma visão geral da área de visualização de software, apontando como as técnicas de visualização podem ser aplicadas e quais atributos dos sistemas software podem ser representados visualmente. ',
      hora:'1PM'
    }, 

    {
      name: 'Guilherme Razgriz',
      place: '',
      tituloPalestra: 'Modelagem de proteses e gerenciamento de impressoras 3d',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      resumo: 'Neste pequeno treinamento os participantes serão apresentados a diversas técnicas de modelagem 3d com presição além do correto manuseio de uma impressora 3d carteziana. ',
      foto: 'razgriz',
      hora:'1PM',
      tipo:'Workshop',
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
      tipo:'Workshop',
      hora: '2PM',
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
      tipo:'Palestra',
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
      hora: '5PM',
      tipo:'Palestra',
      resumo: 'Currículo, cursos, certificações, idiomas, todos estes fatores são muito importantes, claro. Mas a base desta palestra está fundamentada no desenvolvimento humano e de como colocar todos estes requisitos em prática. As bases do trabalho estão ligadas aos 4 pilares do desenvolvimento: análise e crítica, interação, contribuição e transformação. Ou seja, "o que" se tem como requisito é o motor da máquina, mas "o como" se usa essa máquina, é o combustível e o passaporte para novas oportunidades. A assertividade como quinto elemento será o termômetro de como usamos nossa maturidade emocional para alavancar a carreira e os relacionamentos. O autoconhecimento é o primeiro passo pra se desenvolver nestes pilares. Trabalhar com missão, propósito e felicidade trará direção e apoio na tomada de decisão. Então, se quer ir para a guerra do mercado e da concorrência, precisa saber as armas que tem e o que fazer com elas.',
    }, 

    {
      name: 'Guilherme Razgriz',
      place: '',
      tituloPalestra: '4 Técnicas para entregar uma protese em 4 dias!',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      foto: 'razgriz',
      tipo:'Palestra',
      hora:'7h30PM',
      resumo: 'Nesta palestra será estudado o Case da adaptação da protese E-NABLE Phoenix 2 em um paciente com amputação severa da mão esquerda utilizando o Blender e uma Impressora 3d .',
      alinhamento:'timeline-inverted'
    }, 

    {
      name: 'Minicurso GDG',
      place: '',
      tituloPalestra: 'Em breve',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      hora:'7:30PM',
      alinhamento:'',
      tipo:'Workshop',
      foto: 'breve'
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
      tipo:'Palestra',
      hora:'9PM',
      alinhamento:'timeline-inverted',
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
      hora:'8AM',
      alinhamento:'',
      resumo: 'Oque é SAP/ Módulos SAP Funcional / Tecnologias SAP / Como ingressar no mundo SAP/ SAP Hana / Futuro SAP / Carreiras / Comunidade SCN.',
      foto: 'guilhermeseabra',
      tipo:'Palestra'
    },

    {
      name: 'Vinicius Borges',
      place: '',
      tituloPalestra: 'Minicurso: Em breve',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      resumo: '',
      hora:'8AM',
      alinhamento:'timeline-inverted',
      foto: 'breve',
      tipo:'Workshop'
    },

    {
      name: 'Sérgio Cruz Passos',
      place: 'Take.net',
      tituloPalestra: 'Bots são os novos apps',
      facebook: 'facebook.com/spassos',
      twitter: '@scpassos',
      linkedin: 'linkedin.com/in/scpassos ',
      website: 'www.take.net',
      hora:'10AM',
      resumo: 'Apresentar a tendência atual de desenvolvimento de aplicativos através de bots dentro de apps de mensagens. Bots são robôs de software construídos a partir de tecnologias como processamento de linguagem natural, aprendizagem de máquina e inteligência artificial, que permitem que as pessoas consumam produtos e serviços sem a necessidade de instalação de um novo app. O que esta nova tendência de mercado vai representar para Devs, UXs e UIs?',
      alinhamento:'',
      foto: 'sergiopassos',
      tipo:'Palestra'
    }, 

    {
      name: 'Ricardo Roquim',
      place: 'SYDLE',
      tituloPalestra: 'Boas práticas de usabilidade na web',
      twitter: 'http://twitter.com/',
      linkedin: 'https://www.linkedin.com/in/ricardoroquim',
      website: ' http://www.ricardoroquim.com.br/',
      foto: 'ricardoroquim',
      resumo: 'O que é usabilidade e seus princípios básicos aplicados ao desenvolvimento de sistemas web amigáveis aos usuários.',
      hora:'1PM',
      alinhamento:'timeline-inverted',
      tipo:'Palestra'
    },

       {
      name: 'breve',
      place: '',
      tituloPalestra: 'Em breve',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      resumo: '',
      hora:'3PM',
      alinhamento:'',
      foto: 'breve',
      tipo:'Palestra'
    },

    {
      name: 'Inbatec',
      place: '',
      tituloPalestra: 'Em breve',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      resumo: '',
      hora:'3PM',
      alinhamento:'timeline-inverted',
      foto: 'breve',
      tipo:'Palestra'
    },

    {
      name: 'Guilherme Timóteo',
      place: 'Innervision',
      tituloPalestra: 'Quanto custaria limpar todas as janelas das residências de Lavras?',
      facebook: 'https://www.facebook.com/Innervision-Ltda-835402979878430/',
      twitter: 'https://www.linkedin.com/company/innervision-ltda?trk=biz-companies-cym',
      linkedin: 'https://br.linkedin.com/in/guilherme-timoteo-819037a',
      website: 'https://www.linkedin.com/company/innervision-ltda?trk=biz-companies-cym',
      resumo: 'Abordaremos as questões práticas que ocorrem no ambiente corporativo quando tentamos implantar um processo de análise de dados.  Será uma ótima oportunidade para aqueles que estão estudando ou tem interesse em algum tema relacionado com a ciência de dados aplicada de forma prática no mundo corporativo. Ah, também será uma oportunidade incrível para aqueles que querem saber tudo sobre limpeza avançada de janelas.',
      hora:'5PM',
      alinhamento:'',
      tipo:'Palestra',
      foto: 'guilhermetimoteo'
    },

      {
      name: 'Breve',
      place: '',
      tituloPalestra: 'Breve',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      resumo: '',
      hora:'7:30PM',
      alinhamento:'timeline-inverted',
      foto: 'breve',
      tipo:'Palestra'
    },

    {
      name: 'Dilson Lucas Pereira',
      place: '',
      tituloPalestra: 'Minicurso: Uma introdução ao VIM',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      resumo: 'Este minicurso irá apresentar algumas funcionalidades básicas para a utilização do editor de texto VIM para a atividade de programação. O VIM é um editor de texto open-source muito poderoso, com diversas funcionalidades específicas para tornar mais eficientes as tarefas corriqueiras de edição de código. Além disso, vários aspectos do editor podem ser configurados para adequá-lo às necessidades específicas de cada programador.',
      hora:'7:30PM',
      alinhamento:'',
      foto: 'dilson',
      tipo:'Workshop'
    },

    {
      name: 'André Curvello',
      place: 'PadTec S/A',
      tituloPalestra: 'Sistemas Embarcados Híbridos - Processamento assimétrico como pilar da computação ubíqua',
      facebook: 'http://www.facebook.com/profandrecurvello',
      twitter: 'https://twitter.com/andremlcurvello',
      linkedin: 'https://br.linkedin.com/pub/andr-curvello/24/339/b03',
      website: 'http://andrecurvello.com.br/',
      resumo: 'Com o advento de novos e modernos Sistemas em Chip (SoC), hoje é possível ter um computador completo ocupando o tamanho de um pente de memória. E em se tratando de Internet das Coisas, é um formidável aliado no desenvolvimento de equipamentos capazes de captar, processar e transmitir dados pela rede. Como se não bastasse, também é possível ter sistemas com a topologia híbrida - operando com tarefas de alto e baixo nível. Todavia, utilizar de tais tecnologias exige o conhecimento e programação de sistemas operacionais, e a programação das unidades microprocessadas e microcontroladas para operação em conjunto. Dessa forma, veja nessa palestra como um sistema híbrido de baixo custo pode ser a peça-chave para um projeto de Internet das Coisas para telemetria e processamento de dados.',
      hora:'9PM',
      alinhamento:'timeline-inverted',
      foto: 'andrecurvelo',
      tipo:'Palestra'
    }
];

$scope.quarta = [
    {
      name: 'David Robert',
      place: 'Elo7',
      tituloPalestra: 'Times de Alta Performance',
      facebook: '',
      twitter: 'https://twitter.com/while42',
      linkedin: 'http://linkedin.com/in/davidrobert',
      resumo: 'Como a influência da cultura na constante evolução de cada integrante e na constante evolução da empresa pode refletir no desenvolvimento de times de alta performance. Os principais desafios que o Elo7 teve que lidar para crescer em mais de 10 vezes o tamanho dos times da engenharia mantendo a produtividade e um excelente ambiente de trabalho. Bibliografia:',
      website: 'http://www.slideshare.net/while42',
      hora:'8AM',
      alinhamento:'',
      foto: 'davidrobert',
      tipo:'Palestra'
    },

    {
      name: 'TW',
      place: '',
      tituloPalestra: 'Em breve',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      resumo: '',
      hora:'10AM',
      alinhamento:'timeline-inverted',
      foto: 'breve',
      tipo:'Palestra'
    },

      {
      name: 'TW',
      place: '',
      tituloPalestra: 'Em breve',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      resumo: '',
      hora:'11AM',
      foto: 'breve',
      tipo:'Palestra'
    },

    {
      name: 'Rubem Paulo Torri Saldanha',
      place: '',
      tituloPalestra: 'A Internet das Coisas que eu posso criar',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      resumo: 'A nova moda na área de tecnologia é falar sobre a Internet das Coisas. Mas como fazer para começar? Que tal fazer você mesmo? Rubem Saldanha vai contar tudo o que a Intel está fazendo nesse novo tema e você terá uma visão de como você pode iniciar suas próprias descobertas nessa área. Se sobrar um tempinho, ele ainda vai falar sobre carreira na Intel.',
      hora:'1PM',
      alinhamento:'timeline-inverted',
      foto: 'RubemSaldanha',
      tipo:'Palestra'
    },

    {
      name: 'Yan Magalhães Leite',
      place: '',
      tituloPalestra: 'Testes pra que te quero',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      resumo: 'Nesta palestra, iremos aprender sobre porque testes são tão importantes assim, o porquê de nos ajudarem a melhorar a qualidade de nosso código e nossos projetos e vamos conhecer um pouco sobre o tão famoso TDD. Se você nunca escreveu um teste, esta palestra é para você. E se você já testa, por favor, venha e compartilhe conosco seus conhecimentos e experiências com testes.  Vamos juntos, melhorar a qualidade de nossos projetos. ',
      hora:'3PM',
      alinhamento:'',
      foto: 'yanmagalhaes',
      tipo:'Palestra'
    },

    {
      name: 'TW',
      place: '',
      tituloPalestra: 'Em breve',
      facebook: '',
      twitter: '',
      linkedin: '',
      resumo: '',
      website: '',
      hora:'5PM',
      alinhamento:'timeline-inverted',
      foto: 'breve',
      tipo:'Palestra'
    },

    {
      name: 'Aline Dias & Barbara Oliveira e ',
      place: 'Equals / Lemaf',
      tituloPalestra: 'O papel do PO em times Scrum',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      resumo: 'O Product Owner (PO) é o ponto central do projeto ágil e é quem exerce a liderança sobre o produto que está sendo desenvolvido. Durante a palestra serão apresentadas quais as suas responsabilidades, os artefatos que o mesmo deve gerir, as características necessárias para ser um bom Product Owner e os desafios encontrados ao exercer este papel.',
      hora:'7:30PM',
      alinhamento:'',
      foto: 'alinebarbara',
      tipo:'Palestra'
    },

    {
      name: 'Java Group',
      place: 'UFLA',
      tituloPalestra: 'Em breve',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      resumo: '',
      hora:'7:30PM',
      alinhamento:'timeline-inverted',
      foto: 'breve',
      tipo:'Workshop'
    },

    {
      name: 'Bruno Donizette, Marlon da Silva e Ramon Gomes',
      place: 'UFLA',
      tituloPalestra: 'Neo4 o que? Sua vida repleta de grafos!',
      facebook: '',
      twitter: '',
      linkedin: '',
      resumo: 'Palestra sobre banco de dados orientado a grafos, como melhorar nosso banco de dados com uma representação mais próxima da realidade.',
      website: '',
      hora:'9PM',
      alinhamento:'',
      foto: 'brunomarlonramon',
      tipo:'Palestra'
    },
];

$scope.quinta = [
    {
      name: 'Giancarlo Lacerda',
      place: '',
      tituloPalestra: 'Inteligência e Performance em marketing digital',
      facebook: '',
      twitter: '',
      linkedin: '',
      resumo: 'Como a inteligência e performance em marketing aplica ciência e tecnologia na exploração de dados sobre os pontos de contato entre consumidores e marcas, para otimizar os negócios e o resultados. Entenda como a mensuração de dados é o principal divisor de águas entre o marketing digital e o Marketing Offline.',
      website: '',
      hora:'8AM',
      alinhamento:'',
      foto: 'giancarlolacerda',
      tipo:'Palestra',

    },

    {
      name: 'SEBRAE',
      place: '',
      tituloPalestra: 'Canvas',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      resumo: '',
      hora:'8AM',
      alinhamento:'timeline-inverted',
      foto: 'breve',
      tipo:'Workshop'
    },

    {
      name: 'André Grutzman',
      place: 'UFLA',
      tituloPalestra: 'Mesa Redonda - Politicas Publicas',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      resumo: '',
      hora:'10AM',
      alinhamento:'',
      foto: 'breve',
      tipo:'Palestra'
    },

    {
      name: 'CI&T',
      tituloPalestra: 'A nova era da plataforma windows: o darwinismo digital',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      resumo: 'A reinvenção da gigante Microsoft num mundo cada vez mais competitivo e como esse processo vem afetando os profissionais de TI. Prepare-se, adapte-se ou terá o mesmo fim dos dinossauros.',
      hora:'1PM',
      alinhamento:'timeline-inverted',
      foto: 'andrepaulovich',
      tipo:'Palestra'
    },

    {
      name: 'Carlos Lauff',
      place: '',
      tituloPalestra: 'Desvendando o Azure: a nuvem da Microsoft',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      hora:'2PM',
      resumo: 'Entender o conceito de computação em nuvem e como utilizar as ferramentas integradas para gerenciar ambientes de TI usando habilidades e tecnologias que os profissionais de TI já conhecem.',
      alinhamento:'',
      foto: 'carloslauff',
      tipo:'Workshop'
    },

    {
      name: 'Bruno Castro',
      place: 'CI&T',
      tituloPalestra: 'Projetando interfaces imersivas',
      facebook: '',
      twitter: '',
      linkedin: '',
      resumo: 'Vários lançamentos aconteceram neste ano com foco em Realidade virtual e Realidade aumentada, óculos de VR, vídeos conceito e APPs e o mercado para aplicações de realidade virtual e aumentada tendem a crescer exponencialmente. Mas me diga: Você está preparado para projetar interfaces imersivas?',
      website: '',
      hora:'3PM',
      alinhamento:'timeline-inverted',
      foto: 'brunocastro',
      tipo:'Palestra'
    },

    {
      name: 'Vinícius Borriello',
      place: '',
      tituloPalestra: 'JavaScript: de onde veio, para onde vai',
      facebook: '',
      twitter: '',
      resumo: 'Um panorama histórico sobre a linguagem, o surgimento do NodeJS e o futuro da arquitetura de aplicações web.',
      linkedin: '',
      website: '',
      hora:'5PM',
      alinhamento:'',
      foto: 'ViníciusBorriello',
      tipo:'Palestra'
    },

    {
      name: 'SEBRAE',
      place: '',
      tituloPalestra: 'Rock Content',
      facebook: '',
      twitter: '',
      resumo: '',
      linkedin: '',
      website: '',
      hora:'7:30PM',
      alinhamento:'timeline-inverted',
      foto: 'breve',
      tipo:'Palestra'
    },

    {
      name: 'Vinícius Borriello',
      place: '',
      tituloPalestra: 'Introdução ao NodeJS e programação assíncrona',
      facebook: '',
      twitter: '',
      resumo: 'Introduzir os principais conceitos e bibliotecas, bem como proporcionar entendimento sobre o ambiente de programação.',
      linkedin: '',
      website: '',
      hora:'8PM',
      alinhamento:'',
      foto: 'ViníciusBorriello',
      tipo:'Workshop'
    },

    {
      name: 'Daniela Gibertoni',
      place: '',
      tituloPalestra: 'UX Design - A Experiência do Usuário ',
      facebook: '',
      twitter: '',
      resumo: ' "UX Design” – “A Experiência de Usuário" engloba todos os aspectos da interação do usuário final com a empresa, seus serviços, e seus produtos. Portanto, é a área responsável por estudar as melhores maneiras de atender as necessidades dos usuários e deixá-los satisfeitos com todo o processo. A palestra "UX Design" tem por objetivo apresentar os princípios básicos para design de interfaces, ao introduzir o conteúdo para iniciantes na área e também reforçar para aqueles que já possuem alguma experiência com o tema.',
      linkedin: '',
      website: '',
      hora:'9PM',
      alinhamento:'timeline-inverted',
      foto: 'danielagibertoni',
      tipo:'Palestra'
    },
];

$scope.sexta = [
    

    {
      name: 'Cesar Augusto Nogueira',
      place: '',
      tituloPalestra: 'Android Wear',
      facebook: '',
      twitter: '',
      resumo: 'Neste workshop você aprenderá a literalmente criar sua primeira aplicação para wearables devices como o Moto 360 smartwatch através do uso da API aberta do Android Wear. É recomendável que você já tenha alguma experiência com Android para este workshop, mas não é necessário. Sejam todos bem vindos ao mundo dos wearables!',
      linkedin: '',
      website: '',
      hora:'8AM',
      alinhamento:'',
      foto: 'cesar',
      tipo:'Workshop'
    },

{
      name: 'Sérgio Rodrigues',
      place: 'Locaweb',
      tituloPalestra: ' Internet of Things: More software less hardware.',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      resumo: 'Vamos explicar o que é Internet of Things, e dar exemplos de como IoT pode melhorar a vida das pessoas. Mostraremos como construir arquiteturas baseadas em IoT, demostrando na prática uma aplicação construída com Arduino, Ruby, Clojure, MQTT, InfluxDB e React.',
      hora:'9AM',
      alinhamento:'timeline-inverted',
      foto: 'sergioaugusto',
      tipo:'Palestra'
    },


    {
      name: 'Vanessa Me Tonini',
      place: '',
      tituloPalestra: 'Métodos ágeis, desenvolvendo software com foco no que importa',
      facebook: '',
      twitter: '',
      linkedin: '',
      resumo: 'Esta palestra trará conceitos e ideias de sobre métodos ágeis, apresentando os métodos mais populares como Scrum, Kanban, eXtremming Programming e outros. Compartilharei sobre minha experiência utilizando-os no dia-a-dia, como foi para iniciar, aplicar, e melhorar continuamente o processo de entrega do software, focando naquilo que realmente importa.  ',
      website: '',
      hora:'10AM',
      alinhamento:'',
      foto: 'VanessaMeTonini',
      tipo:'Palestra'
    },

    {
      name: 'Camilla Gomes',
      place: '7COMm',
      tituloPalestra: 'Tornando-se um DevOps sem perder a cabeça',
      facebook: '',
      twitter: '',
      linkedin: '',
      resumo: 'Muito se fala sobre as vantagens e pouco se entende sobre a dificuldade de adotar esta cultura em ambientes corporativos. Do mesmo modo se fala muito sobre ferramentas milagrosas que fazem tudo em um click, mas pouco se entende sobre o perfil do profissional para colaborar com este processo. Mas o que é preciso para ser um profissional capaz de trabalhar nos ambientes mais diversos? Nesta palestra vamos ver os caminhos para conquistar um currículo para ser um DevOps e como ingressar na área sem virar o "a pessoa da infra que automatiza coisas e faz tudo​".',
      website: '',
      hora:'11AM',
      alinhamento:'timeline-inverted',
      foto: 'camillagomes',
      tipo:'Palestra'
    },

    {
      name: 'Guilherme Vasconcelos',
      place: '',
      tituloPalestra: 'Metodologia ágil (SCRUM): Inovação e Satisfação do cliente.',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      resumo: 'No mundo do desenvolvimento sempre enfrentamos alguns problemas como inovação e satisfação do cliente. Como inovar e garantir que o seu cliente saia satisfeito. Metodologias ágeis são um bom caminho para se conseguir isso. Venha entender como isso é possível. Atender as expectativas do cliente , inovar , evitar desperdícios de funcionalidades, entre outros', 
      hora:'1PM',
      alinhamento:'',
      foto: 'vasconcelos',
      tipo:'Palestra'
    },

    {
      name: 'Rodolfo Dias',
      place: 'Inatel',
      tituloPalestra: 'The Front-End Power',
      facebook: '',
      twitter: '',
      resumo: 'Durante essa conversa vamos entender a importância e a evolução do papel de um Front end developer em uma equipe e também destacar a evolução das tecnologias mais usadas por esse tipo de profissional, vendo como HTML, CSS e JavaScript evoluíram nos últimos anos quebrando paradigmas sobre a utilização dessas tecnologias no desenvolvimento de diferentes tipos de aplicações.',
      linkedin: '',
      website: '',
      hora:'3PM',
      alinhamento:'timeline-inverted',
      foto: 'rodolfodias',
      tipo:'Palestra'
    },

    {
      name: 'Cesar Augusto',
      place: '',
      tituloPalestra: 'OpenSource Java',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      resumo: 'O que é o projeto Adopt a JSR e OpenJDK e como você pode participar.',
      hora:'5PM',
      alinhamento:'',
      foto: 'cesar',
      tipo:'Palestra'
    },

    {
      name: 'Matheus Nogueira',
      place: 'UFLA',
      tituloPalestra: 'Minicurso: Desenvolvimento de Software utilizando Git ',
      facebook: '',
      twitter: '',
      linkedin: '',
      resumo: '',
      website: '',
      hora:'6PM',
      alinhamento:'timeline-inverted',
      foto: 'breve',
      tipo:'Workshop'
    },

    {
      name: 'Vicente De Luca',
      place: '',
      tituloPalestra: 'Do DCC-UFLA ao Vale do Silício - trajetória de um ex-canelada',
      facebook: '',
      twitter: '',
      linkedin: '',
      resumo: 'Trajetória de um ex-aluno do DCC-UFLA entre graduação, primeiro emprego em  em território brasileiro, experiência no mercado europeu e migração para o vale do silício na California. ',
      website: '',
      hora:'7:30PM',
      alinhamento:'',
      foto: 'vicentedeluca',
      tipo:'Palestra'
    }


];

});