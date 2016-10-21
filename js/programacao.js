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
      tipo:''
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
      resumo: 'A Semana de Tecnologia da Informação (SETI) é um evento que ocorre anualmente no Departamento de Ciência da Computação (DCC) da Universidade Federal de Lavras (UFLA) e já pode ser considerado um dos maiores eventos de tecnologia do Sul de Minas. Presença da comissão organizadora, professores, convidados e empresas parceiras.',
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
      alinhamento:'timeline-inverted',
      hora: '1PM',
      tipo:'Palestra',
      resumo: 'Essa palestra tem por objetivo apresentar a abordagem de desenvolvimento de aplicativos híbridos, suas vantagens e desvantagens e mostrar um protótipo funcional que utilizando do mesmo código fonte,   será capaz de ser distribuído para sistemas Desktop tradicionais (Linux, Windows, Mac),  dispositivos móveis (iOS, Android, Windows Phone) ou como um site na web sem alterações em suas camadas internas,   mudando apenas a forma de apresentação em cada plataforma, quando necessário.',
      alinhamento:'timeline-inverted'
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
    },

    {
      name: 'Serena Fernandes',
      place: 'AvenueCode',
      tituloPalestra: 'Metodologias Ágeis',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      foto: 'serenafernandes',
      tipo:'Workshop',
      alinhamento:'timeline-inverted',
      hora: '1PM',
      resumo: 'Vamos falar um pouco sobre Metodologias Ágeis, numa abordagem prática vamos entender onde vivem, o que comem e como se reproduzem os times ágeis. Vamos ser conhecedores das manhas e dos paranauês das metodologias ágeis e saber como atuar em um time ágil. E se você acha que ser ágil significa ser rápido, vou te provar que você está mais que errado(a)!'
    },

    {
      name: 'Lays Rodrigues Silva',
      place: 'KDE',
      tituloPalestra: 'Qt - O seu toolkit para C++ ou Python com o verdadeiro: Write once, deploys everywhere!',
      facebook: ' laysrodrigues147',
      twitter: '@lays147',
      linkedin: '',
      website: 'laysrodriguesdev.wordpress.com',
      foto: 'laysrodrigues',
      hora: '3PM',
      tipo:'Palestra',
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
      alinhamento:'timeline-inverted',
      resumo: 'Currículo, cursos, certificações, idiomas, todos estes fatores são muito importantes, claro. Mas a base desta palestra está fundamentada no desenvolvimento humano e de como colocar todos estes requisitos em prática. As bases do trabalho estão ligadas aos 4 pilares do desenvolvimento: análise e crítica, interação, contribuição e transformação. Ou seja, "o que" se tem como requisito é o motor da máquina, mas "o como" se usa essa máquina, é o combustível e o passaporte para novas oportunidades.',
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
    
    }, 

    {
      name: 'Gustavo Lopes',
      place: 'ProGolden / GDG Lavras',
      tituloPalestra: 'Introdução a ReactJS',
      facebook: 'www.facebook.com/gustavo.lopes.501',
      twitter: 'http://twitter.com/gudominguete',
      linkedin: 'https://www.linkedin.com/in/gudominguete',
      website: 'https://github.com/gudominguete',
      hora:'7:30PM',
      alinhamento:'',
      tipo:'Workshop',
      foto: 'gustavodominguete',
      alinhamento:'timeline-inverted',
      resumo: 'Formado como técnico em Informática Industrial pelo CEFET-MG, formado como bacharel em Ciência da Computação pela UFLA, pós-graduando em Especialização em Engenharia de Sistemas. Já trabalhou no CPqD. Atualmente é o Gerente de Projetos na ProGolden e Organizador do Google Developers Group Lavras'
    },


    {
      name: 'Empresas Juniores',
      place: 'Ejs',
      tituloPalestra: 'Um debate descontraido sobre empresas juniores ',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      hora:'21PM',
      alinhamento:'',
      tipo:'Palestra',
      foto: 'breve',
      alinhamento:'',
      resumo: ''
    },
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
      tituloPalestra: 'Preparando documentos utilizando LaTeX',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: ' http://viniciusrpb.byethost6.com',
      hora:'8AM',
      alinhamento:'timeline-inverted',
      resumo: 'Neste minicurso de 8 horas, utilizaremos o LaTeX para a preparação e edição de documentos. O LaTeX é um processador que formata um texto de acordo com marcações nele contidas, resultando em um documento com alta qualidade tipográfica.',
      foto: 'viniciusborges',
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
      name: 'Gabriela Santiago, Ramon Costa, Gustavo Freitas ',
      place: 'UFLA',
      tituloPalestra: 'Tópicos em bancos de dados NoSQL – In-memory databases e Redis',
      foto: 'gabrielasantiago',
      resumo: '',
      hora:'1PM',
      alinhamento:'',
      tipo:'Workshop'
    },


    {
      name: 'Marco Aurélio Caldas Ribeiro',
      place: 'Hotmart',
      tituloPalestra: 'Do monólito ao microserviço: como escalar uma startup global',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      resumo: 'Conheça as evoluções tecnológicas que permitiram à Hotmart, uma startup formada por dois programadores, conquistar expansão em escala global. Vamos falar sobre como foi o processo, mostrar os desafios e, principalmente, apontar como as tecnologias, práticas e o trabalho em equipe deram suporte a essa evolução. ',
      hora:'3PM',
      alinhamento:'timeline-inverted',
      foto: 'marcoaurelio',
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
      name: 'Dilson Lucas Pereira',
      place: 'UFLA',
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
      name: 'Vinicius Borges',
      place: 'UFLA',
      tituloPalestra: 'Preparando documentos utilizando LaTeX (continuação)',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: ' http://viniciusrpb.byethost6.com',
      resumo: 'Neste minicurso de 8 horas, utilizaremos o LaTeX para a preparação e edição de documentos. O LaTeX é um processador que formata um texto de acordo com marcações nele contidas, resultando em um documento com alta qualidade tipográfica.',
      hora:'8AM',
      alinhamento:'timeline-inverted',
      foto: 'viniciusborges',
      tipo:'Workshop'
    },

        {
      name: 'Julio Farah',
      place: 'Thoughtworks',
      tituloPalestra: 'Atacando code smells para melhorar a qualidade do seu código',
      facebook: '',
      twitter: '',
      linkedin: '',
      resumo: 'É inevitável que em algum momento vamos nos deparar com código ~ruim~ (não ideal) na nossa carreira como desenvolvedores. Seja código escrito por nós mesmo, ou por pessoas com contextos e experiências diferentes, em algum momento teremos um pouco de caos a ser colocado em ordem. Nessa palestra vamos aprender a fazer uma faxina de código, utilizando técnicas pra identificar e consertar código legado. ',
      website: '',
      hora:'9h30PM',
     
      foto: 'juliofarah',
      tipo:'Palestra'
    },

      {
      name: 'Samir Salim',
      place: 'Thoughtworks',
      tituloPalestra: 'Sua carreira não precisa ser desenhada com uma régua',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      resumo: 'A busca por felicidade, satisfação, ou melhores condições de trabalho levam a mudanças inesperadas, e temos que nos preparar pra abraçar a mudança.',
      hora:'10h30AM',
      foto: 'samirsalim',
      alinhamento:'timeline-inverted',
      tipo:'Palestra'
    },



    {
      name: 'Rubem Paulo Torri Saldanha',
      place: 'Intel',
      tituloPalestra: 'A Internet das Coisas que eu posso criar',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      resumo: 'A nova moda na área de tecnologia é falar sobre a Internet das Coisas. Mas como fazer para começar? Que tal fazer você mesmo? Rubem Saldanha vai contar tudo o que a Intel está fazendo nesse novo tema e você terá uma visão de como você pode iniciar suas próprias descobertas nessa área. Se sobrar um tempinho, ele ainda vai falar sobre carreira na Intel.',
      hora:'1PM',
      foto: 'RubemSaldanha',
      tipo:'Palestra'
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
      alinhamento:'timeline-inverted',
      resumo: 'A visualização de software é uma área que faz uso de recursos visuais para representar a estrutura, o comportamento e a evolução do software. A finalidade deste workshop é apresentar conceitos relacionados a essa área, exemplos de técnicas e características necessárias para projetar uma visualização. Os conceitos apresentados serão aplicados em uma atividade prática, em que os participantes projetarão sua própria técnica de visualização em um ambiente dinâmico e descontraído. Em seguida, será apresentada uma aplicação real dessa área, no qual os participantes poderão utilizar e interagir com uma ferramenta de visualização de software.',
      hora:'1PM'
    }, 

    {
      name: 'Yan Magalhães Leite',
      place: 'mLearn',
      tituloPalestra: 'Testes pra que te quero',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      resumo: 'Nesta palestra, iremos aprender sobre porque testes são tão importantes assim, o porquê de nos ajudarem a melhorar a qualidade de nosso código e nossos projetos e vamos conhecer um pouco sobre o tão famoso TDD. Se você nunca escreveu um teste, esta palestra é para você. E se você já testa, por favor, venha e compartilhe conosco seus conhecimentos e experiências com testes.  Vamos juntos, melhorar a qualidade de nossos projetos. ',
      hora:'3PM',
      foto: 'yanmagalhaes',
      tipo:'Palestra'
    },


    {
      name: 'Aline Dias & Barbara Oliveira',
      place: 'Equals / Lemaf',
      tituloPalestra: 'O papel do PO em times Scrum',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      resumo: 'O Product Owner (PO) é o ponto central do projeto ágil e é quem exerce a liderança sobre o produto que está sendo desenvolvido. Durante a palestra serão apresentadas quais as suas responsabilidades, os artefatos que o mesmo deve gerir, as características necessárias para ser um bom Product Owner e os desafios encontrados ao exercer este papel.',
      hora:'7:30PM',
      alinhamento:'timeline-inverted',
      foto: 'alinebarbara',
      tipo:'Palestra'
    },

        {
      name: 'Java Group',
      place: 'UFLA',
      tituloPalestra: 'Uma aplicação web rápida utilizando JSP e Hibernate',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      resumo: 'O minicurso tem como objetivo criar uma pequena aplicação web utilizando a linguagem Java. Serão abordadas tecnologias como Hibernate, para integrar a aplicação com banco de dados, e o JSP, para criar páginas web dinâmicas.',
      hora:'7:30PM',
   
      foto: 'javagroup',
      tipo:'Workshop'
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




];

