const academicLife = {
    data() {
        return {

        }
    },
    methods: {
        mountAcademicLife(histories) {
            histories.push({
                date: new Date("2005-12-15"),
                category: this.$store.state.categoryType.academicLife,
                period: {
                    begin: '2003',
                    end: '2005'
                },
                title: {
                    "pt-BR": "Colegial",
                    "en-US": "High School",
                },
                subTitle: {
                    "pt-BR": "E.E. Comendador Mario Reys",
                    "en-US": "E.E. Comendador Mario Reys",
                },
                description: {
                    "pt-BR": "No final de 2005, me formei no ensino médio e foi o começo da minha jornada, foi como um marco para mim, porque deixei minha infância para trás e iniciei minha vida adulta.",
                    "en-US": "At the end of 2005 I got my high school degree and it was the beginner of my journey, it was like a milestone to me, because I let my childhood behind and start my adult life.",
                },
                image: require('@/assets/academicLife/highSchool.jpg'),
                tags: [this.$store.state.tags.highSchool],
                links: [{
                    description: { "pt-BR": "ComendadorMarioReys", "en-US": "ComendadorMarioReys" },
                    url: "https://www.educamaisbrasil.com.br/escolas/mario-reys-comendador",
                    type: "link"
                }],
                showDetail: false
            });

            histories.push({
                date: new Date("2007-07-15"),
                category: this.$store.state.categoryType.academicLife,
                period: {
                    begin: '2005',
                    end: '2007'
                },
                title: {
                    "pt-BR": "ETEC-ZL - Escola Técnica Estadual",
                    "en-US": "ETEC-ZL - State Technical School",
                },
                subTitle: {
                    "pt-BR": "Curso de Informática",
                    "en-US": "Computer course",
                },
                description: {
                    "pt-BR": "Eu sempre gostei de criar coisas e resolver problemas, então trabalhar com computador foi realmente uma ótima escolha na minha vida. Para iniciar minha carreira, eu decidi fazer uma escola técnica onde o foco era programar computadores e isto foi o inicio e a validação da minha paixão por essa área.",
                    "en-US": "I always liked to build thing and solve problems, so working with computer was really a great choose in my life. To start my career I decided to do a technical school where the focus was programming computer, and this was the beginning and the validation of my passion for this area.",
                },
                image: require('@/assets/academicLife/technicalSchool.jpg'),
                tags: [this.$store.state.tags.technicalSchool, this.$store.state.tags.sql, this.$store.state.tags.visualBasic6, this.$store.state.tags.asp, this.$store.state.tags.vbScript, this.$store.state.tags.javascript, this.$store.state.tags.css, this.$store.state.tags.html,
                    this.$store.state.tags.c, this.$store.state.tags.cPlusPlus, this.$store.state.tags.pascal, this.$store.state.tags.delphi, this.$store.state.tags.php
                ],
                mainTags: [this.$store.state.tags.technicalSchool, this.$store.state.tags.sql, this.$store.state.tags.visualBasic6, this.$store.state.tags.asp, this.$store.state.tags.vbScript, this.$store.state.tags.javascript, this.$store.state.tags.css, this.$store.state.tags.html,
                    this.$store.state.tags.c, this.$store.state.tags.cPlusPlus, this.$store.state.tags.pascal, this.$store.state.tags.delphi, this.$store.state.tags.php
                ],
                resumeTags: [this.$store.state.tags.technicalSchool, this.$store.state.tags.sql, this.$store.state.tags.visualBasic6, this.$store.state.tags.asp, this.$store.state.tags.javascript, this.$store.state.tags.css, this.$store.state.tags.html,
                    this.$store.state.tags.c, this.$store.state.tags.cPlusPlus, this.$store.state.tags.pascal, this.$store.state.tags.delphi
                ],
                links: [{
                        image: require('@/assets/certificates/etecAuxiliarInformatica.jpg'),
                        description: { "pt-BR": "CertificadoAuxiliarInformática", "en-US": "InformaticAuxiliaryCertificate" },
                        type: "certificate"
                    },
                    {
                        image: require('@/assets/certificates/etecProgramadorDeComputadores.jpg'),
                        description: { "pt-BR": "CertificadoProgramador", "en-US": "ProgrammerCertificate" },
                        type: "certificate"
                    },
                    {
                        description: { "pt-BR": "ETEC-ZL", "en-US": "ETEC-ZL" },
                        url: "https://eteczonaleste.com.br/",
                        type: "link"
                    }
                ],
                showDetail: false
            });

            histories.push({
                date: new Date("2009-07-15"),
                category: this.$store.state.categoryType.academicLife,
                period: {
                    begin: '2006',
                    end: '2009'
                },
                title: {
                    "pt-BR": "FATEC-ZL - Faculdade de Técnologia Estadual",
                    "en-US": "FATEC-ZL - State Technology University",
                },
                subTitle: {
                    "pt-BR": "Informática para Gestão de Negócios",
                    "en-US": "Computer Science for Business Management",
                },
                description: {
                    "pt-BR": "Eu sempre quis ter sucesso trabalhando com TI, e meu segundo passo para criar uma boa base para o meu objetivo foi ir para a universidade. Eu fiz uma escolha diferente de curso, dei preferência a um curso de negócios em vez de um curso técnico, porque acreditava firmemente que essa opção seria melhor combinada com o meu conjunto de habilidades que adquiri na minha escola técnica.",
                    "en-US": "I always wanted to be success work with IT, and my second step to create a good base for my goal was to go to university. I did a different choice of course, I gave preference to a business course instead of a technical course, because I strongly believed that this choice would combine better with my skill set that I acquired in my technical school.",
                },
                image: require('@/assets/academicLife/university.jpg'),
                tags: [],
                links: [{
                        image: require('@/assets/certificates/fatecCertificate.jpg'),
                        description: { "pt-BR": "Certificado", "en-US": "Certificate" },
                        type: "certificate"
                    },
                    {
                        image: require('@/assets/certificates/fatecUniversityDegree.jpg'),
                        description: { "pt-BR": "Diploma", "en-US": "UniversityDegree" },
                        type: "certificate"
                    },
                    {
                        description: { "pt-BR": "TCC", "en-US": "TCC" },
                        url: "https://www.dropbox.com/s/vilzxxnmd0v7zxm/Jonathan Caravaggio Acquesta.pdf?dl=0",
                        type: "link"
                    },
                    {
                        description: { "pt-BR": "FATEC-ZL", "en-US": "FATEC-ZL" },
                        url: "http://www.fateczl.edu.br/",
                        type: "link"
                    }
                ],
                tags: [this.$store.state.tags.university, this.$store.state.tags.pmi, this.$store.state.tags.businessManagement, this.$store.state.tags.sql,
                    this.$store.state.tags.visualBasic6,
                    this.$store.state.tags.asp, this.$store.state.tags.vbScript, this.$store.state.tags.javascript, this.$store.state.tags.css, this.$store.state.tags.html,
                    this.$store.state.tags.java, this.$store.state.tags.php
                ],
                mainTags: [this.$store.state.tags.university, this.$store.state.tags.pmi, this.$store.state.tags.businessManagement, this.$store.state.tags.sql,
                    this.$store.state.tags.visualBasic6,
                    this.$store.state.tags.asp, this.$store.state.tags.vbScript, this.$store.state.tags.javascript, this.$store.state.tags.css, this.$store.state.tags.html,
                    this.$store.state.tags.java, this.$store.state.tags.php
                ],
                resumeTags: [this.$store.state.tags.university, this.$store.state.tags.pmi, this.$store.state.tags.businessManagement, this.$store.state.tags.sql,
                    this.$store.state.tags.visualBasic6,
                    this.$store.state.tags.asp, this.$store.state.tags.javascript, this.$store.state.tags.css, this.$store.state.tags.html,
                    this.$store.state.tags.java, this.$store.state.tags.php
                ],
                showDetail: false
            });

            histories.push({
                date: new Date("2019-08-15"),
                category: this.$store.state.categoryType.academicLife,
                period: {
                    begin: '2018',
                    end: '2020'
                },
                title: {
                    "pt-BR": "FATEC-SP - Centro Paula Souza",
                    "en-US": "FATEC-SP - Centro Paula Souza",
                },
                subTitle: {
                    "pt-BR": "MBA Excelência em Gestão de Projetos e Processos Organizacionais",
                    "en-US": "MBA Excellence in Project Management and Organizational Processes",
                },
                description: {
                    "pt-BR": "Trabalho na área de TI há doze anos e tive a oportunidade de atuar em muitas empresas e funções diferentes, por isso decidi dar mais um passo na minha carreira e o MBA em gerenciamento de projetos foi uma boa escolha para me mostrar muitos caminhos para que eu possa continuar evoluindo em minha carreira. Neste momento, terminei o curso e vou iniciar meu projeto de TCC.",
                    "en-US": "I have been working in IT area for the last twelve years, and I had the opportunity of work in many companies and different roles, so I decided that I want to give another step in my career and the MBA in project management was a good choice to show me many paths that make me able to continue evolving my career. At this moment, I have finished the course and I will start my TCC project.",
                },
                image: require('@/assets/academicLife/mba.jpg'),
                tags: [],
                links: [{
                    description: { "pt-BR": "MBA", "en-US": "MBA" },
                    url: "https://posgraduacao.cps.sp.gov.br/lato-sensu/",
                    type: "link"
                }],
                tags: [this.$store.state.tags.mba, this.$store.state.tags.pmi, this.$store.state.tags.scrum, this.$store.state.tags.coaching,
                    this.$store.state.tags.leadership, this.$store.state.tags.highPerformanceTeams, this.$store.state.tags.situationalLeadership,
                    this.$store.state.tags.criatitySolution, this.$store.state.tags.selfManagement, this.$store.state.tags.teamManagement,
                    this.$store.state.tags.businessProcess, this.$store.state.tags.negotiation
                ],
                mainTags: [this.$store.state.tags.mba, this.$store.state.tags.pmi, this.$store.state.tags.scrum, this.$store.state.tags.businessProcess,
                    this.$store.state.tags.leadership, this.$store.state.tags.highPerformanceTeams, this.$store.state.tags.situationalLeadership,
                    this.$store.state.tags.criatitySolution, this.$store.state.tags.teamManagement
                ],
                resumeTags: [this.$store.state.tags.mba, this.$store.state.tags.pmi, this.$store.state.tags.scrum, this.$store.state.tags.businessProcess,
                    this.$store.state.tags.leadership, this.$store.state.tags.highPerformanceTeams, this.$store.state.tags.situationalLeadership
                ],
                showDetail: false
            });

            histories.push({
                date: new Date("2020-05-20"),
                category: this.$store.state.categoryType.academicLife,
                title: {
                    "pt-BR": "FATEC-SP - Centro Paula Souza - MBA TCC",
                    "en-US": "FATEC-SP - Centro Paula Souza - MBA TCC",
                },
                subTitle: {
                    "pt-BR": "Os benefícios do gerenciamento ágil de projetos com Management 3.0, Scrum, Extreme Programming e Kanban",
                    "en-US": "The benefits of agile project management with Management 3.0, Scrum, Extreme Programming and Kanban",
                },
                image: require('@/assets/academicLife/mba.jpg'),
                tags: [],
                links: [{
                    description: { "pt-BR": "MBA", "en-US": "MBA" },
                    url: "https://posgraduacao.cps.sp.gov.br/lato-sensu/",
                    type: "link"
                }],
                tags: [this.$store.state.tags.inProgress, this.$store.state.tags.mba, this.$store.state.tags.management30, this.$store.state.tags.scrum,
                    this.$store.state.tags.extremeProgramming, this.$store.state.tags.kanban
                ]
            });
        },
    },
}

export default academicLife;