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
      foto: 'ricardoroquim'
    }, {
      name: 'Camila Bastos',
      place: 'UFLA/DCC Mestrado',
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
      name: 'Bárbara Oliveira',
      place: 'LEMAF',
      tituloPalestra: 'O papel do PO em times Scrum',
      facebook: 'https://br.linkedin.com/in/b%C3%A1rbara-oliveira-753077a3',
      twitter: 'https://br.linkedin.com/in/b%C3%A1rbara-oliveira-753077a3',
      linkedin: 'https://br.linkedin.com/in/b%C3%A1rbara-oliveira-753077a3',
      website: 'https://br.linkedin.com/in/b%C3%A1rbara-oliveira-753077a3',
      foto: 'barbaraoliveira'
    }, {
      name: 'Cesar Augusto Nogueira',
      place: '',
      tituloPalestra: 'OpenSource Java',
      facebook: 'fb.com/cesarnog',
      twitter: '@cesarnogcps',
      linkedin: 'https://www.linkedin.com/in/cesarnog',
      website: 'http://cesarnogueira.me',
      foto: 'cesar'
    }, {
      name: 'Vinicius Borrielo',
      place: '',
      tituloPalestra: 'JavaScript: de onde veio, para onde vai',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      foto: 'vinicius'
    }, {
      name: 'Guilherme Razgriz Magalhães',
      place: '',
      tituloPalestra: '',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      foto: 'razgriz'
    }, {
      name: 'Guilherme Vasconcelos',
      place: '',
      tituloPalestra: 'Metodologia ágil (SCRUM): Inovação e Satisfação do cliente.',
      facebook: 'https://www.facebook.com/gvasconcelos2',
      twitter: '',
      linkedin: 'https://br.linkedin.com/in/guilherme-vasconcelos-742a4238',
<<<<<<< HEAD
      website: 'www.hmƒbautomcao.com.br',
      foto: 'breve'
=======
      website: 'www.hmbautomcao.com.br',
      foto: 'vasconcelos'
>>>>>>> 649af67cc71f61dc7e41058211c4de09fd4603af
    }, {
      name: 'Venícios Gustavo Santos',
      place: '',
      tituloPalestra: 'Quero ser analista de requisitos ou negócios. Por onde eu começo?',
      facebook: 'https://www.facebook.com/veniciosgustavo ',
      twitter: '',
      linkedin: 'https://br.linkedin.com/in/venicios',
      website: '',
      foto: 'venicios'
    }, {
      name: 'Lays Rodrigues Silva',
      place: '',
      tituloPalestra: 'Teimosia, Campus Party e KDE',
      facebook: ' laysrodrigues147',
      twitter: '@lays147 ',
      linkedin: '',
      website: 'laysrodriguesdev.wordpress.com',
      foto: 'laysrodrigues'
    }, {
      name: 'Lucas Ricoy',
      place: '',
      tituloPalestra: 'Desenvolvimento de Aplicativos Híbridos (Mobile/Desktop/Web)',
      facebook: 'facebook.com/lricoy',
      twitter: '@lricoy',
      linkedin: 'https://www.linkedin.com/#lricoy',
      website: 'medium.com/@lricoy',
      foto: 'lucasricoy'
    }, {
      name: 'Sérgio Cruz Passos',
      place: '',
      tituloPalestra: 'Bots são os novos apps',
      facebook: 'facebook.com/spassos',
      twitter: '@scpassos',
      linkedin: 'linkedin.com/in/scpassos ',
      website: 'www.take.net',
      foto: 'sergiocruz'
    }, {
      name: 'André Curvello',
      place: '',
      tituloPalestra: '',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      foto: 'curvello'
    }, {
      name: 'Raphael Bastos',
      place: '',
      tituloPalestra: '',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      foto: 'raphaelbastos'
    }, {
      name: 'Bruno Donizette',
      place: '',
      tituloPalestra: 'Neo4 o que? Sua vida repleta de grafos!',
      facebook: '',
      twitter: '',
      linkedin: 'www.linkedin.com/in/bdonizetisilva',
      website: '',
      foto: 'brunodonizette'
    }, {
      name: 'Daniela Gibertoni',
      place: '',
      tituloPalestra: '',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      foto: 'danielagibertoni'
    }, {
      name: 'Carlos Lauff',
      place: '',
      tituloPalestra: 'Desvendando o Azure: a nuvem da Microsoft',
      facebook: 'facebook.com/tiolauff ',
      twitter: '@callauff',
      linkedin: 'https://br.linkedin.com/in/carloslauff ',
      website: 'class365.com.br',
      foto: 'carloslauff'
    }, {
      name: 'Sérgio Augusto Rodrigues',
      place: '',
      tituloPalestra: 'Internet of Things: More software less hardware.',
      facebook: 'https://www.facebook.com/sergioaugrod',
      twitter: '',
      linkedin: 'https://www.linkedin.com/in/sergioaugrod',
      website: ' www.sergioaugrod.com.br',
      foto: 'sergioaugusto'
    }, {
      name: 'Camilla Gomes',
      place: '',
      tituloPalestra: '',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      foto: 'camillagomes'
    }, {
      name: 'Rodolfo Dias',
      place: '',
      tituloPalestra: 'The Front-End Power',
      facebook: '',
      twitter: 'twitter.com/r_mdias',
      linkedin: '',
      website: '',
      foto: 'rodolfodias'
    }, {
      name: 'Sérgio Cruz Passos',
      place: '',
      tituloPalestra: '',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      foto: 'sergiocruz'
    }, {
      name: 'Serena Fernandes',
      place: 'AvenueCode',
      tituloPalestra: 'Mulheres na Tecnologia',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: '',
      foto: 'serenafernandes'
    }, {
      name: 'Vicente de Luca',
      place: '',
      tituloPalestra: 'Do DCC-UFLA ao Vale do Silício - trajetória de um ex-canelada',
      facebook: '',
      twitter: '',
      linkedin: 'https://www.linkedin.com/in/vicente-de-luca-21728355',
      website: '',
      foto: 'vicentedeluca'
    }, {
      name: 'Bruno Donizeti da Silva',
      place: '',
      tituloPalestra: 'NoSQL: Bancos de dados de grafo e Neo4j',
      facebook: '',
      twitter: '',
      linkedin: 'https://br.linkedin.com/in/bdonizetisilva',
      website: '',
      foto: 'brunodonizeti'
    }, {
      name: 'Marlon da Silva',
      place: '',
      tituloPalestra: 'NoSQL: Bancos de dados de grafo e Neo4j',
      facebook: '',
      twitter: '@marlondasilva',
      linkedin: '',
      website: 'http://lattes.cnpq.br/9331509602982993',
      foto: 'marlondasilva'
    }, {
      name: 'Ramon Gomes Costa',
      place: '',
      tituloPalestra: 'NoSQL: Bancos de dados de grafo e Neo4j',
      facebook: '',
      twitter: '',
      linkedin: '',
      website: 'http://lattes.cnpq.br/0161357943312722',
      foto: 'ramongomes'
    }, {
      name: 'Maria Clara Silva Santana',
      place: '',
      tituloPalestra: 'Progressive Web Apps: ao infinito e além!',
      facebook: '',
      twitter: '@olarclara ',
      linkedin: '',
      website: 'medium.com/@mariaclarasantana',
      foto: 'mariasilva'
    }, {
      name: 'Yan Magalhães Leite',
      place: '',
      tituloPalestra: 'Testes pra que te quero',
      facebook: 'https://www.facebook.com/yaanmagalhaes ',
      twitter: 'https://twitter.com/yaanmagale',
      linkedin: 'https://br.linkedin.com/in/yanmagalhaes',
      website: '',
      foto: 'yanmagalhaes'
    }, {
      name: 'Maria Beatriz Saraiva Nogueira',
      place: '',
      tituloPalestra: '3dsudio e animaçao de personagenX desempenho mayaem animaçoes',
      facebook: 'beatriz.design/facebook.com',
      twitter: '',
      linkedin: 'httt://linkedin.com.br',
      website: '',
      foto: 'mariasaraiva'
    }, {
      name: 'Felipe de Padua',
      place: '',
      tituloPalestra: 'Oportunidades e Experiência de Trabalho Freelance',
      facebook: 'https://www.facebook.com/felipe.padua.5',
      twitter: '',
      linkedin: 'https://br.linkedin.com/in/felipepadua1',
      website: '',
      foto: 'felipedepadua'
    }, {
      name: 'Giancarlo Lacerda',
      place: '',
      tituloPalestra: 'Inteligência e Performance em marketing digital',
      facebook: ' http://www.facebook.com/giancarlo.almeidalacerda',
      twitter: '',
      linkedin: 'http://br.linkedin.com/in/giancarlolacerda',
      website: '',
      foto: 'giancarlolacerda'
    }
  ];
});