$scope.quinta = [
    {
      name: 'Giancarlo Lacerda',
      place: 'Best - Marketing de Performance',
      tituloPalestra: 'Inteligência e Performance em marketing digital',
      facebook: '',
      twitter: '',
      linkedin: '',
      resumo: 'Como a inteligência e performance em marketing aplica ciência e tecnologia na exploração de dados sobre os pontos de contato entre consumidores e marcas, para otimizar os negócios e o resultados. Entenda como a mensuração de dados é o principal divisor de águas entre o marketing digital e o Marketing Offline.',
      website: '',
      hora:'8AM',
      alinhamento:'',
      foto: 'giancarlolacerda2',
      tipo:'Palestra',

    },

    {
      name: 'SEBRAE',
      place: '',
      tituloPalestra: 'Oficina Canvas',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      resumo: '',
      hora:'8AM',
      alinhamento:'timeline-inverted',
      foto: 'sebrae',
      tipo:'Workshop'
    },

    {
      name: 'André Grutzman / Guilherme Borges / Rodrigo Couto',
      place: 'UFLA / Progolden / Arbitrare',
      tituloPalestra: 'Mesa-redonda: Participação Social Eletrônica',
      facebook: ' www.facebook.com/guilhermeborges91',
      twitter: '',
      linkedin: 'https://br.linkedin.com/in/guilherme-borges-73322281',
      website: 'http://lattes.cnpq.br/7246743939514758',
      resumo: 'As Tecnologias de Informação tem o poder de ampliar a democracia, permitindo que mais pessoas participem das decisões de governantes em todas as esferas. A interação direta entre cidadãos, sistema político e governos é fundamental para isso. Nesta mesa redonda iremos discutir exemplos reais no Brasil, bem como as dificuldades para os avanços da participação social eletrônica no país. Participe!',
      hora:'10AM',
      alinhamento:'',
      foto: 'mesaredondaandre',
      tipo:'Palestra'
    },

    {
      name:'André Paulovich',
      place: 'CI&T',
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
      place: 'Class365',
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
      name: 'Vinícius Borriello',
      place: 'Ufla',
      tituloPalestra: 'JavaScript: de onde veio, para onde vai',
      facebook: '',
      twitter: '',
      resumo: 'Um panorama histórico sobre a linguagem, o surgimento do NodeJS e o futuro da arquitetura de aplicações web.',
      linkedin: '',
      website: '',
      hora:'5PM',
      alinhamento:'',
      foto: 'viniciusborrielo',
      tipo:'Palestra'
    },

     {
      name: 'Luiz Augusto Guimarães Costa',
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
      name: 'Vinícius Borriello',
      place: 'Ufla',
      tituloPalestra: 'Introdução ao NodeJS e programação assíncrona',
      facebook: '',
      twitter: '',
      resumo: 'Introduzir os principais conceitos e bibliotecas, bem como proporcionar entendimento sobre o ambiente de programação.',
      linkedin: '',
      website: '',
      hora:'8PM',
      alinhamento:'',
      foto: 'viniciusborrielo',
      alinhamento:'',
      tipo:'Workshop'
    },

    {
      name: 'Daniela Gibertoni',
      place: 'Fatec Taquaritinga',
      tituloPalestra: 'UX Design - A Experiência do Usuário ',
      facebook: '',
      twitter: '',
      resumo: ' "UX Design” – “A Experiência de Usuário" engloba todos os aspectos da interação do usuário final com a empresa, seus serviços, e seus produtos. Portanto, é a área responsável por estudar as melhores maneiras de atender as necessidades dos usuários e deixá-los satisfeitos com todo o processo. A palestra "UX Design" tem por objetivo apresentar os princípios básicos para design de interfaces, ao introduzir o conteúdo para iniciantes na área e também reforçar para aqueles que já possuem alguma experiência com o tema.',
      linkedin: '',
      website: '',
      hora:'9PM',
      foto: 'danielagibertoni',
      alinhamento:'timeline-inverted',
      tipo:'Palestra'
    },
];

$scope.sexta = [
    

    {
      name: 'Cesar Augusto Nogueira',
      place: 'Instituto de Pesquisas Eldorado',
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
      name: 'Venícios Gustavo Santos',
      place: 'Lemaf',
      tituloPalestra: 'Quero ser analista de requisitos ou negócios. Por onde eu começo?',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      foto: 'venicios',
      hora: '10AM',
      tipo:'Palestra',
      alinhamento:'',
      resumo: 'Currículo, cursos, certificações, idiomas, todos estes fatores são muito importantes, claro. Mas a base desta palestra está fundamentada no desenvolvimento humano e de como colocar todos estes requisitos em prática. As bases do trabalho estão ligadas aos 4 pilares do desenvolvimento: análise e crítica, interação, contribuição e transformação. Ou seja, "o que" se tem como requisito é o motor da máquina, mas "o como" se usa essa máquina, é o combustível e o passaporte para novas oportunidades.',
    }, 


    {
      name: 'Guilherme Vasconcelos',
      place: 'Inttelix Brasil',
      tituloPalestra: 'Metodologia ágil (SCRUM): Inovação e Satisfação do cliente.',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      resumo: 'No mundo do desenvolvimento sempre enfrentamos alguns problemas como inovação e satisfação do cliente. Como inovar e garantir que o seu cliente saia satisfeito. Metodologias ágeis são um bom caminho para se conseguir isso. Venha entender como isso é possível. Atender as expectativas do cliente , inovar , evitar desperdícios de funcionalidades, entre outros', 
      hora:'1PM',
      alinhamento:'timeline-inverted',
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
      alinhamento:'',
      foto: 'rodolfodias',
      tipo:'Palestra'
    },

    {
      name: 'Cesar Augusto',
      place: 'Instituto de Pesquisas Eldorado',
      tituloPalestra: 'OpenSource Java',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      resumo: 'O que é o projeto Adopt a JSR e OpenJDK e como você pode participar.',
      hora:'5PM',
      alinhamento:'timeline-inverted',
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
      alinhamento:'',
      foto: 'matheusnogueira',
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
      alinhamento:'timeline-inverted',
      foto: 'vicentedeluca',
      tipo:'Palestra'
    }


];

$scope.sabado = [

 {
      name: 'Vanessa Me Tonini',
      place: 'Lambda3',
      tituloPalestra: 'Métodos ágeis, desenvolvendo software com foco no que importa',
      facebook: '',
      twitter: '',
      linkedin: '',
      resumo: 'Esta palestra trará conceitos e ideias de sobre métodos ágeis, apresentando os métodos mais populares como Scrum, Kanban, eXtremming Programming e outros. Compartilharei sobre minha experiência utilizando-os no dia-a-dia, como foi para iniciar, aplicar, e melhorar continuamente o processo de entrega do software, focando naquilo que realmente importa.  ',
      website: '',
      hora:'9AM',
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
      hora:'10AM',
      alinhamento:'timeline-inverted',
      foto: 'camillagomes',
      tipo:'Palestra'
    },

];

});